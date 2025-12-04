"use client";

import { useEffect, useRef, useState, useId } from "react";

interface ContactFormProps {
  className?: string;
  portalId?: string;
  formId?: string;
  region?: string;
}

// Default HubSpot form configuration from WordPress
const HUBSPOT_CONFIG = {
  portalId: "45924609",
  formId: "c4838a9d-2c8c-4899-a15c-c70449b34433",
  region: "na1",
};

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: {
          portalId: string;
          formId: string;
          region: string;
          target: string;
          onFormReady?: () => void;
          onFormSubmit?: () => void;
          onFormSubmitted?: () => void;
        }) => void;
      };
    };
  }
}

export default function ContactForm({
  className = "",
  portalId = HUBSPOT_CONFIG.portalId,
  formId = HUBSPOT_CONFIG.formId,
  region = HUBSPOT_CONFIG.region,
}: ContactFormProps) {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  // Use React's useId for stable SSR-compatible IDs
  const reactId = useId();
  const containerId = `hubspot-form${reactId.replace(/:/g, "-")}`;

  // Load HubSpot script
  useEffect(() => {
    // Check if script is already loaded
    if (window.hbspt) {
      setIsScriptLoaded(true);
      return;
    }

    // Check if script tag already exists
    const existingScript = document.querySelector(
      'script[src*="js.hsforms.net"]'
    );
    if (existingScript) {
      existingScript.addEventListener("load", () => setIsScriptLoaded(true));
      return;
    }

    // Load HubSpot forms script
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    script.async = true;
    script.onload = () => {
      setIsScriptLoaded(true);
    };
    script.onerror = () => {
      console.error("Failed to load HubSpot forms script");
      setIsLoading(false);
    };

    document.head.appendChild(script);

    return () => {
      // Don't remove the script on unmount as other forms might need it
    };
  }, []);

  // Create HubSpot form when script is loaded
  useEffect(() => {
    if (!isScriptLoaded || !window.hbspt) return;

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      const targetElement = document.getElementById(containerId);

      if (targetElement && window.hbspt) {
        // Clear any existing form
        targetElement.innerHTML = "";

        window.hbspt.forms.create({
          portalId,
          formId,
          region,
          target: `#${containerId}`,
          onFormReady: () => {
            setIsLoading(false);
          },
          onFormSubmitted: () => {
            // Optional: Handle form submission
            console.log("HubSpot form submitted");
          },
        });
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [isScriptLoaded, portalId, formId, region, containerId]);

  return (
    <div className={`c-contact-form ${className}`}>
      {/* Loading spinner */}
      {isLoading && (
        <div className="form-loader-container" aria-live="polite">
          <div
            className="form-loader"
            role="status"
            aria-label="Loading contact form"
          />
        </div>
      )}

      {/* HubSpot form container */}
      <div
        id={containerId}
        ref={formContainerRef}
        style={{ display: isLoading ? "none" : "block" }}
      />

      <style jsx>{`
        /* HubSpot form styling to match theme */
        :global(.c-contact-form .hs-form) {
          font-family: var(--rubik) !important;
        }

        :global(.c-contact-form .hs-form-field) {
          margin-bottom: 15px;
        }

        :global(.c-contact-form .hs-form-field label) {
          display: none;
        }

        :global(.c-contact-form .hs-form-field input),
        :global(.c-contact-form .hs-form-field select),
        :global(.c-contact-form .hs-form-field textarea) {
          width: 100% !important;
          padding: 12px 15px !important;
          border: 1px solid #e0e0e0 !important;
          border-radius: 4px !important;
          font-size: 14px !important;
          font-family: var(--rubik) !important;
          background: #fff !important;
          transition: border-color 0.3s ease !important;
        }

        :global(.c-contact-form .hs-form-field input:focus),
        :global(.c-contact-form .hs-form-field select:focus),
        :global(.c-contact-form .hs-form-field textarea:focus) {
          border-color: #006a4e !important;
          outline: none !important;
        }

        :global(.c-contact-form .hs-form-field input::placeholder),
        :global(.c-contact-form .hs-form-field textarea::placeholder) {
          color: #999 !important;
        }

        :global(.c-contact-form .hs-submit) {
          margin-top: 10px;
        }

        :global(.c-contact-form .hs-submit .hs-button) {
          width: 100% !important;
          padding: 14px 20px !important;
          background: #006a4e !important;
          color: #fff !important;
          border: none !important;
          border-radius: 4px !important;
          font-size: 16px !important;
          font-weight: 500 !important;
          font-family: var(--rubik) !important;
          cursor: pointer !important;
          transition: background-color 0.3s ease !important;
          text-transform: uppercase !important;
        }

        :global(.c-contact-form .hs-submit .hs-button:hover) {
          background: #005a42 !important;
        }

        :global(.c-contact-form .hs-error-msgs) {
          margin-top: 5px;
          padding: 0;
          list-style: none;
        }

        :global(.c-contact-form .hs-error-msgs li) {
          color: #dc3545;
          font-size: 12px;
        }

        :global(.c-contact-form .hs-form-required) {
          color: #006a4e;
        }

        :global(.c-contact-form .submitted-message) {
          text-align: center;
          padding: 30px 20px;
          color: #006a4e;
          font-size: 16px;
        }

        :global(.c-contact-form .hs-richtext) {
          font-size: 14px;
          color: #666;
          margin-bottom: 15px;
        }

        :global(.c-contact-form .legal-consent-container) {
          font-size: 12px;
          color: #666;
          margin-bottom: 15px;
        }

        :global(
            .c-contact-form
              .legal-consent-container
              .hs-form-booleancheckbox-display
          ) {
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }

        :global(
            .c-contact-form .legal-consent-container input[type="checkbox"]
          ) {
          width: auto !important;
          margin-top: 3px;
        }
      `}</style>
    </div>
  );
}

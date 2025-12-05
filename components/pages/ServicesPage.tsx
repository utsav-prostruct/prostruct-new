"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";

import ContactForm from "@/components/shared/ContactForm";
import { useModal } from "@/components/shared/ModalProvider";
import { ServicesPageContent } from "@/data/pages/services/servicesPageContent";

type ServicesPageProps = {
  data: ServicesPageContent;
};

const READY_BG_IMAGE = "/images/what-we-are-bg.jpg";

export function ServicesPage({ data }: ServicesPageProps) {
  const { openModal } = useModal();
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      {/* Hero */}
      <div className="banner_section">
        <div className="c-banner position-relative">
          <div className="c-banner-caption">
            <div className="container d-flex align-items-center">
              <div className="banner_caption_inner_page">
                <h1 className="d-sm-none">{parse(data.heroTitleHtml)}</h1>
              </div>
            </div>
          </div>
          <div className="c-banner-slider">
            <Image
              src={data.heroImage.src}
              alt={data.heroImage.alt}
              width={data.heroImage.width}
              height={data.heroImage.height}
              className="w-100 h-auto"
              priority
            />
          </div>
        </div>

        <section className="c-data-structure">
          <div className="container">
            <div className="about_data">
              <h1 className="d-sm-block d-none w-50">
                {parse(data.heroTitleHtml)}
              </h1>
              <div className="row">
                <div className="col-lg-6 about_data_cont text-white">
                  {parse(data.heroContentHtml)}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Project Types */}
      <section
        className="c-project-type-sec w-100"
        style={{ backgroundImage: "url('/images/project-bg.svg')" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0 order-lg-2">
              <Image
                src={data.projectTypes.image.src}
                alt={data.projectTypes.image.alt}
                width={data.projectTypes.image.width}
                height={data.projectTypes.image.height}
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6 order-lg-1">
              {parse(data.projectTypes.headingHtml)}
              {parse(data.projectTypes.introHtml)}
              <div className="row">
                {data.projectTypes.columns.map((column, columnIndex) => (
                  <div
                    className="col-md-6"
                    key={`project-type-column-${columnIndex}`}
                  >
                    <ul>
                      {column.map((item) => (
                        <li key={item.targetId}>
                          <Image
                            src="/images/icon.svg"
                            alt="Project type icon"
                            width={20}
                            height={20}
                            className="me-2"
                          />
                          <a href={`#${item.targetId}`} className="sep_list">
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="d-none d-sm-block mt-4">
                <button onClick={openModal} className="btn c-get-quote-btn">
                  GET YOUR FREE QUOTE{" "}
                  <i className="fa-solid fa-chevron-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pyramid + Contact */}
      <section
        className="c-why-choose-sec w-100"
        style={{ paddingTop: "66px" }}
      >
        <Link
          href={data.permitLink}
          className="permit"
          aria-label="Permit guarantee"
        >
          <Image
            src="/images/badge.png"
            alt="Permit Guarantee Badge"
            width={150}
            height={150}
            style={{ height: "120px", width: "auto" }}
          />
        </Link>
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6 c-content-area text-center text-lg-start">
              <Image
                src={data.pyramidImage.src}
                alt={data.pyramidImage.alt}
                width={data.pyramidImage.width}
                height={data.pyramidImage.height}
                className="img-fluid mb-4 mb-lg-3"
                priority={false}
              />
              <button onClick={openModal} className="btn get-free-quote-btn">
                Get Your Free Quote <i className="fa-solid fa-chevron-right" />
              </button>
            </div>
            <div className="col-lg-6">
              <div className="d-none d-lg-block">
                <ContactForm />
              </div>
              <div className="d-lg-none text-center">
                <button onClick={openModal} className="btn get-free-quote-btn">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="s-what-we-do">
        <div className="container">
          <h2>{data.whatWeDoHeading}</h2>
          <p className="text-center s-what-sub-text">
            {data.whatWeDoSubheading}
          </p>
          <div className="s-what-we-wrap">
            <div className="row justify-content-center g-3">
              {data.whatWeDoItems.map((item) => (
                <div className="col-lg-4 col-sm-6" key={item.headingHtml}>
                  <div className="s-what-we-item text-center">
                    <div className="icon-wrapper">
                      <Image
                        src={item.icon.src}
                        alt={item.icon.alt}
                        width={item.icon.width}
                        height={item.icon.height}
                        className="img-fluid"
                      />
                    </div>
                    <h3>{parse(item.headingHtml)}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 text-center">
            <span
              className="structural_slidedown"
              aria-label="Show details"
              style={{ display: showDetails ? "none" : "inline-flex" }}
              role="button"
              tabIndex={0}
              onClick={() => setShowDetails(true)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setShowDetails(true);
                }
              }}
            >
              <i className="fa-solid fa-angles-down" />
            </span>
          </div>

          <div className={`st_slide ${showDetails ? "is-open" : ""}`}>
            <div className="st_slide__content" style={{ display: "block" }}>
              {parse(data.whatWeDoDetailsHtml)}
            </div>
            <div className="text-center">
              <span
                className="structural_slidedup"
                aria-label="Hide details"
                style={{ display: showDetails ? "inline-flex" : "none" }}
                role="button"
                tabIndex={0}
                onClick={() => setShowDetails(false)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setShowDetails(false);
                  }
                }}
              >
                <i className="fa-solid fa-angles-up" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="c-how-it-work-sec w-100">
        <div className="container">
          <h2>{data.stepsHeading}</h2>
          <div className="row position-relative px-0">
            {data.steps.map((step, index) => {
              const count = index + 1;
              let textAlign = "text-center";
              if (count === 1) textAlign = "text-center text-lg-start";
              else if (count === data.steps.length)
                textAlign = "text-center text-lg-end";

              return (
                <div key={step.detailsHtml} className={`col-lg-4 ${textAlign}`}>
                  <div className="c-single-work-process">
                    <figure>
                      <Image
                        src={step.image.src}
                        alt={step.image.alt}
                        width={step.image.width}
                        height={step.image.height}
                        className="img-fluid"
                      />
                      <span className="c-single-work-process__number">
                        {count}
                      </span>
                    </figure>
                    <h6>{parse(step.detailsHtml)}</h6>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Detail Sections */}
      <section className="service_bottom_wrapper">
        <div className="container">
          {data.projectDetails.map((detail, index) => (
            <div
              key={detail.id}
              id={detail.id}
              className="service_bottom_section py-5"
            >
              <div className="row align-items-center g-4">
                <div
                  className={`col-md-6 ${index % 2 !== 0 ? "order-md-2" : ""}`}
                >
                  <div className="service_bottom_left">
                    <h2 className="d-sm-none mb-3 text-white text-center">
                      {detail.heading}
                    </h2>
                    <Image
                      src={detail.image.src}
                      alt={detail.image.alt}
                      width={detail.image.width}
                      height={detail.image.height}
                      className="w-100 h-auto"
                    />
                  </div>
                </div>
                <div
                  className={`col-md-6 ${index % 2 !== 0 ? "order-md-1" : ""}`}
                >
                  <div className="service_bottom_right text-white">
                    <h2 className="d-none d-sm-block">{detail.heading}</h2>
                    {parse(detail.descriptionHtml)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ready to Get Started */}
      <section className="s-bttom-back-section">
        <div className="container">
          <div
            className="c-structure-service-sec__main-area"
            style={{ backgroundImage: `url(${READY_BG_IMAGE})` }}
          >
            <h2>{data.getStartedHeading}</h2>
            <p>{data.getStartedContent}</p>
            <button onClick={openModal} className="btn c-get-quote-btn">
              <strong>
                CONTACT US TODAY <i className="fa-solid fa-chevron-right" />
              </strong>
            </button>
          </div>
        </div>
      </section>

      {/* Parallax */}
      <section
        className="c_paralax_img"
        style={{ backgroundImage: `url(${data.footerImage.src})` }}
      />
    </>
  );
}

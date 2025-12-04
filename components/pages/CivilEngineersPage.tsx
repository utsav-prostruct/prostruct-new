"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import parse from "html-react-parser";
import ContactForm from "@/components/shared/ContactForm";
import { useModal } from "@/components/shared/ModalProvider";
import { CivilEngineersContent } from "@/data/pages/civilEngineersContent";

type CivilEngineersPageProps = {
  data: CivilEngineersContent;
};

export function CivilEngineersPage({ data }: CivilEngineersPageProps) {
  const [isMobile, setIsMobile] = useState(false);
  const { openModal } = useModal();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Hero */}
      <div className="c-banner position-relative">
        <div className="c-banner-caption">
          <div className="container d-flex align-items-center">
            <div className="c-banner-caption__inner">
              {isMobile ? parse(data.hero.mobileHtml) : parse(data.hero.desktopHtml)}
            </div>
          </div>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          speed={2000}
          className="c-banner-slider"
        >
          {data.hero.slides.map((slide, index) => (
            <SwiperSlide key={slide.src}>
              <Image
                src={slide.src}
                alt={slide.alt}
                width={slide.width}
                height={slide.height}
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                style={{ width: "100%", height: "auto" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {isMobile && (
          <div className="c-banner-caption">
            <div className="container d-flex align-items-center">
              <div className="c-banner-caption__inner">
                {parse(data.hero.mobileBottomHtml)}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Tag Line */}
      <section className="c-data-structure">
        <div className="container">
          <h3>{data.tagLine}</h3>
          <div className="row">
            <div className="col-lg-6">
              <div className="row align-items-start g-0">
                <div className="col-md-5 offset-md-7 col-lg-7 offset-lg-5">
                  <Image
                    src={data.infoImage.src}
                    alt={data.infoImage.alt}
                    width={data.infoImage.width}
                    height={data.infoImage.height}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="c-why-choose-sec w-100">
        <Link href={data.permitLink} className="permit">
          <Image
            src="/images/badge.png"
            alt="Permit Guarantee Badge"
            width={150}
            height={150}
            style={{ height: "120px", width: "auto" }}
          />
        </Link>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 c-content-area">
              <h2>Why Choose Us?</h2>
              <div className="row">
                {data.reasons.map((reason) => (
                  <div key={reason.heading} className="col-lg-6 mb-2">
                    <h5>{reason.heading}</h5>
                    <ul>
                      {reason.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6">
              {isMobile ? (
                <button onClick={openModal} className="btn get-free-quote-btn">
                  Get Your Free Quote <i className="fa-solid fa-chevron-right" />
                </button>
              ) : (
                <ContactForm />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="c-structure-service-sec w-100">
        <div className="container">
          <div
            className="c-structure-service-sec__main-area"
            style={{ backgroundImage: `url(${data.aboutBackgroundImage})` }}
          >
            <h2>{data.aboutHeading}</h2>
            <div className="c-structure-service-desktop">
              {parse(data.aboutDesktopHtml)}
            </div>
            <div className="c-structure-service-mobile">
              {parse(data.aboutMobileHtml)}
            </div>
          </div>
        </div>
      </section>

      {/* Civil Engineering Services */}
      <section className="pt-5">
        <div className="container pt-5">
          <div className="row g-4">
            {data.services.map((service) => (
              <div key={service.heading} className="col-lg-6">
                <div className="civil-service-card">
                  <h3>{service.heading}</h3>
                  <p>{service.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <button onClick={openModal} className="btn c-get-quote-btn">
              GET YOUR FREE QUOTE <i className="fa-solid fa-chevron-right" />
            </button>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="c-project-type-sec w-100" style={{ backgroundImage: "url('/images/project-bg.svg')" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                className="c-banner-slider"
              >
                {data.projectTypeImages.map((image) => (
                  <SwiperSlide key={image.src}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      className="img-fluid"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="col-lg-6">
              <h3>{data.projectTypes.heading}</h3>
              <p>{data.projectTypes.intro}</p>
              <div className="row">
                {data.projectTypes.columns.map((column, columnIndex) => (
                  <div key={columnIndex} className="col-md-6">
                    <ul>
                      {column.map((item) => (
                        <li key={item}>
                          <Image
                            src="/images/icon.svg"
                            alt="Project type icon"
                            width={20}
                            height={20}
                            className="me-2"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <button onClick={openModal} className="btn c-get-quote-btn mt-3">
                GET YOUR FREE QUOTE <i className="fa-solid fa-chevron-right" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="c-how-it-work-sec w-100">
        <div className="container">
          <h2>{data.howItWorksHeading}</h2>
          <div className="row position-relative px-0">
            {data.steps.map((step, index) => {
              const count = index + 1;
              let textAlign = "text-center";
              if (count === 1) textAlign = "text-center text-lg-start";
              else if (count === 3) textAlign = "text-center text-lg-end";

              return (
                <div key={step.detailsHtml} className={`col-lg-4 ${textAlign}`}>
                  <div className="c-single-work-process">
                    <figure>
                      <Image
                        src={step.image.src}
                        alt={step.image.alt}
                        width={step.image.width}
                        height={step.image.height}
                      />
                      <span className="c-single-work-process__number">{count}</span>
                    </figure>
                    <h6>{parse(step.detailsHtml)}</h6>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="d-sm-none text-center">
            <h5>Start Your Project Today!</h5>
            <button onClick={openModal} className="btn c-get-quote-btn">
              GET IN TOUCH <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Footer Parallax */}
      <section
        className="c_paralax_img"
        style={{
          backgroundImage: `url(${data.footerTopImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          minHeight: "300px",
        }}
      />
    </>
  );
}


import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import domainVideo from "./../assets/images/domain.mp4";
// import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules"; // Import necessary Swiper modules
import "swiper/css";
import "swiper/css/bundle"; // Use bundled CSS import to ensure all necessary styles
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/autoplay";
import readyToExploreVideo from "./../assets/images/ready-to-explore.webm";
import marqueeBackground from "../assets/images/marque.svg";

export const Hero = () => {
  return (
    <div className="hero">
      <Container>
        <div className="texts">
          <div className="bg-texts">
            <h2>Insight</h2>
            <h2>Innovation</h2>
            <h2>Vision</h2>
          </div>
          <div className="main-text">
            <h2>Setting up your business as easy as</h2>
          </div>
        </div>
      </Container>
    </div>
  );
};

export const DomainName = () => {
  return (
    <div className="section domain-name">
      <Container>
        <Row>
          <Col sm={4}>
            <div className="step-cards">
              <div className="card">
                <span className="step">Step 1</span>
                <div className="inner-text">
                  <span className="in-step">Step 3:</span>
                  <h5>Earn coins and website</h5>
                </div>
              </div>
              <div className="card">
                <span className="step">Step 2</span>
                <div className="inner-text">
                  <span className="in-step">Step 3:</span>
                  <h5>Earn coins and website</h5>
                </div>
              </div>
              <div className="card active">
                <span className="step">Step 3</span>
                <div className="inner-text">
                  <span className="in-step">Step 3:</span>
                  <h5>Earn coins and website</h5>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={5}>
            <div className="domain-video">
              <video src={domainVideo} muted loop autoPlay></video>
            </div>
          </Col>
          <Col sm={3}>
            <div className="text-card">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard.
              </p>
            </div>
          </Col>
          <Col sm={12}>
            <div className="numbers">
              <span className="num">1</span>
              <span className="num">2</span>
              <span className="num">3</span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export const ExpertyBuild = () => {
  return (
    <div className="section experty-build">
      <Container fluid className="px-0">
        <div className="cta-heading">
          <a href="#">
            <h4>Expertly Build Website</h4>
          </a>
        </div>
        <div className="cta-heading">
          <a href="#">
            <h4>Build by experts</h4>
          </a>
        </div>
        <div className="cta-heading">
          <a href="#">
            <h4>Delivered within 24hrs</h4>
          </a>
        </div>
      </Container>
    </div>
  );
};

export const ReadyToExplore = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    // To ensure this runs only on the client side
    setIsMounted(true);
  }, []);

  return (
    <div className="section ready-to-explore">
      <Container>
        <h2 className="heading">
          Ready to Explore? Our Latest <br /> Innovations
        </h2>
        <Row className="align-items-center">
          <Col sm={5}>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={5}
              direction="vertical"
              autoplay={{
                delay: 5000, // 3 seconds delay between slides
                disableOnInteraction: false, // Autoplay won't stop after user interactions like clicking or swiping
              }}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[Autoplay, FreeMode, Navigation, Thumbs]}
              className="thumbslider"
            >
              <SwiperSlide>
                <div className="thumb">
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <path
                        d="M33.9648 17.4605C31.8021 15.2845 30.6488 14.2151 28.7274 12.5245C27.1901 10.8591 24.2634 10.2258 22.6794 12.1591C20.7728 10.7205 18.3048 11.9511 17.2648 13.8445C15.2941 13.1111 13.5568 14.5498 12.5461 16.1311L8.99675 12.5885C8.36208 11.8818 7.46875 11.4605 6.51942 11.4205C4.46075 11.5698 2.55275 13.3791 2.46875 15.4711C2.50875 16.4205 2.93008 17.3138 3.63675 17.9498L11.4301 25.7431C7.28208 28.7325 11.5848 32.8218 14.0914 35.4725C18.8061 41.0778 28.5061 40.9951 33.4888 35.7791C38.6754 30.8685 38.9154 22.6271 33.9648 17.4605ZM32.3741 34.0685C29.6301 37.1605 25.3408 38.1925 21.3674 37.3978C17.3461 36.9231 14.8701 33.4551 12.4674 30.5631C11.5661 29.4751 11.2288 28.2031 12.8528 27.1658L18.4008 32.7138C19.3234 33.5991 20.7088 32.2325 19.8154 31.3005L5.05008 16.5351C3.68742 15.4711 5.16208 13.5831 6.50342 13.4178C6.92475 13.4658 7.31275 13.6738 7.58342 14.0005L17.5474 23.9645C18.4714 24.8538 19.8541 23.4791 18.9621 22.5511L13.9848 17.5738C15.4541 15.1791 16.5768 15.0871 18.5448 17.0658L21.8674 20.3858C22.7754 21.3218 24.2128 19.9405 23.3048 18.9951C22.5594 18.3258 19.7834 15.3498 19.0128 14.8218C20.0208 13.5538 20.5994 12.7111 22.7421 14.8085L26.3234 18.3858C27.2501 19.3058 28.6608 17.9005 27.7381 16.9711L24.2181 13.4525C25.2434 12.4711 26.0874 12.9165 27.4088 14.0311C29.2821 15.6805 30.2648 16.5898 32.3848 18.7085C36.6008 22.9485 36.5941 29.8338 32.3741 34.0685Z"
                        fill="#111111"
                      />
                      <path
                        d="M8.85944 7.85296H12.1461C13.4541 7.84763 13.4541 5.8583 12.1461 5.85296H11.5928C18.8314 0.630298 28.7528 1.25963 35.2728 7.35563C36.2314 8.24363 37.5954 6.7863 36.6381 5.88896C29.2248 -1.03104 17.8928 -1.56703 9.85944 4.6223V3.55563C9.8541 2.24896 7.86477 2.24763 7.85944 3.55563V6.85296C7.85944 7.40496 8.30744 7.85296 8.85944 7.85296Z"
                        fill="#111111"
                      />
                    </svg>
                  </span>
                  <div className="text">
                    <h4>Effortless Drag-and-Drop Builder</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="thumb">
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <path
                        d="M21.25 11.666C21.25 10.9757 20.6903 10.416 20 10.416C19.3097 10.416 18.75 10.9757 18.75 11.666V28.3327C18.75 29.023 19.3097 29.5827 20 29.5827C20.6903 29.5827 21.25 29.023 21.25 28.3327V11.666Z"
                        fill="#111111"
                      />
                      <path
                        d="M27.916 18.334C27.916 17.6437 27.3563 17.084 26.666 17.084C25.9757 17.084 25.416 17.6437 25.416 18.334V28.334C25.416 29.0243 25.9757 29.584 26.666 29.584C27.3563 29.584 27.916 29.0243 27.916 28.334V18.334Z"
                        fill="#111111"
                      />
                      <path
                        d="M14.584 21.666C14.584 20.9757 14.0243 20.416 13.334 20.416C12.6436 20.416 12.084 20.9757 12.084 21.666V28.3327C12.084 29.023 12.6436 29.5827 13.334 29.5827C14.0243 29.5827 14.584 29.023 14.584 28.3327V21.666Z"
                        fill="#111111"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M27.4392 3.95622C25.5357 3.74998 23.1363 3.74998 20.0753 3.75H19.9247C16.8637 3.74998 14.4643 3.74998 12.5608 3.95622C10.6182 4.16668 9.04427 4.60387 7.7004 5.58025C6.88682 6.17135 6.17135 6.88682 5.58025 7.7004C4.60387 9.04427 4.16668 10.6182 3.95622 12.5608C3.74998 14.4643 3.74998 16.8637 3.75 19.9247V20.0753C3.74998 23.1363 3.74998 25.5357 3.95622 27.4392C4.16668 29.3818 4.60387 30.9557 5.58025 32.2997C6.17135 33.1132 6.88682 33.8287 7.7004 34.4197C9.04427 35.3962 10.6182 35.8333 12.5608 36.0438C14.4643 36.25 16.8637 36.25 19.9245 36.25H20.0755C23.1363 36.25 25.5357 36.25 27.4392 36.0438C29.3818 35.8333 30.9557 35.3962 32.2997 34.4197C33.1132 33.8287 33.8287 33.1132 34.4197 32.2997C35.3962 30.9557 35.8333 29.3818 36.0438 27.4392C36.25 25.5357 36.25 23.1363 36.25 20.0755V19.9245C36.25 16.8637 36.25 14.4643 36.0438 12.5608C35.8333 10.6182 35.3962 9.04427 34.4197 7.7004C33.8287 6.88682 33.1132 6.17135 32.2997 5.58025C30.9557 4.60387 29.3818 4.16668 27.4392 3.95622ZM9.16985 7.6028C10.0165 6.98765 11.1002 6.62908 12.8301 6.44167C14.5833 6.25172 16.8473 6.25 20 6.25C23.1527 6.25 25.4167 6.25172 27.17 6.44167C28.8998 6.62908 29.9835 6.98765 30.8302 7.6028C31.4315 8.0397 31.9603 8.56852 32.3972 9.16985C33.0123 10.0165 33.3708 11.1002 33.5583 12.8301C33.7483 14.5833 33.75 16.8473 33.75 20C33.75 23.1527 33.7483 25.4167 33.5583 27.17C33.3708 28.8998 33.0123 29.9835 32.3972 30.8302C31.9603 31.4315 31.4315 31.9603 30.8302 32.3972C29.9835 33.0123 28.8998 33.3708 27.17 33.5583C25.4167 33.7483 23.1527 33.75 20 33.75C16.8473 33.75 14.5833 33.7483 12.8301 33.5583C11.1002 33.3708 10.0165 33.0123 9.16985 32.3972C8.56852 31.9603 8.0397 31.4315 7.6028 30.8302C6.98765 29.9835 6.62908 28.8998 6.44167 27.17C6.25172 25.4167 6.25 23.1527 6.25 20C6.25 16.8473 6.25172 14.5833 6.44167 12.8301C6.62908 11.1002 6.98765 10.0165 7.6028 9.16985C8.0397 8.56852 8.56852 8.0397 9.16985 7.6028Z"
                        fill="#111111"
                      />
                    </svg>
                  </span>
                  <div className="text">
                    <h4>Smart SEO Assistant</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="thumb">
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.3208 26.7088C6.2705 26.7584 6.25 26.8144 6.25 26.8661V28.3494C6.25 30.0909 7.68874 31.5328 9.50002 31.5328H17C17.6904 31.5328 18.25 32.0924 18.25 32.7828C18.25 33.4731 17.6904 34.0328 17 34.0328H9.50002C6.34463 34.0328 3.75 31.5079 3.75 28.3494V26.8661C3.75 25.341 5.01119 24.1328 6.49999 24.1328H11.8833C12.6277 24.1328 13.3111 24.4394 13.8067 24.9058L13.8268 24.9252L15.9506 27.0155C15.9867 27.0516 16.0463 27.0827 16.1333 27.0827H17C17.6904 27.0827 18.25 27.6424 18.25 28.3327C18.25 29.0231 17.6904 29.5827 17 29.5827H16.1333C15.4222 29.5827 14.717 29.3152 14.1869 28.7873L12.0866 26.7201C12.017 26.6578 11.9372 26.6328 11.8833 26.6328H6.49999C6.43647 26.6328 6.37199 26.6584 6.3208 26.7088Z"
                        fill="#111111"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.8833 6.25C9.84882 6.25 8.5 7.65313 8.5 9.01667V25.0833C8.5 25.7737 7.94036 26.3333 7.25 26.3333C6.55964 26.3333 6 25.7737 6 25.0833V9.01667C6 5.94689 8.81785 3.75 11.8833 3.75H27.35C30.4353 3.75 33.2333 5.94957 33.2333 9.01667V14.3C33.2333 14.9903 32.6737 15.55 31.9833 15.55C31.293 15.55 30.7333 14.9903 30.7333 14.3V9.01667C30.7333 7.65044 29.3981 6.25 27.35 6.25H11.8833Z"
                        fill="#111111"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24.8333 15.5508C23.6827 15.5508 22.75 16.4835 22.75 17.6341V31.6675C22.75 32.8181 23.6827 33.7508 24.8333 33.7508H31.6667C32.8173 33.7508 33.75 32.8181 33.75 31.6675V17.6341C33.75 16.4835 32.8173 15.5508 31.6667 15.5508H24.8333ZM20.25 17.6341C20.25 15.1028 22.302 13.0508 24.8333 13.0508H31.6667C34.198 13.0508 36.25 15.1028 36.25 17.6341V31.6675C36.25 34.1988 34.198 36.2508 31.6667 36.2508H24.8333C22.302 36.2508 20.25 34.1988 20.25 31.6675V17.6341Z"
                        fill="#111111"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M26.25 30.5664C26.25 29.876 26.8096 29.3164 27.5 29.3164H29C29.6903 29.3164 30.25 29.876 30.25 30.5664C30.25 31.2567 29.6903 31.8164 29 31.8164H27.5C26.8096 31.8164 26.25 31.2567 26.25 30.5664Z"
                        fill="#111111"
                      />
                    </svg>
                  </span>
                  <div className="text">
                    <h4>Mobile-First Design Templates</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="thumb">
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <path
                        d="M12.5 35C12.5 37.0675 14.1825 38.75 16.25 38.75C18.3175 38.75 20 37.0675 20 35C20 32.9325 18.3175 31.25 16.25 31.25C14.1825 31.25 12.5 32.9325 12.5 35ZM16.25 33.75C16.9387 33.75 17.5 34.3112 17.5 35C17.5 35.6887 16.9387 36.25 16.25 36.25C15.5612 36.25 15 35.6887 15 35C15 34.3112 15.5612 33.75 16.25 33.75Z"
                        fill="#111111"
                      />
                      <path
                        d="M28.75 35C28.75 37.0675 30.4325 38.75 32.5 38.75C34.5675 38.75 36.25 37.0675 36.25 35C36.25 32.9325 34.5675 31.25 32.5 31.25C30.4325 31.25 28.75 32.9325 28.75 35ZM32.5 33.75C33.1887 33.75 33.75 34.3112 33.75 35C33.75 35.6887 33.1887 36.25 32.5 36.25C31.8112 36.25 31.25 35.6887 31.25 35C31.25 34.3112 31.8112 33.75 32.5 33.75Z"
                        fill="#111111"
                      />
                      <path
                        d="M37.5 28.75H13.75C13.0612 28.75 12.5 28.1887 12.5 27.5V26.25H31.25C33.2 26.25 35.0962 24.7687 35.5687 22.8775L38.7125 10.3025C38.8062 9.92875 38.7212 9.53375 38.485 9.23C38.2487 8.92625 37.885 8.75 37.5 8.75H8.92L8.0125 4.66875C7.58625 2.75125 5.98875 1.25 4.375 1.25H2.5C1.81 1.25 1.25 1.81 1.25 2.5C1.25 3.19 1.81 3.75 2.5 3.75H4.375C4.6825 3.75 5.37125 4.305 5.5725 5.21125L6.67375 10.1688C6.68375 10.24 6.69875 10.3075 6.72 10.375L10 25.1362V27.5C10 29.5675 11.6825 31.25 13.75 31.25H16.25H32.5H37.5C38.19 31.25 38.75 30.69 38.75 30C38.75 29.31 38.19 28.75 37.5 28.75ZM35.8988 11.25L33.1425 22.2712C32.95 23.045 32.0475 23.75 31.25 23.75H12.2525L9.475 11.25H35.8988Z"
                        fill="#111111"
                      />
                    </svg>
                  </span>
                  <div className="text">
                    <h4>One-Click eCommerce Integration</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="thumb">
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <path
                        d="M20 36.5625H5C3.44909 36.5625 2.1875 35.3009 2.1875 33.75V5C2.1875 3.44909 3.44909 2.1875 5 2.1875H30C31.5509 2.1875 32.8125 3.44909 32.8125 5V21.6187C32.8125 22.1362 32.3926 22.5562 31.875 22.5562C31.3574 22.5562 30.9375 22.1362 30.9375 21.6187V5C30.9375 4.48303 30.517 4.0625 30 4.0625H5C4.48303 4.0625 4.0625 4.48303 4.0625 5V33.75C4.0625 34.267 4.48303 34.6875 5 34.6875H20C20.5176 34.6875 20.9375 35.1074 20.9375 35.625C20.9375 36.1426 20.5176 36.5625 20 36.5625Z"
                        fill="#111111"
                      />
                      <path
                        d="M18.75 22.8125H7.5C6.98243 22.8125 6.5625 22.3926 6.5625 21.875V7.5C6.5625 6.98243 6.98243 6.5625 7.5 6.5625C8.01758 6.5625 8.4375 6.98243 8.4375 7.5V20.9375H18.75C19.2676 20.9375 19.6875 21.3574 19.6875 21.875C19.6875 22.3926 19.2676 22.8125 18.75 22.8125Z"
                        fill="#111111"
                      />
                      <path
                        d="M7.49951 18.4379C7.28039 18.4379 7.06067 18.3616 6.88305 18.206C6.49304 17.8648 6.45337 17.2728 6.79455 16.8834L11.1696 11.8834C11.3405 11.6881 11.5846 11.5721 11.844 11.5636C12.0973 11.5477 12.3549 11.6539 12.538 11.8376L16.1805 15.4802L21.1494 9.40657C21.3173 9.2015 21.5638 9.07759 21.8281 9.06417C22.0997 9.0544 22.3506 9.15023 22.538 9.3376L24.9226 11.7216L26.7683 9.4145C27.0912 9.01045 27.6802 8.94392 28.086 9.26863C28.4901 9.59212 28.5554 10.1817 28.2319 10.5864L25.7319 13.7114C25.5653 13.9195 25.3181 14.0465 25.052 14.0617C24.7895 14.0727 24.5259 13.9769 24.3373 13.7883L21.9447 11.3957L16.9758 17.4693C16.808 17.6744 16.5614 17.7983 16.2971 17.8117C16.0231 17.819 15.7747 17.7251 15.5873 17.5383L11.9209 13.8719L8.20569 18.1175C8.02014 18.3293 7.76074 18.4379 7.49951 18.4379Z"
                        fill="#111111"
                      />
                      <path
                        d="M17.5 27.1875H7.5C6.98243 27.1875 6.5625 26.7676 6.5625 26.25C6.5625 25.7324 6.98243 25.3125 7.5 25.3125H17.5C18.0176 25.3125 18.4375 25.7324 18.4375 26.25C18.4375 26.7676 18.0176 27.1875 17.5 27.1875Z"
                        fill="#111111"
                      />
                      <path
                        d="M13.125 30.9375H7.5C6.98243 30.9375 6.5625 30.5176 6.5625 30C6.5625 29.4824 6.98243 29.0625 7.5 29.0625H13.125C13.6426 29.0625 14.0625 29.4824 14.0625 30C14.0625 30.5176 13.6426 30.9375 13.125 30.9375Z"
                        fill="#111111"
                      />
                      <path
                        d="M28.9691 37.8125C24.0924 37.8125 20.1251 33.8452 20.1251 28.9691C20.1251 24.0924 24.0924 20.1251 28.9691 20.1251C33.8452 20.1251 37.8125 24.0924 37.8125 28.9691C37.8125 33.8452 33.8452 37.8125 28.9691 37.8125ZM28.9691 22.0001C25.1263 22.0001 22.0001 25.1263 22.0001 28.9691C22.0001 32.8113 25.1263 35.9375 28.9691 35.9375C32.8113 35.9375 35.9375 32.8113 35.9375 28.9691C35.9375 25.1263 32.8113 22.0001 28.9691 22.0001Z"
                        fill="#111111"
                      />
                      <path
                        d="M32.4447 33.1038C32.2176 33.1038 31.99 33.022 31.8099 32.8566L28.334 29.6595C28.1411 29.4819 28.0312 29.2317 28.0312 28.9692V24.3477C28.0312 23.8301 28.4512 23.4102 28.9688 23.4102C29.4863 23.4102 29.9062 23.8301 29.9062 24.3477V28.5579L33.0795 31.476C33.4603 31.8269 33.4853 32.4196 33.135 32.801C32.9501 33.0018 32.6974 33.1038 32.4447 33.1038Z"
                        fill="#111111"
                      />
                    </svg>
                  </span>
                  <div className="text">
                    <h4>Real-Time Collaboration</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </Col>
          <Col sm={7}>
            {isMounted && (
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                spaceBetween={10}
                // navigation={true}
                autoplay={{
                  delay: 5000, // 3 seconds delay between slides
                  disableOnInteraction: false, // Autoplay won't stop after user interactions like clicking or swiping
                }}
                thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                modules={[Autoplay, FreeMode, Navigation, Thumbs]}
                className="navslider"
              >
                <SwiperSlide>
                  <div className="video-slide">
                    <video
                      src={readyToExploreVideo}
                      autoPlay
                      muted
                      loop
                    ></video>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="video-slide">
                    <video
                      src={readyToExploreVideo}
                      autoPlay
                      muted
                      loop
                    ></video>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="video-slide">
                    <video
                      src={readyToExploreVideo}
                      autoPlay
                      muted
                      loop
                    ></video>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="video-slide">
                    <video
                      src={readyToExploreVideo}
                      autoPlay
                      muted
                      loop
                    ></video>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="video-slide">
                    <video
                      src={readyToExploreVideo}
                      autoPlay
                      muted
                      loop
                    ></video>
                  </div>
                </SwiperSlide>
              </Swiper>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export const StartSuccess = () => {
  return (
    <div className="section start-sucess">
      <Container fluid className="px-0">
        <img src={marqueeBackground} alt="" />
        <marquee>
          <div className="headings">
            <h4>Start Your Success!</h4>
            <h4>Start Your Success!</h4>
            <h4>Start Your Success!</h4>
            <h4>Start Your Success!</h4>
            <h4>Start Your Success!</h4>
            <h4>Start Your Success!</h4>
            <h4>Start Your Success!</h4>
            <h4>Start Your Success!</h4>
            <h4>Start Your Success!</h4>
            <h4>Start Your Success!</h4>
          </div>
        </marquee>
      </Container>
    </div>
  );
};

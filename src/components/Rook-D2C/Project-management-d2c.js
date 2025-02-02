"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"; // Import ScrollTrigger from the correct location
import useSVGDrawingAnimation from "@/hooks/useSVGDrawingAnimation";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);
const Home6ProjecManagement = () => {
  useSVGDrawingAnimation("solution-section", "triangle");

  return (
    <>
      <div
        className="home6-project-management-section mb-130"
        id="solution-section"
      >
        <svg
          className="scroll-svg"
          viewBox="0 0 1578 1063"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="triangle"
            d="M10.5 10C99.5 153 388.2 168.8 787 172C1185.8 175.2 1426.17 281.667 1496.5 334.5C1611.5 420.886 1574.58 547.5 684.5 547.5C-208 547.5 -60.5 999 486.5 900C958.47 814.579 1497 872 1567.5 1053"
            strokeWidth={20}
            strokeLinecap="round"
          />
        </svg>
        <div className="container-lg container-fluid">
          <div className="row mb-70">
            <div className="col-lg-8">
              <div className="section-title3 text-animation">
                <h2>Empowering Your Direct-to-Consumer Success</h2>
                <p>
                  Your ultimate partner in transforming your brand into a market
                  leader with all the resources and support needed to succeed in
                  the competitive D2C landscape.
                </p>
              </div>
            </div>
          </div>
          <div className="row gy-5 position-relative">
            <div className="col-lg-6">
              <div className="single-project magnetic-item">
                <div className="content">
                  <h3>Create a Lasting Impact</h3>
                  <ul>
                    <li>
                      <svg
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4.16648 10.8225C4.12625 10.8225 4.08672 10.8119 4.05181 10.792C4.0169 10.772 3.98782 10.7432 3.96746 10.7085C3.10487 9.23894 0.806291 6.11133 0.783168 6.0799C0.750326 6.03526 0.734645 5.98029 0.738993 5.92504C0.74334 5.86979 0.767425 5.81795 0.806845 5.779L1.51341 5.0808C1.5518 5.04287 1.60227 5.01959 1.65604 5.01501C1.70981 5.01043 1.76349 5.02485 1.80774 5.05574L4.11836 6.66919C5.65454 4.69574 7.08213 3.33381 8.02044 2.53133C9.07217 1.63173 9.74084 1.22749 9.76879 1.21064C9.80466 1.18911 9.84571 1.17774 9.88754 1.17773H11.0306C11.0774 1.17773 11.1231 1.19194 11.1616 1.21849C11.2001 1.24504 11.2296 1.28267 11.2463 1.32639C11.2629 1.37012 11.2659 1.41787 11.2548 1.46331C11.2437 1.50876 11.219 1.54976 11.1841 1.58087C9.48951 3.0901 7.72773 5.48809 6.5482 7.23393C5.26597 9.13164 4.37585 10.6904 4.36701 10.7059C4.34698 10.7411 4.31804 10.7704 4.28311 10.7908C4.24818 10.8113 4.20848 10.8222 4.168 10.8224L4.16648 10.8225Z" />
                      </svg>{" "}
                      Simplify your D2C journey with Rook for D2C. 
                    </li>
                    <li>
                      <svg
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4.16648 10.8225C4.12625 10.8225 4.08672 10.8119 4.05181 10.792C4.0169 10.772 3.98782 10.7432 3.96746 10.7085C3.10487 9.23894 0.806291 6.11133 0.783168 6.0799C0.750326 6.03526 0.734645 5.98029 0.738993 5.92504C0.74334 5.86979 0.767425 5.81795 0.806845 5.779L1.51341 5.0808C1.5518 5.04287 1.60227 5.01959 1.65604 5.01501C1.70981 5.01043 1.76349 5.02485 1.80774 5.05574L4.11836 6.66919C5.65454 4.69574 7.08213 3.33381 8.02044 2.53133C9.07217 1.63173 9.74084 1.22749 9.76879 1.21064C9.80466 1.18911 9.84571 1.17774 9.88754 1.17773H11.0306C11.0774 1.17773 11.1231 1.19194 11.1616 1.21849C11.2001 1.24504 11.2296 1.28267 11.2463 1.32639C11.2629 1.37012 11.2659 1.41787 11.2548 1.46331C11.2437 1.50876 11.219 1.54976 11.1841 1.58087C9.48951 3.0901 7.72773 5.48809 6.5482 7.23393C5.26597 9.13164 4.37585 10.6904 4.36701 10.7059C4.34698 10.7411 4.31804 10.7704 4.28311 10.7908C4.24818 10.8113 4.20848 10.8222 4.168 10.8224L4.16648 10.8225Z" />
                      </svg>{" "}
                      Overcome challenges effortlessly with our expert guidance.
                    </li>
                  </ul>
                  <a href="#">
                    Get Free Trial
                    <svg
                      width={10}
                      height={10}
                      viewBox="0 0 10 10"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </a>
                </div>
                <div className="single-project-img">
                  <img src="assets/img/Rook-D2C/proj-Manage-1.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-project magnetic-item">
                <div className="content">
                  <h3>Establish Your Unique Brand Identity
                  </h3>
                  <ul>
                    <li>
                      <svg
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4.16648 10.8225C4.12625 10.8225 4.08672 10.8119 4.05181 10.792C4.0169 10.772 3.98782 10.7432 3.96746 10.7085C3.10487 9.23894 0.806291 6.11133 0.783168 6.0799C0.750326 6.03526 0.734645 5.98029 0.738993 5.92504C0.74334 5.86979 0.767425 5.81795 0.806845 5.779L1.51341 5.0808C1.5518 5.04287 1.60227 5.01959 1.65604 5.01501C1.70981 5.01043 1.76349 5.02485 1.80774 5.05574L4.11836 6.66919C5.65454 4.69574 7.08213 3.33381 8.02044 2.53133C9.07217 1.63173 9.74084 1.22749 9.76879 1.21064C9.80466 1.18911 9.84571 1.17774 9.88754 1.17773H11.0306C11.0774 1.17773 11.1231 1.19194 11.1616 1.21849C11.2001 1.24504 11.2296 1.28267 11.2463 1.32639C11.2629 1.37012 11.2659 1.41787 11.2548 1.46331C11.2437 1.50876 11.219 1.54976 11.1841 1.58087C9.48951 3.0901 7.72773 5.48809 6.5482 7.23393C5.26597 9.13164 4.37585 10.6904 4.36701 10.7059C4.34698 10.7411 4.31804 10.7704 4.28311 10.7908C4.24818 10.8113 4.20848 10.8222 4.168 10.8224L4.16648 10.8225Z" />
                      </svg>
                      Build a strong value-driven identity.
                    </li>
                    <li>
                      <svg
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4.16648 10.8225C4.12625 10.8225 4.08672 10.8119 4.05181 10.792C4.0169 10.772 3.98782 10.7432 3.96746 10.7085C3.10487 9.23894 0.806291 6.11133 0.783168 6.0799C0.750326 6.03526 0.734645 5.98029 0.738993 5.92504C0.74334 5.86979 0.767425 5.81795 0.806845 5.779L1.51341 5.0808C1.5518 5.04287 1.60227 5.01959 1.65604 5.01501C1.70981 5.01043 1.76349 5.02485 1.80774 5.05574L4.11836 6.66919C5.65454 4.69574 7.08213 3.33381 8.02044 2.53133C9.07217 1.63173 9.74084 1.22749 9.76879 1.21064C9.80466 1.18911 9.84571 1.17774 9.88754 1.17773H11.0306C11.0774 1.17773 11.1231 1.19194 11.1616 1.21849C11.2001 1.24504 11.2296 1.28267 11.2463 1.32639C11.2629 1.37012 11.2659 1.41787 11.2548 1.46331C11.2437 1.50876 11.219 1.54976 11.1841 1.58087C9.48951 3.0901 7.72773 5.48809 6.5482 7.23393C5.26597 9.13164 4.37585 10.6904 4.36701 10.7059C4.34698 10.7411 4.31804 10.7704 4.28311 10.7908C4.24818 10.8113 4.20848 10.8222 4.168 10.8224L4.16648 10.8225Z" />
                      </svg>{" "}
                      Ensure consistency for trust across touchpoints.                  </li>
                  </ul>
                  <a href="#">
                    Get Free Trial
                    <svg
                      width={10}
                      height={10}
                      viewBox="0 0 10 10"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </a>
                </div>
                <div className="single-project-img">
                  <img src="assets/img/Rook-D2C/proj-Manage-2.jpg" alt="" style={{height:"300px"}}/>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-project magnetic-item">
                <div className="content">
                  <h3>Enhance Your Digital Presence</h3>
                  <ul>
                    <li>
                      {" "}
                      <svg
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4.16648 10.8225C4.12625 10.8225 4.08672 10.8119 4.05181 10.792C4.0169 10.772 3.98782 10.7432 3.96746 10.7085C3.10487 9.23894 0.806291 6.11133 0.783168 6.0799C0.750326 6.03526 0.734645 5.98029 0.738993 5.92504C0.74334 5.86979 0.767425 5.81795 0.806845 5.779L1.51341 5.0808C1.5518 5.04287 1.60227 5.01959 1.65604 5.01501C1.70981 5.01043 1.76349 5.02485 1.80774 5.05574L4.11836 6.66919C5.65454 4.69574 7.08213 3.33381 8.02044 2.53133C9.07217 1.63173 9.74084 1.22749 9.76879 1.21064C9.80466 1.18911 9.84571 1.17774 9.88754 1.17773H11.0306C11.0774 1.17773 11.1231 1.19194 11.1616 1.21849C11.2001 1.24504 11.2296 1.28267 11.2463 1.32639C11.2629 1.37012 11.2659 1.41787 11.2548 1.46331C11.2437 1.50876 11.219 1.54976 11.1841 1.58087C9.48951 3.0901 7.72773 5.48809 6.5482 7.23393C5.26597 9.13164 4.37585 10.6904 4.36701 10.7059C4.34698 10.7411 4.31804 10.7704 4.28311 10.7908C4.24818 10.8113 4.20848 10.8222 4.168 10.8224L4.16648 10.8225Z" />
                      </svg>
                      Develop a robust online presence through optimized websites, social media, and engaging content. 
                    </li>
                    <li>
                      {" "}
                      <svg
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4.16648 10.8225C4.12625 10.8225 4.08672 10.8119 4.05181 10.792C4.0169 10.772 3.98782 10.7432 3.96746 10.7085C3.10487 9.23894 0.806291 6.11133 0.783168 6.0799C0.750326 6.03526 0.734645 5.98029 0.738993 5.92504C0.74334 5.86979 0.767425 5.81795 0.806845 5.779L1.51341 5.0808C1.5518 5.04287 1.60227 5.01959 1.65604 5.01501C1.70981 5.01043 1.76349 5.02485 1.80774 5.05574L4.11836 6.66919C5.65454 4.69574 7.08213 3.33381 8.02044 2.53133C9.07217 1.63173 9.74084 1.22749 9.76879 1.21064C9.80466 1.18911 9.84571 1.17774 9.88754 1.17773H11.0306C11.0774 1.17773 11.1231 1.19194 11.1616 1.21849C11.2001 1.24504 11.2296 1.28267 11.2463 1.32639C11.2629 1.37012 11.2659 1.41787 11.2548 1.46331C11.2437 1.50876 11.219 1.54976 11.1841 1.58087C9.48951 3.0901 7.72773 5.48809 6.5482 7.23393C5.26597 9.13164 4.37585 10.6904 4.36701 10.7059C4.34698 10.7411 4.31804 10.7704 4.28311 10.7908C4.24818 10.8113 4.20848 10.8222 4.168 10.8224L4.16648 10.8225Z" />
                      </svg>
                      Maintain consistent engagement to build loyalty and increase brand visibility.
                    </li>
                  </ul>
                  <a href="#">
                    Get Free Trial
                    <svg
                      width={10}
                      height={10}
                      viewBox="0 0 10 10"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </a>
                </div>
                <div className="single-project-img">
                  <img src="assets/img/Rook-D2C/proj-Manage-3.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-project magnetic-item">
                <div className="content">
                  <h3>Automate for Efficiency
                  </h3>
                  <ul>
                    <li>
                      <svg
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4.16648 10.8225C4.12625 10.8225 4.08672 10.8119 4.05181 10.792C4.0169 10.772 3.98782 10.7432 3.96746 10.7085C3.10487 9.23894 0.806291 6.11133 0.783168 6.0799C0.750326 6.03526 0.734645 5.98029 0.738993 5.92504C0.74334 5.86979 0.767425 5.81795 0.806845 5.779L1.51341 5.0808C1.5518 5.04287 1.60227 5.01959 1.65604 5.01501C1.70981 5.01043 1.76349 5.02485 1.80774 5.05574L4.11836 6.66919C5.65454 4.69574 7.08213 3.33381 8.02044 2.53133C9.07217 1.63173 9.74084 1.22749 9.76879 1.21064C9.80466 1.18911 9.84571 1.17774 9.88754 1.17773H11.0306C11.0774 1.17773 11.1231 1.19194 11.1616 1.21849C11.2001 1.24504 11.2296 1.28267 11.2463 1.32639C11.2629 1.37012 11.2659 1.41787 11.2548 1.46331C11.2437 1.50876 11.219 1.54976 11.1841 1.58087C9.48951 3.0901 7.72773 5.48809 6.5482 7.23393C5.26597 9.13164 4.37585 10.6904 4.36701 10.7059C4.34698 10.7411 4.31804 10.7704 4.28311 10.7908C4.24818 10.8113 4.20848 10.8222 4.168 10.8224L4.16648 10.8225Z" />
                      </svg>
                      Utilize tools to streamline tasks like email marketing campaigns and social media scheduling. 
                    </li>
                    <li>
                      <svg
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4.16648 10.8225C4.12625 10.8225 4.08672 10.8119 4.05181 10.792C4.0169 10.772 3.98782 10.7432 3.96746 10.7085C3.10487 9.23894 0.806291 6.11133 0.783168 6.0799C0.750326 6.03526 0.734645 5.98029 0.738993 5.92504C0.74334 5.86979 0.767425 5.81795 0.806845 5.779L1.51341 5.0808C1.5518 5.04287 1.60227 5.01959 1.65604 5.01501C1.70981 5.01043 1.76349 5.02485 1.80774 5.05574L4.11836 6.66919C5.65454 4.69574 7.08213 3.33381 8.02044 2.53133C9.07217 1.63173 9.74084 1.22749 9.76879 1.21064C9.80466 1.18911 9.84571 1.17774 9.88754 1.17773H11.0306C11.0774 1.17773 11.1231 1.19194 11.1616 1.21849C11.2001 1.24504 11.2296 1.28267 11.2463 1.32639C11.2629 1.37012 11.2659 1.41787 11.2548 1.46331C11.2437 1.50876 11.219 1.54976 11.1841 1.58087C9.48951 3.0901 7.72773 5.48809 6.5482 7.23393C5.26597 9.13164 4.37585 10.6904 4.36701 10.7059C4.34698 10.7411 4.31804 10.7704 4.28311 10.7908C4.24818 10.8113 4.20848 10.8222 4.168 10.8224L4.16648 10.8225Z" />
                      </svg>
                      Implement CRM systems to track interactions and automate customer communications.
                    </li>
                  </ul>
                  <a href="#">
                    Get Free Trial
                    <svg
                      width={10}
                      height={10}
                      viewBox="0 0 10 10"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </a>
                </div>
                <div className="single-project-img">
                  <img src="assets/img/Rook-D2C/proj-Manage-4.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home6ProjecManagement;

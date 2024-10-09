import React from "react";
export const metadata = {
  title: "Axleo - Digital Agency Creative Portfolio Template",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};
const PricingRook = () => {
  return (
    <>
      <div className="pricing-page pt-130 mb-130">
        <div className="container-lg container-fluid">
          <div className="section-title-and-tab-btn mb-70">
            <h1>Pricing Package</h1>
            <div className="arrow-and-tab-btn">
              <svg viewBox="0 0 987 58" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 29H985M985 29C976.333 32.1667 959 41.4 959 57M985 29C976.333 25.8333 959 15.8 959 1"
                  strokeLinecap="round"
                />
              </svg>
              <div className="tab-btn-area">
                <div className="discount d-lg-flex d-none">
                  <svg
                    width={70}
                    height={66}
                    viewBox="0 0 70 66"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.97538 2.48012L0.882007 0.299733L1.11799 6.06841L6.01626 3.47928L5.97538 2.48012ZM44.5932 37.7329L44.0936 37.7115L44.5932 37.7329ZM28.1429 33.0216L28.6424 32.9989L28.1429 33.0216ZM56.9309 37.7329L56.5856 38.0945L56.9309 37.7329ZM66.801 66L69.9059 61.1325L64.1381 60.8773L66.801 66ZM5.49693 3.50008C13.3443 3.51314 23.3093 5.19973 31.1467 10.3139C38.9497 15.4056 44.6834 23.9166 44.0936 37.7115L45.0927 37.7542C45.6979 23.5993 39.7857 14.7571 31.6932 9.47641C23.6351 4.21822 13.4549 2.51332 5.49859 2.50008L5.49693 3.50008ZM44.0936 37.7115C43.9548 40.9578 42.938 43.3351 41.5341 44.822C40.1345 46.3042 38.3337 46.9241 36.5364 46.6544C32.9506 46.1163 29.0488 41.923 28.6424 32.9989L27.6434 33.0444C28.0587 42.1628 32.0967 46.9993 36.388 47.6433C38.5292 47.9646 40.6512 47.2136 42.2611 45.5086C43.8667 43.8082 44.9461 41.182 45.0927 37.7542L44.0936 37.7115ZM28.6424 32.9989C28.4388 28.5296 29.4257 26.1165 30.9779 25.0136C32.5381 23.9049 34.8818 23.9658 37.7801 24.9887C43.5478 27.0244 50.8867 32.6542 56.5856 38.0945L57.2761 37.3712C51.5565 31.9111 44.0902 26.1554 38.1129 24.0457C35.1387 22.996 32.375 22.7941 30.3987 24.1984C28.4144 25.6084 27.4357 28.4838 27.6434 33.0444L28.6424 32.9989ZM56.5856 38.0945C61.6707 42.9489 66.4777 49.5101 66.4999 61.5049L67.4999 61.503C67.477 49.1656 62.5013 42.3593 57.2761 37.3712L56.5856 38.0945Z" />
                  </svg>
                </div>
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className="nav-link active"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      Recommended
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
              tabIndex={0}
            >
              <div className="row g-xl-3 gy-4 align-items-center justify-content-center"  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div
                  className="col-xl-4 col-md-6 wow animate fadeInLeft"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <div className="pricing-card">
                    <div className="pricing-top">
                      <span>"Rook® Domain Consultation Package</span>
                      <h2>
                      ₹5000<sub></sub>
                      </h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>
                          <svg
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.0603 5.37756C9.10105 5.4182 9.13337 5.46647 9.15543 5.51963C9.17748 5.57278 9.18883 5.62976 9.18883 5.68731C9.18883 5.74485 9.17748 5.80183 9.15543 5.85498C9.13337 5.90814 9.10105 5.95642 9.0603 5.99706L6.4353 8.62206C6.39466 8.6628 6.34638 8.69512 6.29323 8.71718C6.24008 8.73923 6.1831 8.75059 6.12555 8.75059C6.06801 8.75059 6.01103 8.73923 5.95787 8.71718C5.90472 8.69512 5.85644 8.6628 5.8158 8.62206L4.5033 7.30956C4.46263 7.26888 4.43036 7.22059 4.40834 7.16744C4.38633 7.11429 4.375 7.05733 4.375 6.99981C4.375 6.94228 4.38633 6.88532 4.40834 6.83217C4.43036 6.77902 4.46263 6.73073 4.5033 6.69006C4.54398 6.64938 4.59227 6.61711 4.64542 6.5951C4.69856 6.57308 4.75553 6.56175 4.81305 6.56175C4.87058 6.56175 4.92754 6.57308 4.98069 6.5951C5.03384 6.61711 5.08213 6.64938 5.1228 6.69006L6.12555 7.69368L8.4408 5.37756C8.48144 5.33681 8.52972 5.30449 8.58287 5.28243C8.63603 5.26038 8.69301 5.24902 8.75055 5.24902C8.8081 5.24902 8.86508 5.26038 8.91823 5.28243C8.97138 5.30449 9.01966 5.33681 9.0603 5.37756Z"
                              />
                              <path d="M8.98817 2.19915L8.1823 1.37315L8.80792 0.762397L9.35217 1.31977L10.1309 1.31015C10.468 1.30616 10.8025 1.36961 11.1147 1.49677C11.4269 1.62394 11.7106 1.81225 11.9489 2.05062C12.1873 2.289 12.3756 2.57264 12.5028 2.88485C12.63 3.19707 12.6934 3.53155 12.6894 3.86865L12.6807 4.6474L13.2372 5.19165C13.4782 5.42717 13.6697 5.7085 13.8005 6.01909C13.9312 6.32968 13.9986 6.66328 13.9986 7.00027C13.9986 7.33727 13.9312 7.67086 13.8005 7.98146C13.6697 8.29205 13.4782 8.57337 13.2372 8.8089L12.6798 9.35315L12.6894 10.1319C12.6934 10.469 12.63 10.8035 12.5028 11.1157C12.3756 11.4279 12.1873 11.7115 11.9489 11.9499C11.7106 12.1883 11.4269 12.3766 11.1147 12.5038C10.8025 12.6309 10.468 12.6944 10.1309 12.6904L9.35217 12.6816L8.80792 13.2381C8.5724 13.4792 8.29107 13.6707 7.98048 13.8015C7.66989 13.9322 7.33629 13.9996 6.9993 13.9996C6.6623 13.9996 6.32871 13.9322 6.01811 13.8015C5.70752 13.6707 5.42619 13.4792 5.19067 13.2381L4.64642 12.6808L3.86767 12.6904C3.53058 12.6944 3.19609 12.6309 2.88387 12.5038C2.57166 12.3766 2.28803 12.1883 2.04965 11.9499C1.81127 11.7115 1.62296 11.4279 1.4958 11.1157C1.36863 10.8035 1.30518 10.469 1.30917 10.1319L1.31792 9.35315L0.761421 8.8089C0.520394 8.57337 0.328874 8.29205 0.198116 7.98146C0.0673581 7.67086 0 7.33727 0 7.00027C0 6.66328 0.0673581 6.32968 0.198116 6.01909C0.328874 5.7085 0.520394 5.42717 0.761421 5.19165L1.3188 4.6474L1.30917 3.86865C1.30518 3.53155 1.36863 3.19707 1.4958 2.88485C1.62296 2.57264 1.81127 2.289 2.04965 2.05062C2.28803 1.81225 2.57166 1.62394 2.88387 1.49677C3.19609 1.36961 3.53058 1.30616 3.86767 1.31015L4.64642 1.3189L5.19067 0.762397C5.42619 0.52137 5.70752 0.32985 6.01811 0.199093C6.32871 0.0683346 6.6623 0.000976562 6.9993 0.000976562C7.33629 0.000976562 7.66989 0.0683346 7.98048 0.199093C8.29107 0.32985 8.5724 0.52137 8.80792 0.762397L8.1823 1.37315C8.02826 1.21546 7.84426 1.09016 7.6411 1.00461C7.43794 0.919062 7.21973 0.874992 6.9993 0.874992C6.77886 0.874992 6.56065 0.919062 6.35749 1.00461C6.15433 1.09016 5.97033 1.21546 5.8163 1.37315L5.0113 2.19915L3.8563 2.18515C3.63595 2.18268 3.41734 2.22428 3.2133 2.3075C3.00925 2.39071 2.8239 2.51386 2.66812 2.66972C2.51235 2.82558 2.38929 3.011 2.30618 3.21508C2.22308 3.41917 2.18159 3.6378 2.18417 3.85815L2.19817 5.0114L1.37217 5.81727C1.21448 5.97131 1.08918 6.15531 1.00363 6.35847C0.918086 6.56163 0.874016 6.77984 0.874016 7.00027C0.874016 7.22071 0.918086 7.43892 1.00363 7.64208C1.08918 7.84523 1.21448 8.02924 1.37217 8.18327L2.19817 8.98827L2.18417 10.1433C2.18171 10.3636 2.2233 10.5822 2.30652 10.7863C2.38973 10.9903 2.51289 11.1757 2.66875 11.3314C2.8246 11.4872 3.01002 11.6103 3.21411 11.6934C3.41819 11.7765 3.63683 11.818 3.85717 11.8154L5.01042 11.8014L5.8163 12.6274C5.97033 12.7851 6.15433 12.9104 6.35749 12.9959C6.56065 13.0815 6.77886 13.1256 6.9993 13.1256C7.21973 13.1256 7.43794 13.0815 7.6411 12.9959C7.84426 12.9104 8.02826 12.7851 8.1823 12.6274L8.9873 11.8014L10.1423 11.8154C10.3626 11.8179 10.5813 11.7763 10.7853 11.693C10.9893 11.6098 11.1747 11.4867 11.3305 11.3308C11.4862 11.175 11.6093 10.9895 11.6924 10.7855C11.7755 10.5814 11.817 10.3627 11.8144 10.1424L11.8004 8.98915L12.6264 8.18327C12.7841 8.02924 12.9094 7.84523 12.995 7.64208C13.0805 7.43892 13.1246 7.22071 13.1246 7.00027C13.1246 6.77984 13.0805 6.56163 12.995 6.35847C12.9094 6.15531 12.7841 5.97131 12.6264 5.81727L11.8004 5.01227L11.8144 3.85727C11.8169 3.63693 11.7753 3.41831 11.6921 3.21427C11.6089 3.01023 11.4857 2.82488 11.3298 2.6691C11.174 2.51332 10.9886 2.39027 10.7845 2.30716C10.5804 2.22405 10.3618 2.18257 10.1414 2.18515L8.98817 2.19915Z" />
                            </g>
                          </svg>
                          Custom domain selection for your industry
                        </li>
                        <li>
                          <svg
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.0603 5.37756C9.10105 5.4182 9.13337 5.46647 9.15543 5.51963C9.17748 5.57278 9.18883 5.62976 9.18883 5.68731C9.18883 5.74485 9.17748 5.80183 9.15543 5.85498C9.13337 5.90814 9.10105 5.95642 9.0603 5.99706L6.4353 8.62206C6.39466 8.6628 6.34638 8.69512 6.29323 8.71718C6.24008 8.73923 6.1831 8.75059 6.12555 8.75059C6.06801 8.75059 6.01103 8.73923 5.95787 8.71718C5.90472 8.69512 5.85644 8.6628 5.8158 8.62206L4.5033 7.30956C4.46263 7.26888 4.43036 7.22059 4.40834 7.16744C4.38633 7.11429 4.375 7.05733 4.375 6.99981C4.375 6.94228 4.38633 6.88532 4.40834 6.83217C4.43036 6.77902 4.46263 6.73073 4.5033 6.69006C4.54398 6.64938 4.59227 6.61711 4.64542 6.5951C4.69856 6.57308 4.75553 6.56175 4.81305 6.56175C4.87058 6.56175 4.92754 6.57308 4.98069 6.5951C5.03384 6.61711 5.08213 6.64938 5.1228 6.69006L6.12555 7.69368L8.4408 5.37756C8.48144 5.33681 8.52972 5.30449 8.58287 5.28243C8.63603 5.26038 8.69301 5.24902 8.75055 5.24902C8.8081 5.24902 8.86508 5.26038 8.91823 5.28243C8.97138 5.30449 9.01966 5.33681 9.0603 5.37756Z"
                              />
                              <path d="M8.98817 2.19915L8.1823 1.37315L8.80792 0.762397L9.35217 1.31977L10.1309 1.31015C10.468 1.30616 10.8025 1.36961 11.1147 1.49677C11.4269 1.62394 11.7106 1.81225 11.9489 2.05062C12.1873 2.289 12.3756 2.57264 12.5028 2.88485C12.63 3.19707 12.6934 3.53155 12.6894 3.86865L12.6807 4.6474L13.2372 5.19165C13.4782 5.42717 13.6697 5.7085 13.8005 6.01909C13.9312 6.32968 13.9986 6.66328 13.9986 7.00027C13.9986 7.33727 13.9312 7.67086 13.8005 7.98146C13.6697 8.29205 13.4782 8.57337 13.2372 8.8089L12.6798 9.35315L12.6894 10.1319C12.6934 10.469 12.63 10.8035 12.5028 11.1157C12.3756 11.4279 12.1873 11.7115 11.9489 11.9499C11.7106 12.1883 11.4269 12.3766 11.1147 12.5038C10.8025 12.6309 10.468 12.6944 10.1309 12.6904L9.35217 12.6816L8.80792 13.2381C8.5724 13.4792 8.29107 13.6707 7.98048 13.8015C7.66989 13.9322 7.33629 13.9996 6.9993 13.9996C6.6623 13.9996 6.32871 13.9322 6.01811 13.8015C5.70752 13.6707 5.42619 13.4792 5.19067 13.2381L4.64642 12.6808L3.86767 12.6904C3.53058 12.6944 3.19609 12.6309 2.88387 12.5038C2.57166 12.3766 2.28803 12.1883 2.04965 11.9499C1.81127 11.7115 1.62296 11.4279 1.4958 11.1157C1.36863 10.8035 1.30518 10.469 1.30917 10.1319L1.31792 9.35315L0.761421 8.8089C0.520394 8.57337 0.328874 8.29205 0.198116 7.98146C0.0673581 7.67086 0 7.33727 0 7.00027C0 6.66328 0.0673581 6.32968 0.198116 6.01909C0.328874 5.7085 0.520394 5.42717 0.761421 5.19165L1.3188 4.6474L1.30917 3.86865C1.30518 3.53155 1.36863 3.19707 1.4958 2.88485C1.62296 2.57264 1.81127 2.289 2.04965 2.05062C2.28803 1.81225 2.57166 1.62394 2.88387 1.49677C3.19609 1.36961 3.53058 1.30616 3.86767 1.31015L4.64642 1.3189L5.19067 0.762397C5.42619 0.52137 5.70752 0.32985 6.01811 0.199093C6.32871 0.0683346 6.6623 0.000976562 6.9993 0.000976562C7.33629 0.000976562 7.66989 0.0683346 7.98048 0.199093C8.29107 0.32985 8.5724 0.52137 8.80792 0.762397L8.1823 1.37315C8.02826 1.21546 7.84426 1.09016 7.6411 1.00461C7.43794 0.919062 7.21973 0.874992 6.9993 0.874992C6.77886 0.874992 6.56065 0.919062 6.35749 1.00461C6.15433 1.09016 5.97033 1.21546 5.8163 1.37315L5.0113 2.19915L3.8563 2.18515C3.63595 2.18268 3.41734 2.22428 3.2133 2.3075C3.00925 2.39071 2.8239 2.51386 2.66812 2.66972C2.51235 2.82558 2.38929 3.011 2.30618 3.21508C2.22308 3.41917 2.18159 3.6378 2.18417 3.85815L2.19817 5.0114L1.37217 5.81727C1.21448 5.97131 1.08918 6.15531 1.00363 6.35847C0.918086 6.56163 0.874016 6.77984 0.874016 7.00027C0.874016 7.22071 0.918086 7.43892 1.00363 7.64208C1.08918 7.84523 1.21448 8.02924 1.37217 8.18327L2.19817 8.98827L2.18417 10.1433C2.18171 10.3636 2.2233 10.5822 2.30652 10.7863C2.38973 10.9903 2.51289 11.1757 2.66875 11.3314C2.8246 11.4872 3.01002 11.6103 3.21411 11.6934C3.41819 11.7765 3.63683 11.818 3.85717 11.8154L5.01042 11.8014L5.8163 12.6274C5.97033 12.7851 6.15433 12.9104 6.35749 12.9959C6.56065 13.0815 6.77886 13.1256 6.9993 13.1256C7.21973 13.1256 7.43794 13.0815 7.6411 12.9959C7.84426 12.9104 8.02826 12.7851 8.1823 12.6274L8.9873 11.8014L10.1423 11.8154C10.3626 11.8179 10.5813 11.7763 10.7853 11.693C10.9893 11.6098 11.1747 11.4867 11.3305 11.3308C11.4862 11.175 11.6093 10.9895 11.6924 10.7855C11.7755 10.5814 11.817 10.3627 11.8144 10.1424L11.8004 8.98915L12.6264 8.18327C12.7841 8.02924 12.9094 7.84523 12.995 7.64208C13.0805 7.43892 13.1246 7.22071 13.1246 7.00027C13.1246 6.77984 13.0805 6.56163 12.995 6.35847C12.9094 6.15531 12.7841 5.97131 12.6264 5.81727L11.8004 5.01227L11.8144 3.85727C11.8169 3.63693 11.7753 3.41831 11.6921 3.21427C11.6089 3.01023 11.4857 2.82488 11.3298 2.6691C11.174 2.51332 10.9886 2.39027 10.7845 2.30716C10.5804 2.22405 10.3618 2.18257 10.1414 2.18515L8.98817 2.19915Z" />
                            </g>
                          </svg>
                          Strategic domain portfolio management
                        </li>
                        <li>
                          <svg
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.0603 5.37756C9.10105 5.4182 9.13337 5.46647 9.15543 5.51963C9.17748 5.57278 9.18883 5.62976 9.18883 5.68731C9.18883 5.74485 9.17748 5.80183 9.15543 5.85498C9.13337 5.90814 9.10105 5.95642 9.0603 5.99706L6.4353 8.62206C6.39466 8.6628 6.34638 8.69512 6.29323 8.71718C6.24008 8.73923 6.1831 8.75059 6.12555 8.75059C6.06801 8.75059 6.01103 8.73923 5.95787 8.71718C5.90472 8.69512 5.85644 8.6628 5.8158 8.62206L4.5033 7.30956C4.46263 7.26888 4.43036 7.22059 4.40834 7.16744C4.38633 7.11429 4.375 7.05733 4.375 6.99981C4.375 6.94228 4.38633 6.88532 4.40834 6.83217C4.43036 6.77902 4.46263 6.73073 4.5033 6.69006C4.54398 6.64938 4.59227 6.61711 4.64542 6.5951C4.69856 6.57308 4.75553 6.56175 4.81305 6.56175C4.87058 6.56175 4.92754 6.57308 4.98069 6.5951C5.03384 6.61711 5.08213 6.64938 5.1228 6.69006L6.12555 7.69368L8.4408 5.37756C8.48144 5.33681 8.52972 5.30449 8.58287 5.28243C8.63603 5.26038 8.69301 5.24902 8.75055 5.24902C8.8081 5.24902 8.86508 5.26038 8.91823 5.28243C8.97138 5.30449 9.01966 5.33681 9.0603 5.37756Z"
                              />
                              <path d="M8.98817 2.19915L8.1823 1.37315L8.80792 0.762397L9.35217 1.31977L10.1309 1.31015C10.468 1.30616 10.8025 1.36961 11.1147 1.49677C11.4269 1.62394 11.7106 1.81225 11.9489 2.05062C12.1873 2.289 12.3756 2.57264 12.5028 2.88485C12.63 3.19707 12.6934 3.53155 12.6894 3.86865L12.6807 4.6474L13.2372 5.19165C13.4782 5.42717 13.6697 5.7085 13.8005 6.01909C13.9312 6.32968 13.9986 6.66328 13.9986 7.00027C13.9986 7.33727 13.9312 7.67086 13.8005 7.98146C13.6697 8.29205 13.4782 8.57337 13.2372 8.8089L12.6798 9.35315L12.6894 10.1319C12.6934 10.469 12.63 10.8035 12.5028 11.1157C12.3756 11.4279 12.1873 11.7115 11.9489 11.9499C11.7106 12.1883 11.4269 12.3766 11.1147 12.5038C10.8025 12.6309 10.468 12.6944 10.1309 12.6904L9.35217 12.6816L8.80792 13.2381C8.5724 13.4792 8.29107 13.6707 7.98048 13.8015C7.66989 13.9322 7.33629 13.9996 6.9993 13.9996C6.6623 13.9996 6.32871 13.9322 6.01811 13.8015C5.70752 13.6707 5.42619 13.4792 5.19067 13.2381L4.64642 12.6808L3.86767 12.6904C3.53058 12.6944 3.19609 12.6309 2.88387 12.5038C2.57166 12.3766 2.28803 12.1883 2.04965 11.9499C1.81127 11.7115 1.62296 11.4279 1.4958 11.1157C1.36863 10.8035 1.30518 10.469 1.30917 10.1319L1.31792 9.35315L0.761421 8.8089C0.520394 8.57337 0.328874 8.29205 0.198116 7.98146C0.0673581 7.67086 0 7.33727 0 7.00027C0 6.66328 0.0673581 6.32968 0.198116 6.01909C0.328874 5.7085 0.520394 5.42717 0.761421 5.19165L1.3188 4.6474L1.30917 3.86865C1.30518 3.53155 1.36863 3.19707 1.4958 2.88485C1.62296 2.57264 1.81127 2.289 2.04965 2.05062C2.28803 1.81225 2.57166 1.62394 2.88387 1.49677C3.19609 1.36961 3.53058 1.30616 3.86767 1.31015L4.64642 1.3189L5.19067 0.762397C5.42619 0.52137 5.70752 0.32985 6.01811 0.199093C6.32871 0.0683346 6.6623 0.000976562 6.9993 0.000976562C7.33629 0.000976562 7.66989 0.0683346 7.98048 0.199093C8.29107 0.32985 8.5724 0.52137 8.80792 0.762397L8.1823 1.37315C8.02826 1.21546 7.84426 1.09016 7.6411 1.00461C7.43794 0.919062 7.21973 0.874992 6.9993 0.874992C6.77886 0.874992 6.56065 0.919062 6.35749 1.00461C6.15433 1.09016 5.97033 1.21546 5.8163 1.37315L5.0113 2.19915L3.8563 2.18515C3.63595 2.18268 3.41734 2.22428 3.2133 2.3075C3.00925 2.39071 2.8239 2.51386 2.66812 2.66972C2.51235 2.82558 2.38929 3.011 2.30618 3.21508C2.22308 3.41917 2.18159 3.6378 2.18417 3.85815L2.19817 5.0114L1.37217 5.81727C1.21448 5.97131 1.08918 6.15531 1.00363 6.35847C0.918086 6.56163 0.874016 6.77984 0.874016 7.00027C0.874016 7.22071 0.918086 7.43892 1.00363 7.64208C1.08918 7.84523 1.21448 8.02924 1.37217 8.18327L2.19817 8.98827L2.18417 10.1433C2.18171 10.3636 2.2233 10.5822 2.30652 10.7863C2.38973 10.9903 2.51289 11.1757 2.66875 11.3314C2.8246 11.4872 3.01002 11.6103 3.21411 11.6934C3.41819 11.7765 3.63683 11.818 3.85717 11.8154L5.01042 11.8014L5.8163 12.6274C5.97033 12.7851 6.15433 12.9104 6.35749 12.9959C6.56065 13.0815 6.77886 13.1256 6.9993 13.1256C7.21973 13.1256 7.43794 13.0815 7.6411 12.9959C7.84426 12.9104 8.02826 12.7851 8.1823 12.6274L8.9873 11.8014L10.1423 11.8154C10.3626 11.8179 10.5813 11.7763 10.7853 11.693C10.9893 11.6098 11.1747 11.4867 11.3305 11.3308C11.4862 11.175 11.6093 10.9895 11.6924 10.7855C11.7755 10.5814 11.817 10.3627 11.8144 10.1424L11.8004 8.98915L12.6264 8.18327C12.7841 8.02924 12.9094 7.84523 12.995 7.64208C13.0805 7.43892 13.1246 7.22071 13.1246 7.00027C13.1246 6.77984 13.0805 6.56163 12.995 6.35847C12.9094 6.15531 12.7841 5.97131 12.6264 5.81727L11.8004 5.01227L11.8144 3.85727C11.8169 3.63693 11.7753 3.41831 11.6921 3.21427C11.6089 3.01023 11.4857 2.82488 11.3298 2.6691C11.174 2.51332 10.9886 2.39027 10.7845 2.30716C10.5804 2.22405 10.3618 2.18257 10.1414 2.18515L8.98817 2.19915Z" />
                            </g>
                          </svg>
                          SEO strategies tailored to your domains
                        </li>
                        <li>
                          <svg
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.0603 5.37756C9.10105 5.4182 9.13337 5.46647 9.15543 5.51963C9.17748 5.57278 9.18883 5.62976 9.18883 5.68731C9.18883 5.74485 9.17748 5.80183 9.15543 5.85498C9.13337 5.90814 9.10105 5.95642 9.0603 5.99706L6.4353 8.62206C6.39466 8.6628 6.34638 8.69512 6.29323 8.71718C6.24008 8.73923 6.1831 8.75059 6.12555 8.75059C6.06801 8.75059 6.01103 8.73923 5.95787 8.71718C5.90472 8.69512 5.85644 8.6628 5.8158 8.62206L4.5033 7.30956C4.46263 7.26888 4.43036 7.22059 4.40834 7.16744C4.38633 7.11429 4.375 7.05733 4.375 6.99981C4.375 6.94228 4.38633 6.88532 4.40834 6.83217C4.43036 6.77902 4.46263 6.73073 4.5033 6.69006C4.54398 6.64938 4.59227 6.61711 4.64542 6.5951C4.69856 6.57308 4.75553 6.56175 4.81305 6.56175C4.87058 6.56175 4.92754 6.57308 4.98069 6.5951C5.03384 6.61711 5.08213 6.64938 5.1228 6.69006L6.12555 7.69368L8.4408 5.37756C8.48144 5.33681 8.52972 5.30449 8.58287 5.28243C8.63603 5.26038 8.69301 5.24902 8.75055 5.24902C8.8081 5.24902 8.86508 5.26038 8.91823 5.28243C8.97138 5.30449 9.01966 5.33681 9.0603 5.37756Z"
                              />
                              <path d="M8.98817 2.19915L8.1823 1.37315L8.80792 0.762397L9.35217 1.31977L10.1309 1.31015C10.468 1.30616 10.8025 1.36961 11.1147 1.49677C11.4269 1.62394 11.7106 1.81225 11.9489 2.05062C12.1873 2.289 12.3756 2.57264 12.5028 2.88485C12.63 3.19707 12.6934 3.53155 12.6894 3.86865L12.6807 4.6474L13.2372 5.19165C13.4782 5.42717 13.6697 5.7085 13.8005 6.01909C13.9312 6.32968 13.9986 6.66328 13.9986 7.00027C13.9986 7.33727 13.9312 7.67086 13.8005 7.98146C13.6697 8.29205 13.4782 8.57337 13.2372 8.8089L12.6798 9.35315L12.6894 10.1319C12.6934 10.469 12.63 10.8035 12.5028 11.1157C12.3756 11.4279 12.1873 11.7115 11.9489 11.9499C11.7106 12.1883 11.4269 12.3766 11.1147 12.5038C10.8025 12.6309 10.468 12.6944 10.1309 12.6904L9.35217 12.6816L8.80792 13.2381C8.5724 13.4792 8.29107 13.6707 7.98048 13.8015C7.66989 13.9322 7.33629 13.9996 6.9993 13.9996C6.6623 13.9996 6.32871 13.9322 6.01811 13.8015C5.70752 13.6707 5.42619 13.4792 5.19067 13.2381L4.64642 12.6808L3.86767 12.6904C3.53058 12.6944 3.19609 12.6309 2.88387 12.5038C2.57166 12.3766 2.28803 12.1883 2.04965 11.9499C1.81127 11.7115 1.62296 11.4279 1.4958 11.1157C1.36863 10.8035 1.30518 10.469 1.30917 10.1319L1.31792 9.35315L0.761421 8.8089C0.520394 8.57337 0.328874 8.29205 0.198116 7.98146C0.0673581 7.67086 0 7.33727 0 7.00027C0 6.66328 0.0673581 6.32968 0.198116 6.01909C0.328874 5.7085 0.520394 5.42717 0.761421 5.19165L1.3188 4.6474L1.30917 3.86865C1.30518 3.53155 1.36863 3.19707 1.4958 2.88485C1.62296 2.57264 1.81127 2.289 2.04965 2.05062C2.28803 1.81225 2.57166 1.62394 2.88387 1.49677C3.19609 1.36961 3.53058 1.30616 3.86767 1.31015L4.64642 1.3189L5.19067 0.762397C5.42619 0.52137 5.70752 0.32985 6.01811 0.199093C6.32871 0.0683346 6.6623 0.000976562 6.9993 0.000976562C7.33629 0.000976562 7.66989 0.0683346 7.98048 0.199093C8.29107 0.32985 8.5724 0.52137 8.80792 0.762397L8.1823 1.37315C8.02826 1.21546 7.84426 1.09016 7.6411 1.00461C7.43794 0.919062 7.21973 0.874992 6.9993 0.874992C6.77886 0.874992 6.56065 0.919062 6.35749 1.00461C6.15433 1.09016 5.97033 1.21546 5.8163 1.37315L5.0113 2.19915L3.8563 2.18515C3.63595 2.18268 3.41734 2.22428 3.2133 2.3075C3.00925 2.39071 2.8239 2.51386 2.66812 2.66972C2.51235 2.82558 2.38929 3.011 2.30618 3.21508C2.22308 3.41917 2.18159 3.6378 2.18417 3.85815L2.19817 5.0114L1.37217 5.81727C1.21448 5.97131 1.08918 6.15531 1.00363 6.35847C0.918086 6.56163 0.874016 6.77984 0.874016 7.00027C0.874016 7.22071 0.918086 7.43892 1.00363 7.64208C1.08918 7.84523 1.21448 8.02924 1.37217 8.18327L2.19817 8.98827L2.18417 10.1433C2.18171 10.3636 2.2233 10.5822 2.30652 10.7863C2.38973 10.9903 2.51289 11.1757 2.66875 11.3314C2.8246 11.4872 3.01002 11.6103 3.21411 11.6934C3.41819 11.7765 3.63683 11.818 3.85717 11.8154L5.01042 11.8014L5.8163 12.6274C5.97033 12.7851 6.15433 12.9104 6.35749 12.9959C6.56065 13.0815 6.77886 13.1256 6.9993 13.1256C7.21973 13.1256 7.43794 13.0815 7.6411 12.9959C7.84426 12.9104 8.02826 12.7851 8.1823 12.6274L8.9873 11.8014L10.1423 11.8154C10.3626 11.8179 10.5813 11.7763 10.7853 11.693C10.9893 11.6098 11.1747 11.4867 11.3305 11.3308C11.4862 11.175 11.6093 10.9895 11.6924 10.7855C11.7755 10.5814 11.817 10.3627 11.8144 10.1424L11.8004 8.98915L12.6264 8.18327C12.7841 8.02924 12.9094 7.84523 12.995 7.64208C13.0805 7.43892 13.1246 7.22071 13.1246 7.00027C13.1246 6.77984 13.0805 6.56163 12.995 6.35847C12.9094 6.15531 12.7841 5.97131 12.6264 5.81727L11.8004 5.01227L11.8144 3.85727C11.8169 3.63693 11.7753 3.41831 11.6921 3.21427C11.6089 3.01023 11.4857 2.82488 11.3298 2.6691C11.174 2.51332 10.9886 2.39027 10.7845 2.30716C10.5804 2.22405 10.3618 2.18257 10.1414 2.18515L8.98817 2.19915Z" />
                            </g>
                          </svg>
                          Security and privacy recommendations
                        </li>
                        <li>
                          <svg
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.0603 5.37756C9.10105 5.4182 9.13337 5.46647 9.15543 5.51963C9.17748 5.57278 9.18883 5.62976 9.18883 5.68731C9.18883 5.74485 9.17748 5.80183 9.15543 5.85498C9.13337 5.90814 9.10105 5.95642 9.0603 5.99706L6.4353 8.62206C6.39466 8.6628 6.34638 8.69512 6.29323 8.71718C6.24008 8.73923 6.1831 8.75059 6.12555 8.75059C6.06801 8.75059 6.01103 8.73923 5.95787 8.71718C5.90472 8.69512 5.85644 8.6628 5.8158 8.62206L4.5033 7.30956C4.46263 7.26888 4.43036 7.22059 4.40834 7.16744C4.38633 7.11429 4.375 7.05733 4.375 6.99981C4.375 6.94228 4.38633 6.88532 4.40834 6.83217C4.43036 6.77902 4.46263 6.73073 4.5033 6.69006C4.54398 6.64938 4.59227 6.61711 4.64542 6.5951C4.69856 6.57308 4.75553 6.56175 4.81305 6.56175C4.87058 6.56175 4.92754 6.57308 4.98069 6.5951C5.03384 6.61711 5.08213 6.64938 5.1228 6.69006L6.12555 7.69368L8.4408 5.37756C8.48144 5.33681 8.52972 5.30449 8.58287 5.28243C8.63603 5.26038 8.69301 5.24902 8.75055 5.24902C8.8081 5.24902 8.86508 5.26038 8.91823 5.28243C8.97138 5.30449 9.01966 5.33681 9.0603 5.37756Z"
                              />
                              <path d="M8.98817 2.19915L8.1823 1.37315L8.80792 0.762397L9.35217 1.31977L10.1309 1.31015C10.468 1.30616 10.8025 1.36961 11.1147 1.49677C11.4269 1.62394 11.7106 1.81225 11.9489 2.05062C12.1873 2.289 12.3756 2.57264 12.5028 2.88485C12.63 3.19707 12.6934 3.53155 12.6894 3.86865L12.6807 4.6474L13.2372 5.19165C13.4782 5.42717 13.6697 5.7085 13.8005 6.01909C13.9312 6.32968 13.9986 6.66328 13.9986 7.00027C13.9986 7.33727 13.9312 7.67086 13.8005 7.98146C13.6697 8.29205 13.4782 8.57337 13.2372 8.8089L12.6798 9.35315L12.6894 10.1319C12.6934 10.469 12.63 10.8035 12.5028 11.1157C12.3756 11.4279 12.1873 11.7115 11.9489 11.9499C11.7106 12.1883 11.4269 12.3766 11.1147 12.5038C10.8025 12.6309 10.468 12.6944 10.1309 12.6904L9.35217 12.6816L8.80792 13.2381C8.5724 13.4792 8.29107 13.6707 7.98048 13.8015C7.66989 13.9322 7.33629 13.9996 6.9993 13.9996C6.6623 13.9996 6.32871 13.9322 6.01811 13.8015C5.70752 13.6707 5.42619 13.4792 5.19067 13.2381L4.64642 12.6808L3.86767 12.6904C3.53058 12.6944 3.19609 12.6309 2.88387 12.5038C2.57166 12.3766 2.28803 12.1883 2.04965 11.9499C1.81127 11.7115 1.62296 11.4279 1.4958 11.1157C1.36863 10.8035 1.30518 10.469 1.30917 10.1319L1.31792 9.35315L0.761421 8.8089C0.520394 8.57337 0.328874 8.29205 0.198116 7.98146C0.0673581 7.67086 0 7.33727 0 7.00027C0 6.66328 0.0673581 6.32968 0.198116 6.01909C0.328874 5.7085 0.520394 5.42717 0.761421 5.19165L1.3188 4.6474L1.30917 3.86865C1.30518 3.53155 1.36863 3.19707 1.4958 2.88485C1.62296 2.57264 1.81127 2.289 2.04965 2.05062C2.28803 1.81225 2.57166 1.62394 2.88387 1.49677C3.19609 1.36961 3.53058 1.30616 3.86767 1.31015L4.64642 1.3189L5.19067 0.762397C5.42619 0.52137 5.70752 0.32985 6.01811 0.199093C6.32871 0.0683346 6.6623 0.000976562 6.9993 0.000976562C7.33629 0.000976562 7.66989 0.0683346 7.98048 0.199093C8.29107 0.32985 8.5724 0.52137 8.80792 0.762397L8.1823 1.37315C8.02826 1.21546 7.84426 1.09016 7.6411 1.00461C7.43794 0.919062 7.21973 0.874992 6.9993 0.874992C6.77886 0.874992 6.56065 0.919062 6.35749 1.00461C6.15433 1.09016 5.97033 1.21546 5.8163 1.37315L5.0113 2.19915L3.8563 2.18515C3.63595 2.18268 3.41734 2.22428 3.2133 2.3075C3.00925 2.39071 2.8239 2.51386 2.66812 2.66972C2.51235 2.82558 2.38929 3.011 2.30618 3.21508C2.22308 3.41917 2.18159 3.6378 2.18417 3.85815L2.19817 5.0114L1.37217 5.81727C1.21448 5.97131 1.08918 6.15531 1.00363 6.35847C0.918086 6.56163 0.874016 6.77984 0.874016 7.00027C0.874016 7.22071 0.918086 7.43892 1.00363 7.64208C1.08918 7.84523 1.21448 8.02924 1.37217 8.18327L2.19817 8.98827L2.18417 10.1433C2.18171 10.3636 2.2233 10.5822 2.30652 10.7863C2.38973 10.9903 2.51289 11.1757 2.66875 11.3314C2.8246 11.4872 3.01002 11.6103 3.21411 11.6934C3.41819 11.7765 3.63683 11.818 3.85717 11.8154L5.01042 11.8014L5.8163 12.6274C5.97033 12.7851 6.15433 12.9104 6.35749 12.9959C6.56065 13.0815 6.77886 13.1256 6.9993 13.1256C7.21973 13.1256 7.43794 13.0815 7.6411 12.9959C7.84426 12.9104 8.02826 12.7851 8.1823 12.6274L8.9873 11.8014L10.1423 11.8154C10.3626 11.8179 10.5813 11.7763 10.7853 11.693C10.9893 11.6098 11.1747 11.4867 11.3305 11.3308C11.4862 11.175 11.6093 10.9895 11.6924 10.7855C11.7755 10.5814 11.817 10.3627 11.8144 10.1424L11.8004 8.98915L12.6264 8.18327C12.7841 8.02924 12.9094 7.84523 12.995 7.64208C13.0805 7.43892 13.1246 7.22071 13.1246 7.00027C13.1246 6.77984 13.0805 6.56163 12.995 6.35847C12.9094 6.15531 12.7841 5.97131 12.6264 5.81727L11.8004 5.01227L11.8144 3.85727C11.8169 3.63693 11.7753 3.41831 11.6921 3.21427C11.6089 3.01023 11.4857 2.82488 11.3298 2.6691C11.174 2.51332 10.9886 2.39027 10.7845 2.30716C10.5804 2.22405 10.3618 2.18257 10.1414 2.18515L8.98817 2.19915Z" />
                            </g>
                          </svg>
                          24/7 expert support for domain queries
                        </li>
                        <li>
                          <svg
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.0603 5.37756C9.10105 5.4182 9.13337 5.46647 9.15543 5.51963C9.17748 5.57278 9.18883 5.62976 9.18883 5.68731C9.18883 5.74485 9.17748 5.80183 9.15543 5.85498C9.13337 5.90814 9.10105 5.95642 9.0603 5.99706L6.4353 8.62206C6.39466 8.6628 6.34638 8.69512 6.29323 8.71718C6.24008 8.73923 6.1831 8.75059 6.12555 8.75059C6.06801 8.75059 6.01103 8.73923 5.95787 8.71718C5.90472 8.69512 5.85644 8.6628 5.8158 8.62206L4.5033 7.30956C4.46263 7.26888 4.43036 7.22059 4.40834 7.16744C4.38633 7.11429 4.375 7.05733 4.375 6.99981C4.375 6.94228 4.38633 6.88532 4.40834 6.83217C4.43036 6.77902 4.46263 6.73073 4.5033 6.69006C4.54398 6.64938 4.59227 6.61711 4.64542 6.5951C4.69856 6.57308 4.75553 6.56175 4.81305 6.56175C4.87058 6.56175 4.92754 6.57308 4.98069 6.5951C5.03384 6.61711 5.08213 6.64938 5.1228 6.69006L6.12555 7.69368L8.4408 5.37756C8.48144 5.33681 8.52972 5.30449 8.58287 5.28243C8.63603 5.26038 8.69301 5.24902 8.75055 5.24902C8.8081 5.24902 8.86508 5.26038 8.91823 5.28243C8.97138 5.30449 9.01966 5.33681 9.0603 5.37756Z"
                              />
                              <path d="M8.98817 2.19915L8.1823 1.37315L8.80792 0.762397L9.35217 1.31977L10.1309 1.31015C10.468 1.30616 10.8025 1.36961 11.1147 1.49677C11.4269 1.62394 11.7106 1.81225 11.9489 2.05062C12.1873 2.289 12.3756 2.57264 12.5028 2.88485C12.63 3.19707 12.6934 3.53155 12.6894 3.86865L12.6807 4.6474L13.2372 5.19165C13.4782 5.42717 13.6697 5.7085 13.8005 6.01909C13.9312 6.32968 13.9986 6.66328 13.9986 7.00027C13.9986 7.33727 13.9312 7.67086 13.8005 7.98146C13.6697 8.29205 13.4782 8.57337 13.2372 8.8089L12.6798 9.35315L12.6894 10.1319C12.6934 10.469 12.63 10.8035 12.5028 11.1157C12.3756 11.4279 12.1873 11.7115 11.9489 11.9499C11.7106 12.1883 11.4269 12.3766 11.1147 12.5038C10.8025 12.6309 10.468 12.6944 10.1309 12.6904L9.35217 12.6816L8.80792 13.2381C8.5724 13.4792 8.29107 13.6707 7.98048 13.8015C7.66989 13.9322 7.33629 13.9996 6.9993 13.9996C6.6623 13.9996 6.32871 13.9322 6.01811 13.8015C5.70752 13.6707 5.42619 13.4792 5.19067 13.2381L4.64642 12.6808L3.86767 12.6904C3.53058 12.6944 3.19609 12.6309 2.88387 12.5038C2.57166 12.3766 2.28803 12.1883 2.04965 11.9499C1.81127 11.7115 1.62296 11.4279 1.4958 11.1157C1.36863 10.8035 1.30518 10.469 1.30917 10.1319L1.31792 9.35315L0.761421 8.8089C0.520394 8.57337 0.328874 8.29205 0.198116 7.98146C0.0673581 7.67086 0 7.33727 0 7.00027C0 6.66328 0.0673581 6.32968 0.198116 6.01909C0.328874 5.7085 0.520394 5.42717 0.761421 5.19165L1.3188 4.6474L1.30917 3.86865C1.30518 3.53155 1.36863 3.19707 1.4958 2.88485C1.62296 2.57264 1.81127 2.289 2.04965 2.05062C2.28803 1.81225 2.57166 1.62394 2.88387 1.49677C3.19609 1.36961 3.53058 1.30616 3.86767 1.31015L4.64642 1.3189L5.19067 0.762397C5.42619 0.52137 5.70752 0.32985 6.01811 0.199093C6.32871 0.0683346 6.6623 0.000976562 6.9993 0.000976562C7.33629 0.000976562 7.66989 0.0683346 7.98048 0.199093C8.29107 0.32985 8.5724 0.52137 8.80792 0.762397L8.1823 1.37315C8.02826 1.21546 7.84426 1.09016 7.6411 1.00461C7.43794 0.919062 7.21973 0.874992 6.9993 0.874992C6.77886 0.874992 6.56065 0.919062 6.35749 1.00461C6.15433 1.09016 5.97033 1.21546 5.8163 1.37315L5.0113 2.19915L3.8563 2.18515C3.63595 2.18268 3.41734 2.22428 3.2133 2.3075C3.00925 2.39071 2.8239 2.51386 2.66812 2.66972C2.51235 2.82558 2.38929 3.011 2.30618 3.21508C2.22308 3.41917 2.18159 3.6378 2.18417 3.85815L2.19817 5.0114L1.37217 5.81727C1.21448 5.97131 1.08918 6.15531 1.00363 6.35847C0.918086 6.56163 0.874016 6.77984 0.874016 7.00027C0.874016 7.22071 0.918086 7.43892 1.00363 7.64208C1.08918 7.84523 1.21448 8.02924 1.37217 8.18327L2.19817 8.98827L2.18417 10.1433C2.18171 10.3636 2.2233 10.5822 2.30652 10.7863C2.38973 10.9903 2.51289 11.1757 2.66875 11.3314C2.8246 11.4872 3.01002 11.6103 3.21411 11.6934C3.41819 11.7765 3.63683 11.818 3.85717 11.8154L5.01042 11.8014L5.8163 12.6274C5.97033 12.7851 6.15433 12.9104 6.35749 12.9959C6.56065 13.0815 6.77886 13.1256 6.9993 13.1256C7.21973 13.1256 7.43794 13.0815 7.6411 12.9959C7.84426 12.9104 8.02826 12.7851 8.1823 12.6274L8.9873 11.8014L10.1423 11.8154C10.3626 11.8179 10.5813 11.7763 10.7853 11.693C10.9893 11.6098 11.1747 11.4867 11.3305 11.3308C11.4862 11.175 11.6093 10.9895 11.6924 10.7855C11.7755 10.5814 11.817 10.3627 11.8144 10.1424L11.8004 8.98915L12.6264 8.18327C12.7841 8.02924 12.9094 7.84523 12.995 7.64208C13.0805 7.43892 13.1246 7.22071 13.1246 7.00027C13.1246 6.77984 13.0805 6.56163 12.995 6.35847C12.9094 6.15531 12.7841 5.97131 12.6264 5.81727L11.8004 5.01227L11.8144 3.85727C11.8169 3.63693 11.7753 3.41831 11.6921 3.21427C11.6089 3.01023 11.4857 2.82488 11.3298 2.6691C11.174 2.51332 10.9886 2.39027 10.7845 2.30716C10.5804 2.22405 10.3618 2.18257 10.1414 2.18515L8.98817 2.19915Z" />
                            </g>
                          </svg>
                          First-year free domain registration
                        </li>
                      </ul>
                      <a href="#" className="primary-btn5 black btn-hover">
                      Get Rook® Domains
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                        >
                          <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                        </svg>
                        <span style={{ top: "50.5px", left: "83.75px" }} />
                      </a>
                    </div>
                  </div>
                </div>
              
                <div
                  className="col-xl-4 col-md-6 wow animate fadeInRight"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
              tabIndex={0}
            >
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingRook;

import React, { useState, useEffect , Component} from 'react';
import { Link } from 'react-router-dom';



const BackgroundImg = () => {
  return (
    <div>
      {/* BACKGROUND IMAGE SECTION */}
      <div className="backimg">
        <img className="main_img" src="./images/background2.png" alt="Background" />
      </div>

      {/* CONTENT AFTER BACKGROUND IMAGE */}
      <div className="container booking-area first_form">
        <form className="row justify-content-center">
          <div className="col-lg-2 col-md-2 col-sm-4 mb-3">
            <input type="date" className="form-control" placeholder="Date" />
          </div>

          <div className="col-lg-2 col-md-2 col-sm-4 mb-3">
            <input type="date" className="form-control" placeholder="Date" />
          </div>

          <div className="col-lg-3 col-md-2 col-sm-8 mb-3">
            <select className="form-select">
              <option selected>Select Ride</option>
              <option value="lexus">Lexus</option>
              <option value="mercedes">Mercedes</option>
              <option value="defender">Defender</option>
              <option value="gwagon">G-Wagon</option>
              <option value="bmw">BMW</option>
            </select>
          </div>

          <div className="col-lg-3 col-md-2 col-sm-8 mb-3">
            <select className="form-select">
              <option selected>Select Price</option>
              <option value="70lakh">70 Lakhs</option>
              <option value="75lakh">75 Lakhs</option>
              <option value="90lakhs">90 Lakhs</option>
              <option value="gwagon">G-Wagon</option>
              <option value="85lakhs">85 Lakhs</option>
            </select>
          </div>

          <div className="col-lg-2 col-md-2 col-sm-5 col-4 mb-3 justify-content-center">
            <button type="submit" className="main-btn rounded-2 px-lg-3 jus">
              Check
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="about_section" style={{ marginTop: "12%" }}>
      <div className="container">
        <div className="row flex-lg-row flex-column-reverse">
          <div className="cont col-lg-6 text-center text-lg-start" data-aos="fade-up-right" data-aos-easing="linear" data-aos-duration="800">
            <h1 className="head1 text-white">
              Welcome to <span className="span1"> Exoticarz</span>,
              <br className="d-none d-lg-block" /> where luxury meets the road.
            </h1>
            <br />
            <p className="p1 text-white">
              We offer an exclusive collection of high-end vehicles designed to elevate your driving experience. Whether you're looking to cruise in style for a special occasion or make a statement on the road.
            </p>
            <p className="p1 text-white">
              With top-tier customer service and a seamless rental process, we ensure that your journey is as thrilling as the destination. Choose Exoticarz and drive your dream car today.
            </p>
            <Link to="/" className="main-btn mt-4 ps-3 pe-3">Explore</Link>
          </div>
          <div className="welcome col-lg-6 mb-4 mb-lg-0 ps-lg-4 text-center" data-aos="fade-up-left" data-aos-easing="linear" data-aos-duration="800">
            <img src="https://plus.unsplash.com/premium_photo-1661277623135-224e67c9ff81?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="500" className="img-fluid" alt="about" />
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="service_section" style={{ marginTop: "20%" }}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 section-title text-center mb-5">
            <h4 className="heading4 text-white">We Are here For You</h4>
            <h2 style={{ marginBottom: "7%" }} className="heading2 text-white"><b>Our Awesome Services</b></h2>
          </div>
        </div>
        <div className="row align-items-center service-item-section">
          <div className="col-lg-7 p-lg-0 col-sm-12 ">
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="vehicleinsurance" role="tabpanel">
                <img src="./images/services1.jpeg" className="img-fluid" alt="Vehicle Insurance" data-aos="fade-down-right" data-aos-duration="1000" data-aos-offset="80" data-aos-easing="linear" />
              </div>
              <div className="tab-pane fade" id="airport" role="tabpanel">
                <img src="./images/services2.jpeg" className="img-fluid" alt="Airport Facilities" data-aos="fade-down-right" data-aos-duration="1000" data-aos-offset="80" data-aos-easing="linear" />
              </div>
              <div className="tab-pane fade" id="wedding" role="tabpanel">
                <img src="./images/services3.jpeg" className="img-fluid" alt="Wedding Cars" data-aos="fade-down-right" data-aos-duration="1000" data-aos-offset="80" data-aos-easing="linear" />
              </div>
              <div className="tab-pane fade" id="support" role="tabpanel">
                <img src="./images/services4.jpeg" className="img-fluid" alt="24x7 Support" data-aos="fade-down-right" data-aos-duration="1000" data-aos-offset="80" data-aos-easing="linear" />
              </div>
            </div>
          </div>
          <div className="col-lg-5 position-relative" data-aos="fade-down-left" data-aos-duration="1000" data-aos-easing="linear">
            <div className="service-menu-area">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li style={{ backgroundColor: "transparent" }} className="nav-item">
                  <a className="nav-link active" id="vehicleinsurance-tab" data-bs-toggle="tab" href="#vehicleinsurance" role="tab" aria-controls="vehicleinsurance" aria-selected="true">
                    <span className="service-icon">
                      <img src="./images/insurance.png" alt="Insurance" />
                    </span>
                    <h5 className="text-white" style={{ backgroundColor: "transparent" }}>Insurance</h5>
                    <p className="text-white" style={{ backgroundColor: "transparent" }}>Drive securely with our <span>Insurance</span></p>
                  </a>
                </li>
                <li style={{ backgroundColor: "transparent" }} className="nav-item">
                  <a className="nav-link" id="airport-tab" data-bs-toggle="tab" href="#airport" role="tab" aria-controls="airport" aria-selected="false">
                    <span className="service-icon">
                      <img src="./images/airport.jpeg" alt="Airport" />
                    </span>
                    <h5 className="text-white" style={{ backgroundColor: "transparent" }}>Airport Facilities</h5>
                    <p className="text-white" style={{ backgroundColor: "transparent" }}>Convenient <span style={{ backgroundColor: "transparent" }}>Airport Rides </span> Always On-Time</p>
                  </a>
                </li>
                <li style={{ backgroundColor: "transparent" }} className="nav-item">
                  <a className="nav-link" id="wedding-tab" data-bs-toggle="tab" href="#wedding" role="tab" aria-controls="wedding" aria-selected="false">
                    <span className="service-icon">
                      <img src="./images/wedding.jpeg" alt="Wedding" />
                    </span>
                    <h5 className="text-white" style={{ backgroundColor: "transparent" }}>Wedding Cars</h5>
                    <p className="text-white" style={{ backgroundColor: "transparent" }}><span style={{ backgroundColor: "transparent" }}>Wedding Cars</span> To make your entrance lovable and unforgettable.</p>
                  </a>
                </li>
                <li style={{ backgroundColor: "transparent" }} className="nav-item">
                  <a className="nav-link" id="support-tab" data-bs-toggle="tab" href="#support" role="tab" aria-controls="support" aria-selected="false">
                    <span className="service-icon">
                      <img src="./images/support.jpeg" alt="Support" />
                    </span>
                    <h5 className="text-white" style={{ backgroundColor: "transparent" }}>24x7 Support</h5>
                    <p className="text-white" style={{ backgroundColor: "transparent" }}><span style={{ backgroundColor: "transparent" }}>24x7 Support</span> Whether it's day or night, we're ready to meet your needs.</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BackgroundImageFixed = () => {
  return (
    <section id="back_fixed" className="back_section">
      <div className="container-fluid">
        <div className="back_content">
          <h2
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="heading2 blur_head text-center "
          >
            <b>Why Choose <span className="bg_blur_span">Exoticarz</span>?</b>
          </h2>
          <h4
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="heading4 text-center "
          >
            Premium Roadside Assistance
          </h4>
          <p
            className="para text-center"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            When you choose us, you're selecting a brand that prioritizes luxury, performance, and customer satisfaction. Our meticulously curated fleet features the latest models of the world's most coveted vehicles, ensuring you drive away in a car that matches your style and aspirations. We pride ourselves on delivering top-tier service, with a seamless booking process, flexible rental options, and personalized support from start to finish.
          </p>
          <ul className="back_logo text-center">
            <li className="lg">
              <a className="i_logo" href="#">
                <i className="finger_logo fa-solid fa-fingerprint fa-2xl text-white pt-5"></i>
              </a>
            </li>
            <br />
            <a
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="linear"
              data-aos-duration="1000"
              className="back_anchor"
              href="slider.html"
            >
              <b className="exp-logo text-center">Explore</b>
            </a>
          </ul>
        </div>
      </div>
    </section>
  );
};



const TeamSection = () => {
  return (
    <section id="team" className="team_section" style={{ marginBottom: "20%" }} data-aos="zoom-out-down" data-aos-easing="linear" data-aos-duration="1000">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 section-title text-center mb-5">
            <h4 className="heading4 text-white">Explore The Exorticity</h4>
            <h2 className="heading2 text-white"><b>Our Special Brands</b></h2>
          </div>
        </div>
        <div className="row">
          {/* 1st Card */}
          <div className="team_card col-lg-3 col-md-6 mb-4">
            <div className="card p-0 rounded-3">
              <Link to="/"><img src="./images/lambo.jpeg" className="img-fluid rounded-3" alt="Lamborghini" /></Link>
              <div className="team-info">
                <h5>Lamborghini</h5>
                <ul className="social-network">
                  <li><a href="https://www.instagram.com/lamborghini/"><i className="fa-brands fa-instagram"></i></a></li>
                  <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2nd Card */}
          <div className="team_card col-lg-3 col-md-6 mb-4">
            <div className="card p-0 rounded-3">
              <Link to="/"><img src="./images/merc.jpeg" className="img-fluid rounded-3" alt="Mercedes" /></Link>
              <div className="team-info">
                <h5>Mercedes</h5>
                <ul className="social-network">
                  <li><a href="https://www.instagram.com/mercedesbenz/"><i className="fa-brands fa-instagram"></i></a></li>
                  <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* 3rd Card */}
          <div className="team_card col-lg-3 col-md-6 mb-4">
            <div className="card p-0 rounded-3">
              <Link to="/"><img src="./images/audi.jpeg" className="img-fluid rounded-3" alt="Audi" /></Link>
              <div className="team-info">
                <h5>Audi</h5>
                <ul className="social-network">
                  <li><a href="https://www.instagram.com/audi/"><i className="fa-brands fa-instagram"></i></a></li>
                  <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* 4th Card */}
          <div className="team_card col-lg-3 col-md-6 mb-4">
            <div className="card p-0 rounded-3">
              <Link to="/"><img src="./images/mclaren2.jpeg" className="img-fluid rounded-3" alt="McLaren" /></Link>
              <div className="team-info">
                <h5>Mclaren</h5>
                <ul className="social-network">
                  <li><a href="https://www.instagram.com/mclaren/"><i className="fa-brands fa-instagram"></i></a></li>
                  <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


const PicksSection = () => {
  return (
    <section
      style={{ marginBottom: "20%" }}
      id="picks"
      className="picks_section"
      data-aos="zoom-out-up"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <div className="container-fluid">
        <div className="row">
          <div className="picks_main col-sm-12 section-title text-center mb-5">
            <h4 className="heading4 text-white">Handpicked Cars, Just for You</h4>
            <h2 className="heading2 text-white">
              <b>Top Picks</b>
            </h2>
          </div>
        </div>
        <div className="pics_card row justify-content-evenly">
          {/* 1st Card */}
          <div className="card_picks col-lg-3 col-md-6 mb-5">
            <div className="card p-0 rounded-3">
              <img
                src="https://images.unsplash.com/photo-1568074532099-1e0dc3206a74?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="img-fluid rounded-3"
                alt="Lexus"
              />
              <div className="car_info">
                <h2 className="text-center mt-3">Lexus</h2>
                <h5 className="text-center">Sedan</h5>
                <p className="about text-center mt-5 ps-2 pe-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque consectetur, distinctio facere dignissimos quia quas! Facilis laborum sequi eius ullam!
                </p>
                <Link to="/rent" className="main-btn d-flex justify-content-center">Book Now</Link>
              </div>
            </div>
          </div>

          {/* 2nd Card */}
          <div className="card_picks col-lg-3 col-md-6 mb-4">
            <div className="card p-0 rounded-3">
              <img
                src="https://images.unsplash.com/photo-1634636208509-63bcd2a1b13f?q=80&w=1817&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="img-fluid rounded-3"
                alt="G-Wagon"
              />
              <div className="car_info">
                <h2 className="text-center mt-3">G-Wagon</h2>
                <h5 className="text-center">SUV</h5>
                <p className="about text-center mt-5 ps-2 pe-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque consectetur, distinctio facere dignissimos quia quas! Facilis laborum sequi eius ullam!
                </p>
                <Link to="/rent" className="main-btn d-flex justify-content-center">Book Now</Link>
              </div>
            </div>
          </div>

          {/* 3rd Card */}
          <div className="card_picks col-lg-3 col-md-6 mb-4">
            <div className="card p-0 rounded-3">
              <img src="./images/mercedes.jpeg" className="img-fluid rounded-3" alt="Mercedes" />
              <div className="car_info">
                <h2 className="text-center mt-3">Mercedes</h2>
                <h5 className="text-center">Sedan</h5>
                <p className="about text-center mt-5 ps-2 pe-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque consectetur, distinctio facere dignissimos quia quas! Facilis laborum sequi eius ullam!
                </p>
                <Link to="/rent" className="main-btn d-flex justify-content-center">Book Now</Link>
              </div>
            </div>
          </div>

          {/* 4th Card */}
          <div className="card_picks col-lg-3 col-md-6 mb-4">
            <div className="card p-0 rounded-3">
              <img
                src="https://images.unsplash.com/photo-1696233016084-30c8345d85ff?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="img-fluid rounded-3"
                alt="Rolls Royce"
              />
              <div className="car_info">
                <h2 className="text-center mt-3">Rolls Royce</h2>
                <h5 className="text-center">Sedan</h5>
                <p className="about text-center mt-5 ps-2 pe-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque consectetur, distinctio facere dignissimos quia quas! Facilis laborum sequi eius ullam!
                </p>
                <Link to="/rent" className="main-btn d-flex justify-content-center">Book Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


// class AOSlib extends Component {
//   componentDidMount() {
//     // Initialize AOS after the component mounts
//     AOS.init({
//       duration: 1000, // Customize duration, delay, etc.
//     });
//   }

//   render() {
//     return (
//       <div data-aos="fade-up">
//         {/* <h1>Hello, World!</h1> */}
//       </div>
//     );
//   }
// }




// const Slider = () => {
//   const [activeCard, setActiveCard] = useState(0);  // Default active card index is 0

//   const handleCardClick = (index) => {
//     setActiveCard(index);
//   };

//   const handleNext = () => {
//     setActiveCard((prev) => (prev + 1) % 5);  // Loop to the first card after the last one
//   };

//   const handlePrev = () => {
//     setActiveCard((prev) => (prev - 1 + 5) % 5);  // Loop to the last card before the first one
//   };

//   return (
//     <div>
//       <div className="row">
//         <div className="wrap col-sm-12 text-center mb-5">
//           <h4 className="heading4 text-white">Premium cars, prime savings</h4>
//           <h2 className="heading2 text-white">
//             <b>Only on <span className="wrap_span">Exoticarz</span></b>
//           </h2>
//         </div>
//       </div>

//       {/* Slider Wrapper */}
//       <div className="wrapper1">
//         {/* Card 1 */}
//         <div
//           className={`wrap_card ${activeCard === 0 ? 'active' : ''}`}
//           onClick={() => handleCardClick(0)}
//         >
//           <img
//             src="https://images.unsplash.com/photo-1568074532099-1e0dc3206a74?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="BMW Frozen M4"
//             className="img-fluid rounded-3"
//           />
//           <h3>BMW Frozen M4</h3>
//           <button className="wrap-btn">Check Out</button>
//         </div>

//         {/* Card 2 */}
//         <div
//           className={`wrap_card ${activeCard === 1 ? 'active' : ''}`}
//           onClick={() => handleCardClick(1)}
//         >
//           <img
//             src="https://images.unsplash.com/photo-1634636208509-63bcd2a1b13f?q=80&w=1817&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="Mercedes CLA 250"
//             className="img-fluid rounded-3"
//           />
//           <h3>Mercedes CLA 250</h3>
//           <button className="wrap-btn">Check Out</button>
//         </div>

//         {/* Card 3 */}
//         <div
//           className={`wrap_card ${activeCard === 2 ? 'active' : ''}`}
//           onClick={() => handleCardClick(2)}
//         >
//           <img
//             src="https://images.unsplash.com/photo-1600563771624-9757a59335ef?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="Lexus IS350"
//             className="img-fluid rounded-3"
//           />
//           <h3>Lexus IS350</h3>
//           <button className="wrap-btn">Check Out</button>
//         </div>

//         {/* Card 4 */}
//         <div
//           className={`wrap_card ${activeCard === 3 ? 'active' : ''}`}
//           onClick={() => handleCardClick(3)}
//         >
//           <img
//             src="https://images.unsplash.com/photo-1607560127677-3d5d70886e70?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="Mercedes G-Wagon"
//             className="img-fluid rounded-3"
//           />
//           <h3>Mercedes G-Wagon</h3>
//           <button className="wrap-btn">Check Out</button>
//         </div>

//         {/* Card 5 */}
//         <div
//           className={`wrap_card ${activeCard === 4 ? 'active' : ''}`}
//           onClick={() => handleCardClick(4)}
//         >
//           <img
//             src="https://images.unsplash.com/photo-1600564696673-5ba0183c40b0?q=80&w=2745&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="Dodge Demon"
//             className="img-fluid rounded-3"
//           />
//           <h3>Dodge Demon</h3>
//           <button className="wrap-btn">Check Out</button>
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <button className="prev-btn" onClick={handlePrev}>
//         Prev
//       </button>
//       <button className="next-btn" onClick={handleNext}>
//         Next
//       </button>
//     </div>
//   );
// };






const FrontPage = () => {
  return (
    <div>
      <BackgroundImg/>
      <AboutSection />
      <ServicesSection />
      <BackgroundImageFixed />
      <TeamSection/>
      <PicksSection/>
      {/* <Slider/> */}
      {/* <AOSlib/> */}
    </div>
  );
};

export default FrontPage;

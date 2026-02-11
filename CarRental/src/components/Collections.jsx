import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const TogglerSwitch = () => {
  const [isGreenCarsVisible, setIsGreenCarsVisible] = useState(false);

  // Handle the toggle switch
  const handleToggle = () => {
    setIsGreenCarsVisible(!isGreenCarsVisible);
  };
  return (
    <>
      {/* switch to toggle */}
      <div className="togglerSwitch">
        <label htmlFor="toggleGas">Burn The Fuels</label>
        <label className="switch">
          <input
            type="checkbox"
            id="toggleGas"
            checked={isGreenCarsVisible}
            onChange={handleToggle}
          />
          <span className="slider" />
        </label>
        <label htmlFor="toggleGas">GoGreen</label>
      </div>
      <section className="Collections" id="luxury">
        <h1>
          Explore Our{" "}
          <span className={isGreenCarsVisible ? "luxGrn" : "lux"}>
            {isGreenCarsVisible ? "Green" : "Luxury"}
          </span>{" "}
          Collection
        </h1>
      </section>
      <main className="Cars" id={isGreenCarsVisible ? "greenEV" : "gas"}>
        {!isGreenCarsVisible ? (
          <>
            <div className="card carCards" style={{ width: "20rem" }} data-aos="fade-left">
              <img src="images/maybach_slide.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h2>Mercedes Benz</h2>
                <h4>GLS 550D</h4>
                <p className="card-text">
                  Luxury SUV that combines opulent design with powerful
                  performance while offering unmatched comfort and advanced
                  technology
                </p>
                <div className="checkkar">
                  <Link to="/cars/mercedes-gls">
                    <button className="button-50" role="button">
                      Check Out
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="card carCards"
              style={{ width: "20rem" }}
              data-aos="fade-left"
            >
              <img
                src="images/audi_r8_slide.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h2>Audi Racing</h2>
                <h4>RS-8</h4>
                <p className="card-text">
                  High-performance sports car that blends stunning design with
                  razor-sharp handling and exhilarating power, making it a true
                  driver's machine.
                </p>
                <div className="checkkar">
                  <Link to="/cars/audi-rs8">
                    <button className="button-50" role="button">
                      Check Out
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="card carCards"
              style={{ width: "20rem" }}
              data-aos="fade-left"
            >
              <img src="images/bmwCar.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h2>BMW </h2>
                <h4>F30 X-drive</h4>
                <p className="card-text">
                  Dynamic luxury coupe that delivers thrilling performance with
                  its powerful V8 engine, while offering refined comfort and
                  advanced technology.
                </p>
                <div className="checkkar">
                  <Link to="/cars/bmw-f30">
                    <button className="button-50" role="button">
                      Check Out
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="card carCards"
              style={{ width: "20rem" }}
              data-aos="fade-left"
            >
              <img
                src="images/porsche911.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h2>Porsche</h2>
                <h4>911 GT3</h4>
                <p className="card-text">
                  A precision-engineered sports car designed for the track,
                  offering exhilarating performance with its high-revving engine
                  and race-inspired handling
                </p>
                <div className="checkkar">
                  <Link to="/cars/porsche-911">
                    <button className="button-50" role="button">
                      Check Out
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="card carCards"
              style={{ width: "20rem" }}
              data-aos="fade-left"
            >
              <img
                src="images/bentley.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h2>Bentley</h2>
                <h4>Flying-Spur 500</h4>
                <p className="card-text">
                  Luxurious grand tourer that combines exquisite craftsmanship
                  with powerful performance, offering unparalleled comfort and
                  sophistication
                </p>
                <div className="checkkar">
                  <Link to="/cars/bentley-flying-spur">
                    <button className="button-50" role="button">
                      Check Out
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="card carCards"
              style={{ width: "20rem" }}
              data-aos="fade-left"
            >
              <img
                src="images/maserati4k.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h2>Maserati</h2>
                <h4>Quattroporte Trofeo</h4>
                <p className="card-text">
                  A high-performance luxury sedan that merges Italian elegance
                  with a ferocious V8 engine, delivering a thrilling and refined
                  driving experience
                </p>
                <div className="checkkar">
                  <Link to="/cars/maserati-quattroporte">
                    <button className="button-50" role="button">
                      Check Out
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="card carCards"
              style={{ width: "20rem" }}
              data-aos="fade-left"
            >
              <img src="images/lexus2.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h2>Lexus</h2>
                <h4>LX-570 Grande</h4>
                <p className="card-text">
                  A rugged yet luxurious SUV, offering powerful off-road
                  capability combined with premium comfort and advanced
                  features.
                </p>
                <div className="checkkar">
                  <Link to="/cars/lexus-lx570">
                    <button className="button-50" role="button">
                      Check Out
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="card carCards"
              style={{ width: "20rem" }}
              data-aos="fade-left"
            >
              <img
                src="images/dodge_slide.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h2>Dodge</h2>
                <h4>Challenger SRT Hellcat </h4>
                <p className="card-text">
                  An iconic muscle car, known for its aggressive design and
                  immense horsepower, delivering a raw and thrilling driving
                  experience.
                </p>
                <div className="checkkar">
                  <Link to="/cars/dodge-challenger">
                    <button className="button-50" role="button">
                      Check Out
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="card carCards"
              style={{ width: "20rem" }}
              data-aos="fade-left"
            >
              <img src="images/rr1.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h2>Rolls Royce</h2>
                <h4>Cullinan Series-ll</h4>
                <p className="card-text">
                  The epitome of luxury in an SUV, combining unmatched opulence
                  with commanding presence and effortless performance
                </p>
                <div className="checkkar">
                  <Link to="/cars/rolls-royce-cullinan">
                    <button className="button-50" role="button">
                      Check Out
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div id="grnCars">
            <section className="ev" id="ev">
              <div className="container evcont">
                <div className="elogo">
                  <img
                    className="eeimg"
                    src="images/logo-removebg.png"
                    alt=""
                    height="100px"
                    style={{ marginLeft: "-15% !important" }}
                  />
                </div>
                <div className="eelogo">
                  <h1 style={{ color: "#39FF14" }}>.ev</h1>
                </div>
              </div>
            </section>
            <main className="Cars1" id="greenEV">
              <div
                className="card carCards"
                style={{ width: "20rem" }}
                data-aos="fade-left"
              >
                <img
                  src="images/modelX.webp"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h2>Tesla</h2>
                  <h4>Model-X</h4>
                  <p className="card-text">
                    An all-electric SUV renowned for its futuristic design,
                    impressive acceleration, and advanced autonomous driving
                    features
                  </p>
                  <div className="checkkar">
                    <Link to="/cars/tesla-model-x">
                      <button className="button-50" role="button">
                        Check Out
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="card carCards"
                style={{ width: "20rem" }}
                data-aos="fade-left"
              >
                <img
                  src="images/bmwi8.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h2>BMW</h2>
                  <h4>i8</h4>
                  <p className="card-text">
                    The BMW i8 is a plug-in hybrid sports car with a futuristic
                    design, combining exhilarating performance with eco-friendly
                    technology.
                  </p>
                  <div className="checkkar">
                    <Link to="/cars/bmw-i8">
                      <button className="button-50" role="button">
                        Check Out
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="card carCards"
                style={{ width: "20rem" }}
                data-aos="fade-left"
              >
                <img
                  src="images/cyber.webp"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h2>Tesla</h2>
                  <h4>Cybertruck</h4>
                  <p className="card-text">
                    A futuristic, all-electric design with an ultra-durable
                    exoskeleton, impressive towing capacity, and cutting-edge
                    technology, making it both resilient and versatile.
                  </p>
                  <div className="checkkar">
                    <Link to="/cars/tesla-cybertruck">
                      <button className="button-50" role="button">
                        Check Out
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        )}
      </main>
    </>
  );
};
export default TogglerSwitch;

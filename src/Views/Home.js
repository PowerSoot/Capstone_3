import React from "react";
import { Navbar } from "./Navbar";

export function Home() {
  return (
    <>
      <header>
        {<img src=" ss.ico" />}

        <Navbar />
      </header>
      <div>
        <main className="container">
          <article className="border border-5">
            <h3 className="text-center">WELCOME TO PARADISE PARKERS</h3>
            <p className="text-info text-center"></p>
            <p className="text-info text-center"></p>
            <div className="row">
              <div className="col bg-black">
                <h2>VIP Rewards Plus</h2>
                <ul className="padding list-group">
                  <li className="list-group-item">
                    Exclusive discounts and promotions
                  </li>
                  <li className="list-group-item">
                    Access to premium parking spaces
                  </li>
                  <li className="list-group-item">
                    Special offers and rewards
                  </li>
                </ul>
              </div>
              <div className="col bg-dark">
                <h2>Aviation Services</h2>
                <ul className="padding list-group">
                  <li className="list-group-item">Aircraft fueling service</li>
                  <li className="list-group-item">Maintenance and Repairs</li>
                </ul>
              </div>
              <div className="col bg-black">
                <h2>Customer Care</h2>
                <ul className="padding list-group">
                  <li className="list-group-item">24/7 customer support</li>
                  <li className="list-group-item">Concierge services</li>
                  <li className="list-group-item">Personalized attention</li>
                </ul>
              </div>
            </div>
            <br />
            <h2>Why Choose Us?</h2>

            <br />
            <ul className="list-group">
              <li className="list-group-items">
                <span1>Security:</span1>
              </li>
              <li className="list-group-items">
                <span1>Premium Facilities:</span1>
              </li>
              <li className="list-group-items">
                <span1>Customer Care:</span1>
              </li>
              <li className="list-group-items">
                <span1>Aviation Services:</span1>
                <u>
                  Fueling, maintenance, and secure hangars for your aircraft.
                </u>
              </li>
            </ul>
          </article>
          <br />

          <div className="card">
            {
              <img
                className="card-img-top"
                width="50px"
                height={211}
                src="assets/images/7.png"
              />
            }
            <div className="card-body">
              <h3 className="card-title" />
            </div>
            <div className="row bg-dark text-endheading-3">
              <div
                className="card col text-end bg-black brain text-white padding-5"
                id="mixin-example"
              >
                <p>
                  "Where Your Vehicle's Stay is a Joyride"
                  <br />
                  "More than Parking, It’s VIP Care"
                  <br />
                  "Your Vehicle's Home Away from Home"
                  <br />
                </p>
              </div>
              <div className="col container brains brain2 heading">
                <div className="card container">
                  <div className="card-body bg-black">
                    <h1 className="text-end pullUp text-end text-info">
                      INDOOR
                    </h1>
                    <img
                      alt="ParkingGarage"
                      className="card-img-top"
                      src="4.jpg"
                    />
                    <a href="cat.html"></a>
                  </div>
                  <a href="cat.html"></a>
                </div>
                <a href="cat.html"></a>
              </div>
              <a href="cat.html"></a>
              <div className="col bg-black brains brain2">
                <a href="cat.html"></a>
                <div className="card container text-shadow">
                  <a href="cat.html"></a>
                  <div className="card-body bg-black">
                    <a href="cat.html">
                      <h1 className="text-end text-info text-end border-border">
                        OUTDOOR
                      </h1>
                      <img
                        alt="ParkingGarage"
                        className="card-img-top"
                        src="11.jpg"
                      />
                    </a>
                    <a href="cat.html">
                      <button className="button" id="mixin-button">
                        ClICK HERE
                      </button>
                    </a>
                  </div>
                  <a href="cat.html"></a>
                </div>
                <a href="cat.html"></a>
              </div>
              <a href="cat.html"></a>
              <div className="row bg-black brains brain2">
                <a href="cat.html"></a>
                <div className="card container padding-3">
                  <a href="cat.html"></a>
                  <div className="card-body bg-secondary text-info container">
                    <a href="cat.html">
                      <h1 className="text-info text-end">SECURITY</h1>
                      <img
                        alt="ParkingGarage"
                        className="card-img-top container"
                        height="200px"
                        width="100%"
                        src="3.png"
                      />
                    </a>
                    <a href="cat.html"></a>
                  </div>
                  <a href="cat.html"></a>
                </div>
                <a href="cat.html"></a>
              </div>
              <a href="cat.html">
                <h3 className="card-title text-info">
                  Meet Our Newest Team Member
                </h3>
                Join us in welcoming Keroppi,
                <br /> our new parking guru!
                <br /> He is ready to take parking to the next level. <br />
              </a>
            </div>
            <a href="cat.html">
              <button
                className="button btn-close bg-info border border-dark"
                data-bs-dismiss="alert"
              />
            </a>
          </div>
          <a href="cat.html"></a>
        </main>
        <a href="cat.html"></a>
      </div>
    </>
  );
}

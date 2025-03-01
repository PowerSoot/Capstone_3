import React from "react";
import { Navbar } from "./Navbar";
export function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div>
        <main className="container">
          <article className="border border-5">
            <h2 className="card-title text-info">
              Paradise Parking - Your Ultimate Parking Solution
            </h2>
            <div className="row">
              <div className="col bg-black">
                <h2>VIP Rewards Plus</h2>
                <ul className="padding list-group">
                  <li className="list-group-item">
                    Exclusive discounts and promotions
                  </li>
                  <li className="list-group-item">Premium Parking</li>
                  <li className="list-group-item">
                    Special offers and rewards
                  </li>
                </ul>
              </div>
              <div className="col bg-dark">
                <h2>Aviation Services</h2>
                <ul className="padding list-group">
                  <li className="list-group-item">Aircraft</li>
                  <li className="list-group-item">
                    Convenient fueling services
                  </li>
                  <li className="list-group-item">Repair services</li>
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
            <br /> <h2 class="align">Why Choose Us?</h2>
            <br />
            <ul className="list-group">
              <li className="list-group-items">
                <span1>Security:</span1>
                24/7 customer support
              </li>
              <li className="list-group-items">
                <span1>Premium Facilities:</span1>
                Concierge services
              </li>
              <li className="list-group-items">
                <span1>Customer Care:</span1>
                Personalized attention
              </li>
              <li className="list-group-items">
                <span1>Aviation Services:</span1>
              </li>
            </ul>
          </article>
          <br />

          <div className="card">
            <img
              className="card-img-top"
              width="50px"
              height={300}
              src="assets\images\4.png"
            />
            <div className="card-body"></div>
            <div className="row">
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
                <p>
                  Introducing "Stow and Go Short-Term Parking". Experience
                  efficiency and top-notch service at any one of our parking
                  facilities. At Paradise Parkers, our easy access lots and
                  swift in-and-out gate access guarantees your short-term
                  parking is stress-free. Ready to park smart and travel easy?
                  Choose Paradise Parkers for unmatched vehicle care and
                  convenience.
                </p>
              </div>
              <div className="col container">
                <div className="card container">
                  <div className="card-body bg-black">
                    <h1 className="text-end text-end text-info">INDOOR</h1>
                    <img
                      alt="ParkingGarage"
                      className="card-img-top"
                      src="assets\images\parkinggarage.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2>Rate this parking space!</h2>
          <form className="container text-center" style={{ marginTop: 20 }}>
            <div>
              <input id="mad-face" type="radio" name="rating" />
              <label htmlFor="mad-face" style={{ fontSize: 30 }}>
                😡
              </label>
            </div>
            <div>
              <input id="sad-face" type="radio" name="rating" />
              <label htmlFor="sad-face" style={{ fontSize: 30 }}>
                😟
              </label>
            </div>
            <div>
              <input id="happy-face" type="radio" name="rating" />
              <label htmlFor="happy-face" style={{ fontSize: 30 }}>
                😊
              </label>
            </div>
            <div>
              <input id="really-happy-face" type="radio" name="rating" />
              <label htmlFor="really-happy-face" style={{ fontSize: 30 }}>
                😁
              </label>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}

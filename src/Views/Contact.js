import React from "react";
import { Navbar } from "./Navbar";

export function Contact() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <h1>Contact Us</h1>
      <div>tel: 555-555-5555 OR email 9vS6M@example.com</div>
      <br />
      <main>
        <h2>We would love to hear from you!</h2>
        <p>
          Need to speak to us? Fill out the form below to schedule an
          appointment to talk to one of our team members.
        </p>

        <form onsubmit="handleSubmit(event)">
          <label for="name">Name:</label>
          <input
            className="text-primary"
            required
            type="text"
            placeholder="John Doe"
            id="name"
          />
          <br />
          <br />
          <label for="phone">Phone:</label>
          <input
            className="text-primary"
            required
            type="tel"
            placeholder="123-456-7890"
            id="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          />
          <br />
          <br />
          <label for="datetime-local">Date:</label>
          <input
            className="text-secondary"
            required
            type="date"
            id="date"
            name="date"
          />
          <br />
          <br />
          <label for="time">Time:</label>
          <input className="text-secondary" id="time" type="time" />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
        <div id="outputTag"></div>
      </main>
      <footer className="pt-4">
        <div className="container rounded border border-2 border-black">
          <div className="col-md- border border-3 border-info">
            <p className="text-center m-2">
              <i>"Paradise Parkers is the best place to park your car!"</i>
            </p>
            <p className="text-center m-2">
              <i>"We had a great experience with Paradise Parkers!"</i>
            </p>
            <p className="text-center m-2">
              <i>
                "I highly recommend Paradise Parkers to anyone looking for
                parking!"
              </i>
            </p>
          </div>
          <section>&copy; 2023 Paradise Parkers All rights reserved.</section>
        </div>
      </footer>
    </>
  );
}

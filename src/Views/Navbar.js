import React from "react";
import { Link } from "react-router";

export default Navbar;

export function Navbar() {
  return (
    <nav>
      PARADISE PARKING
      {<img src=" assets\images\header1_cr4.png" />}
      <Link to="/home">Home </Link>
      <Link to="/about">About </Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

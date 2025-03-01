import React from "react";
import { Link } from "react-router";

export function Navbar() {
  return (
    <nav>
      <img src="assets\images\header1_cr4.png" alt="parking" />
      <Link to="/home">Home </Link>
      <Link to="/about">About </Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

import React from "react";
import { Navbar } from "./Navbar";

export function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="card">
                <div class="card-body"></div>
              </div>
            </div>

            <div class="col">
              <div class="card">
                <div class="card-body"></div>
              </div>
            </div>

            <div class="col">
              <div class="card">
                <div class="card-body"></div>
              </div>
            </div>
          </div>
        </div>
        <h2> This is home</h2>
      </main>
    </>
  );
}

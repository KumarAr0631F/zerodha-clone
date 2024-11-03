import React from "react";

function Hero() {
  return (
    <div className="container mt-5 ">
      <div className="row text-center">
        <h1>Technology</h1>
        <h3 className="text-muted mt-4">
          Sleek, modern and intuitive trading platforms
        </h3>
        <p className="mt-4">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offering{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;

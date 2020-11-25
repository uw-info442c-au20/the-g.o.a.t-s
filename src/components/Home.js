import React from "react";
import logo from "../assets/logo.svg";
// import { Card } from "react-bootstrap";
import carouselImage1 from "../assets/home/carousel1.png";

const Home = () => {
  return (
    <main>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={carouselImage1} alt="First slide" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Stopping sex trafficking takes all of us</h5>
              <p>Sanctuary invites you to this community</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src={carouselImage1}
              alt="Second slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Stopping sex trafficking takes all of us</h5>
              <p>Sanctuary invites you to this community</p>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={carouselImage1} alt="Third slide" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Stopping sex trafficking takes all of us</h5>
              <p>Sanctuary invites you to this community</p>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <img className="App-logo" src={logo} alt="React Logo" />
    </main>
  );
};

export default Home;

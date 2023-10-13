import React from "react";
import "./Home.css";
import Product from "../Product/Product";

export default function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4c5sbr_uRjV0gwPxWXVI5mt1yE0V-MPTbSR-oT0FzFcK8p302hbsydXeHk-_BNo9bnOU&usqp=CAU"
            alt="home__page__banner"
            className="home__image"
          />
          <div className="home__row">
            <Product />
            <Product />
          </div>
          <div className="home__row">
            <Product />
            <Product />
            <Product />
          </div>
          <div className="home__row">
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}

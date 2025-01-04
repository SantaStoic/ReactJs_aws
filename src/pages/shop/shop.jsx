import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import home from "./home.png";
export const Shop = () => {
  return (
    <header>
      <div className="shop">
        <div className="shopTitle">
          <h1>SneaKer & Shop</h1>
        </div>
        <section className="home" id="home">
          <div className="home-img container">
            <img src={home} alt="Home" />
          </div>
        </section>

        <div className="products">
          {PRODUCTS.map((product) => (
            <Product data={product} />
          ))}
        </div>
      </div>
    </header>
  );
};

import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61hpLvP5-zL._SX3000_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="1001"
            title="Fire TV Stick with Alexa Voice Remote (inlcudes TV controls), HD
          streaming device"
            price="49.99"
            image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6457/6457959cv11d.jpg"
            rating={4}
          />
          <Product
            id="1002"
            title="Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones (E-Book)"
            price="17.99"
            image="https://miro.medium.com/max/1400/1*q_ca6R_S8V1vlaGCc_VQxw.png"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="1003"
            title="NEOMEN Bruxism Mouth Guard For Grinding Teeth - Professional Dental Guards"
            price="21.90"
            image="https://m.media-amazon.com/images/I/717SXjiuWQL._AC_SY355_.jpg"
            rating={3}
          />
          <Product
            id="1004"
            title="2021 Apple iPad (10.2-inch, Wi-Fi, 256GB) - Space Grey (9th Generation)"
            price="609.99"
            image="https://multimedia.bbycastatic.ca/multimedia/products/500x500/157/15733/15733040.jpg"
            rating={5}
          />
          <Product
            id="1005"
            title='Samsung 50" Q60T 4K Ultra HD HDR Smart QLED TV, 2022 Model [Canada Version]'
            price="899.99"
            image="https://images.samsung.com/is/image/samsung/pk-qledtv-q60t-qa85q60tauxmm-rperspectiveblack-265963718?$720_576_PNG$"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="1006"
            title="SAMSUNG Odyssey Neo G9 Series 49-Inch Dual QHD (5120x1440) Gaming Monitor"
            price="2199.99"
            image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6468/6468857_sd.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

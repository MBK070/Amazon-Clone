import React from "react";
import "./Checkout.css";
import checkout_Ad from "./assets/images/checkout_Ad.png";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import ShoppingCart from "./ShoppingCart";

function Checkout() {
  const [{ cart, user }] = useStateValue();

  return (
    <div className="checkout">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.amazon.ca/gp/product/B07MJM4F44/ref=cacbcc_maple_vc_en_unrec_acq_nm?pr=concacbcc&inc=cacbccunrec&ts=103kr4gcmcawhx2mxgx2ky2eem46tru&plattr=nomath&place=vc&imp=a60280de-7307-4b5e-bd18-4ba0ba160b76"
      >
        <img
          className="checkout__ad"
          src={checkout_Ad}
          alt=""
          width="width"
          height="height"
        />
      </a>
      <div className="checkout__main">
        <div className="checkout__block">
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Cart Items</h2>
          {cart.map((item, i) => (
            <ShoppingCart
              key={i * Math.random()}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
        <div className="checkout__cart">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;

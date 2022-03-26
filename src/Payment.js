import React, { useState, useEffect } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
// import { useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "./reducer";
import StripeCheckout from "react-stripe-checkout";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import axios from "./axios";

toast.configure();

function Payment() {
  const [{ cart, user }, dispatch] = useStateValue();
  const total = getCartTotal(cart);

  const navigate = useNavigate();

  async function handleToken(token) {
    const response = await axios.post("http://localhost:8080/payment", {
      token,
      total,
    });
    const { status } = response.data;
    if (status === "success") {
      toast("success! Product Purchased", {
        type: "success",
      });
    } else {
      toast("Error! Something went wrong", {
        type: "error",
      });
    }
  }

  return (
    <div className="payment">
      <div className="payment__itemCount">
        <h1>
          Checkout (<Link to="/checkout">{cart?.length} items</Link>)
        </h1>
      </div>
      <div className="payment__container1">
        {/* Payment Section - Delivery Address */}
        <div className="payment__section1">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <br />
            <p>376, Bloor St</p>
            <p>Toronto, ON</p>
          </div>
        </div>
      </div>

      <div className="payment__container2">
        {/* Payment Section - Review Items */}
        <div className="payment__section2">
          <div className="payment__title1">
            <h3>Review Items For Delivery</h3>
            <br />
          </div>
        </div>
        <div className="payment__items">
          {cart.map((item, i) => (
            <ShoppingCart
              key={i}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="payment__container3">
        {/* Payment Section - Payment Method */}
        <div className="payment__section2">
          <div className="payment__title2">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <div className="payment__priceContainer">
              <CurrencyFormat
                renderText={(value) => <h3>Order Total: {value}</h3>}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
              <br />
              <StripeCheckout
                stripeKey="pk_test_51KgkXXAbjRL2sYEWQyWgWuMhjh5cn4TiMaV7bgSM4l8M6NK9IeTi4qzD6mf7tuMbK9uEWR57mI5wuOu0OZHBSqfE00QukFDCGj"
                token={handleToken}
                amount={total * 100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

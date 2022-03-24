import React from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";

function Payment() {
  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment__itemCount">
        <h1>
          Checkout (<Link to="/checkout">{cart?.length} items</Link>)
        </h1>
      </div>
      <div className="payment__container1">
        {/* Payment section - delivery address */}
        <div className="payment__section">
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
        {/* Payment section - Review Items */}
        <div className="payment__section1">
          <div className="payment__title">
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
    </div>
  );
}

export default Payment;

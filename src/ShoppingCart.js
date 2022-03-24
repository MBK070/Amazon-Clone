import React from "react";
import StarIcon from "@mui/icons-material/Star";
import "./ShoppingCart.css";
import { useStateValue } from "./StateProvider";

function ShoppingCart({ id, title, image, price, rating }) {
  const [, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div className="ShoppingCart">
      <img className="ShoppingCart__image" src={image} alt="" />
      <div className="ShoppingCart__info">
        <div>
          <p className="ShoppingCart__title">{title}</p>
          <p className="ShoppingCart__price">
            <small>$</small>
            <strong>{parseFloat(price).toFixed(2)}</strong>
          </p>
          <div className="ShoppingCart__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <StarIcon key={i * Math.random()} />
              ))}
          </div>
          <button onClick={removeFromCart}>Remove From Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;

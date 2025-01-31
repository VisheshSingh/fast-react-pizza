import React from "react";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemQuantity,
  getItemFromCart,
  increaseItemQuantity,
} from "./cartSlice";

const UpdateItemQuantity = ({ pizzaId }) => {
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getItemFromCart(pizzaId));
  return (
    <div className="flex items-center gap-2">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      {currentQuantity}
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
};

export default UpdateItemQuantity;

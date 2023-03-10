import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
 const[btnHighlite,setBtnHighlited]= useState(false)
  const cartCtx = useContext(CartContext);
  const {items} = cartCtx
  const numOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount
  },0)

  const btnClasses = `${classes.button} ${btnHighlite ? classes.bump: ''}`

useEffect(()=>{
  if(items.length === 0){
    return
  }
  setBtnHighlited(true)

 const timer = setTimeout(()=>{
    setBtnHighlited(false)
  }, 300)
  return ()=>{
    clearTimeout(timer)
  }
},[items])
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;

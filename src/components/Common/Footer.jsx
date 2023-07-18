import React from "react";
import ImgLogo from "../../assets/img/logo.svg";

const Footer = ({ price }) => {
  return (
    <footer>
      <div class="subtotal">
        <span class="subtotal-test">Subtotal:</span>
        <span class="subtotal-price">${price}</span>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import Footerlogo from "../../assets/img/footer-logo.png";
function Footer() {
  return (
    <div>
      <footer>
        <img class="footer-logo" src={Footerlogo} alt="" />
        <p class="footer-p">
          Premium Quality food at the best and most affordable price <br />
          we have a new offer every day for 365 days
        </p>
        <p class="contact">
          {" "}
          <span id="contact">Contact</span> <br />
          E-mail :kalemeranmarcellin123456789@gmail.com  | Hotline: +1 131 138 138{" "}
        </p>
        <hr />  

        <p class="after-footer">
          DESIGN BY KAREMERA HUNGER CAPTIAN - © 2022. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
}

export default Footer;

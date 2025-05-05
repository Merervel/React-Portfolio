import React from "react";
import { getImageUrl } from "../../util";

export const Contact = () => {
  return (
   <footer>
    <div>
        <h2>Contact</h2>
        <p>Feel Free To Reach Out</p>
    </div>
    <ul>
        <li>
            <img src={getImageUrl("contact/emailIcon.png")} alt="" />
            <a href="mailto:wijayamarvel3@gmail.com">wijayamarvel3@gmail.com</a>
        </li>
        <li>
            <img src={getImageUrl("contact/instagramIcon.png")} alt="" />
            <a href="mailto:wijayamarvel3@gmail.com">wijayamarvel3@gmail.com</a>
        </li>
        <li>
            <img src={getImageUrl("contact/emailIcon.png")} alt="" />
            <a href="mailto:wijayamarvel3@gmail.com">wijayamarvel3@gmail.com</a>
        </li>
    </ul>
   </footer>
  )
}

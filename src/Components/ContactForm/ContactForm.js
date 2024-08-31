import React from "react";
import "./Contactform.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";

const ContactForm = () => {
  return (
    <section className="contain">
      <div className="contact_form">
        <div className="top_btn">
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>

        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<MdOutgoingMail fontSize="24px" />}
        />
        <div className="form_control">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />{" "}
        </div>
        <div className="form_control">
          <label htmlFor="email">E-mail</label>
          <input type="email" name="emai" />{" "}
        </div>

        <div className="form_control">
          <label htmlFor="text">Text</label>
          <textarea name="text" rows="8" />{" "}
        </div>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <Button text="Submit" />
        </div>
      </div>

      <div className="contact_image">
        <img src="./images/Contact.svg" alt="Contact" />
      </div>
    </section>
  );
};

export default ContactForm;

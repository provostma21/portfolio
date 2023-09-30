import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../pages/Styles/Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="form-center">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <h3>
          Have any comments or questions for me? <br></br>Then, feel free to
          fill out the contact form below!
        </h3>
        <input type="text" name="user_name" placeholder="Name" />
        <br></br>
        <input type="email" name="user_email" placeholder="Email" />
        <br></br>
        <textarea name="message" placeholder="Your Message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";
import "animate.css";

const Contact = () => {
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        () => {
          setFeedbackMessage("Message successfully sent!");
          form.current.reset();
        },
        (error) => {
          setFeedbackMessage("Failed to send the message, please try again");
          console.error("EmailJS Error:", error);
        }
      );
  };

  const getAnimationClass = (index) => ({
    className: "animate__animated animate__fadeInLeft",
    style: { animationDelay: `${0.1 * index}s` },
  });

  return (
    <div className="Contact">
      <div className="contact-text">
        <h1 {...getAnimationClass(1)}>Contact Me</h1>
        <p {...getAnimationClass(2)}>
          As a passionate web developer with a flair for both front-end and
          back-end development, I'm always excited about collaborations and
          opportunities that challenge my skills in design and development.
        </p>
        <p {...getAnimationClass(3)}>
          If you have questions or unique requests, please contact me using the
          form below.
        </p>
      </div>
      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <ul>
            <li {...getAnimationClass(1)}>
              <input placeholder="Name" type="text" name="name" required />
            </li>
            <li {...getAnimationClass(2)}>
              <input placeholder="Email" type="email" name="email" required />
            </li>
            <li {...getAnimationClass(3)}>
              <input
                placeholder="Subject"
                type="text"
                name="subject"
                required
              />
            </li>
            <li {...getAnimationClass(1)}>
              <textarea
                placeholder="Message"
                name="message"
                required
              ></textarea>
            </li>
            <li {...getAnimationClass(2)}>
              <input type="submit" className="flat-button" value="SEND" />
            </li>
          </ul>
          {feedbackMessage && (
            <div className="feedback-message">{feedbackMessage}</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;

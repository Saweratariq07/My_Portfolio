import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "emailjs-com";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS Configuration
    const serviceID = "service_nusupdn"; // Replace with your service ID
    const templateID = "template_2pf3he8"; // Replace with your template ID
    const userID = "oX63ehR5w8TJX1r0k"; // Replace with your user ID

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    console.log("Sending email with params:", templateParams);

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then(() => {
        toast.success("Message sent successfully!", {
          position: "top-left",
          autoClose: 2000,
        });
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);
      })
      .catch((error) => {
        toast.error("Failed to send message. Try again!", {
          position: "top-left",
          autoClose: 2000,
        });
        console.error("EmailJS error:", error);
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <div className="contact" id="contact">
        <div className="container">
          <motion.div
            className="heading"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
            viewport={{ once: true }}
          >
            <p className="heading-sub-text">Hire Me</p>
            <p className="heading-text">Get in Touch</p>
          </motion.div>
          <div className="contact-box">
            <motion.div
              className="left-box"
              initial={{ opacity: 0, y: "-50px" }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
            >
              <div className="contact-heading">
                <p>
                  We are interested in freelance opportunities – especially ambitious or large projects. However, if you have other requests or questions, don’t hesitate to use the form.
                </p>
              </div>
              <div className="contact-hello">
                <p>Say Hello</p>
                <Link
                  className="hello-links"
                  to="//wa.me/+923181469843"
                  target="_blank"
                >
                  wa.me/UTS HUB
                </Link>
                <a
                  className="hello-links"
                  href="mailto:utshub330@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
             utshub330@gmail.com
                </a>
              </div>
            </motion.div>
            <motion.div
              className="right-box"
              initial={{ opacity: 0, y: "50px" }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
            >
              <form onSubmit={handleSubmit}>
                <div className="form-top">
                  <div className="name">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="email">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>

                <div className="form-mid">
                  <div className="message">
                    <label htmlFor="message">Your message</label>
                    <textarea
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi, we think we need you to work on this particular project."
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="form-btn">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="hero-contact"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Contact;
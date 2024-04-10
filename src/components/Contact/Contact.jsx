import React from "react";
import ban from "../../assets/ban.svg";
import contactImg from "../../assets/contactImg.png";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section relative min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${ban})` }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row">
          {/* Vector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.9, delay: 0.3 },
            }}
            className="flex-grow lg:w-1/2 bg-white py-12 px-8 text-center border-r-4 border-blue-500"
          >
            <img src={contactImg} alt="Vector" className="mx-auto w-2/3" />
            <h2 className="text-3xl font-bold mt-8">Contact Us</h2>
            <p className="mt-4 text-gray-700">
              Feel free to get in touch with us.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.9, delay: 0.5 },
            }}
            className="flex-grow lg:w-1/2 bg-white py-12 px-8"
          >
            <h2 className="text-3xl font-bold mb-8">Send us a message</h2>
            <form className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <div className="mb-6 ">
                  <motion.input
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    placeholder="Enter your name"
                    className="input-field focus:outline-none focus:border-none"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <div className="mb-4 ">
                  <motion.input
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    placeholder="Enter your Email"
                    className="input-field focus:outline-none focus:border-none"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <div className="mb-6 ">
                  <motion.textarea
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    placeholder="Enter your message"
                    className="input-field focus:outline-none focus:border-none"
                  />
                </div>
              </div>
              <motion.button
                whileHover={{ rotate: 5, scale: 1.1 }}
                whileTap={{ rotate: -2, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

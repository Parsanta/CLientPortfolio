import React from "react";
import ban from "../../assets/ban.svg";
import contactImg from "../../assets/contactImg.png";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section relative min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${ban})`, backgroundSize: 'cover' }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          {/* Image Section */}
          <div className="flex-grow lg:w-1/2 bg-white py-12 px-8 text-center border-r-4 border-blue-500">
            <img src={contactImg} alt="Contact" className="mx-auto w-2/3" />
          </div>

          {/* Contact Information */}
          <div className="flex-grow lg:w-1/2 bg-white py-12 px-8 text-center">
          <h2 className="text-3xl font-bold m-8">Get in touch </h2>
            <p className="text-lg mb-4">Email: <a href="mailto:your-email@example.com" className="text-blue-600">your-email@example.com</a></p>
            <p className="text-lg mb-4">Phone: <a href="tel:+1234567890" className="text-blue-600">+123-456-7890</a></p>
            <p className="text-lg mb-4">LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-600">yourprofile</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}

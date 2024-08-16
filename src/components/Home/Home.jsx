import React from "react";
import banImg from "../../assets/banner-image.svg";
import ban from "../../assets/ban.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useState,useEffect } from "react";

export default function Home() {
  const [loopNum, setLoopnum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Hi I am Manav Lal"];
  const [text, setText] = useState("");
  const period = 1000;
  const [delta, setDelta] = useState(100 - Math.random() * 400);
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopnum(loopNum + 1);
      setDelta(500);
    }
  };
  return (
    <section
      className="home relative min-h-screen flex items-center justify-center" id="home" style={{ backgroundImage: `url(${ban})` }}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center px-6">
        <AnimatePresence>
          <motion.div
            key="left-content"
            initial= { {opacity: 0, y: 20} }
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.9, delay:0.3 } }}
            exit="initial"
            className="md:w-1/2 text-center md:text-left mb-4 md:mb-0"
          >
            <img
              src={banImg}
              alt="banner image"
              className="w-40 h-auto mb-3 mx-auto md:mx-0 animate-fadeIn"
            />
            <h1 className="font-bold text-4xl mb-2 text-blue-500 font-nunito">{text}</h1>
            <p className="text-gray-600 text-lg mb-4">
              I'm a Flutter developer passionate about creating amazing apps.
            </p>
          </motion.div>
        </AnimatePresence>
        <AnimatePresence>
          <motion.div
            key="right-content"
            initial= { {opacity: 0, y: 20} }
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.9 , delay:0.3 } }}
            exit="initial"
            className="md:w-1/2 text-center md:text-right pl-10"
          >
            <div className="flex flex-col items-center justify-center md:justify-end mb-4">
              <div className="flex justify-center md:justify-end mb-4">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 transition duration-300 mx-2"
                >
                  <i className="icon-social-linkedin text-2xl"></i>
                </a>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 transition duration-300 mx-2"
                >
                  <i className="icon-social-github text-2xl"></i>
                </a>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 transition duration-300 mx-2"
                >
                  <i className="icon-social-twitter text-2xl"></i>
                </a>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 transition duration-300 mx-2"
                >
                  <i className="icon-social-facebook text-2xl"></i>
                </a>
              </div>
              <motion.button
                whileHover={{ rotate: 5, scale: 1.1 }}
                whileTap={{ rotate: -2, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 mb-4 mr-2"
              >
                <a href="#contact"> Hire Me </a>
              </motion.button>
              <a
                href="#about"
                className="text-blue-500 hover:text-blue-700 transition duration-300 block mt-2 mx-auto"
              >
                <i className="icon-mouse text-5xl"></i>
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

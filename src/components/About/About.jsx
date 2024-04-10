import { motion, AnimatePresence } from "framer-motion";
import ban from "../../assets/ban.svg";
export default function About() {
  return (
    <section
      className="home relative min-h-screen flex items-center justify-center"
      id="about"
      style={{ backgroundImage: `url(${ban})` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.9, delay: 0.3 },
        }}
        className="container mx-auto px-4 md:px-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-5 text-blue-700 font-nunito">
          ABOUT ME
        </h2>

        <p className="text-gray-700 text-lg  mb-5">
          I'm a passionate Flutter developer with experience in creating amazing
          apps. I specialize in mobile app development and have worked on
          various projects using Flutter. My goal is to deliver high-quality
          solutions that meet client requirements and exceed expectations.I'm a
          passionate Flutter developer with experience in creating amazing apps.
          I specialize in mobile app development and have worked on various
          projects using Flutter. My goal is to deliver high-quality solutions
          that meet client requirements and exceed expectations.I'm a passionate
          Flutter developer with experience in creating amazing apps.I'm a
          passionate Flutter developer with experience in creating amazing apps.
          I specialize in mobile app development and have worked on various
          projects using Flutter. My goal is to deliver high-quality solutions
          that meet client requirements and exceed expectations.I'm a passionate
          Flutter developer with experience in creating amazing apps
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 mb-2"
          href="#contact"
        >
          Hire Me
        </motion.button>
      </motion.div>
    </section>
  );
}

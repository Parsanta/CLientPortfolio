import React from "react";
import ban from "../../assets/ban.svg";
import { motion } from "framer-motion";
const certifications = [
  {
    title: "Certification Title 1",
    organization: "Certification Organization 1",
    date: "January 2022",
    image: "https://via.placeholder.com/150",
    link: "#certification1",
  },
  {
    title: "Certification Title 2",
    organization: "Certification Organization 2",
    date: "March 2022",
    image: "https://via.placeholder.com/150",
    link: "#certification2",
  },
  {
    title: "Certification Title 1",
    organization: "Certification Organization 1",
    date: "January 2022",
    image: "https://via.placeholder.com/150",
    link: "#certification1",
  },
  {
    title: "Certification Title 2",
    organization: "Certification Organization 2",
    date: "March 2022",
    image: "https://via.placeholder.com/150",
    link: "#certification2",
  },
  {
    title: "Certification Title 1",
    organization: "Certification Organization 1",
    date: "January 2022",
    image: "https://via.placeholder.com/150",
    link: "#certification1",
  },
  {
    title: "Certification Title 2",
    organization: "Certification Organization 2",
    date: "March 2022",
    image: "https://via.placeholder.com/150",
    link: "#certification2",
  },
  // Add more certification objects as needed
];

const Certifications = () => {
  const [hoverIndex, setHoverIndex] = React.useState(null);

  return (
    <section
      id="certifications"
      className="section relative py-20"
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
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-blue-500 font-nunito">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {certifications.map((certification, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <a href={certification.link} className="block">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <img
                      src={certification.image}
                      alt={certification.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </a>
                {hoverIndex === index && (
                  <div className="absolute top-0 left-0 w-full h-full bg-blue-100 p-4 opacity-100 transition duration-300 ease-in-out transform translate-y-0 overflow-hidden">
                    <div className="bg-blue-100 p-2">
                      <h3 className="text-lg font-bold mb-1">
                        {certification.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-1">
                        {certification.organization}
                      </p>
                      <p className="text-sm text-gray-700">
                        {certification.date}
                      </p>
                      <a
                        href={certification.link}
                        className="text-blue-600 hover:underline"
                      >
                        View Certifications
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;

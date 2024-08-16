import ban from "../../assets/ban.svg";
import EduData from "./data";
import Card from "./Card";
import {motion} from "framer-motion"
export default function Resume() {
  return (
    <section
      id="resume"
      className="section relative  flex flex-col justify-center"
      style={{ backgroundImage: `url(${ban})` }}
    >
      <div className="container mx-auto px-4 md:px-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
          <motion.div initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.9, delay: 0.3 },
        }}className="bg-blue-100 p-4 rounded-lg relative shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-700 font-nunito ">Education</h3>
            {EduData.map((val, id) => {
              if (val.category === "education") {
                return (
                  <Card
                    key={id}
                    icon={val.icon}
                    title={val.title}
                    year={val.year}
                    desc={val.description}
                  />
                );
              }
              return null;
            })}
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.9, delay: 0.5 },
        }}className="bg-blue-100 p-7 rounded-lg relative shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-700 font-nunito">Experience</h3>
            {EduData.map((val, index) => {
              if (val.category === "experience") {
                return (
                  <Card
                    key={index}
                    icon={val.icon}
                    title={val.title}
                    year={val.year}
                    desc={val.description}
                  />
                );
              }
              return null;
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

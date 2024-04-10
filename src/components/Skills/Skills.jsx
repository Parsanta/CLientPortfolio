import ban from "../../assets/ban.svg";
import {motion} from "framer-motion"
const category = [
  {
    image:
      "https://icons.veryicon.com/png/o/miscellaneous/home-of-wisdom-shopping/jewelry-5.png",
    name: "React",
  },
  {
    image:
      "https://uxwing.com/wp-content/themes/uxwing/download/beauty-fashion/makeup-icon.png",
    name: "Bootstrap",
  },
  {
    image:
      "https://cdn.iconscout.com/icon/free/png-512/free-smartphone-android-mobile-device-44503.png?f=webp&w=256",
    name: "Flutter",
  },
  {
    image:
      "https://cdn.iconscout.com/icon/free/png-512/free-tote-bag-3695114-3076619.png?f=webp&w=256",
    name: "Git",
  },
  {
    image:
      "https://cdn.iconscout.com/icon/premium/png-512-thumb/laptop-2840239-2359373.png?f=webp&w=256",
    name: "Laptop",
  },
  {
    image:
      "https://uxwing.com/wp-content/themes/uxwing/download/fitness-gym-yoga-spa/shoe-running-icon.png",
    name: "Golang",
  },
  {
    image:
      "https://uxwing.com/wp-content/themes/uxwing/download/household-and-furniture/dresser-furniture-icon.png",
    name: "Python",
  },
  {
    image:
      "https://icons.veryicon.com/png/o/miscellaneous/home-of-wisdom-shopping/jewelry-5.png",
    name: "C++",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="section relative flex flex-col justify-center"
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
        <div className="px-5" id="skills">
          <div className="flex flex-col mt-5">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-700 font-nunito">
              Technologies I work with
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-6 gap-8">
              {category.map((item, index) => (
                <div
                  key={index}
                  className="text-center flex flex-col items-center relative"
                >
                  <div className="w-36 h-36 md:w-24 md:h-24 max-w-xs md:max-w-none cursor-pointer mb-1 transform hover:scale-105 overflow-hidden relative">
                    <div className="flex justify-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <h1 className="text-sm font-medium title-font mt-2">
                    {item.name}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;

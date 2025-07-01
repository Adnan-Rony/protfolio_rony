import { motion } from "motion/react";
import { useInView } from "framer-motion";

import { useRef } from "react";

export const Skills = () => {
  const imageLinks = [
    {
      name: "React.js",
      url: "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000",
    },
    {
      name: "Node.js",
      url: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
    },
    {
      name: "Express.js",
      url: "https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000",
    },
    {
      name: "Tailwind CSS",
      url: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
    },
    {
      name: "MongoDB",
      url: "https://img.icons8.com/?size=100&id=tBBf3P8HL0vR&format=png&color=000000",
    },
    {
      name: "JavaScript",
      url: "https://img.icons8.com/?size=100&id=tGvHBPJaKqEd&format=png&color=000000",
    },
     {
      name: "TypeScript",
      url: "https://img.icons8.com/?size=100&id=nCj4PvnCO0tZ&format=png&color=000000",
    },
     {
      name: "Firebase",
      url: "https://img.icons8.com/?size=100&id=ROMfFZ1tMhpk&format=png&color=000000",
    },
    {
      name: "HTML",
      url: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
    },
    {
      name: "CSS",
      url: "https://img.icons8.com/?size=100&id=4d9YPiN04osD&format=png&color=000000",
    },

    {
      name: "Figma",
      url: "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000",
    },

   
   
    {
      name: "Github",
      url: "https://img.icons8.com/?size=100&id=D5XsEXNbhkMI&format=png&color=000000",
    },
  ];
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-100px",
  });

  return (
    <div className="container mx-auto ">
      <div className="text-center  py-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6 text-white">
          My Skills
        </h2>
        <p
          className="text-sm sm:text-base lg:text-lg
        mb-4 sm:mb-12"
        >
          Technologies & tools I work with to build amazing web experiences.
        </p>
      </div>

      <div>
        <figure
          ref={ref}
          className="grid grid-cols-3 lg:grid-cols-6 gap-4 space-y-6 "
        >
          {imageLinks.map((image, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 2, delay: index * 0.1 }}
              key={index}
              className="flex flex-col items-center py-4 h-34 transition duration-500 ease-in hover:scale-110"
            >
              <img src={image.url} alt={image.name} className="lg:w-20 w-12  " />
              <p className="mt-2 text-sm font-semibold">{image.name}</p>
            </motion.div>
          ))}
        </figure>
      </div>
    </div>
  );
};

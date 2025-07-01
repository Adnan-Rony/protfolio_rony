import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import profile from "../../assets/profile-pic (6).png";

import { Dock, DockIcon } from "../magicui/dock";

import { TypingAnimation } from "../magicui/typing-animation";

export const Banner = () => {
  return (
    <section
      className="container mx-auto  flex items-center
     py-12 px-6 md:px-12 lg:px-20"
    >
      <div
        className="container mx-auto flex flex-col-reverse
     md:flex-row items-center justify-between gap-6"
      >
        {/* Left Side */}
        <div className="w-full md:w-1/2 text-white space-y-4">
          <h1 className="text-2xl lg:text-6xl font-bold leading-tight">
            Hello, <span>I am</span>
            <br></br>
            <span className="text-[#8A2BE2]">Adnan Rony</span>
          </h1>

          <TypingAnimation className="lg:text-lg text-sm lg:font-poppins font-normal">
            A passionate MERN Developer with a focus on building clean,
            responsive, and user-friendly web applications. I specialize in
            React.js, Tailwind CSS, JavaScript, Node.js, Express.js, and
            MongoDB. I'm currently studying Computer Science and Engineering at
            Daffodil International University and taking a course in Front-End
            Development to sharpen my skills. Always curious and driven to learn
            new technologies and grow as a developer.
          </TypingAnimation>

          <div className="flex gap-4 mt-6">
            <div className="flex gap-4 mt-6">
              <a href="/adnanronymernDeveloper.pdf" download>
                <button
                  className="btn bg-black text-white border border-white
    hover:bg-[#8A2BE2]
      hover:text-white hover:border-none transition duration-500 ease-in-out"
                >
                  Download Resume
                </button>
              </a>
              <a href="#contact">
                <button
                  className="btn bg-black text-white border
     border-white  
     hover:bg-[#8A2BE2]
      hover:text-white hover:border-none hover:border-transparent
      transition duration-500 ease-in-out
      "
                >
                  Contact Me
                </button>
              </a>
            </div>
          </div>

          {/* Social Dock */}
          <div className="mt-6 w-fit">
            <Dock>
              <DockIcon>
                <a target="_blank" href="https://github.com/Adnan-Rony">
                  <FaGithub className="text-3xl hover:text-main-color" />
                </a>
              </DockIcon>
              <DockIcon>
                <a
                  href="https://www.linkedin.com/in/adnan-rony/"
                  target="_blank"
                >
                  <FaLinkedin className="text-3xl hover:text-main-color" />
                </a>
              </DockIcon>
              <DockIcon>
                <a href="https://www.facebook.com/adnanrony19/" target="_blank">
                  <FaFacebook className="text-3xl hover:text-main-color" />
                </a>
              </DockIcon>

              <DockIcon>
                <a
                  href="https://wa.me/+8801747430447"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="text-3xl hover:text-main-color" />
                </a>
              </DockIcon>
            </Dock>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 flex justify-center ">
          <img
            src={profile}
            alt="Profile"
            className="w-[260px] sm:w-[300px] lg:w-[400px] rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

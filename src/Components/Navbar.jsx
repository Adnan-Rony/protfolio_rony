import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

export const Navbar = () => {
  const menu = (
    <>
      <li>
        <ScrollLink
          activeClass="active"
          to="education"
          smooth={true}
          duration={500}
          className="text-lg cursor-pointer"
        >
          Education
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
         activeClass="active"
          to="skills"
          smooth={true}
          duration={500}
          className="text-lg cursor-pointer"
        >
          Skills
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
         activeClass="active"
          to="projects"
          smooth={true}
          duration={500}
          className="text-lg cursor-pointer"
        >
          Projects
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
         activeClass="active"
          to="contact"
          smooth={true}
          duration={500}
          className="text-lg cursor-pointer"
        >
          Contact
        </ScrollLink>
      </li>
      <li>
        <RouterLink
         activeClass="active"
          to="/blog"
          smooth={true}
          duration={500}
          className="text-lg cursor-pointer"
        >
          Blog
        </RouterLink>
      </li>
    </>
  );

  return (
    <div
      className="bg-black text-white w-full mx-auto
     sticky top-0 z-50"
    >
      <div
        className={`navbar bg-black shadow-md 
       transition-all duration-300 max-w-7xl mx-auto`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu bg-black menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {menu}
            </ul>
          </div>
          <RouterLink to="/" className=" lg:text-2xl text-xl font-semibold lg:font-extrabold text-[#8A2BE2]">
            Adnan <span className="text-white"> Rony</span>
          </RouterLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>
        <div className="navbar-end  ">
          <button className="hidden md:block">
            <a
              href="/adnanronymernDeveloper.pdf"
              download
              className="btn bg-[#8A2BE2] border-none text-white 
     hover:bg-violet-700"
            >
              Download Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

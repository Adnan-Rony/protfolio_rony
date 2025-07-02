import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer
      className="footer container flex flex-col md:flex-row
     justify-between  p-4 md:p-10 bg-black text-white   mx-auto"
    >
      <nav>
        <h6 className="footer-title text-white">Services</h6>
        <a className="link link-hover">MERN Stack Developer</a>
        <a className="link link-hover">Web Development</a>

        <a className="link link-hover">Frontend Development</a>
        <a className="link link-hover">Backend Development</a>
      </nav>
      <nav>
        <h6 className="footer-title">Contact</h6>
        <a className="link link-hover">Email: adnanrony19@gmail.com</a>
        <a className="link link-hover">Whatsapp:+8801747430447</a>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a
            className="text-2xl hover:text-purple-600"
            href="https://www.linkedin.com/in/adnan-rony/"
            target="_blank"
          >
            <FaLinkedin></FaLinkedin>
          </a>
          <a
            className="text-2xl hover:text-purple-600"
            href="https://www.facebook.com/adnanrony19/"
            target="_blank"
          >
            <FaFacebook></FaFacebook>
          </a>
          <a
            className="text-2xl hover:text-purple-600"
            target="_blank"
            href="https://github.com/Adnan-Rony"
          >
            <FaGithub></FaGithub>
          </a>
          <a
            className="text-2xl hover:text-purple-600"
            href="https://wa.me/+8801747430447"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp></FaWhatsapp>
          </a>
        </div>
      </nav>
    </footer>
  );
};

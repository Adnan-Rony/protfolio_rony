import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdCastForEducation } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
export const Education = () => {
  return (
    <div  className="container mx-auto">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6 text-white">
        Education & Certifications
      </h1>
      <p className="text-sm sm:text-base px-1 lg:text-lg text-center mb-8 sm:mb-12">
        A snapshot of my academic background and technical training.
      </p>
      <div>
        <VerticalTimeline lineColor="purple">
          <VerticalTimelineElement
            className="vertical-timeline-element--work hover:scale-105  hover:shadow-lg transition-all duration-300"
            contentStyle={{ background: "#8A2BE2", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #8A2BE2" }}
            date="2022 - Present"
            iconStyle={{ background: "#8A2BE2", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title text-2xl font-bold">
              Bachelor of Science in Computer Science
            </h3>
            <h4 className="vertical-timeline-element-subtitle font-semibold text-gray-200">
              Daffodil International University, Dhaka
            </h4>
            <p className="text-gray-200">
              Focused on web technologies, JavaScript frameworks, database
              systems, data structures, and modern software development
              practices.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work hover:scale-105  hover:shadow-lg transition-all duration-300"
            contentStyle={{ background: "#8A2BE2", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #8A2BE2" }}
            date="2018 - 2020"
            iconStyle={{ background: "#8A2BE2", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title text-2xl font-bold">
              Higher Secondary Certificate (HSC)
            </h3>
            <h4 className="vertical-timeline-element-subtitle font-semibold text-gray-200">
             Sristy Collage Of Tangail,Dhaka
            </h4>
            <p className="text-gray-200">
              Studied Science with a focus on Physics, Chemistry, Mathematics,
              and Computer Studies.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work hover:scale-105  hover:shadow-lg transition-all duration-300"
            contentStyle={{ background: "#8A2BE2", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #8A2BE2" }}
            date="2016-2018"
            iconStyle={{ background: "#8A2BE2", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title text-2xl font-bold">
              Secondary School Certificate (SSC)
            </h3>
            <h4 className="vertical-timeline-element-subtitle font-semibold text-gray-200">
              Shaheen School Of Tangail
            </h4>
            <p className="text-gray-200">
              Completed secondary education with a Science background. Developed
              early interest in programming and technology.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work hover:scale-105  hover:shadow-lg transition-all duration-300"
            contentStyle={{ background: "#8A2BE2", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #8A2BE2" }}
            date="2024 - 2025"
            iconStyle={{ background: "#8A2BE2", color: "#fff" }}
            icon={<MdCastForEducation />}
          >
            <h3 className="vertical-timeline-element-title text-2xl font-bold">
              MERN Stack Development
            </h3>
            <h4 className="vertical-timeline-element-subtitle font-semibold text-gray-200">
              Programming Hero
            </h4>
            <p className="text-gray-200">
              Gained hands-on experience in full-stack development using
              MongoDB, Express.js, React, and Node.js. Built real-world projects
              and learned REST API, authentication, and deployment.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

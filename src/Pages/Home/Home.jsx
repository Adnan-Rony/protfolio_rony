
import { Banner } from "../../Components/Banner/Banner";
import { Skills } from "../../Components/Skills/Skills";

import { Projects } from "../Projects/Projects";
import { Education } from "@/Components/Education/Education";
import { ContactPage } from "../Contact/ContactPage";


import Blog from "../blogs/Blog.jsx";


export const Home = () => {
  return (
    <div className="bg-[url('/darkbg.png')] bg-fixed  ">
      
     <div className="max-w-7xl mx-auto px-4">
       <title>Adnan Rony</title>
      <div className="py-10 md:py-16">
        <Banner></Banner>
      </div>

      <div id="education" className="py-10 md:py-16">
        <Education></Education>
      </div>

      <div id="skills" className="py-10 md:py-16">
        <Skills></Skills>
      </div>

      <div id="projects" className="py-10 md:py-16 ">
        <Projects></Projects>
      </div>
      <div id="blog" className="py-10 md:py-16">
        <Blog></Blog>
      </div>
      <div id="contact" className="py-10 md:py-16">
        <ContactPage></ContactPage>
      </div>
      
     
     </div>


    </div>
  );
};

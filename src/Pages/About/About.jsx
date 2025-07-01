import { Button } from "@/Components/ui/button";

export const About = () => {
  return (
    <div className="container h-screen mx-auto px-6 py-12 md:py-16 lg:py-20">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-6">About Me</h2>
      <p className="text-lg text-gray-200 mb-8">
        Hi there! I’m <strong>Tamjid Ahmed</strong>, a junior web developer with a passion for building interactive and visually appealing web experiences. My journey into web development began a few years ago, and ever since, I’ve been diving deep into JavaScript, HTML, CSS, and React.js. I'm constantly looking to enhance my skills and learn new technologies that help me create dynamic, responsive websites. Working with the MERN stack has opened up exciting opportunities, and I’m always eager to explore more.
      </p>
    
      
      <p className="text-lg text-gray-200 mb-8">
        I’m always excited to connect with other developers and work on impactful projects. Let’s collaborate and create something amazing together!
      </p>
      {/* Optionally you can add a button */}
      <Button variant="outline"  size="lg" className="mt-4 text-black">
        Connect with Me
      </Button>
    </div>
  </div>
  
  );
};

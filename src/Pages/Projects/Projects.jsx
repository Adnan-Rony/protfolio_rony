"use client";
import { useEffect, useState } from "react";
import { Lens } from "@/components/magicui/lens";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { FaGithub } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";

export const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div className="container mx-auto py-10">
      <div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6 text-white">
          Projects
        </h2>
        <h5 className="text-sm sm:text-base lg:text-lg text-center mb-8 sm:mb-12 px-1 text-white/80">
          Check out my creations—turning ideas into seamless digital
          experiences!
        </h5>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:gap-y-6 lg:grid-cols-3 gap-6 ">
        {projects.map((card, index) => (
          <Card
            key={index}
            className="relative h-full border-none bg-black shadow-[0_0_0_0.5px_rgba(255,255,255,0.6)]"
          >
            <CardHeader>
              <Lens zoomFactor={2} lensSize={150} isStatic={false}>
                <div className="w-full h-[200px] md:h-[250px] overflow-hidden rounded-lg">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Lens>
            </CardHeader>

            <CardContent>
              <CardTitle className="text-2xl md:text-nowrap text-white mb-1">
                {card.name}
              </CardTitle>
              <CardDescription className="text-white opacity-80">
                {card.description}
              </CardDescription>
            </CardContent>

            <CardFooter className="grid md:grid-cols-2 md:items-start gap-2">
              <Button className="bg-white/20 font-semibold text-sm">
                Role: {card.Role}
              </Button>
              {card?.collaboration && (
                <Button className="bg-white/20 text-white font-semibold text-sm flex items-center gap-1">
                  <RiTeamLine /> Team Project
                </Button>
              )}
              {card?.RoleAnother && (
                <Button className="bg-white/20 text-white font-semibold text-sm">
                  Role: Backend
                </Button>
              )}
              {card?.running && (
                <Button className="bg-white/20 text-white font-semibold text-sm">
                  Running...
                </Button>
              )}
            </CardFooter>

            <CardFooter className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {card.techStack.map((tech, i) => (
                <Button
                  key={i}
                  className="bg-white/20 w-full text-white text-xs"
                >
                  # {tech}
                </Button>
              ))}
            </CardFooter>

            <CardFooter className="flex justify-end space-x-4">
              <Button variant="outline">
                <a
                  href={card.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Link
                </a>
              </Button>
              <Button variant="secondary">
                <a
                  href={card.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </Button>
            </CardFooter>

            <BorderBeam duration={8} size={100} />
          </Card>
        ))}
      </div>
    </div>
  );
};

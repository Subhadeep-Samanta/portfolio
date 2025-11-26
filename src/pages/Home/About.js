import React, { useEffect } from "react";
import SectionTitle from "../../components/SectionTitle";
import { DotLottie } from '@lottiefiles/dotlottie-web';

function About() {
  const skills = ["HTML", "CSS", "Javascript", "React", "C++", "Java", "Python"];

  useEffect(() => {
    const dotLottie = new DotLottie({
      autoplay: true,
      loop: true,
      canvas: document.getElementById("dotlottie-canvas"),
      src: "https://lottie.host/4db68bbd-31f6-4cd8-84eb-189de081159a/IGmMCqhzpt.lottie",
    });

    dotLottie.load();
  }, []);

  return (
    <div>
      <SectionTitle title="About" />
      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[70vh] w-1/2 sm:w-full">
          {/* Canvas for Lottie animation */}
          <canvas id="dotlottie-canvas" width="500" height="500"></canvas>
        </div>

        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-white">
            During my school days, I achieved significant academic milestones...
          </p>

          <p className="text-white">
            Currently, I am a first-year Computer Science and Engineering student...
          </p>
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Here are some languages that I've been learning recently:
        </h1>

        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, index) => (
            <div key={index} className="border border-tertiary py-3 px-10">
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;

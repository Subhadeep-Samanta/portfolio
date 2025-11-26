import React from "react";
import SectionTitle from "../../components/SectionTitle";

function About() {
  const skills = ["HTML", "CSS", "Javascript", "React", "C++", "Java","Python"];
  return (
    <div>
      <SectionTitle title="About" />
      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[70vh] w-1/2 sm:w-full">
          <lottie-player
            src="https://lottie.host/4db68bbd-31f6-4cd8-84eb-189de081159a/IGmMCqhzpt.json"
            background="##FFFFFF"
            speed="1"
            autoplay
            direction="1"
            mode="normal"
          ></lottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-white">
            During my school days, I achieved significant academic milestones. I
            passed my 10th-grade exams in 2022 with 92% marks and completed my
            12th grade with 77%. Despite studying in a rural setting, these
            experiences taught me the value of hard work and adaptability,
            shaping a strong foundation for my future.
          </p>
          <p className="text-white">
            Currently, I am a first-year Computer Science and Engineering
            student at Chitkara University in collaboration with Kalvium. I am
            actively learning programming and web development, focusing on tools
            like C++, HTML, CSS, JavaScript, and React. This phase is both
            challenging and exciting as I work towards becoming a skilled
            software engineer.
          </p>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Here are some languages that I've been learning resently:
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, index) => (
            <div className="border border-tertiary py-3 px-10">
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default About;

import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { education } from "../resources/experiences";

function Experiences() {
  const [selectedItemIndex, setselectedItemIndex] = React.useState(0);
  return (
    <div>
      <SectionTitle title="Education" />

      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#037e7843] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {education.map((edu, index) => (
            <div
              onClick={() => {
                setselectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5
                    ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#02534361] py-3 sm:w-full"
                    : "text-white"
                }`}
              >
                {edu.period}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5">
            <h1 className="text-secondary text-xl">{education[selectedItemIndex].School}</h1>
            <h1 className="text-tertiary text-xl">{education[selectedItemIndex].title}</h1>
       <p className="text-white">{education[selectedItemIndex].description}</p>
        </div>
      </div>
    </div>
  );
}

export default Experiences;

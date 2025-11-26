import React from "react";
import SectionTitle from "../../components/SectionTitle";
function Contact() {
  const user = {
    name: "Subhadeep Samanta",
    age: "20+",
    gender: "Male",
    email: "subhadeepsamanta1535@gmail.com",
    mobile: "7001293796",
    country: "INDIA",
    state: "West Bengal",
    D.O.B:"25/11/2005"
  };
  return (
    <div>
      <SectionTitle title="Say Hello" />
      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-tertiary text-sm">{"{"}</h1>
          {Object.keys(user).map((key) => (
            <h1 className="ml-5 text-sm">
              <span className="text-tertiary">{key} : </span>
              <span className="text-tertiary">{user[key]}</span>
            </h1>
          ))}
          <h1 className="text-tertiary text-sm">{"}"}</h1>
        </div>
        <div className="h-[350px]">
          <lottie-player
            src="https://lottie.host/9bc15d3a-f8f1-481e-9582-a1f49fd60d06/DVzGmR0Dby.json"
            background="##FFFFFF"
            speed="1"
            autoplay
            direction="1"
            mode="normal"
          ></lottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;

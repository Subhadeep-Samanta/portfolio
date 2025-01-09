import React from "react";
import Header from "../../components/Header";
import MyIntro from "./MyIntro";
import About from "./About";
import Experiences from "./Experiences";
import Courses from "./Courses";
import Contact from "./Contact";
import Footer from "./Footer";
import Leftsider from "./Leftsider";

function Home() {
  return (
    <div>
      <Header />
      <div className="bg-primary px-40 sm:px-5">
        <MyIntro />
        <About />
        <Experiences/>
        <Courses/>
        <Contact />
        <Footer />
        <Leftsider/>
      </div>
    </div>
  );
}

export default Home;

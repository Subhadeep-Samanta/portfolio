import React from "react";

function MyIntro() {
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8">
      <h1 className="text-white">Hi , I am</h1>
      <h1 className="text-7xl sm:text-3xl text-secondary font-serif">
        Subhadeep Samanta
      </h1>
      <h1 className="text-5xl sm:text-3xl text-white font-semibold">
        This is my portfolio project
      </h1>
      <p className="text-white">
        "CSE student at Chitkara University X Kalvium, learning about technology
        and enjoying new challenges. Always curious and ready to grow."
      </p>
      <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded">
        Get Started
      </button>
    </div>
  );
}

export default MyIntro;

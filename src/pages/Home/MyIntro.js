import React from "react";
import profile from "../../assets/pro.jpg"
function MyIntro() {
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8">
      <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-purple-500 to-pink-500 mb-6 sm:mb-8">
  <div className="w-full h-full rounded-full overflow-hidden">
    <img
      src={profile}
      alt="Subhadeep Samanta"
      className="w-full h-full object-cover"
    />
  </div>
</div>
      <h1 className="text-white">Hi , I am</h1>
      <h1 className="text-7xl sm:text-3xl text-secondary font-serif">
        Subhadeep Samanta
      </h1>
      <h1 className="text-5xl sm:text-3xl text-white font-semibold">
        This is my portfolio ✨
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

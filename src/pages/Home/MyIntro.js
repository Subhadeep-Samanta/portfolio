import React from "react";
import profile from "../../assets/pro.jpg";

function MyIntro() {
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 px-8 relative overflow-hidden">
      {/* Profile Image with Emerging Lines */}
      <div className="relative z-10 w-40 h-40 sm:w-48 sm:h-48 mb-8">
        {/* Three Emerging Curved Lines */}
        <svg 
          className="absolute -top-10 -left-10 w-[120%] h-[120%] z-0"
          viewBox="0 0 200 200"
          preserveAspectRatio="none"
        >
          {/* Line 1 (Left curve) */}
          <path
            d="M100,100 C50,50 0,100 0,200"
            stroke="rgba(236, 72, 153, 0.5)" // pink-500 with opacity
            strokeWidth="2"
            fill="none"
          />
          {/* Line 2 (Right curve) */}
          <path
            d="M100,100 C150,50 200,100 200,200"
            stroke="rgba(139, 92, 246, 0.5)" // purple-500 with opacity
            strokeWidth="2"
            fill="none"
          />
          {/* Line 3 (Center curve) */}
          <path
            d="M100,100 C100,0 100,150 100,200"
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>

        {/* Profile Image */}
        <div className="relative z-10 w-full h-full rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-purple-500 to-pink-500">
          <img
            src={profile}
            alt="Subhadeep Samanta"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* Text Content */}
      <h1 className="text-white relative z-10">Hi, I am</h1>
      <h1 className="text-7xl sm:text-5xl text-secondary font-serif relative z-10">
        Subhadeep Samanta
      </h1>
      <h1 className="text-5xl sm:text-3xl text-white font-semibold relative z-10">
        This is my portfolio project
      </h1>
      <p className="text-white max-w-md relative z-10">
        "CSE student at Chitkara University X Kalvium, learning about technology
        and enjoying new challenges. Always curious and ready to grow."
      </p>
      <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded hover:bg-tertiary hover:text-primary transition-colors relative z-10">
        Get Started
      </button>
    </div>
  );
}

export default MyIntro;
import React from "react";

function Leftsider() {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="https://www.facebook.com/siddharthasankar.samanta.5/">
            <i class="ri-facebook-circle-fill text-gray-600 text-xl"></i>
          </a>

          <i class="ri-mail-line text-gray-600 text-xl"></i>
          <a href="https://www.instagram.com/bak_bencher_1/?hl">
            <i class="ri-instagram-line text-gray-600 text-xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/subhadeep-samanta-550762254/">
            <i class="ri-linkedin-box-fill text-gray-600 text-xl"></i>
          </a>
          <a href="https://github.com/M1014deepking?tab=overview&from=2024-12-01&to=2024-12-31
          // ">
            <i class="ri-github-fill text-gray-600 text-xl"></i>
          </a>
          
        </div>
        <div className="w-[1px] h-52 bg-[#05bec451] sm:hidden"></div>
      </div>
    </div>
  );
}

export default Leftsider;

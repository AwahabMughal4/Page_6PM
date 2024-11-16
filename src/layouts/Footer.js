import React from "react";
import cap_ from "../assets/cap_.png";
import sneakers from "../assets/sneakers.png";
import perfumes from "../assets/perfumes.png";

function Footer() {
  return (
    <div className="flex flex-wrap rounded shadow-lg items-center justify-between gap-8 max-w-screen-xl mx-auto px-6 py-12 bg-[#796EFF] relative">
      {/* Cap Card */}
      <div className="rounded-lg flex flex-col items-center w-full sm:w-auto">
        <img
          src={cap_}
          alt="Cap"
          className="max-w-full h-auto object-contain mb-4 rounded-lg"
        />
      </div>

      {/* Perfumes Card */}
      <div className="rounded-lg flex flex-col items-center w-full sm:w-auto">
        <img
          src={perfumes}
          alt="Perfumes"
          className="max-w-full h-auto object-contain mb-4 rounded-lg"
        />
        <button
          type="button"
          className="bg-yellow-400 text-black rounded-full px-9 py-1"
        >
          See all
        </button>
      </div>

      {/* Sneakers Card */}
      <div className="rounded-lg flex flex-col items-center w-full sm:w-auto">
        <img
          src={sneakers}
          alt="Sneakers"
          className="max-w-full h-auto object-contain mb-4 rounded-lg"
        />
      </div>

      {/* Feature Products Section */}
      <div className="text-left text-white w-full sm:w-1/3">
        <h1 className="text-3xl font-bold">Our Feature Products</h1>
        <p className="text-lg leading-relaxed mt-4">
          If we define Buzz buy in three words, it will be elegant, classic, and
          high-quality.
        </p>
      </div>
    </div>
  );
}

export default Footer;

import React, { useState } from "react";

const ModulesAccordion = ({ modules }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-white rounded-md shadow border mr-4">
      <div className="bg-yellow-100 px-4 py-3 text-md text-center sm:text-left">
        Book a free demo call with us and get{" "}
        <span className="text-red-500 font-semibold">free</span> access to the{" "}
        <span className="text-blue-600 font-semibold">first lecture</span>.
        <button className="bg-blue-500 text-white ml-2 px-4 py-1 mt-2 sm:mt-0 rounded-md hover:bg-blue-600 text-sm">
          Book Now
        </button>
      </div>
      {modules.map((mod, idx) => (
        <div key={idx} className=" overflow-hidden">
          <button
            onClick={() => toggle(idx)}
            className="w-full text-left px-4 py-3 font-semibold text-[1.2rem] md:text-[1.4rem] hover:bg-blue-50 overflow-hidden flex justify-between items-center"
          >
            <div className="flex gap-2 items-center">
              <span className="text-blue-800">{mod.mo}</span>
              <span>{mod.title}</span>
            </div>

            <span className="text-2xl text-blue-700 font-bold pr-2">
              {activeIndex === idx ? "−" : "+"}
            </span>
          </button>

          <div
            className={`transition-all duration-300 ease-in-out ${
              activeIndex === idx ? "max-h-[500px]" : "max-h-0"
            } overflow-hidden`}
          >
            <ul className="px-6 pb-4 ml-8 mt-4 list-disc text-[1rem] md:text-[1.1rem] font-semibold text-gray-700 space-y-1">
              {mod.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ModulesAccordion;

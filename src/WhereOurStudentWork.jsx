import React from "react";

import eyLogo from "./assets/ey.png";
import dellLogo from "./assets/Dell.png";
import bcgLogo from "./assets/bcg.webp";
import vodafoneLogo from "./assets/Vodafone.png";
import hpLogo from "./assets/hp.jpg";
import boschLogo from "./assets/bosch.jpg";
import mphasisLogo from "./assets/mphasis.png";
import airbusLogo from "./assets/airbus.png";
import worldBankLogo from "./assets/World-Bank.jpg";
import worldMapImg from "./assets/world-map.jpg";

const companies = [
  { name: "EY", logo: eyLogo },
  { name: "Dell", logo: dellLogo },
  { name: "BCG", logo: bcgLogo },
  { name: "Vodafone", logo: vodafoneLogo },
  { name: "HP", logo: hpLogo },
  { name: "Bosch", logo: boschLogo },
  { name: "Mphasis", logo: mphasisLogo },
  { name: "Airbus", logo: airbusLogo },
  { name: "World Bank", logo: worldBankLogo },
];

export const WhereOurStudentWork = () => {
  return (
    <section className="bg-[#f0f6ff] py-12 px-6 h-[90vh]">
        <div className="max-w-[1360px] mx-auto flex flex-col justify-around lg:flex-row items-center lg:items-start gap-0">
          {/* Left Section */}

          <div className="text-start mt-10 flex-1 space-y-8">
            <h2 className="text-4xl font-bold text-gray-800">
              Where our students work
            </h2>
            <p className="text-2xl text-[#1a0e73]">
              The top choice for ambitious students, <br/> 
              professionals, and leading organizations.
            </p>
            <div className="space-y-5">
              <button className="w-[16rem] bg-gradient-to-b from-blue-600 to-blue-800 text-white font-semibold py-3 px-6 rounded-md shadow-md hover:opacity-90">
                Book a Free Demo
              </button>
              <br />
              <button className="w-[16rem] bg-gradient-to-b from-gray-700 to-gray-900 text-white font-semibold py-3 px-6 rounded-md shadow-md hover:bg-gray-800">
                Live Placements
              </button>
            </div>
          </div>

          {/* Right Section */}

          <div className="flex-1 p-12 py-12 rounded-xl w-full bg-cover bg-center" style={{backgroundImage:`url(${worldMapImg})`}} >
            <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center lg:text-left">
              Supporting Enterprises Around the Globe
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 " >
              {companies.map((company) => (
                <div
                  key={company.name}
                  className="bg-white shadow-md rounded-md p-4 flex items-center justify-center h-28 hover:shadow-xl hover:scale-[1.03] transition duration-300 ease-in-out"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      
    </section>
  );
};

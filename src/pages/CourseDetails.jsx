import couseImg1 from "../assets/course-img1.png";
import React, { useState } from "react";

import hpLogo from "../assets/hp.jpg";
import pwcLogo from "../assets/pwc.webp";
import samsungLogo from "../assets/samsung.jpg";
import teslaLogo from "../assets/Tesla.svg";
import cognizantLogo from "../assets/Cognizant.jpg";

const company = [
  { name: "hp", logo: hpLogo },
  { name: "pwc", logo: pwcLogo },
  { name: "samsung", logo: samsungLogo },
  { name: "tesla", logo: teslaLogo },
  { name: "cognizant", logo: cognizantLogo },
];

const modules = [
  {
    mod: "Module 1: ",
    title: "Detailed Understanding of Generative AI",
    points: [
      "Foundations of AI and ML: Difference between discriminative vs generative models",
      "Introduction to key Generative AI models",
      "The evolution from GPT-2 to GPT-4 / GPT-4o and beyond",
      "How GenAI models are trained, evaluated, and deployed",
      "Understanding ethical, legal, and societal implications (bias, misinformation, hallucinations)",
    ],
  },
  {
    mod: "Module 2: ",
    title: " Key Definitions & Concepts",
    points: [
      "LLMs (Large Language Models): Architecture overview",
      "(Transformers), Pretraining vs Fine-tuning, RLHF, Inference",
      "Embeddings: Vector representations, semantic similarity, use in search, recommendation, and RAG.",
      "Prompt Engineering: Role prompting, chain-of-thought, few-shot prompting, constraint-based prompting.",
      "Prompt testing, evaluation metrics, and iterative refinement.",
      "Fine-Tuning: When to fine-tune vs use APIs",
      "Tools: Hugging Face, LangChain, OpenAI API",
    ],
  },
  {
    mod: "Module 3: ",
    title: " Industry Use Cases & Implementable Ideas",
    points: [
      "Selecting a base model (GPT, Claude, open-source alternatives)",
      "Designing conversation flow and behavior using prompt chaining",
      "Integrating memory, tools (search, calculators), and APIs.",
      "Adding an open source UI to different models",
    ],
  },
  {
    mod: "Module 4: ",
    title: " Hands-on Experience: Creating a Chatbot",
    points: [
      "Shift from LLMs to multi-modal AI (text, image, video, code)",
      "Role of agents and tool-use",
      "Open-source vs proprietary ecosystems",
      "Compliance, safety layers, and trust-building in enterprise GenAI",
      "Emerging roles: AI product managers, prompt engineers, AI ethics leads",
    ],
  },
  {
    mod: "Module 5: ",
    title: " Future Trends & Staying Relevant",
    points: [
      "Introduction to VAEs",
      "Understanding Autoencoders and Variational Autoencoders",
      "Mathematical Foundations of VAEs",
      "Applications of VAEs in Image Generation and Data Imputation",
      "Hands-on Project: Building and Training a VAE",
    ],
  },
];

export default function CourseDetails() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleModule = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <section className="bg-blue-950 py-12 px-4">
        <div className="max-w-[1360px] bg-white rounded-2xl mx-auto px-6 py-6 flex flex-col lg:flex-row justify-around gap-8 items-center">
          {/* Text Block */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-4xl font-bold text-gray-800">
              Generative AI
            </h1>
            <p className="text-gray-600 text-xl md:text-lg">
              Generative AI (GenAI) is a branch of artificial
              <br /> intelligence that creates new content such as text, images,
              <br /> music, and videos, by learning patterns from large
              datasets.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-xl font-medium">
              <span>⭐ 4.6</span>
              <span>16.7 hrs of content</span>
              <a href="#" download className="text-blue-400 underline">
                Download Brochure
              </a>
            </div>
            <div className="flex gap-8 items-center">
              <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
                Enroll Now
              </button>
              <span className="text-xl block">at ₹ 1X,XXX /only</span>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src={couseImg1}
              alt="Course"
              className="w-full max-w-[36rem] h-auto rounded-xl"
            />
          </div>
        </div>
      </section>

      <section className="relative  mt-12">
        <div className="max-w-[1360px] bg-white text-start rounded-2xl mx-auto px-6 py-8 flex flex-col justify-between lg:flex-row gap-10">
          {/* Left - Accordion Section */}
          <div className=" text-start lg:text-left items-center">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">What you'll learn</h2>
            </div>

            <div className="bg-white shadow rounded-md border">
              <div className="bg-yellow-100 px-4 py-3 text-md text-center sm:text-left">
                Book a free demo call with us and get{" "}
                <span className="text-red-500 font-semibold">free</span> access
                to the{" "}
                <span className="text-blue-600 font-semibold">
                  first lecture
                </span>
                .
                <button className="bg-blue-500 text-white ml-2 px-4 py-1 mt-2 sm:mt-0 rounded-md hover:bg-blue-600 text-sm">
                  Book Now
                </button>
              </div>

              {modules.map((module, index) => (
                <div key={index} className="border-t overflow-hidden">
                  <button
                    onClick={() => toggleModule(index)}
                    className="w-full text-left px-4 py-3 font-semibold text-[1.2rem] md:text-[1.4rem] hover:bg-blue-50 flex justify-between items-center"
                  >
                    <div className="flex gap-2 items-center">
                      <span className="text-blue-800">{module.mod}</span>
                      <span>{module.title}</span>
                    </div>

                    <span className="text-2xl text-blue-700 font-bold pr-2">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      openIndex === index ? "max-h-[500px]" : "max-h-0"
                    } overflow-hidden`}
                  >
                    <ul className="px-6 pb-4 ml-8 mt-4 list-disc text-[1rem] md:text-[1.1rem] font-semibold text-gray-700 space-y-1">
                      {module.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Promo Box */}
          <div className=" mt-8">
            <div className="bg-gradient-to-br from-blue-800 to-blue-950 text-white p-6 rounded-2xl shadow-md space-y-4 text-start">
              <h3 className="text-xl font-semibold uppercase">Online Training</h3>
              <h2 className="text-3xl font-extrabold">Generative AI</h2>
              <p className="uppercase">Transition to it | Upskill <br/>Yourself | Secure Your Future</p>
              <p className="bg-gradient-to-l from-gray-200 to-gray-400 text-blue-800 inline-block px-4 py-1 font-semibold rounded-lg text-xl">
                100% Placement Assistance
              </p>
              <ul className="text-md space-y-2 pt-2 list-disc ml-4">
                <li> EMI Option Available</li>
                <li> Personalized Coaching</li>
                <li> 24 Hours Mentor Support</li>
                <li> Get Certificate</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      

      <section className="mt-8 px-4">
        <div className="max-w-[1360px] bg-white mx-auto py-6 px-6 mb-12 rounded-2xl shadow-md flex justify-between">
          <div>
            <h3 className="text-xl font-bold mb-4 text-center md:text-left">
              We are <br />
              widely accredited
            </h3>
          </div>

          <div className="flex justify-center md:justify-start items-center gap-36 mr-12">
            {company.map((compan) => (
              <img
                key={compan.name}
                src={compan.logo}
                alt={compan.name}
                className="h-12 w-auto object-contain bg-white"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

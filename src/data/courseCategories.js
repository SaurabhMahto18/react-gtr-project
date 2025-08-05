// src/data/courseCategories.js
import courseImg from "../assets/course-img1.png"; // use actual course images if available

const courseCategories = [
  {
    title: "SAP FUNCTIONAL",
    courses: [
      {
        name: "SAP ARIBA S/4 HANA",
        instructor: "Vijay H",
        hours: 60,
        students: 950,
        modules: 10,
        rating: 4.9,
        price: 29500,
        oldPrice: 60000,
        thumbnail: courseImg,
        slug: "sap-ariba-s4-hana",
        level: "Advanced",
        description:
          "Our SAP Ariba course provides in-depth training on cloud-based procurement and supply chain.",
        bannerImage: "/assets/sap-ariba-banner.png",
        modulesData: [
          {
            title: "Module 1: Introduction to SAP Ariba",
            points: ["Overview of Ariba Network", "Integration with S/4 HANA"],
          },
          {
            title: "Module 2: Procurement Solutions",
            points: ["Sourcing", "Contract Management"],
          },
        ],
      },
      {
        name: "SAP EWM S/4 HANA",
        instructor: "MD Saquib",
        hours: 60,
        students: 930,
        modules: 8,
        rating: 4.9,
        price: 29500,
        oldPrice: 60000,
        thumbnail: courseImg,
        slug: "sap-ewm-s4-hana",
        level: "Advanced",
        description:
          "Master Extended Warehouse Management in SAP S/4 HANA through hands-on modules and real scenarios.",
        bannerImage: "/assets/sap-ewm-banner.png",
        modulesData: [
          {
            title: "Module 1: Warehouse Basics",
            points: ["Inbound & Outbound Processes", "Stock Management"],
          },
          {
            title: "Module 2: Integration & Reporting",
            points: ["RF Framework", "EWM and ERP Integration"],
          },
        ],
      },
      {
        name: "SAP FICO S/4 HANA",
        instructor: "Arjun Rawat",
        hours: 50,
        students: 789,
        modules: 15,
        rating: 4.8,
        price: 29500,
        oldPrice: 60000,
        thumbnail: courseImg,
        slug: "sap-fico-s4-hana",
        level: "Advanced",
        description:
          "Covers SAP FICO implementation, end-user activities, and configuration for professionals and beginners.",
        bannerImage: "/assets/sap-fico-banner.png",
        modulesData: [
          {
            title: "Module 1: Financial Accounting",
            points: ["General Ledger", "Accounts Payable"],
          },
          {
            title: "Module 2: Controlling",
            points: ["Cost Centers", "Profit Centers"],
          },
        ],
      },
      {
        name: "SAP HCM",
        instructor: "Arjun Rawat",
        hours: 50,
        students: 789,
        modules: 15,
        rating: 4.8,
        price: 29500,
        oldPrice: 60000,
        thumbnail: courseImg,
        slug: "sap-fico-s4-hana",
        level: "Advanced",
        description:
          "Covers SAP FICO implementation, end-user activities, and configuration for professionals and beginners.",
        bannerImage: "/assets/sap-fico-banner.png",
        modulesData: [
          {
            title: "Module 1: Financial Accounting",
            points: ["General Ledger", "Accounts Payable"],
          },
          {
            title: "Module 2: Controlling",
            points: ["Cost Centers", "Profit Centers"],
          },
        ],
      },
      {
        name: "SAP MM S/4 HANA",
        instructor: "Arjun Rawat",
        hours: 50,
        students: 789,
        modules: 15,
        rating: 4.8,
        price: 29500,
        oldPrice: 60000,
        thumbnail: courseImg,
        slug: "sap-mm-s4-hana",
        level: "Advanced",
        description:
          "Covers SAP FICO implementation, end-user activities, and configuration for professionals and beginners.",
        bannerImage: "/assets/sap-fico-banner.png",
        modulesData: [
          {
            title: "Module 1: Financial Accounting",
            points: ["General Ledger", "Accounts Payable"],
          },
          {
            title: "Module 2: Controlling",
            points: ["Cost Centers", "Profit Centers"],
          },
        ],
      },
      {
        name: "SAP PM/EAM S/4 HANA",
        instructor: "Arjun Rawat",
        hours: 50,
        students: 789,
        modules: 15,
        rating: 4.8,
        price: 29500,
        oldPrice: 60000,
        thumbnail: courseImg,
        slug: "sap-pm/eam-s4-hana",
        level: "Advanced",
        description:
          "Covers SAP FICO implementation, end-user activities, and configuration for professionals and beginners.",
        bannerImage: "/assets/sap-fico-banner.png",
        modulesData: [
          {
            title: "Module 1: Financial Accounting",
            points: ["General Ledger", "Accounts Payable"],
          },
          {
            title: "Module 2: Controlling",
            points: ["Cost Centers", "Profit Centers"],
          },
        ],
      },
      {
        name: "SAP PP S/4 HANA",
        instructor: "Arjun Rawat",
        hours: 50,
        students: 789,
        modules: 15,
        rating: 4.8,
        price: 29500,
        oldPrice: 60000,
        thumbnail: courseImg,
        slug: "sap-pp-s4-hana",
        level: "Advanced",
        description:
          "Covers SAP FICO implementation, end-user activities, and configuration for professionals and beginners.",
        bannerImage: "/assets/sap-fico-banner.png",
        modulesData: [
          {
            title: "Module 1: Financial Accounting",
            points: ["General Ledger", "Accounts Payable"],
          },
          {
            title: "Module 2: Controlling",
            points: ["Cost Centers", "Profit Centers"],
          },
        ],
      },
      {
        name: "SAP SD S/4 HANA",
        instructor: "Arjun Rawat",
        hours: 50,
        students: 789,
        modules: 15,
        rating: 4.8,
        price: 29500,
        oldPrice: 60000,
        thumbnail: courseImg,
        slug: "sap-sd-s4-hana",
        level: "Advanced",
        description:
          "Covers SAP FICO implementation, end-user activities, and configuration for professionals and beginners.",
        bannerImage: "/assets/sap-fico-banner.png",
        modulesData: [
          {
            title: "Module 1: Financial Accounting",
            points: ["General Ledger", "Accounts Payable"],
          },
          {
            title: "Module 2: Controlling",
            points: ["Cost Centers", "Profit Centers"],
          },
        ],
      },
      {
        name: "SAP TM S/4 HANA",
        instructor: "Arjun Rawat",
        hours: 50,
        students: 789,
        modules: 15,
        rating: 4.8,
        price: 29500,
        oldPrice: 60000,
        thumbnail: courseImg,
        slug: "sap-tm-s4-hana",
        level: "Advanced",
        description:
          "Covers SAP FICO implementation, end-user activities, and configuration for professionals and beginners.",
        bannerImage: "/assets/sap-fico-banner.png",
        modulesData: [
          {
            title: "Module 1: Financial Accounting",
            points: ["General Ledger", "Accounts Payable"],
          },
          {
            title: "Module 2: Controlling",
            points: ["Cost Centers", "Profit Centers"],
          },
        ],
      },
      {
        name: "SAP WM",
        instructor: "Arjun Rawat",
        hours: 50,
        students: 789,
        modules: 15,
        rating: 4.8,
        price: 29500,
        oldPrice: 60000,
        thumbnail: courseImg,
        slug: "sap-wm",
        level: "Advanced",
        description:
          "Covers SAP FICO implementation, end-user activities, and configuration for professionals and beginners.",
        bannerImage: "/assets/sap-fico-banner.png",
        modulesData: [
          {
            title: "Module 1: Financial Accounting",
            points: ["General Ledger", "Accounts Payable"],
          },
          {
            title: "Module 2: Controlling",
            points: ["Cost Centers", "Profit Centers"],
          },
        ],
      },
    ],
  },
  {
    title: "SAP TECHNICAL",
    courses: [
      {
        name: "SAP ABAP S/4 HANA",
        instructor: "Ravi Kumar",
        hours: 55,
        students: 800,
        modules: 12,
        rating: 4.8,
        price: 29500,
        oldPrice: 60000,
        thumbnail: courseImg,
        slug: "sap-abap-s4-hana",
        level: "Intermediate",
        description:
          "Learn ABAP development on the SAP S/4HANA platform with practical examples and hands-on sessions.",
        bannerImage: "/assets/sap-abap-banner.png",
        modulesData: [
          {
            title: "Module 1: Core ABAP",
            points: ["Data Dictionary", "Reports"],
          },
          {
            title: "Module 2: ABAP on HANA",
            points: ["CDS Views", "AMDP"],
          },
        ],
      },

      {
        name: "SAP BASIC S/4 HANA",
        instructor: "Ravi Kumar",
        hours: 55,
        students: 800,
        modules: 12,
        rating: 4.8,
        price: 29500,
        oldPrice: 60000,
        thumbnail: courseImg,
        slug: "sap-basic-s4-hana",
        level: "Intermediate",
        description:
          "Learn ABAP development on the SAP S/4 HANA platform with practical examples and hands-on sessions.",
        bannerImage: "/assets/sap-basic-banner.png",
        modulesData: [
          {
            title: "Module 1: Core ABAP",
            points: ["Data Dictionary", "Reports"],
          },
          {
            title: "Module 2: ABAP on HANA",
            points: ["CDS Views", "AMDP"],
          },
        ],
      },
      {
        name: "SAP DATASPHERE S/4 HANA",
        instructor: "Ravi Kumar",
        hours: 55,
        students: 800,
        modules: 12,
        rating: 4.8,
        price: 29500,
        oldPrice: 60000,
        thumbnail: courseImg,
        slug: "sap-datasphere-s4-hana",
        level: "Intermediate",
        description:
          "Learn ABAP development on the SAP S/4 HANA platform with practical examples and hands-on sessions.",
        bannerImage: "/assets/sap-abap-banner.png",
        modulesData: [
          {
            title: "Module 1: Core ABAP",
            points: ["Data Dictionary", "Reports"],
          },
          {
            title: "Module 2: ABAP on HANA",
            points: ["CDS Views", "AMDP"],
          },
        ],
      },
      {
        name: "SAP BTP",
        instructor: "Ravi Kumar",
        hours: 55,
        students: 800,
        modules: 12,
        rating: 4.8,
        price: 29500,
        oldPrice: 60000,
        thumbnail: courseImg,
        slug: "sap-btp",
        level: "Intermediate",
        description:
          "Learn ABAP development on the SAP S/4HANA platform with practical examples and hands-on sessions.",
        bannerImage: "/assets/sap-abap-banner.png",
        modulesData: [
          {
            title: "Module 1: Core ABAP",
            points: ["Data Dictionary", "Reports"],
          },
          {
            title: "Module 2: ABAP on HANA",
            points: ["CDS Views", "AMDP"],
          },
        ],
      },
      {
        name: "SAP BW4 HANA",
        instructor: "Ravi Kumar",
        hours: 55,
        students: 800,
        modules: 12,
        rating: 4.8,
        price: 29500,
        oldPrice: 60000,
        thumbnail: courseImg,
        slug: "sap-bw4-hana",
        level: "Intermediate",
        description:
          "Learn ABAP development on the SAP S/4HANA platform with practical examples and hands-on sessions.",
        bannerImage: "/assets/sap-abap-banner.png",
        modulesData: [
          {
            title: "Module 1: Core ABAP",
            points: ["Data Dictionary", "Reports"],
          },
          {
            title: "Module 2: ABAP on HANA",
            points: ["CDS Views", "AMDP"],
          },
        ],
      },
      {
        name: "SAP U15 FIORI S/4 HANA",
        instructor: "Ravi Kumar",
        hours: 55,
        students: 800,
        modules: 12,
        rating: 4.8,
        price: 29500,
        oldPrice: 60000,
        thumbnail: courseImg,
        slug: "sap-u15-fiori-s4-hana",
        level: "Intermediate",
        description:
          "Learn ABAP development on the SAP S/4HANA platform with practical examples and hands-on sessions.",
        bannerImage: "/assets/sap-abap-banner.png",
        modulesData: [
          {
            title: "Module 1: Core ABAP",
            points: ["Data Dictionary", "Reports"],
          },
          {
            title: "Module 2: ABAP on HANA",
            points: ["CDS Views", "AMDP"],
          },
        ],
      },
      {
        name: "SAP CPI",
        instructor: "Ravi Kumar",
        hours: 55,
        students: 800,
        modules: 12,
        rating: 4.8,
        price: 29500,
        oldPrice: 60000,
        thumbnail: courseImg,
        slug: "sap-cpi",
        level: "Intermediate",
        description:
          "Learn ABAP development on the SAP S/4HANA platform with practical examples and hands-on sessions.",
        bannerImage: "/assets/sap-abap-banner.png",
        modulesData: [
          {
            title: "Module 1: Core ABAP",
            points: ["Data Dictionary", "Reports"],
          },
          {
            title: "Module 2: ABAP on HANA",
            points: ["CDS Views", "AMDP"],
          },
        ],
      },
      {
        name: "SAP DATA MIGRATION & BODS",
        instructor: "Ravi Kumar",
        hours: 55,
        students: 800,
        modules: 12,
        rating: 4.8,
        price: 29500,
        oldPrice: 60000,
        thumbnail: courseImg,
        slug: "sap-data-migration-bods",
        level: "Intermediate",
        description:
          "Learn ABAP development on the SAP S/4HANA platform with practical examples and hands-on sessions.",
        bannerImage: "/assets/sap-abap-banner.png",
        modulesData: [
          {
            title: "Module 1: Core ABAP",
            points: ["Data Dictionary", "Reports"],
          },
          {
            title: "Module 2: ABAP on HANA",
            points: ["CDS Views", "AMDP"],
          },
        ],
      },
    ],
  },

  {
    title: "SAP SUCESS FACTOR",
    courses: [
      {
        name: "Sap Sucess Factors Onboarding 2.0",
        instructor: "Shreya Mehta",
        hours: 70,
        students: 1200,
        modules: 14,
        rating: 4.9,
        price: 32000,
        oldPrice: 65000,
        thumbnail: courseImg,
        slug: "sap-sucess-factor-onboarding-2.0",
        level: "Beginner",
        description:
          "An end-to-end data science course covering Python, Pandas, Numpy, ML models, and deployment.",
        bannerImage: "/assets/data-science-banner.png",
        modulesData: [
          {
            title: "Module 1: Python Essentials",
            points: ["Data Types", "Functions", "Loops"],
          },
          {
            title: "Module 2: Data Analysis",
            points: ["Pandas", "Numpy", "Exploratory Data Analysis"],
          },
        ],
      },
      {
        name: "Sap Sucess Factors EC Payroll and LMS Trainig.",
        instructor: "Raju Mehta",
        hours: 70,
        students: 1200,
        modules: 14,
        rating: 4.9,
        price: 32000,
        oldPrice: 65000,
        thumbnail: courseImg,
        slug: "sap-sucess-factor-ec-payroll-and-lms-training",
        level: "Beginner",
        description:
          "An end-to-end data science course covering Python, Pandas, Numpy, ML models, and deployment.",
        bannerImage: "/assets/data-science-banner.png",
        modulesData: [
          {
            title: "Module 1: Python Essentials",
            points: ["Data Types", "Functions", "Loops"],
          },
          {
            title: "Module 2: Data Analysis",
            points: ["Pandas", "Numpy", "Exploratory Data Analysis"],
          },
        ],
      },
      {
        name: "Sap Sucess Factors",
        instructor: "Shreya Mehta",
        hours: 70,
        students: 1200,
        modules: 14,
        rating: 4.9,
        price: 32000,
        oldPrice: 65000,
        thumbnail: courseImg,
        slug: "sap-sucess-factors",
        level: "Beginner",
        description:
          "An end-to-end data science course covering Python, Pandas, Numpy, ML models, and deployment.",
        bannerImage: "/assets/data-science-banner.png",
        modulesData: [
          {
            title: "Module 1: Python Essentials",
            points: ["Data Types", "Functions", "Loops"],
          },
          {
            title: "Module 2: Data Analysis",
            points: ["Pandas", "Numpy", "Exploratory Data Analysis"],
          },
        ],
      },
    ],
  },

  {
    title: "DATA SCIENCE",
    courses: [
      {
        name: "Generative AI",
        instructor: "Shreya Mehta",
        hours: 70,
        students: 1200,
        modules: 14,
        rating: 4.9,
        price: 32000,
        oldPrice: 65000,
        thumbnail: courseImg,
        slug: "generative-ai",
        level: "Beginner",
        description:
          "Generative AI (GenAI) is a branch of artificial intelligence that creates new content such as text, images, music, and videos, by learning patterns from large datasets.",
        bannerImage: "/assets/data-science-banner.png",
        modulesData: [
          {
            mo: "Module 1: ",
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
            mo: "Module 2: ",
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
            mo: "Module 3: ",
            title: " Industry Use Cases & Implementable Ideas",
            points: [
              "Selecting a base model (GPT, Claude, open-source alternatives)",
              "Designing conversation flow and behavior using prompt chaining",
              "Integrating memory, tools (search, calculators), and APIs.",
              "Adding an open source UI to different models",
            ],
          },
          {
            mo: "Module 4: ",
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
            mo: "Module 5: ",
            title: " Future Trends & Staying Relevant",
            points: [
              "Introduction to VAEs",
              "Understanding Autoencoders and Variational Autoencoders",
              "Mathematical Foundations of VAEs",
              "Applications of VAEs in Image Generation and Data Imputation",
              "Hands-on Project: Building and Training a VAE",
            ],
          },
        ],
      },
      {
        name: "Data Science AI",
        instructor: "Shreya Mehta",
        hours: 70,
        students: 1200,
        modules: 14,
        rating: 4.9,
        price: 32000,
        oldPrice: 65000,
        thumbnail: courseImg,
        slug: "data-science-ai",
        level: "Beginner",
        description:
          "An end-to-end data science course covering Python, Pandas, Numpy, ML models, and deployment.",
        bannerImage: "/assets/data-science-banner.png",
        modulesData: [
          {
            title: "Module 1: Python Essentials",
            points: ["Data Types", "Functions", "Loops"],
          },
          {
            title: "Module 2: Data Analysis",
            points: ["Pandas", "Numpy", "Exploratory Data Analysis"],
          },
        ],
      },
      {
        name: "Data Analyst",
        instructor: "Shreya Mehta",
        hours: 70,
        students: 1200,
        modules: 14,
        rating: 4.9,
        price: 32000,
        oldPrice: 65000,
        thumbnail: courseImg,
        slug: "data-analyst",
        level: "Beginner",
        description:
          "An end-to-end data science course covering Python, Pandas, Numpy, ML models, and deployment.",
        bannerImage: "/assets/data-science-banner.png",
        modulesData: [
          {
            title: "Module 1: Python Essentials",
            points: ["Data Types", "Functions", "Loops"],
          },
          {
            title: "Module 2: Data Analysis",
            points: ["Pandas", "Numpy", "Exploratory Data Analysis"],
          },
        ],
      },
      {
        name: "Advance Excel",
        instructor: "Shreya Mehta",
        hours: 70,
        students: 1200,
        modules: 14,
        rating: 4.9,
        price: 32000,
        oldPrice: 65000,
        thumbnail: courseImg,
        slug: "advance-excel",
        level: "Beginner",
        description:
          "An end-to-end data science course covering Python, Pandas, Numpy, ML models, and deployment.",
        bannerImage: "/assets/data-science-banner.png",
        modulesData: [
          {
            title: "Module 1: Python Essentials",
            points: ["Data Types", "Functions", "Loops"],
          },
          {
            title: "Module 2: Data Analysis",
            points: ["Pandas", "Numpy", "Exploratory Data Analysis"],
          },
        ],
      },
      {
        name: "Power BI with AI",
        instructor: "Shreya Mehta",
        hours: 70,
        students: 1200,
        modules: 14,
        rating: 4.9,
        price: 32000,
        oldPrice: 65000,
        thumbnail: courseImg,
        slug: "power-bi-with-ai",
        level: "Beginner",
        description:
          "An end-to-end data science course covering Python, Pandas, Numpy, ML models, and deployment.",
        bannerImage: "/assets/data-science-banner.png",
        modulesData: [
          {
            title: "Module 1: Python Essentials",
            points: ["Data Types", "Functions", "Loops"],
          },
          {
            title: "Module 2: Data Analysis",
            points: ["Pandas", "Numpy", "Exploratory Data Analysis"],
          },
        ],
      },
    ],
  },

  {
    title: "Others Courses",
    courses: [
      {
        name: "VLSI",
        instructor: "Shreya Mehta",
        hours: 70,
        students: 1200,
        modules: 14,
        rating: 4.9,
        price: 32000,
        oldPrice: 65000,
        thumbnail: courseImg,
        slug: "vlsi",
        level: "Beginner",
        description:
          "An end-to-end data science course covering Python, Pandas, Numpy, ML models, and deployment.",
        bannerImage: "/assets/data-science-banner.png",
        modulesData: [
          {
            title: "Module 1: Python Essentials",
            points: ["Data Types", "Functions", "Loops"],
          },
          {
            title: "Module 2: Data Analysis",
            points: ["Pandas", "Numpy", "Exploratory Data Analysis"],
          },
        ],
      },
      {
        name: "Python With Fast API",
        instructor: "Shreya Mehta",
        hours: 70,
        students: 1200,
        modules: 14,
        rating: 4.9,
        price: 32000,
        oldPrice: 65000,
        thumbnail: courseImg,
        slug: "python-with-fast-api",
        level: "Beginner",
        description:
          "An end-to-end data science course covering Python, Pandas, Numpy, ML models, and deployment.",
        bannerImage: "/assets/data-science-banner.png",
        modulesData: [
          {
            title: "Module 1: Python Essentials",
            points: ["Data Types", "Functions", "Loops"],
          },
          {
            title: "Module 2: Data Analysis",
            points: ["Pandas", "Numpy", "Exploratory Data Analysis"],
          },
        ],
      },
    ],
  },
];

export default courseCategories;

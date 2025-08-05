// GTRAcademyChatbot.jsx
import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";
import { BsChatDots } from "react-icons/bs";

const GTRAcademyChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState("welcome");
  const [history, setHistory] = useState([]);
  const [userData, setUserData] = useState({ name: "", email: "" });
  const [selectedCourse, setSelectedCourse] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const goToStep = (newStep) => {
    setHistory((prev) => [...prev, step]);
    setStep(newStep);
  };

  const goBack = () => {
    const prev = [...history];
    const last = prev.pop();
    setStep(last || "welcome");
    setHistory(prev);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    goToStep("courseDetails");
  };

  const courseList = [
    "SAP FICO", "SAP MM S/4 HANA", "SAP ARIBA", "SAP SD S/4HANA",
    "SAP ABAP S/4 HANA", "SAP BTP", "SAP CPI", "VLSI", "Data Science AI",
    "Data Analyst", "Power BI", "Advanced Excel"
  ];

  const courseInfo = {
    "SAP ABAP S/4 HANA": `🎉 Great Choice! Here’s what you’ll get in this course:\n\n190,000+ strong network, Global expertise, practical skills, & ethical leadership.\n• Learn LIVE from the Masters of Industry\n• Real life Case-studies and Projects\n• Greenfield Implementation project experience\n• Placement Preparations & Mock interviews\n• Resume preparation\n• Huge database of training documents\n\nDelivered online with a certificate. Covers ABAP syntax, OData, ALV, BDC, module pool, etc.\n\n📄 Course Brochure: - \n🎥 Demo Video: - \n💬 Feedback1: - \n💬 Feedback2: - \n🔗 Course Link: - \n💰 Fee & EMI: -\n\nPlacement Process: Once you reach 50% learning progress, recruiters can view your profile.\n\n✅ Would you like to Book a Free Counselling Session? [✅ Yes | ❌ No]`
  };

  const renderStep = () => {
    const inputClass = "border p-2 rounded w-full mb-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";
    const btnClass = "bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition duration-300 w-full";

    const backButton = (
      <button onClick={goBack} className="text-xs text-gray-500 hover:text-blue-600 underline">⬅️ Previous</button>
    );

    switch (step) {
      case "welcome":
        return (
          <div className="space-y-2">
            <p className="text-gray-800">👋 Hi, Welcome to <span className="font-semibold text-blue-700">GTR Academy</span> – Your Career Growth Partner!</p>
            <p className="text-gray-600">👉 Please share your Name and Email to get started.</p>
            <input name="name" placeholder="Your Name" value={userData.name} onChange={handleInput} className={inputClass} />
            <input name="email" placeholder="Your Email" value={userData.email} onChange={handleInput} className={inputClass} />
            <button onClick={() => goToStep("mainOptions")} className={btnClass}>Submit</button>
          </div>
        );

      case "mainOptions":
        return (
          <div className="space-y-2">
            <p className="text-gray-800">💡 What would you like to explore today?</p>
            <div className="grid grid-cols-1 gap-2">
              <button onClick={() => goToStep("exploreCourses")} className={btnClass}>📚 Explore Available Courses</button>
              <a href="https://wa.link/r5hpop" target="_blank" className={btnClass}>🤝 I Want Support</a>
              <button onClick={() => goToStep("placementInfo")} className={btnClass}>🎓 Know About Placement Ecosystem Portal</button>
              <a href="https://outlook.office365.com/book/CouncellerConnect@rootbix.com/?ismsaljsauthenabled=true" target="_blank" className={btnClass}>🗣 Live Connect with Counsellor</a>
              <a href="https://forms.gle/VuqEqyjKhvSdHQkf6" target="_blank" className={btnClass}>🏢 Want to Hire Candidates</a>
            </div>
            {backButton}
          </div>
        );

      case "exploreCourses":
        return (
          <div>
            <p className="text-gray-800 font-medium mb-2">✅ Select a course to view details:</p>
            <div className="grid grid-cols-1 gap-2">
              {courseList.map((c, i) => (
                <button key={i} onClick={() => handleCourseSelect(c)} className={btnClass}>{c}</button>
              ))}
            </div>
            <div className="mt-2">{backButton}</div>
          </div>
        );

      case "courseDetails":
        return (
          <div className="space-y-4">
            <p className="text-sm text-gray-700 whitespace-pre-wrap">{courseInfo[selectedCourse] || `Details coming soon for ${selectedCourse}`}</p>
            <div className="flex gap-4">
              <a href="https://outlook.office365.com/book/CouncellerConnect@rootbix.com/?ismsaljsauthenabled=true" target="_blank" className={btnClass}>✅ Yes</a>
              <button onClick={() => goToStep("exploreCourses")} className={btnClass}>❌ No</button>
            </div>
            {backButton}
          </div>
        );

      case "placementInfo":
        return (
          <div className="space-y-2">
            <p className="text-gray-800 font-medium">🌟 GTR Academy provides exclusive placement support through our Ecosystem Portal.</p>
            <p className="text-gray-600 text-sm">HRs can view your profile, attendance, and progress once you're 50% through the course. Over 200+ recruiters are ready to hire!</p>
            {backButton}
          </div>
        );

      default:
        return <p className="text-gray-700">Let’s get started!</p>;
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="w-80 bg-white rounded-2xl shadow-2xl p-4 border border-gray-200">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-lg text-blue-700">💬 GTR Academy Chatbot</h3>
            <button onClick={toggleChat} className="text-gray-500 hover:text-red-500">✖️</button>
          </div>
          <div className="text-sm space-y-4 max-h-[400px] overflow-y-auto">
            {renderStep()}
          </div>
        </div>
      )}
      {!isOpen && (
        <button onClick={toggleChat} className="bg-blue-700 text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform">
          <BsChatDots size={24} />
        </button>
      )}
    </div>
  );
};

export default GTRAcademyChatbot;

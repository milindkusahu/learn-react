import { useState } from "react";
import { ChevronDown } from "lucide-react";
import data from "./data";

const Accordion = () => {
  const [questions, setQuestions] = useState(data);
  const [openId, setOpenId] = useState(null); // Track which accordion is open by its ID

  const handleAccordion = (id) => {
    setOpenId(openId === id ? null : id); // Toggle open/close for clicked accordion
  };

  return (
    <div className="w-1/2">
      {questions.map((ele) => (
        <div
          className="bg-gradient-to-r from-blue-700 to-blue-500 shadow-lg rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300 mb-4"
          onClick={() => handleAccordion(ele.id)}
          key={ele.id}
        >
          <div className="p-6 flex justify-between items-center">
            <h3 className="text-white text-lg font-semibold">{ele.title}</h3>
            <ChevronDown
              className={`text-white transition-transform duration-300 ${
                openId === ele.id ? "rotate-180" : ""
              }`}
              size={24}
            />
          </div>

          {openId === ele.id && (
            <p className="px-6 pb-6 text-white">{ele.info}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Accordion = () => {
  const [accordion, setAccordion] = useState(false);

  const handleAccordion = () => {
    setAccordion(!accordion);
  };

  return (
    <div className="w-1/2">
      <div
        className="bg-gradient-to-r from-blue-700 to-blue-500 shadow-lg rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
        onClick={handleAccordion}
      >
        <div className="p-6 flex justify-between items-center">
          <h3 className="text-white text-lg font-semibold">
            Do I have to allow the use of cookies?
          </h3>
          <ChevronDown
            className={`text-white transition-transform duration-300 ${
              accordion ? "rotate-180" : ""
            }`}
            size={24}
          />
        </div>

        {accordion && (
          <p className="px-6 pb-6 text-white">
            Unicorn vinyl poutine brooklyn, next level direct trade iceland.
            Shaman copper mug church-key coloring book, whatever poutine
            normcore fixie cred kickstarter post-ironic street art.
          </p>
        )}
      </div>

      <div
        className="bg-gradient-to-r from-blue-700 to-blue-500 shadow-lg rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300 mt-6"
        onClick={handleAccordion}
      >
        <div className="p-6 flex justify-between items-center">
          <h3 className="text-white text-lg font-semibold">
            How do I change my My Page password?
          </h3>
          <ChevronDown
            className={`text-white transition-transform duration-300 ${
              accordion ? "rotate-180" : ""
            }`}
            size={24}
          />
        </div>

        {accordion && (
          <p className="px-6 pb-6 text-white">
            Coloring book forage photo booth gentrify lumbersexual. Migas
            chillwave poutine synth shoreditch, enamel pin thundercats fashion
            axe roof party polaroid chartreuse.
          </p>
        )}
      </div>
    </div>
  );
};

export default Accordion;

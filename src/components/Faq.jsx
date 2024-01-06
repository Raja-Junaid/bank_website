import { useState } from "react";
import { faqs } from "../constants";
import { downArrow, upArrow } from "../assets";
import styles from "../style";

const Faq = () => {
  const [toggles, setToggles] = useState(Array(faqs.length).fill(false));

  const handleToggle = (index) => {
    setToggles((prevToggles) => {
      const newToggles = [...prevToggles];
      newToggles[index] = !newToggles[index];
      return newToggles;
    });
  };

  return (
    <div className="max-container relative">
        <div className="bg-gradient-2 rounded-full w-[400px] h-[400px] absolute top-0 -left-[99%] opacity-[70%] md:opacity-90 md:-left-[30%] xl:-left-[35%] min-[1920px]:hidden"></div>
      
        <div className="mx-auto">
          <h2 className={`${styles.heading2} mb-11 lg:mb-[4.2rem] leading-[40px] text-center`}>Frequently Asked Questions</h2>
        </div>

        <div className='flex flex-col gap-y-10'>
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`px-5 py-4 rounded-lg border border-zinc-600 customShadow2 transition-all ease-in cursor-pointer bg-white z-10`}
              onClick={() => handleToggle(index)}
            >
              <div className="flex justify-between items-center">
                <h5 className="font-poppins text-[17px] font-semibold lg:text-[19px]">{faq.ques}</h5>
                <img
                  src={toggles[index] ? upArrow : downArrow}
                  alt="Arrow"
                  className="w-[25px] h-[25px]"
                />
              </div>

              <p className={`${toggles[index] ? "flex" : "hidden"} pt-2 font-poppins lg:text-[17px] lg:pt-3`}>{faq.ans}</p>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Faq;

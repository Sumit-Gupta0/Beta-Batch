// import React from 'react'

// function New() {
//   return (
//     <>
//     <div className='text-center justify-center  gap-4 italic mt-18'>
//     <h1 className='  text-red-600 text-2xl'>BEFORE YOU ASK</h1>
//     <h1 className='mt-5 text-4xl font-bold'>Frequently Asked <span className='text-red-600'>Questions</span></h1>
//     <div>
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, animi!
//       </p>
//     </div>
//     </div>

//     <div className=' justify-center text-center mt-18'>
//       <div className="box1 center ml-40 h-18 w-240 border-1 border-black mt-10 flex items-center justify-between pr-6">
//         <h1 className=' question pl-8 font-semibold'>What do students have to do?</h1>
//         <svg class="_dropdownicon_1683j_145" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.500003" width="33" height="33" rx="16.5" fill="white" stroke="black"></rect><path d="M12.5 15.4727C12.5001 15.4637 12.503 15.4432 12.5313 15.418L16.8555 11.5498C16.9296 11.4835 17.0705 11.4835 17.1445 11.5498L21.4688 15.418C21.4842 15.4319 21.4915 15.4442 21.4951 15.4522C21.4987 15.4601 21.5 15.4669 21.5 15.4727C21.5 15.4785 21.4988 15.486 21.4951 15.4941C21.4915 15.5021 21.4839 15.5137 21.4688 15.5273C21.3947 15.5936 21.2538 15.5936 21.1797 15.5273L18.0088 12.6914L17.1758 11.9453L17.1758 23.3955C17.1758 23.405 17.1725 23.4251 17.1445 23.4502C17.1156 23.4761 17.0658 23.5 17 23.5C16.9342 23.5 16.8844 23.4761 16.8555 23.4502C16.8275 23.4251 16.8242 23.405 16.8242 23.3955L16.8242 11.9453L15.9912 12.6914L12.8203 15.5283C12.7463 15.5944 12.6054 15.5944 12.5313 15.5283C12.5026 15.5027 12.5 15.4814 12.5 15.4727Z" stroke="black"></path></svg>
//       </div>

//       <div className="box1 center ml-40 h-18 w-240 border-1 border-black mt-10 flex items-center justify-between pr-6">
//         <h1 className=' question pl-8 font-semibold'>What do parents have to do?</h1>
//         <svg class="_dropdownicon_1683j_145" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.500003" width="33" height="33" rx="16.5" fill="white" stroke="black"></rect><path d="M12.5 15.4727C12.5001 15.4637 12.503 15.4432 12.5313 15.418L16.8555 11.5498C16.9296 11.4835 17.0705 11.4835 17.1445 11.5498L21.4688 15.418C21.4842 15.4319 21.4915 15.4442 21.4951 15.4522C21.4987 15.4601 21.5 15.4669 21.5 15.4727C21.5 15.4785 21.4988 15.486 21.4951 15.4941C21.4915 15.5021 21.4839 15.5137 21.4688 15.5273C21.3947 15.5936 21.2538 15.5936 21.1797 15.5273L18.0088 12.6914L17.1758 11.9453L17.1758 23.3955C17.1758 23.405 17.1725 23.4251 17.1445 23.4502C17.1156 23.4761 17.0658 23.5 17 23.5C16.9342 23.5 16.8844 23.4761 16.8555 23.4502C16.8275 23.4251 16.8242 23.405 16.8242 23.3955L16.8242 11.9453L15.9912 12.6914L12.8203 15.5283C12.7463 15.5944 12.6054 15.5944 12.5313 15.5283C12.5026 15.5027 12.5 15.4814 12.5 15.4727Z" stroke="black"></path></svg>
//       </div>

//       <div className="box1 center ml-40 h-18 w-240 border-1 border-black mt-10 flex items-center justify-between pr-6 ">
//         <h1 className=' question pl-8 font-semibold'>Is participation mandatory?</h1>
//         <svg class="_dropdownicon_1683j_145" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.500003" width="33" height="33" rx="16.5" fill="white" stroke="black"></rect><path d="M12.5 15.4727C12.5001 15.4637 12.503 15.4432 12.5313 15.418L16.8555 11.5498C16.9296 11.4835 17.0705 11.4835 17.1445 11.5498L21.4688 15.418C21.4842 15.4319 21.4915 15.4442 21.4951 15.4522C21.4987 15.4601 21.5 15.4669 21.5 15.4727C21.5 15.4785 21.4988 15.486 21.4951 15.4941C21.4915 15.5021 21.4839 15.5137 21.4688 15.5273C21.3947 15.5936 21.2538 15.5936 21.1797 15.5273L18.0088 12.6914L17.1758 11.9453L17.1758 23.3955C17.1758 23.405 17.1725 23.4251 17.1445 23.4502C17.1156 23.4761 17.0658 23.5 17 23.5C16.9342 23.5 16.8844 23.4761 16.8555 23.4502C16.8275 23.4251 16.8242 23.405 16.8242 23.3955L16.8242 11.9453L15.9912 12.6914L12.8203 15.5283C12.7463 15.5944 12.6054 15.5944 12.5313 15.5283C12.5026 15.5027 12.5 15.4814 12.5 15.4727Z" stroke="black"></path></svg>
//       </div>

//       <div className="box1 center ml-40 h-18 w-240 border-1 border-black mt-10 flex items-center justify-between pr-6">
//         <h1 className=' question pl-8 font-semibold'>Is there any cost involved?</h1>
//         <svg class="_dropdownicon_1683j_145" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.500003" width="33" height="33" rx="16.5" fill="white" stroke="black"></rect><path d="M12.5 15.4727C12.5001 15.4637 12.503 15.4432 12.5313 15.418L16.8555 11.5498C16.9296 11.4835 17.0705 11.4835 17.1445 11.5498L21.4688 15.418C21.4842 15.4319 21.4915 15.4442 21.4951 15.4522C21.4987 15.4601 21.5 15.4669 21.5 15.4727C21.5 15.4785 21.4988 15.486 21.4951 15.4941C21.4915 15.5021 21.4839 15.5137 21.4688 15.5273C21.3947 15.5936 21.2538 15.5936 21.1797 15.5273L18.0088 12.6914L17.1758 11.9453L17.1758 23.3955C17.1758 23.405 17.1725 23.4251 17.1445 23.4502C17.1156 23.4761 17.0658 23.5 17 23.5C16.9342 23.5 16.8844 23.4761 16.8555 23.4502C16.8275 23.4251 16.8242 23.405 16.8242 23.3955L16.8242 11.9453L15.9912 12.6914L12.8203 15.5283C12.7463 15.5944 12.6054 15.5944 12.5313 15.5283C12.5026 15.5027 12.5 15.4814 12.5 15.4727Z" stroke="black"></path></svg>
//       </div>

//       <div className="box1 center ml-40 h-18 w-240 border-1 border-black mt-10 flex items-center justify-between pr-6">
//         <h1 className=' question pl-8 font-semibold'>How and when will the results be announced?</h1>
//         <svg class="_dropdownicon_1683j_145" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.500003" width="33" height="33" rx="16.5" fill="white" stroke="black"></rect><path d="M12.5 15.4727C12.5001 15.4637 12.503 15.4432 12.5313 15.418L16.8555 11.5498C16.9296 11.4835 17.0705 11.4835 17.1445 11.5498L21.4688 15.418C21.4842 15.4319 21.4915 15.4442 21.4951 15.4522C21.4987 15.4601 21.5 15.4669 21.5 15.4727C21.5 15.4785 21.4988 15.486 21.4951 15.4941C21.4915 15.5021 21.4839 15.5137 21.4688 15.5273C21.3947 15.5936 21.2538 15.5936 21.1797 15.5273L18.0088 12.6914L17.1758 11.9453L17.1758 23.3955C17.1758 23.405 17.1725 23.4251 17.1445 23.4502C17.1156 23.4761 17.0658 23.5 17 23.5C16.9342 23.5 16.8844 23.4761 16.8555 23.4502C16.8275 23.4251 16.8242 23.405 16.8242 23.3955L16.8242 11.9453L15.9912 12.6914L12.8203 15.5283C12.7463 15.5944 12.6054 15.5944 12.5313 15.5283C12.5026 15.5027 12.5 15.4814 12.5 15.4727Z" stroke="black"></path></svg>
//       </div>

//       <div className="box1 center ml-40 h-18 w-240 border-1 border-black mt-10 flex items-center justify-between pr-6">
//         <h1 className='question pl-8 font-semibold'>Whom can we contact for support?</h1>
//         <svg class="_dropdownicon_1683j_145" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.500003" width="33" height="33" rx="16.5" fill="white" stroke="black"></rect><path d="M12.5 15.4727C12.5001 15.4637 12.503 15.4432 12.5313 15.418L16.8555 11.5498C16.9296 11.4835 17.0705 11.4835 17.1445 11.5498L21.4688 15.418C21.4842 15.4319 21.4915 15.4442 21.4951 15.4522C21.4987 15.4601 21.5 15.4669 21.5 15.4727C21.5 15.4785 21.4988 15.486 21.4951 15.4941C21.4915 15.5021 21.4839 15.5137 21.4688 15.5273C21.3947 15.5936 21.2538 15.5936 21.1797 15.5273L18.0088 12.6914L17.1758 11.9453L17.1758 23.3955C17.1758 23.405 17.1725 23.4251 17.1445 23.4502C17.1156 23.4761 17.0658 23.5 17 23.5C16.9342 23.5 16.8844 23.4761 16.8555 23.4502C16.8275 23.4251 16.8242 23.405 16.8242 23.3955L16.8242 11.9453L15.9912 12.6914L12.8203 15.5283C12.7463 15.5944 12.6054 15.5944 12.5313 15.5283C12.5026 15.5027 12.5 15.4814 12.5 15.4727Z" stroke="black"></path></svg>
//       </div>
//     </div>

//     </>
//   )
// }

// export default New

import React, { useState } from "react";

function New() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What do students have to do?",
      answer: "Students need to register and complete the assigned tasks."
    },
    {
      question: "What do parents have to do?",
      answer: "Parents should supervise and encourage participation."
    },
    {
      question: "Is participation mandatory?",
      answer: "No, participation is optional but recommended."
    },
    {
      question: "Is there any cost involved?",
      answer: "No, it is completely free."
    },
    {
      question: "How and when will the results be announced?",
      answer: "Results will be announced online after evaluation."
    },
    {
      question: "Whom can we contact for support?",
      answer: "You can contact our support team via email."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="text-center italic mt-18">
        <h1 className="text-red-600 text-2xl">BEFORE YOU ASK</h1>
        <h1 className="mt-5 text-4xl font-bold">
          Frequently Asked <span className="text-red-600">Questions</span>
        </h1>
        
      </div>

      <div className="flex flex-col items-center mt-10">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="w-[900px] border border-black mt-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center p-4 font-semibold">
              {faq.question}
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </div>

            {openIndex === index && (
              <div className="p-4 border-t">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default New;

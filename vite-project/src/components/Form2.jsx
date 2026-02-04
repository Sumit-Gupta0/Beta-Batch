import React from "react";

const Form2 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 shadow-lg">
   
        <p className="text-xs tracking-widest text-red-500 mb-2">
          PARENTS' LOGIN
        </p>

        <h1 className="text-3xl font-light mb-2">Welcome</h1>

        <p className="text-sm text-gray-500 mb-6">
          Enter your child's details to download the certificate.
        </p>

       
        <div className="flex gap-3 mb-6">
          <div className="w-16 h-1 bg-gray-800"></div>
          <div className="w-16 h-1 bg-red-500"></div>
        </div>

      
        <form className="space-y-5">
       
          <div>
            <label className="block text-xs text-gray-600 mb-1">
              SCHOOL
            </label>
            <select className="w-full border border-gray-400 px-4 py-3 text-sm focus:outline-none focus:border-black">
              <option>Select School</option>
            </select>
          </div>

        
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-600 mb-1">
                CLASS
              </label>
              <select className="w-full border border-gray-400 px-4 py-3 text-sm focus:outline-none focus:border-black">
                <option>Select Class</option>
              </select>
            </div>

            <div>
              <label className="block text-xs text-gray-600 mb-1">
                SECTION
              </label>
              <input
                type="text"
                placeholder="Enter Section"
                className="w-full border border-gray-400 px-4 py-3 text-sm focus:outline-none focus:border-black"
              />
            </div>
          </div>

       
          <div>
            <label className="block text-xs text-gray-600 mb-1">
              ROLL NO.
            </label>
            <input
              type="text"
              placeholder="Enter Roll No."
              className="w-full border border-gray-400 px-4 py-3 text-sm focus:outline-none focus:border-black"
            />
          </div>

         
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 font-semibold tracking-wide hover:bg-red-700 transition"
          >
            CONTINUE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form2;
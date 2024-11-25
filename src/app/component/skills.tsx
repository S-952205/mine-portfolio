import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Skills = () => {
  return (
    <div id="skills">
      <section className="text-white body-font bg-[#3B1C32]">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-gray-400 tracking-widest font-medium title-font mb-1">
              Skills
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
              My Skills
              <div className='w-[135px] h-[2px] font-bold bg-white mb-1 mx-auto'></div>
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            
            {/**Skills */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full bg-white p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#ffffff] text-black flex-shrink-0">
                  <FaCheckCircle className="text-xl "/>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    HTML
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-[#1A1A1D] rounded-xl">
                   <div className="absolute bg-blue-400 h-1 rounded-xl w-[100%]"></div>
                  </div>
                  <div className="text-blue text-[#1A1A1D] font-bold text-right">100%</div>
                </div>
              </div>
            </div>
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full bg-white p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full  bg-[#ffffff] text-black flex-shrink-0">
                  <FaCheckCircle className="text-xl "/>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    CSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-[#1A1A1D] rounded-xl">
                   <div className="absolute bg-blue-400 h-1 rounded-xl w-[70%]"></div>
                  </div>
                  <div className="text-blue text-[#1A1A1D] font-bold text-right">70%</div>
                </div>
              </div>
            </div>
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full bg-white p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full  bg-[#ffffff] text-black flex-shrink-0">
                  <FaCheckCircle className="text-xl "/>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Typescript
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-[#1A1A1D] rounded-xl">
                   <div className="absolute bg-blue-400 h-1 rounded-xl w-[70%]"></div>
                  </div>
                  <div className="text-blue text-[#1A1A1D] font-bold text-right">70%</div>
                </div>
              </div>
            </div>
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full bg-white p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full  bg-[#ffffff] text-black flex-shrink-0">
                  <FaCheckCircle className="text-xl "/>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                   NEXT JS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-[#1A1A1D] rounded-xl">
                   <div className="absolute bg-blue-400 h-1 rounded-xl w-[80%]"></div>
                  </div>
                  <div className="text-blue text-[#1A1A1D] font-bold text-right">80%</div>
                </div>
              </div>
            </div>
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full bg-white p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full  bg-[#ffffff] text-black flex-shrink-0">
                  <FaCheckCircle className="text-xl "/>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Tailwind CSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-[#1A1A1D] rounded-xl">
                   <div className="absolute bg-blue-400 h-1 rounded-xl w-[60%]"></div>
                  </div>
                  <div className="text-blue text-[#1A1A1D] font-bold text-right">60%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;

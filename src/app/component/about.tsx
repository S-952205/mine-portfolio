import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about'>
      <section className="text-white body-font bg-[#1A1A1D] ">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-mono font-medium text-white">
              About Me
              <div className='w-[168px] h-[2px] bg-[#A64D79] mb-1'></div>
              <br className="hidden lg:inline-block" />
            </h1>

            {/**Paragraph for about*/}
            <p className="mb-8 leading-relaxed text-[1.4rem]">
              I have always been curious about how websites work, which sparked
              my interest in the exciting world of web development. Starting
              with small projects, I’ve been learning to transform ideas into
              functional and visually appealing websites. Each project is an
              opportunity for me to grow, enhance my skills, and create
              something meaningful for users.
            </p>

            <p className="mb-8 leading-relaxed text-[1.4rem]">
              After completing my intermediate education, I pursued a short
              course in web development to establish a solid foundation in
              programming and design. Building on this, I joined Tech Farm,
              where I learned .NET and SQL, focusing on their core principles
              through hands-on exercises. While I haven’t worked on real-world
              projects, my journey so far has helped me gain valuable knowledge
              about development practices. To further sharpen my skills, I’ve
              solved numerous problems on HackerRank, which has greatly improved
              my logical thinking and problem-solving abilities.
            </p>

            {/* <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Button
        </button>
    
      </div> */}
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded mx-auto w-[14rem] h-[26rem]"
              alt="hero"
              width={224}
              height={416}
              src={require("../../../public/mine/Capture.jpg")}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About

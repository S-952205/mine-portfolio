import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
  return (
    <div id='Projects'>
       <section className="text-gray-600 bg-[#1A1A1D]  body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-mono font-semibold title-font mb-2 text-white">
        Projects
        <div className='w-[140px] h-[2px] font-bold bg-[#A64D79] mb-1 mx-auto'></div>
      
      </h1>
      
    </div>

             {/**Projects */}
    <div className="flex flex-wrap -m-8">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/mine/project.jpg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-[#A64D79] bg-[#1A1A1D] opacity-0 hover:opacity-100">
            <h1 className="tracking-widest text-sm title-font font-[600] text-blue-300 mb-1">
              Amazon Project
            </h1>
            <h2 className="title-font text-lg font-medium text-white mb-3 line-clamp-1">
            An Online Shopping Platform Design
            </h2>
            <p className="leading-relaxed line-clamp-2">
            This project is a replica of the Amazon website created to provide users with an intuitive and visually engaging experience. It focuses on presenting a user-friendly interface that mirrors the functionality and appearance of a modern e-commerce platform
            </p>
            <Link
             target='_blank'
             href={"https://amazon-olive-rho.vercel.app/"}>
            <p className="font-[600] text-blue-300 hover:underline leading-relaxed line-clamp-2">
             View Project
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/mine/todo.jpg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-[#A64D79] bg-[#1A1A1D] opacity-0 hover:opacity-100">
            <h1 className="tracking-widest text-sm title-font font-[600] text-blue-300 mb-1">
             Todo App
            </h1>
            <h2 className="title-font text-lg font-medium text-white mb-3">
            Manage Your Tasks Easily
            </h2>
            <p className="leading-relaxed line-clamp-2">
            I created a simple To-Do app to help users manage their daily tasks. The app includes basic functionality like adding, editing, and deleting tasks. While the focus was on functionality, styling was kept minimal to prioritize learning JavaScript and understanding core features of a to-do list application.
            </p>
            <Link
             target='_blank'
             href={"https://todo-mgo4.vercel.app/"}>
            <p className="font-[600] text-blue-300 hover:underline leading-relaxed line-clamp-2">
             View Project
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/mine/portfolio.jpg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-[#A64D79] bg-[#1A1A1D] opacity-0 hover:opacity-100">
            <h1 className="tracking-widest text-sm title-font font-[600] text-blue-300 mb-1">
             My Portfolio
            </h1>
            <h2 className="title-font text-lg font-medium text-white mb-3">
            Showcasing My Work
            </h2>
            <p className="leading-relaxed line-clamp-2">
            I created a portfolio website to display my projects and skills. It highlights my journey as a web developer and provides a simple, organized way to explore my work. This project helped me practice HTML, CSS, and responsive design.
            </p>
            <Link
             target='_blank'
             href={"https://mine-portfolio-new.vercel.app/"}>
            <p className="font-[600] text-blue-300 hover:underline leading-relaxed line-clamp-2">
             View Project
            </p>
            </Link>
          </div>
        </div>
      </div>
      

    </div>
  </div>
</section>

    </div>
  )
}

export default Projects

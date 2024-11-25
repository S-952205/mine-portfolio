import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineCloudDownload } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='bg-white z-50 sticky top-0'>
      <header className="text-white bg-[#1A1A1D] body-font">
                <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">

                    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <span className="ml-3 text-xl">Sufyan Syed</span>
                    </a>
                    
                    {/**Navigation Links  */}
                   <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-[500]">
                        <Link href={"/"} className="mr-5 hover:text-blue-400">Home</Link>
                        <Link href={"#about"} className="mr-5 hover:text-blue-400">About</Link>
                        <Link href={"#skills"} className="mr-5 hover:text-blue-400">Skills</Link>
                        <Link href={"#Projects"} className="mr-5 hover:text-blue-400">Projects</Link>
                        <Link href={"#Contact"} className="mr-5 hover:text-blue-400">Contact</Link>
                   </nav>
                    
                    {/**Download Resume Button */}
                    {/* <a href="/mine/cv.pdf">
                        <button className="inline-flex items-center text-black bg-blue-400 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                            Download Resume
                            <AiOutlineCloudDownload className='ml-2 text-xl' />
                        </button>
                    </a> */}

                </div>
            </header>

    </div>
  )
}

export default Navbar

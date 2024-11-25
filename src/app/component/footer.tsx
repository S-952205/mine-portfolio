import Link from "next/link"
import { BiLogoGmail } from "react-icons/bi"
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs"

const Footer = () => {
    return (
        <div>
            <footer className="text-gray-400 bg-[#A64D79] body-font">
                <div className="container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                        <span className="ml-3 text-xl">Syed Supreme</span>
                    </a>
                    <p className="text-[1.2rem] text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
                        © 2024 Sufyan Studio. Designed and Developed with Passion.
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <Link
                            href={"#"}
                            target='_blank'
                            className='text-white'>
                            <BsFacebook className='w-6 h-8 hover:text-blue-700' />
                        </Link>

                        
                        <Link href={"#"}  target='_blank' className="group ml-5">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-transparent hover:bg-white">
                            <BsInstagram className='w-6 h-8  text-white group-hover:text-red-600' />
                            </div>
                        </Link>

                        <Link
                            href={"#"}
                            target='_blank'
                            className='text-white'>
                            <BsYoutube className='w-6 h-8 hover:text-[#ff0000] ml-5' />
                        </Link>


                        <Link href={"#"}  target='_blank' className="group ml-3">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-transparent hover:bg-white">
                                <BiLogoGmail className="w-6 h-6 text-white group-hover:text-red-600" />
                            </div>
                        </Link>
                    </span>
                </div>

            </footer>
        </div>
    )
}

export default Footer
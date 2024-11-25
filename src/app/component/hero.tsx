'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Typewriter from 'typewriter-effect';
// import me from '../../../public/Capture.jpg'

const Hero = () => {
    return (
        <div>
            <section className="text-gray-400 bg-[#3B1C32]  body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
                        <Image
                            className="object-cover object-center rounded mx-auto w-[14rem] h-[26rem]"
                            alt="hero"
                            width={224}
                            height={416}
                             src={require('../../../public/mine/Capture.jpg')}
                        />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">

                        <h1 className="title-font sm:text-4xl font-mono text-3xl mb-4 font-medium text-white">
                             I&apos;m
                            <br className="hidden lg:inline-block" />
                            <Typewriter
                                options={{
                                    strings: ['Software Developer',
                                              'UI/UX Designer',
                                               '.NET Developer',
                                                 ],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                         <div className='w-[290px] h-[1px] bg-white mb-2'></div>
                        <p className="mb-8 leading-relaxed text-[1.75rem] text-white">
                            As a front-end development enthusiast, I m building skills to create interactive and user-friendly web designs. I thrive on learning new tools and techniques, from responsive layouts to dynamic web applications, and I’m eager to bring ideas to life on the web.
                        </p>
                          
                        <Link href={"#Contact"}> 
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-[#1A1A1D] border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-black rounded text-lg">
                                Contact
                            </button>
                        </div>
                        </Link> 

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero

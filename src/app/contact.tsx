import React from 'react'

const Contact = () => {
  return (
    <div id='Contact'>
        <section className=" text-[#1A1A1D] bg-[#3B1C32]  body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe
        width="100%"
        height="100%"
        className="absolute inset-0"
        frameBorder={0}
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2724.932424906662!2d67.04159679335663!3d24.921915458262504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f9f268f7c1d%3A0x32b1adc99112739c!2sIQRA%20University%20North%20Nazimabad%20Campus!5e0!3m2!1sen!2s!4v1732460047392!5m2!1sen!2s"
        style={{ filter: "grayscale(0.4) contrast(1.2) opacity(0.7) brightness(1.1) hue-rotate(200deg)" }}
      />
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            ADDRESS
          </h2>
          <p className="mt-1">
            North-Nazimabad Block-B Near IQRA University
          </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            EMAIL
          </h2>
          <a className="text-indigo-700 leading-relaxed">sufyansyed157@gmail.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed">+92 34629522XX</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-[#3B1C32] flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="title-font sm:text-4xl font-mono text-3xl mb-4 font-medium text-white">
      Reach Out
      <div className='w-[188px] h-[3px] font-bold bg-white mb-1'></div>
      </h2>
      <p className="leading-relaxed mb-5 text-white font-mono ">
      Feel free to reach out
      </p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-white">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-gray-300 focus:border-[#1A1A1D]  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-[#1A1A1D]  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-white">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-[#1A1A1D] focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <button className="text-white font-mono  bg-[#1A1A1D]  border-0 py-2 px-6 focus:outline-none hover:bg-[#A64D79] rounded text-lg">
        Send Message
      </button>
    </div>
  </div>
</section>

    </div>
  )
}

export default Contact

import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Intro Section */}
      <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 items-center">
            <div className="flex flex-col gap-10 items-center lg:items-start">
              <div className="flex flex-col gap-4 items-center lg:items-start">
                <h2 className="text-4xl font-bold font-manrope leading-normal text-center lg:text-start text-gray-900 dark:text-white">
                  Building Stronger Communities through Collaboration and Empowerment
                </h2>
                <p className="text-base font-normal leading-relaxed text-center lg:text-start text-gray-500 dark:text-gray-300">
                  Through collaboration, diverse perspectives and strengths are leveraged to create inclusive environments where everyone has the opportunity to thrive. This approach not only fosters personal growth and achievement but also strengthens the fabric of society.
                </p>
              </div>
              <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow justify-center items-center flex">
                <span className="px-1.5 text-white text-sm font-medium leading-6">Get Started</span>
              </button>
            </div>
            <img
              className="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
              src="https://pagedone.io/asset/uploads/1717751272.png"
              alt="about Us image"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            {/* Contact Info */}
            <div className="mb-10 lg:mb-0">
              <div className="relative h-full group">
                <img
                  src="https://pagedone.io/asset/uploads/1696488602.png"
                  alt="ContactUs tailwind section"
                  className="w-full h-full object-cover bg-blend-multiply bg-indigo-700 rounded-2xl lg:rounded-l-2xl"
                />
                <h1 className="absolute top-11 left-11 text-white text-4xl font-bold font-manrope leading-10">
                  Contact us
                </h1>
                <div className="absolute bottom-0 w-full p-5 lg:p-11">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                    <a href="javascript:;" className="flex items-center mb-6">
                      <h5 className="ml-5 text-base font-normal leading-6 text-black dark:text-white">470-601-1911</h5>
                    </a>
                    <a href="javascript:;" className="flex items-center mb-6">
                      <h5 className="ml-5 text-base font-normal leading-6 text-black dark:text-white">Pagedone1234@gmail.com</h5>
                    </a>
                    <a href="javascript:;" className="flex items-center">
                      <h5 className="ml-5 text-base font-normal leading-6 text-black dark:text-white">
                        654 Sycamore Avenue, Meadowville, WA 76543
                      </h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-gray-50 dark:bg-gray-800 p-5 lg:p-11 rounded-2xl lg:rounded-r-2xl">
              <h2 className="text-4xl font-semibold font-manrope leading-10 mb-11 text-indigo-600 dark:text-indigo-400">
                Send Us A Message
              </h2>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full h-12 mb-10 pl-4 text-lg font-normal leading-7 rounded-full border border-gray-200 dark:border-gray-600 bg-transparent text-gray-600 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full h-12 mb-10 pl-4 text-lg font-normal leading-7 rounded-full border border-gray-200 dark:border-gray-600 bg-transparent text-gray-600 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm focus:outline-none"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="w-full h-12 mb-10 pl-4 text-lg font-normal leading-7 rounded-full border border-gray-200 dark:border-gray-600 bg-transparent text-gray-600 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm focus:outline-none"
              />

              {/* Radio Buttons */}
              <div className="mb-10">
                <h4 className="mb-4 text-lg font-normal leading-7 text-gray-500 dark:text-gray-300">
                  Preferred method of communication
                </h4>
                <div className="flex">
                  <div className="flex items-center mr-11">
                    <input id="radio-group-1" type="radio" name="communication" className="hidden peer" />
                    <label htmlFor="radio-group-1" className="flex items-center cursor-pointer text-base font-normal leading-6 text-gray-500 dark:text-gray-300 peer-checked:text-indigo-600">
                      <span className="ml-2 mr-2 w-4 h-4 border border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-indigo-600"></span> Email
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input id="radio-group-2" type="radio" name="communication" className="hidden peer" />
                    <label htmlFor="radio-group-2" className="flex items-center cursor-pointer text-base font-normal leading-6 text-gray-500 dark:text-gray-300 peer-checked:text-indigo-600">
                      <span className="ml-2 mr-2 w-4 h-4 border border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-indigo-600"></span> Phone
                    </label>
                  </div>
                </div>
              </div>

              <input
                type="text"
                name="message"
                placeholder="Message"
                className="w-full h-12 mb-10 pl-4 text-lg font-normal leading-7 rounded-full border border-gray-200 dark:border-gray-600 bg-transparent text-gray-600 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm focus:outline-none"
              />
              <button className="w-full h-12 text-base font-semibold leading-6 text-white bg-indigo-600 hover:bg-indigo-800 rounded-full transition-all duration-700 shadow-sm">
                Send
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
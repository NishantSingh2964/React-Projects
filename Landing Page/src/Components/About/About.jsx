import React from 'react'

const About = () => {
    return (
        <>
            {/* Section 1 */}
            <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-500">
                <div className="max-w-7xl mx-auto px-4 md:px-5 lg:px-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Image Section */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 order-last lg:order-first">
                            <div className="pt-24 flex justify-start sm:justify-end lg:justify-center">
                                <img
                                    src="https://pagedone.io/asset/uploads/1717741205.png"
                                    alt="Team collaboration"
                                    className="rounded-xl object-cover"
                                />
                            </div>
                            <div className="flex justify-start sm:justify-start">
                                <img
                                    src="https://pagedone.io/asset/uploads/1717741215.png"
                                    alt="Project success"
                                    className="rounded-xl object-cover"
                                />
                            </div>
                        </div>

                        {/* Text Section */}
                        <div className="flex flex-col items-center lg:items-start gap-10">
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col items-center lg:items-start gap-3">
                                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center lg:text-start">
                                        Empowering Each Other to Succeed
                                    </h2>
                                    <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed text-center lg:text-start">
                                        Every project we've undertaken has been a collaborative effort, where every person
                                        involved has left their mark. Together, we've not only constructed buildings but also
                                        built enduring connections that define our success story.
                                    </p>
                                </div>

                                {/* Stats Section */}
                                <div className="flex justify-center lg:justify-start gap-5 sm:gap-10">
                                    <div className="flex flex-col items-start">
                                        <h3 className="text-4xl font-bold text-gray-900 dark:text-white">33+</h3>
                                        <p className="text-base text-gray-600 dark:text-gray-300">Years of Experience</p>
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <h3 className="text-4xl font-bold text-gray-900 dark:text-white">125+</h3>
                                        <p className="text-base text-gray-600 dark:text-gray-300">Successful Projects</p>
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <h3 className="text-4xl font-bold text-gray-900 dark:text-white">52+</h3>
                                        <p className="text-base text-gray-600 dark:text-gray-300">Happy Clients</p>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-800 text-white text-sm font-medium rounded-lg transition duration-700 ease-in-out shadow">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2 */}
            <section className="py-12 relative xl:mr-0 lg:mr-5 mr-0 mb-16 bg-white dark:bg-gray-900 transition-colors duration-500">
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                    <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
                        <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                            <div className="w-full flex-col justify-center items-start gap-8 flex">
                                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                                    <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                        <h2 className="text-gray-900 dark:text-white text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                            The Tale of Our Achievement Story
                                        </h2>
                                        <p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-relaxed lg:text-start text-center">
                                            Our achievement story is a testament to teamwork and perseverance. Together, we've
                                            overcome challenges, celebrated victories, and created a narrative of progress and
                                            success.
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full flex-col justify-center items-start gap-6 flex">
                                    <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                        <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 className="text-gray-900 dark:text-white text-2xl font-bold font-manrope leading-9">33+ Years</h4>
                                            <p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-relaxed">
                                                Influencing Digital Landscapes Together
                                            </p>
                                        </div>
                                        <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 className="text-gray-900 dark:text-white text-2xl font-bold font-manrope leading-9">125+ Projects</h4>
                                            <p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-relaxed">
                                                Excellence Achieved Through Success
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                        <div className="w-full p-3.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 className="text-gray-900 dark:text-white text-2xl font-bold font-manrope leading-9">26+ Awards</h4>
                                            <p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-relaxed">
                                                Our Dedication to Innovation Wins Understanding
                                            </p>
                                        </div>
                                        <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 className="text-gray-900 dark:text-white text-2xl font-bold font-manrope leading-9">99% Happy Clients</h4>
                                            <p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-relaxed">
                                                Mirrors our Focus on Client Satisfaction.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a
                                href="#"
                                className="sm:w-fit w-full group px-3.5 py-2 bg-indigo-50 dark:bg-gray-800 hover:bg-indigo-100 dark:hover:bg-gray-700 rounded-lg shadow transition-all duration-700 ease-in-out justify-center items-center flex"
                            >
                                <span className="px-1.5 text-indigo-600 dark:text-indigo-400 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">
                                    Read More
                                </span>
                                <svg
                                    className="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                >
                                    <path
                                        d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>
                        </div>
                        <div className="w-full lg:justify-start justify-center items-start flex">
                            <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 dark:sm:bg-gray-800 rounded-3xl sm:border border-gray-200 dark:border-gray-700 relative">
                                <img
                                    className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                                    src="https://pagedone.io/asset/uploads/1717742431.png"
                                    alt="about Us image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About

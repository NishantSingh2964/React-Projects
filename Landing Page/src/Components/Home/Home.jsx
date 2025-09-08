import React from 'react';

const Home = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative isolate px-6 pt-4 pb-8 lg:px-8">
        {/* Top Gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            className="relative left-[calc(50%-11rem)] w-[36.125rem] aspect-[1155/678] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-28 text-center">
          <div className="hidden sm:mb-6 sm:flex sm:justify-center">
            <div className="rounded-full px-3 py-1 text-sm text-gray-600 dark:text-gray-300 ring-1 ring-gray-900/10 dark:ring-white/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{' '}
              <button className="font-semibold text-indigo-600 dark:text-indigo-400">
                Read more <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Data to enrich your online business
          </h1>
          <p className="mt-6 text-base sm:text-lg font-medium text-gray-500 dark:text-gray-300">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
          </p>
          <div className="mt-8 flex items-center justify-center gap-x-6">
            <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2">
              Get started
            </button>
            <button className="text-sm font-semibold text-gray-900 dark:text-white">
              Learn more <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-10rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-24rem)]"
        >
          <div
            className="relative left-[calc(50%+3rem)] w-[36.125rem] aspect-[1155/678] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </section>

      {/* Investment Section */}
      <section className="lg:pt-10 pt-0 lg:pl-8 mb-16">
        <div className="rounded-2xl bg-indigo-50 dark:bg-gray-800 py-10 overflow-hidden m-5 lg:m-0 2xl:py-16 xl:py-8 lg:rounded-tl-2xl lg:rounded-bl-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-32 items-center">
              {/* Left Content */}
              <div className="w-full xl:col-span-5 lg:col-span-6">
                <div className="flex items-center justify-center lg:justify-start text-sm font-medium text-gray-500 dark:text-gray-300">
                  <span className="bg-indigo-600 text-white text-xs font-medium py-1 px-3 rounded-2xl mr-3">#1</span>
                  Investment app
                </div>
                <h2 className="py-8 text-5xl font-bold font-manrope text-center lg:text-left leading-[70px] text-gray-900 dark:text-white">
                  The new standard for <span className="text-indigo-600 dark:text-indigo-400">Modern investor</span>
                </h2>
                <p className="text-lg text-center lg:text-left text-gray-500 dark:text-gray-300">
                  When you’re ready to invest, execute your orders quickly without the complexity of outdated systems.
                </p>

                {/* Email Input & CTA */}
                <div className="relative p-1.5 my-10 flex flex-col md:flex-row items-center justify-between gap-y-4 h-auto md:h-16 rounded-full border border-transparent md:bg-white dark:md:bg-gray-900 transition-all duration-500 hover:border-indigo-600 focus-within:border-indigo-600">
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter email to get started"
                    className="text-base rounded-full text-gray-900 dark:text-white flex-1 py-4 px-6 bg-white dark:bg-gray-900 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none w-full md:w-fit"
                  />
                  <button className="bg-indigo-600 text-white text-base font-semibold py-3 px-7 rounded-full hover:bg-indigo-700 transition-all duration-500 w-full md:w-fit">
                    Get Started
                  </button>
                </div>

                {/* User Avatars */}
                <div className="flex items-center flex-col lg:flex-row">
                  <div className="flex items-center">
                    <img src="https://pagedone.io/asset/uploads/1694846673.png" alt="User 1" className="rounded-full border-2 border-indigo-50 relative z-50 object-cover" />
                    <img src="https://pagedone.io/asset/uploads/1694846691.png" alt="User 2" className="rounded-full border-2 border-indigo-50 relative z-30 -ml-3 object-cover" />
                    <img src="https://pagedone.io/asset/uploads/1694846704.png" alt="User 3" className="rounded-full border-2 border-indigo-50 relative z-20 -ml-3 object-cover" />
                  </div>
                  <span className="mt-3 lg:ml-3 text-base font-medium text-gray-600 dark:text-gray-300">
                    People have joined
                  </span>
                </div>
              </div>

              {/* Right Image */}
              <div className="w-full xl:col-span-7 lg:col-span-6">
                <div className="w-full sm:w-auto lg:w-[60.8125rem] xl:ml-16">
                  <img
                    src="https://pagedone.io/asset/uploads/1694846193.png"
                    alt="Dashboard"
                    className="rounded-l-3xl object-cover w-full lg:h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
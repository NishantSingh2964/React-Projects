import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const socialIcons = [
    {
      name: 'Facebook',
      url: 'https://facebook.com',
      img: 'https://i.pinimg.com/736x/4a/4c/22/4a4c224a0c6667178bebdfa3b6bdb92b.jpg',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      img: 'https://cdn.freebiesupply.com/logos/large/2x/twitter-logo-png-transparent.png',
    },
    {
      name: 'GitHub',
      url: 'https://github.com',
      img: 'https://cdn.freebiesupply.com/logos/large/2x/github-icon-1-logo-png-transparent.png',
    },
    {
      name: 'Instagram',
      url: 'https://Instagram.com',
      img: 'https://www.citypng.com/public/uploads/preview/square-instagram-logo-illustration-701751694793444cjvbk9kvlx.png?v=2025062002',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTllNbtXaEUaCuGkcHhD6Wqb7QzOD0KGeYgkw&s',
    },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-4 lg:py-6">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <NavLink to="/" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 me-3"
                alt="FlowBite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Flowbite
              </span>
            </NavLink>

            {/* Social Icons */}
            <div className="flex mt-4 gap-4">
              {socialIcons.map(({ name, url, img }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="transition-transform hover:scale-110"
                >
                  <img
                    src={img}
                    alt={`${name} icon`}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 mt-6 md:mt-0">
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-2">
                <li>
                  <NavLink to="/flowbite" className="hover:underline">
                    Flowbite
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/tailwind" className="hover:underline">
                    Tailwind CSS
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-2">
                <li>
                  <NavLink to="/github" className="hover:underline">
                    Github
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/discord" className="hover:underline">
                    Discord
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-2">
                <li>
                  <NavLink to="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/terms" className="hover:underline">
                    Terms &amp; Conditions
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700" />

        {/* Centered Copyright */}
        <div className="text-center pb-4">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            © 2023{' '}
            <NavLink to="/" className="hover:underline">
              Flowbite™
            </NavLink>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
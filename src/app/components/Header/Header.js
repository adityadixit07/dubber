"use client";
import Image from "next/image";
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { IoCaretUpSharp } from "react-icons/io5";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="py-3 text-sm">
          <ol className="list-none p-0 flex flex-wrap items-center">
            <li className="flex items-center mr-2">
              <a href="/" className="text-gray-500 hover:text-gray-700">
                Home
              </a>
              <ChevronDownIcon className="h-4 w-4 text-gray-400 mx-1" />
            </li>
            <li className="flex items-center mr-2">
              <a href="/" className="text-gray-500 hover:text-gray-700">
                Product
              </a>
              <ChevronDownIcon className="h-4 w-4 text-gray-400 mx-1" />
            </li>
            <li className="text-gray-700 truncate">
              VideoDubber - Fast Video Translator
            </li>
          </ol>
        </nav>
        <div className="py-6 sm:py-8 flex flex-col items-start">
          <div className="mb-4">
            <Image
              src="https://ph-files.imgix.net/3153ed76-d013-4a2b-a7ac-f2f4cbfc3cc4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=72&h=72&fit=crop&dpr=2"
              alt="VideoDubber logo"
              width={100}
              height={100}
              className="rounded-lg"
            />
          </div>
          <div className="text-left">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 flex items-center">
              <span className="truncate">
                VideoDubber - Fast Video Translator
              </span>
              <ChevronDownIcon className="h-6 w-6 text-gray-400 ml-2 flex-shrink-0" />
            </h1>
            <div className="flex flex-col sm:flex-row items-start gap-5 justify-start flex-wrap">
              <p className="text-lg sm:text-xl text-gray-500 mb-6 text-wrap">
                Translate videos in your own voice, globalize in a click!
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="relative">
                  <button
                    className="text-gray-500 border-2 border-gray-300   font-semibold py-4 px-4 rounded-md flex items-center"
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                  >
                    Visit
                    <ChevronDownIcon className="h-5 w-5 ml-2" />
                  </button>
                  {showDropdown && (
                    <div
                      className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                      onMouseEnter={() => setShowDropdown(true)}
                      onMouseLeave={() => setShowDropdown(false)}
                    >
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        {[
                          "Website videodubber.ai",
                          "learn more vide.link.com",
                          "Content contnet.link",
                          "Creative das.com",
                        ].map((option, index) => (
                          <a
                            key={index}
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                          >
                            {option}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <button className="bg-white text-gray-600 border-2 border-orange-300 font-semibold py-3 px-6 rounded-md flex items-center text-lg">
                  <IoCaretUpSharp className="h-6 w-6 mr-2" />
                  Upvoted 143
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

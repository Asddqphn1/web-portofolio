import { useState } from "react";
import { useLocation } from "react-router-dom";


import { HashLink } from "react-router-hash-link";

function Navbar() {
  const [active, setActive] = useState(true);
  const location = useLocation();

  return (
    <>
      <nav className="hidden lg:flex fixed z-2 top-0 text-gray-300 gap-[20%] w-screen pl-3 pt-3 bg-gray-900 shadow-2xl shadow-cyan-700/50 lg:box-border">
        <img
          src="./image/Logo1.png"
          alt=""
          className="w-13 h-13 mb-2 bg-white rounded-full"
        />
        <ul className="flex gap-[30%] pt-3 ">
          <li>
            <HashLink
              className={`inline-block font-extrabold  hover:text-white hover:-translate-y-2 hover:scale-110 hover: transition duration-300 ease-in-out ${
                location.hash === ""
                  ? "bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text font-extrabold text-transparent scale-105"
                  : ""
              }`}
              smooth
              to={"#"}
            >
              HOME
            </HashLink>
          </li>
          <li>
            <HashLink
              className={`inline-block font-extrabold  hover:text-white hover:-translate-y-2 hover:scale-110 hover: transition duration-300 ease-in-out ${
                location.hash === "#AboutSection"
                  ? "bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text font-extrabold text-transparent scale-105"
                  : ""
              }`}
              smooth
              to={"#AboutSection"}
            >
              ABOUT
            </HashLink>
          </li>
          <li>
            <HashLink
              className={`inline-block font-extrabold  hover:text-white hover:-translate-y-2 hover:scale-110 hover: transition duration-300 ease-in-out ${
                location.hash === "#AchievementSection"
                  ? "bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text font-extrabold text-transparent scale-105"
                  : ""
              }`}
              smooth
              to={"#AchievementSection"}
            >
              ACHIEVEMENT
            </HashLink>
          </li>
          <li>
            <HashLink
              className={`inline-block font-extrabold  hover:text-white hover:-translate-y-2 hover:scale-110 hover: transition duration-300 ease-in-out ${
                location.hash === "#HobySection"
                  ? "bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text font-extrabold text-transparent scale-105"
                  : ""
              }`}
              smooth
              to={"#HobySection"}
            >
              HOBBIES
            </HashLink>
          </li>
          <li>
            <HashLink
              className={`inline-block font-extrabold  hover:text-white hover:-translate-y-2 hover:scale-110 hover: transition duration-300 ease-in-out ${
                location.hash === "#ContactSection"
                  ? "bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text font-extrabold text-transparent scale-105"
                  : ""
              }`}
              smooth
              to={"#ContactSection"}
            >
              CONTACT
            </HashLink>
          </li>
        </ul>
      </nav>

      {/* humberger menu */}
      <nav className="flex gap-30 fixed top-0 z-1 pl-2 pt-2 w-full bg-gray-900 opacity-50 shadow-2xl shadow-cyan-500/50 lg:hidden">
        <button
          onClick={() => setActive(!active)}
          className="h-10 w-10 flex flex-col justify-center items-center gap-1"
        >
          <span
            className={`w-6 h-1 bg-gray-400 block origin-top-left ${
              active ? "" : "rotate-45 transition duration-300 ease-in-out"
            }`}
          ></span>
          <span
            className={`w-6 h-1 bg-gray-400 block origin-top-left ${
              active ? "" : "opacity-0"
            }`}
          ></span>
          <span
            className={`w-6 h-1 bg-gray-400 block origin-bottom-left ${
              active ? "" : "-rotate-45 transition duration-300 ease-in-out "
            }`}
          ></span>
        </button>
        <img
          src="./image/Logo1.png"
          alt=""
          className="w-10 h-10 mb-2 bg-white rounded-full"
        />
      </nav>
      <aside
        className={`bg-gray-500 fixed z-3 top-15 w-full h-[98vh] box-border pl-10 pt-8  ${
          active
            ? "-translate-x-full"
            : "translate-x-0 transition duration-300 ease-in-out"
        } lg:hidden`}
      >
        <ul className="text-2xl flex flex-col gap-[10vh]">
          <li className="pl-6 box-border">
            <a
              href=""
              className="h-8 absolute top-7 left-0 ml-17 inline-block font-bold hover:text-white hover: transition duration-300 ease-in-out"
            >
              HOME
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="h-8 absolute top-7 left-0 ml-4"
            >
              <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
            </svg>
          </li>
          <li className="pl-6 box-border">
            <a
              href="#AboutSection"
              className="h-8 absolute top-32 left-0 ml-17 inline-block font-bold hover:text-white hover: transition duration-300 ease-in-out"
            >
              ABOUT
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="h-8 absolute top-32 left-0 ml-4"
            >
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
            </svg>
          </li>
          <li className="pl-6 box-border">
            <a
              href="#AchievementSection"
              className="h-8 absolute top-60 left-0 ml-16 inline-block font-bold hover:text-white hover: transition duration-300 ease-in-out"
            >
              ACHIEVEMENT
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="h-8 absolute top-60 left-0 ml-3"
            >
              <path d="M400 0L176 0c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8L24 64C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9L192 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-26.1 0C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24L446.4 64c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112l84.4 0c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6l84.4 0c-5.1 66.3-31.1 111.2-63 142.3z" />
            </svg>
          </li>
          <li className="pl-6 box-border">
            <a
              href="#HobySection"
              className="h-8 absolute top-85 left-16 inline-block font-bold hover:text-white hover: transition duration-300 ease-in-out"
            >
              HOBBIES
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              className="h-8 absolute top-85 left-3"
            >
              <path d="M192 64C86 64 0 150 0 256S86 448 192 448l256 0c106 0 192-86 192-192s-86-192-192-192L192 64zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24l0 32 32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0 0 32c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l32 0 0-32z" />
            </svg>
          </li>
          <li className="pl-6 box-border">
            <a
              href="#ContactSection"
              className="h-8 absolute left-4 top-112 ml-12 inline-block font-bold hover:text-white hover: transition duration-300 ease-in-out"
            >
              CONTACT
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-8 absolute left-4 top-112"
            >
              <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
            </svg>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Navbar;

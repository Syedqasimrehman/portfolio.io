import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { navigation, socialmedia } from "../constants";
import { HamburgerMenu } from "./design/HamBargar";
import { useNav } from "../context/NavContext"; 
import SVGComponent from "../assets/SVGComponent";
import {Logo} from "../assets/index";




const Header = () => {
  const [isScroll, setisScroll] = useState(false);

  // Destructure functions and states directly from your new Context
  const { openNavigation, toggleNavigation, closeNavigation } = useNav();

  useEffect(() => {
    const handleScroll = () => {
      // Fixed: window.scrollY (not window.screenY)
      if (window.scrollY > 0) {
        setisScroll(true);
      } else {
        setisScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 w-full p-4 z-50 transition-all duration-300 ease-in-out ${
        openNavigation
          ? "bg-slate-900"
          : isScroll
            ? "bg-black border-b border-dashed border-gray-400"
            : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between mx-auto">
        <div className="z-20">
          <Link to="/" onClick={closeNavigation}>
            <SVGComponent
              className="w-[56px] md:w-[64px] hover:fill-lime-400 transition-colors duration-300"
              src={Logo}
              alt="logo"
            />
          </Link>
        </div>

        <nav
          className={`fixed inset-0 z-0 bg-gradient-to-b from-n-7 to-n-8 pt-24 flex flex-col lg:z-auto lg:static lg:flex lg:flex-row lg:bg-none lg:bg-transparent lg:pt-0 transition-opacity duration-300 ease-in-out ${
            openNavigation
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto"
          }`}
        >
          <ul className="flex flex-col lg:flex-row justify-center mx-[24px] lg:mx-[40px] gap-3 lg:gap-0">
            {navigation.map((item) => (
              <li
                className="relative flex flex-col justify-center px-5 lg:px-0 list-none"
                key={item.id}
              >
                <NavLink
                  to={item.url}
                  onClick={closeNavigation}
                  className={({ isActive }) =>
                    `group relative inline-block rounded-lg border px-5 py-3 text-center text-lg transition-colors duration-300 lg:rounded-none lg:border-0 lg:px-[0.45rem] lg:py-0 lg:text-base ${
                      isActive
                        ? "border-lime-500/40 bg-n-7 text-lime-400 lg:bg-transparent"
                        : "border-n-6 bg-n-7/60 text-white hover:text-lime-400 lg:border-0 lg:bg-transparent"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.title}
                      <span
                        className={`absolute -bottom-1 left-0 hidden h-[2px] bg-lime-400 transition-all duration-300 lg:block ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Social links, shown inside the mobile panel too */}
          <div
            className={`${
              openNavigation ? "flex" : "hidden"
            } mt-6 items-center justify-center gap-4 lg:hidden`}
          >
            {socialmedia.map((item, index) => (
              <a
                className="cursor-pointer px-[0.45rem] text-white"
                onClick={closeNavigation}
                key={index}
                href={item.url}
              >
                <span className="inline-block text-[21px] transition-all duration-300 hover:scale-125 hover:text-lime-400">
                  {item.logo}
                </span>
              </a>
            ))}
          </div>
        </nav>

        {/* Social Media Links (desktop) */}
        <div className="hidden items-center gap-3 lg:flex">
          {socialmedia.map((item, index) => (
            <a
              className="cursor-pointer px-[0.45rem] text-white"
              onClick={closeNavigation}
              key={index}
              href={item.url}
            >
              <span className="inline-block text-[21px] transition-all duration-300 hover:scale-125 hover:text-lime-400">
                {item.logo}
              </span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle Trigger */}
        <div className="relative z-20 lg:hidden">
          <HamburgerMenu
            openNavigation={openNavigation}
            toggleNavigation={toggleNavigation}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

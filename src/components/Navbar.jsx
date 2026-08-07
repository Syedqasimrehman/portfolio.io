import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
      className={`sticky top-0 w-full p-2 z-50 transition-all duration-300 ease-in-out ${
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
              className=" hover:fill-lime-400 transition-colors duration-300 md:w-[50px]"
              width={"100px"}
              height={60}
              src={Logo}
              alt="logo"
            />
          </Link>
        </div>

        <nav
          className={`${
            openNavigation ? "flex fixed inset-0 background_col pt-20" : "hidden"
          } lg:static lg:flex lg:bg-transparent lg:pt-0`}
        >
          <ul className="flex flex-col lg:flex-row justify-center mx-[40px] gap-6 lg:gap-0">
            {navigation.map((item) => (
              <li
                className="relative flex flex-col justify-center px-5 list-none"
                key={item.id}
              >
                <Link
                  className={`px-[0.45rem] cursor-pointer text-white hover:text-lime-400 transition-colors  ${
                    item.url  ? "text-blue-400 font-bold" : ""
                  }`}
                  to={item.url}
                  onClick={closeNavigation}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Media Links */}
        <div
          className={`${
            openNavigation ? "flex flex-row mt-4 none" : ""
          } lg:flex lg:mt-0 items-center gap-3 hidden `}
        >
          {socialmedia.map((item, index) => (
            <a
              className={`px-[0.45rem] cursor-pointer text-white ${
                item.url ? "text-lime-40" : ""
              }`}
              onClick={closeNavigation}
              key={index}
              href={item.url}
            >
              {/* <img src={item.logo} alt={item.title} className="inline-block mr-1" /> */}
              <span className="hover:text-lime-400 text-[21px] duration-300 transition-all ">{item.logo}</span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle Trigger */}
        <div
          className={`lg:hidden relative z-10 ${openNavigation ? "" : ""}`}
        >
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

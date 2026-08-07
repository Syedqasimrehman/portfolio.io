// eslint-disable-next-line react/prop-types
export const HamburgerMenu = ({ openNavigation, toggleNavigation}) => {
  return (
    <div
      onClick={toggleNavigation}
      className="flex flex-col cursor-pointer w-[35px] h-[35px] justify-items-center items-center "
    >
      <div
        className={`w-full bg-n-4 h-1 transition-all  transform ${
          openNavigation ? " rotate-45 translate-y-2 h-0.5 w-[2.5rem]" : "my-1"
        }`}
      ></div>
      <div
        className={` w-full bg-n-4 h-1 ${
          openNavigation ? "opacity-0" : "my-1"
        }`}
      ></div>
      <div
        className={` w-full bg-n-4 h-1 transition-all duration-[.3s] transform ${
          openNavigation ? " -rotate-45 -translate-y-.5 h-0.5 w-[2.5rem]" : "my-1"
        }`}
      ></div>
    </div>
  );
};

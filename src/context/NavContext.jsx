import { createContext, useContext, useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const closeNavigation = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <NavContext.Provider value={{ openNavigation, toggleNavigation, closeNavigation }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => useContext(NavContext);

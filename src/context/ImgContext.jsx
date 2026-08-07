import { createContext, useState } from "react";
import { images as imagesUrl} from "../constants";

export const ImgContext = createContext();

export const ImgScrollProvider = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [Imagechange, setImagechange] = useState(0);

  const openImage = (index) => {
    setCurrentIndex(index);
    setImagechange(index);
  };
  const privousImage = () => {
    setImagechange((prev) => (prev === 0 ? imagesUrl.length - 1 : prev - 1));
  };
  const fowardImage = () => {
    setImagechange((index) => (index === imagesUrl.length - 1 ? 0 : index + 1));
  };
  const CloseImage = () => {
    setCurrentIndex(null);
  };

  return (
    <ImgContext.Provider
      value={{
        openImage,
        privousImage,
        fowardImage,
        CloseImage,
        currentIndex,
        Imagechange,
      }}
    >
      {children}
    </ImgContext.Provider>
  );
};


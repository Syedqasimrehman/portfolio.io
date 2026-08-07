import { useContext } from "react";
import { ImgContext } from "./ImgContext";

export const useImgChanger = () => useContext(ImgContext);
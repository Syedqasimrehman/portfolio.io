import SQR from "../assets/images/SQR.jpg";
import some from "../assets/svgs/some.svg";
import { images } from "../constants";
import Button from "./Button";
import { ChevronRight, ChevronLeft, X, ChevronDown } from "lucide-react";
import "../style/style.css";
import InfiniteCarousel from "./Infinite";
import { useImgChanger } from "../context/UseImgChanger";

const Home = () => {
 const {
     openImage,
     privousImage,
     fowardImage,
     CloseImage,
     currentIndex,
     Imagechange,
   } = useImgChanger();
  return (
    <>
      {/* <section className="relative section_1 pt-[200px] pb-[100px]">
        
      </section> */}

      <section className="relative pt-[100px] pb-[100px] section_2">
        <div className="flex flex-wrap xl:mx-[4rem] lg:mx-[3.5rem] md:mx-[4rem] justify-center items-center mb-[100px]">
          <div className="">
            <img
              className="p-5 min-w-[300px] xl:w-[400px] lg:w-[350px] md:[350px] rounded-[1.7rem]"
              width={500}
              height={350}
              src={SQR}
              alt={SQR}
            />
          </div>
          <div className="mx-3">
            <h2 className="h2 text-transparent bg-clip-text bg-gradient-to-r from-gray-200">
              I&apos;m a FullStack Developer.
            </h2>
            <p className="p body-2 ">
              I&apos;m a FullStack Developer with more than 3 years of experience.
            </p>
            <div className="mt-5">
              <Button className="bg-lime-500 text-n-8 py-3 cursor-pointer transition-all border border-lime-500  hover:bg-n-8 hover:text-white ">
                <a href="/contact" className="flex">
                  Download CV{" "}
                  <i className="ml-3">
                    {" "}
                    <ChevronDown />
                  </i>{" "}
                </a>
              </Button>
            </div>
          </div>
        </div>
        <img src={some} alt="" />
        <div className="flex flex-col ">
          <div className=" grid grid-cols-1 md:grid-cols-2 p-[20px] overflow-hidden gap-5 ">
            {images.map((item, index) => (
              <div  key={index} className="thumbnail-container">
                <div className="relative">
                <li className=" list-none">
                  <img
                    src={item.img}
                    alt={index}
                    onClick={() => openImage(index)}
                    className="thumbnail grid xl:w-[800px] rounded-xl sm:grid-cols-1 sm:w-[600px] ms:w-[200px] relative "
                  />
                  <div className="absolute top-5 right-3 "><span className="bg-[#0003] pointer-events-none p-3 rounded-full">{item.category}</span></div>
                  <div className="hover-data absolute bottom-4 left-5 opacity-0 transition-all transition-[.9s ease-in-out]">{item.text}</div>
                </li>
                </div>
              </div>
            ))}
            {currentIndex !== null && (
              <div className="popup-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
                <div className=" relative">
                  <div className=" relative">
                    <img
                      src={images[Imagechange]?.img}
                      alt={images[Imagechange]?.text}
                      className="xl:w-[800px] rounded-xl :w-[150px] "
                    />

                    <button
                      onClick={CloseImage}
                      className="absolute top-2 right-2 rounded-full p-2"
                    >
                      <X />
                    </button>
                    <button
                      onClick={privousImage}
                      className="absolute top-[50%] left-3 px-4"
                    >
                      <ChevronLeft />
                    </button>
                    <button
                      onClick={fowardImage}
                      className="absolute top-[50%] right-3 px-4 "
                    >
                      <ChevronRight />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
         <div>
          <div className="mt-[120px]">
            <h1 className="text-center tracking-[5px] mb-[30px] text-[16px] font-medium font-[] uppercase">Places where I&apos;m available</h1>
          </div>
          <div className="justify-items-center"><InfiniteCarousel/></div>
        </div>
      </section>
      {/* <section className="relative pt-[50px] pb-[100px] section_3">
       
      </section> */}
    </>
  );
};

export default Home;

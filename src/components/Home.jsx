import SQR from "../assets/images/SQR.jpg";
import some from "../assets/svgs/some.svg";
import { images } from "../constants";
import Button from "./Button";
import { ChevronRight, ChevronLeft, X, ChevronDown } from "lucide-react";
import "../style/style.css";
import InfiniteCarousel from "./Infinite";
import { useImgChanger } from "../context/UseImgChanger";
import ProjectCard from "./ProjectCard";
import { motion } from "motion/react";

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
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 xl:mx-[4rem] lg:mx-[3.5rem] md:mx-[4rem] mb-[100px]">
          <motion.div
            className="relative flex md:justify-start justify-center "
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ type: "spring", stiffness: 80, damping: 14 }}
          >
            {/* Continuous gentle float */}
            <motion.div
              className="relative"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Slowly rotating gradient glow ring behind the image */}
              <motion.div
                className="absolute -inset-3 rounded-[2rem] opacity-60 blur-xl"
                style={{
                  background:
                    "conic-gradient(from 0deg, #AC6AFF, #858DFF, #FF98E2, #FFC876, #AC6AFF)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <img
                className="relative w-full max-w-[300px] md:max-w-[350px] lg:max-w-[350px] xl:max-w-[400px] rounded-[1.7rem] border border-n-6 bg-n-8"
                width={500}
                height={350}
                src={SQR}
                alt="Syed Qasim Rehman"
              />
            </motion.div>
          </motion.div>
          <div className="mx-3 max-w-[550px] text-center md:text-left">
            <h2 className="h2 text-transparent bg-clip-text bg-gradient-to-r from-gray-200">
              I&apos;m a FullStack Developer.
            </h2>
            <p className="p body-2 flex-warp">
              I&apos;m a FullStack Developer with more than 3 years of experience. I work on production websites and apps using different stacks.
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
          <div className="grid grid-cols-1 gap-6 p-[20px] md:grid-cols-2">
            {images.map((item, index) => (
              <ProjectCard
                key={index}
                item={item}
                index={index}
                onOpen={openImage}
              />
            ))}
            {currentIndex !== null && (
              <div className="popup-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
                <div className=" relative">
                  <div className=" relative">
                    <img
                      src={images[Imagechange]?.img}
                      alt={images[Imagechange]?.text}
                      className="w-[90vw] max-w-[800px] max-h-[80vh] object-contain rounded-xl"
                    />

                    <button
                      onClick={CloseImage}
                      className="absolute top-2 right-2 rounded-full bg-black/50 p-2"
                    >
                      <X />
                    </button>
                    <button
                      onClick={privousImage}
                      className="absolute top-[50%] left-1 sm:left-3 px-2 sm:px-4 rounded-full bg-black/50"
                    >
                      <ChevronLeft />
                    </button>
                    <button
                      onClick={fowardImage}
                      className="absolute top-[50%] right-1 sm:right-3 px-2 sm:px-4 rounded-full bg-black/50"
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

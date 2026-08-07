import some from "../assets/svgs/some.svg";
import { images } from "../constants";
import { useImgChanger } from "../context/UseImgChanger";
import { ChevronRight, ChevronLeft, X } from "lucide-react";

const Projects = () => {
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
      <section className="relative pt-[50px] pb-[100px] section_2">
        <div className="container">
          <div className="flex items-center">
            <div className="my-[4rem]">
              <h1 className="h1 double mb-10 text-neutral-500">My Projects</h1>
              <p className="p body-2 text-neutral-500 text-[20px] pl-[40px] xl:pr-[400px] leading-[28px] md:pr-[140px] ">
                Their are a lists of my Projects which I have complete in using differnt tecuuhnologies 
              </p>
            </div>
          </div>
        </div>
        <img src={some} alt="" />
        <div className="flex flex-col ">
          <div className=" grid grid-cols-1 md:grid-cols-2 p-[20px] overflow-hidden gap-5 ">
            {images.map((item, index) => (
              <div key={index} className="thumbnail-container">
                <div className="relative">
                  <li className=" list-none">
                    <img
                      src={item.img}
                      alt={index}
                      onClick={() => openImage(index)}
                      className="thumbnail grid xl:w-[800px] rounded-xl sm:grid-cols-1 sm:w-[600px] ms:w-[200px] relative "
                    />
                    <div className="absolute top-5 right-3 ">
                      <span className="bg-[#0003] pointer-events-none p-3 rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <div className="hover-data absolute bottom-4 left-5 opacity-0 transition-all transition-[.9s ease-in-out]">
                      {item.text}
                    </div>
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
      </section>
    </>
  );
};

export default Projects;

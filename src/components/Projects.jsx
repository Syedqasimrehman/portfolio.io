import some from "../assets/svgs/some.svg";
import { images } from "../constants";
import { useImgChanger } from "../context/UseImgChanger";
import { ChevronRight, ChevronLeft, X } from "lucide-react";
import ProjectCard from "./ProjectCard";

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
      </section>
    </>
  );
};

export default Projects;

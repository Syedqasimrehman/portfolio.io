import SkillInfinite from "./SkillInfinite";
const About = () => {
  return (
    <>
      <section
        id="about"
        className=" bg-gradient-to-[#0E0B2E] from-black  bg-custom-gradient h-auto py-10"
      >
        <div className="container">
          <div className="flex items-center">
            <div className="my-[4rem]">
              <h1 className="h1 double mb-10 text-neutral-500">About me</h1>
              <p className="p body-2 text-neutral-500 text-[20px] pl-[40px] xl:pr-[400px] leading-[28px] md:pr-[140px] ">
                Hi I&apos;m Syed Qasim Rehman. I&apos;m from KPK Tordher Swabi
                Pakistan. I&apos;m Undergraduate final year student in
                University of Swabi. I Working as web developer from several
                years using different technologies.
              </p>
            </div>
          </div>
          <div className="">
            <p className="p body-2 text-neutral-500 text-[20px] pl-[40px] xl:pr-[400px] leading-[28px] md:pr-[140px]">
              The Web Development technologies are listed below.
            </p>
            <ul className="mt-[1rem] pl-[40px] pr-[-10px]  leading-[28px] body-2">
              {/* {listOfSkills.map((item , index) => (
                <li key={index}>{item.title}</li>
              ))} */}
              
              <SkillInfinite direction="left" />
              <SkillInfinite direction="right" />
              <br />
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

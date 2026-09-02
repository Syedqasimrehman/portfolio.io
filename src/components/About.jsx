import { motion } from "motion/react";
import SkillInfinite from "./SkillInfinite";
import SkillsGrid from "./SkillsGrid";

const About = () => {
  return (
    <>
      <section
        id="about"
        className=" bg-gradient-to-[#0E0B2E] from-black  bg-custom-gradient h-auto py-10"
      >
        <div className="container">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="my-[4rem]">
              <h1 className="h1 double mb-10 text-neutral-500">About me</h1>
              <p className="p body-2 text-neutral-500 text-[20px] pl-[40px] xl:pr-[400px] leading-[28px] md:pr-[140px] ">
                Hi I&apos;m Syed Qasim Rehman. I&apos;m from KPK Tordher Swabi
                Pakistan. I&apos;m Undergraduate final year student in
                University of Swabi. I Working as web developer from several
                years using different technologies.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <p className="p body-2 text-neutral-500 text-[20px] pl-[40px] xl:pr-[400px] leading-[28px] md:pr-[140px]">
              The Web Development technologies are listed below.
            </p>
            <ul className="mt-[1rem] pl-[40px] pr-[-10px]  leading-[28px] body-2">
              <SkillInfinite direction="left" />
              <SkillInfinite direction="right" />
              <br />
            </ul>
          </motion.div>

          <motion.div
            className="pl-[40px] pr-[20px] mt-[3rem]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            <h2 className="h5 text-n-1 mb-2">Explore my skillset</h2>
            <p className="body-2 text-n-4 mb-6">
              Filter by category, or hover a card to see it come alive.
            </p>
            <SkillsGrid />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;

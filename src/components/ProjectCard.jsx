import { motion } from "motion/react";

// Scroll-triggered reveal for each project card.
// Cards start slightly below and rotated, then spring into place
// as they enter the viewport (adapted from Motion's ScrollTriggered example).
export const cardVariants = {
  offscreen: {
    y: 100,
    opacity: 0,
    rotate: -6,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const ProjectCard = ({ item, index, onOpen }) => {
  return (
    <motion.div
      className="group relative cursor-pointer"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={() => onOpen(index)}
    >
      {/* Glow ring that appears on hover, using the site's accent palette */}
      <div className="pointer-events-none absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-color-1 via-color-5 to-color-6 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-60" />

      <div className="relative overflow-hidden rounded-2xl border border-n-6 bg-n-7">
        <div className="relative overflow-hidden">
          <img
            src={item.img}
            alt={item.text}
            className="h-[220px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 md:h-[280px]"
          />
          {/* Bottom gradient so the title stays readable over any image */}
          <div className="absolute inset-0 bg-gradient-to-t from-n-8 via-n-8/10 to-transparent" />

          <span className="absolute top-4 right-4 rounded-full border border-n-6 bg-n-8/70 px-3 py-1 text-xs font-medium tracking-wide text-n-2 backdrop-blur-sm">
            {item.category}
          </span>

          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="translate-y-2 text-lg font-semibold text-n-1 transition-transform duration-300 group-hover:translate-y-0 md:text-xl">
              {item.text}
            </h3>
            <p className="max-h-0 overflow-hidden text-sm text-n-3 opacity-0 transition-all duration-300 group-hover:max-h-10 group-hover:opacity-100">
              Click to view
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

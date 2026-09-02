import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { listOfSkills } from "../constants";

const categories = ["All", "Frontend", "Backend", "Data", "Mobile", "Languages", "Tools"];

const SkillsGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = useMemo(() => {
    if (activeCategory === "All") return listOfSkills;
    return listOfSkills.filter((skill) => skill.category === activeCategory);
  }, [activeCategory]);

  return (
    <div>
      {/* Category filter tabs */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                isActive ? "text-n-8" : "text-n-3 hover:text-n-1"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="skill-tab-highlight"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-color-1 via-color-5 to-color-6"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          );
        })}
      </div>

      {/* Filtered, animated skill grid */}
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.id}
              layout
              initial={{ opacity: 0, scale: 0.8, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -12 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              whileHover={{ y: -6, scale: 1.06 }}
              className="group flex flex-col items-center gap-3 rounded-xl border border-n-6 bg-n-7 px-2 py-4 text-center transition-colors duration-300 hover:border-color-1/60 sm:px-3 sm:py-5"
            >
              <div className="transition-transform duration-300 group-hover:scale-110">
                {skill.img}
              </div>
              <span className="text-xs text-n-3 transition-colors duration-300 group-hover:text-n-1">
                {skill.title}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SkillsGrid;

import { useRef, useEffect, useState } from "react";
import { listOfSkills } from "../constants";

export default function InfiniteCarousel({ direction = "left" }) {
  const trackRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const triplicatedImages = [...listOfSkills, ...listOfSkills, ...listOfSkills];

  useEffect(() => {
    if (trackRef.current) {
      const oneSetWidth = trackRef.current.scrollWidth / 3;
      setScrollWidth(oneSetWidth);
    }
  }, []);

  return (
    <div className="carousel-container-skill">
      <div
        className={`carousel-track-skill direction-${direction}`}
        ref={trackRef}
        style={{ "--scroll-distance": `${scrollWidth}px` }}
      >
        {triplicatedImages.map((item, index) => (
          <li
            key={`${item.id}-${index}`}
            className="carousel-item-skill carousel-image-skill group relative"
          >
            <div className="transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-125">
              {item.img}
            </div>
            <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-n-6 bg-n-8 px-2 py-1 text-xs text-n-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              {item.title}
            </span>
          </li>
        ))}
      </div>
    </div>
  );
}

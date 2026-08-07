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
            className="carousel-item-skill carousel-image-skill"
          >
            {item.img}
            {/* <img src= alt={item.title} /> */}
          </li>
        ))}
      </div>
    </div>
  );
}

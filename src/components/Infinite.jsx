import { useRef, useEffect, useState } from "react";
import { images } from "../constants";

export default function InfiniteCarousel() {
  const trackRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const triplicatedImages = [...images, ...images, ...images];

  useEffect(() => {
    if (trackRef.current) {
      const oneSetWidth = trackRef.current.scrollWidth / 3;
      setScrollWidth(oneSetWidth);
    }
  }, []);

  return (
    <div className="carousel-container">
      <div
        className="carousel-track"
        ref={trackRef}
        style={{ "--scroll-distance": `${scrollWidth}px` }}
      >
        {triplicatedImages.map((item, index) => (
          <div className="carousel-item" key={`${item.id}-${index}`}>
            <img src={item.img} alt={item.alt} className="carousel-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

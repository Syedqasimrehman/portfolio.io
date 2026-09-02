const SVGComponent = ({ width, height, className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1000 500"
    width={width}
    height={height}
    className={`group transition-colors duration-300 ${className || ""}`}
    {...rest}
  >
    <defs>
      <pattern
        id="wovenPattern"
        width={40}
        height={40}
        patternUnits="userSpaceOnUse"
        patternTransform="rotate(45)"
      >
        <rect width={40} height={40} fill="none" />
        {/* Added 'fill-current' and 'group-hover' to pattern elements */}
        <rect x={5} y={2} width={30} height={8} rx={4} className="fill-current text-white group-hover:text-lime-400 transition-colors duration-300" />
        <rect x={5} y={22} width={30} height={8} rx={4} className="fill-current text-white group-hover:text-lime-400 transition-colors duration-300" />
        <rect x={2} y={5} width={8} height={30} rx={4} className="fill-current text-white group-hover:text-lime-400 transition-colors duration-300" />
        <rect x={22} y={5} width={8} height={30} rx={4} className="fill-current text-white group-hover:text-lime-400 transition-colors duration-300" />
      </pattern>
      
      <mask id="letterRMask">
        {/* The mask remains white (#ffffff) because masks require absolute white to show 100% opacity */}
        <path
          d="M680,120 L800,120 C855,120 890,150 890,205 C890,250 860,280 810,290 L890,440 L810,440 L740,305 L740,440 L680,440 Z M740,175 L740,255 L795,255 C825,255 835,240 835,215 C835,190 825,175 795,175 Z"
          fill="#ffffff"
        />
      </mask>
    </defs>
    
    <g id="Logo-SQR">
      {/* Letter S */}
      <path
        d="M350,205 L288,212 C285,178 265,168 240,168 C212,168 194,178 194,202 C194,250 350,235 350,345 C350,405 305,440 235,440 C165,440 125,405 120,340 L182,333 C185,372 208,392 235,392 C265,392 286,378 286,350 C286,295 130,305 130,195 C130,135 175,100 245,100 C315,100 355,135 360,200 Z"
        className="fill-current text-white group-hover:text-lime-400 transition-colors duration-300"
      />
      
      {/* Letter Q */}
      <path
        d="M515,120 C435,120 395,180 395,280 C395,380 435,440 515,440 C550,440 580,420 600,385 C605,420 620,440 655,440 L655,410 C625,410 615,390 613,355 C630,315 635,290 635,280 C635,180 595,120 515,120 Z M515,168 C560,168 575,215 575,280 C575,302 572,325 565,345 C520,350 470,330 445,310 C462,240 488,168 515,168 Z M455,342 C480,368 530,392 570,388 C555,405 538,412 515,412 C470,412 455,375 455,342 Z"
        className="fill-current text-white group-hover:text-lime-400 transition-colors duration-300"
      />
      
      {/* Letter R Container */}
      <rect
        x={650}
        y={100}
        width={260}
        height={360}
        fill="url(#wovenPattern)"
        mask="url(#letterRMask)"
      />
    </g>
  </svg>
);

export default SVGComponent;

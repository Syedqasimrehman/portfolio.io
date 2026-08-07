const Section = ({ className, id, children ,customPaddings  }) => {
  return (
    <div
    id={id}
    className={`
      relative ${
        customPaddings ||
        `top-20 py-10 lg:py-16 xl:py-20 ${
          className || ""
        } `
      }`}
  >
    {children}
    </div>
  );
};

export default Section;

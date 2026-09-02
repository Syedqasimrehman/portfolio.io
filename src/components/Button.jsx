const Button = ({
  onClick,
  href,
  children,
  color,
  px,
  className,
  type = "button",
  disabled,
}) => {
  const classes = `relative rounded-full inline-flex justify-center
     items-center ${px || "px-7 py-2"} ${color ? "text-n-6" : "text-n-3"}
     ${disabled ? "opacity-60 cursor-not-allowed" : ""}
     ${className || ""}`;

  const spanClass = "relative z-10";

  const renderButton = () => (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
    >
      <span className={spanClass}>{children}</span>
      {color}
    </button>
  );
  const renderLink = () => (
    <a href={href} className={className}>
      <span className={spanClass}>{children}</span>
      {color}
    </a>
  );
  return href ? renderLink() : renderButton();
};

export default Button;

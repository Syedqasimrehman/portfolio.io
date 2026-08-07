const date = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="flex justify-center ">
      <p className="font-extralight text-[14px] my-[2rem] ">
        &copy;Copyrigth {date} <span className="text-lime-400">SQR</span> All
        Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;

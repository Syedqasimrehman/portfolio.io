import { contact } from "../constants";
import Button from "./Button";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setResult("");

    const formData = new FormData(event.target);
    formData.append("access_key", "ec05e892-361b-4318-aa55-c32a648e8728");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setResult(data.success ? "Success!" : "Error");

      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset();
      } else {
        setResult(data.message || "Something went wrong!");
      }
    } catch (error) {
      setResult(error, "Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* <section
        id="contact"
        className=" bg-gradient-to-[#0E0B2E] from-black  bg-custom-gradient py-[2rem] "
      >
       
      </section> */}
      <section className="p-[1rem] py-[3rem] section_1 ">
         <div className="container">
          <div className="flex items-center">
            <div className="my-[4rem]">
              <h1 className="h1 double mb-10 text-neutral-500">Say Hello</h1>
              <p className="p body-2 text-neutral-500 text-[20px] pl-[40px] xl:pr-[400px] leading-[28px] md:pr-[140px] ">
                Fill out the form below to get in touch with me. I&apos;m always
                excited to hear about new opportunities and I&apos;ll do my best
                to respond to your inquiry within 24 hours.
              </p>
            </div>
          </div>
        </div>
        <div className="container relative">
          <div className="flex flex-row w-full pb-[30px] ">
            <div className="col-lg-12">
              <ul className="flex flex-wrap ">
                {contact.map((item, index) => (
                  <li
                    key={index}
                    className="flex row border-lime-500 border-[1px] border-dashed p-2 rounded-md mb-3 ml-4 "
                  >
                    <p className="p body-2 text-[15.5px] text-neutral-400">
                      {item.title}
                      <span>{item.text}</span>
                      <i className="ml-1">{item.svg}</i>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {isLoading && (
            <div className="loading-overlay">
              <div className="loading-circle"></div>
            </div>
          )}
          <form onSubmit={onSubmit}>
            <div className="flex flex-row">
              <div className="w-full">
                <div className="flex flex-col md:flex-row gap-5 pb-[30px] w-[100%]">
                  <div className="form-1 flex flex-col">
                    <label
                      className="text[15px] text-neutral-500 mb-[18px]"
                      htmlFor="name"
                      name="Name"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="Name"
                      id="name"
                      required
                      placeholder="jone smith"
                      className="bg-white p-[1.2rem] xl:w-[39rem] lg:w-[30rem] md:w-[20rem] rounded-md outline-none text-n-7"
                    />
                  </div>

                  <div className="form-2 flex flex-col">
                    <label
                      className="text[15px] text-neutral-500 mb-[18px]"
                      htmlFor="email"
                      name="email"
                    >
                      Email Address
                    </label>
                    <input
                      required
                      placeholder="websiteName@example.com"
                      id="email"
                      type="email"
                      name="email"
                      className="bg-white p-[1.2rem] xl:w-[39rem] lg:w-[30rem] md:w-[20rem] rounded-md outline-none text-n-7"
                    />
                  </div>
                </div>

                <div className="form-3 flex flex-col">
                  <label
                    className="text[15px] text-neutral-500 mb-[18px]"
                    htmlFor="description"
                    name="text"
                  >
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    required
                    id="description"
                    rows={4}
                    maxLength={100}
                    className="bg-white text-black rounded-md px-[18px] py-[20px] text-start w-full h-[150px] resize-none min-w-[250px]"
                    placeholder="Enter Massege"
                  />
                  <p>{result}</p>
                </div>
              </div>
            </div>
            <div className="">
              <Button
                type="submit"
                className="mt-5 bg-lime-500 text-n-8 py-3 cursor-pointer transition-all border border-lime-500  hover:bg-n-8 hover:text-white"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;

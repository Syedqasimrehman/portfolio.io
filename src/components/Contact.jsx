import { contact } from "../constants";
import Button from "./Button";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSuccess, setIsSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setResult("");
    setIsSuccess(null);

    const formData = new FormData(event.target);
    formData.append("access_key", "ec05e892-361b-4318-aa55-c32a648e8728");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        setResult("Message sent successfully! I'll get back to you soon.");
        event.target.reset();
      } else {
        setIsSuccess(false);
        setResult(data.message || "Something went wrong!");
      }
    } catch {
      setIsSuccess(false);
      setResult("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const inputClasses =
    "bg-white p-[1.2rem] w-full max-w-full md:w-[20rem] lg:w-[30rem] xl:w-[39rem] rounded-md outline-none text-n-7 border-2 border-transparent transition-all duration-300 focus:border-color-1 focus:shadow-[0_0_0_4px_rgba(172,106,255,0.25)]";

  return (
    <>
      <section className="p-[1rem] py-[3rem] section_1 ">
        <div className="container">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="my-[4rem]">
              <h1 className="h1 double mb-10 text-neutral-500">Say Hello</h1>
              <p className="p body-2 text-neutral-500 text-[20px] pl-[40px] xl:pr-[400px] leading-[28px] md:pr-[140px] ">
                Fill out the form below to get in touch with me. I&apos;m always
                excited to hear about new opportunities and I&apos;ll do my best
                to respond to your inquiry within 24 hours.
              </p>
            </div>
          </motion.div>
        </div>
        <div className="container relative">
          <motion.div
            className="flex flex-row w-full pb-[30px] "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          >
            <div className="col-lg-12 w-full">
              <ul className="flex flex-wrap gap-4">
                {contact.map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ y: -4 }}
                    className="group flex items-center gap-2 rounded-md border border-n-6 bg-n-7/60 px-4 py-3 transition-colors duration-300 hover:border-lime-500/60"
                  >
                    <span className="text-lime-400 transition-transform duration-300 group-hover:scale-110">
                      {item.svg}
                    </span>
                    <p className="p body-2 text-[15.5px] text-neutral-400">
                      {item.title}{" "}
                      <span className="text-neutral-200">{item.text}</span>
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <AnimatePresence>
            {isLoading && (
              <motion.div
                className="loading-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="loading-circle"></div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            <div className="flex flex-row">
              <div className="w-full">
                <div className="flex flex-col md:flex-row gap-5 pb-[30px] w-[100%]">
                <div className="form-1 flex flex-col w-full md:w-auto">
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
                      className={inputClasses}
                    />
                  </div>

                  <div className="form-2 flex flex-col w-full md:w-auto">
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
                      className={inputClasses}
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
                    className="bg-white text-black rounded-md px-[18px] py-[20px] text-start w-full h-[150px] resize-none min-w-[250px] border-2 border-transparent transition-all duration-300 outline-none focus:border-color-1 focus:shadow-[0_0_0_4px_rgba(172,106,255,0.25)]"
                    placeholder="Enter message"
                  />
                  <AnimatePresence mode="wait">
                    {result && (
                      <motion.p
                        key={result}
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        className={`mt-2 text-sm ${
                          isSuccess ? "text-green-400" : "text-red-400"
                        }`}
                      >
                        {result}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
            <motion.div
              className="inline-block"
              whileHover={{ scale: isLoading ? 1 : 1.05 }}
              whileTap={{ scale: isLoading ? 1 : 0.95 }}
            >
              <Button
                type="submit"
                disabled={isLoading}
                className="mt-5 bg-lime-500 text-n-8 py-3 cursor-pointer transition-all border border-lime-500  hover:bg-n-8 hover:text-white"
              >
                {isLoading ? "Sending..." : "Submit"}
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </section>
    </>
  );
};

export default Contact;

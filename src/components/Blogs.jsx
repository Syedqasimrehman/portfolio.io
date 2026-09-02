import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const Blogs = () => {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState("");
  const [isSuccess, setIsSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onNotify = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setResult("");
    setIsSuccess(null);

    const formData = new FormData();
    formData.append("access_key", "ec05e892-361b-4318-aa55-c32a648e8728");
    formData.append("subject", "New blog notify-me signup");
    formData.append("email", email);
    formData.append(
      "message",
      `${email} wants to be notified when the blog launches.`
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        setResult("You're on the list — I'll email you at launch.");
        setEmail("");
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

  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden py-[4rem]">
      {/* Slowly rotating gradient glow, matching the Home page picture accent */}
      <motion.div
        className="pointer-events-none absolute h-[420px] w-[420px] rounded-full opacity-30 blur-[90px]"
        style={{
          background:
            "conic-gradient(from 0deg, #AC6AFF, #858DFF, #FF98E2, #FFC876, #AC6AFF)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      <div className="container relative">
        <div className="flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-n-6 bg-n-7/60 px-4 py-1 text-xs tracking-wide text-n-3"
          >
            <motion.span
              className="h-2 w-2 rounded-full bg-lime-400"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
            Writing in progress
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="h1 double mb-6 text-neutral-500"
          >
            Coming Soon
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="p body-2 max-w-[520px] text-[18px] leading-[28px] text-neutral-400"
          >
            I&apos;m working on write-ups about the projects I build — stack
            decisions, things that broke, things I&apos;d do differently.
            Drop your email and I&apos;ll let you know the moment the first
            post is up.
          </motion.p>

          <motion.form
            onSubmit={onNotify}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="mt-8 flex w-full max-w-[440px] flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full flex-1 rounded-md border-2 border-transparent bg-white p-[0.9rem] text-n-7 outline-none transition-all duration-300 focus:border-color-1 focus:shadow-[0_0_0_4px_rgba(172,106,255,0.25)]"
            />
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: isLoading ? 1 : 1.05 }}
              whileTap={{ scale: isLoading ? 1 : 0.95 }}
              className={`whitespace-nowrap rounded-md border border-lime-500 bg-lime-500 px-6 py-3 font-medium text-n-8 transition-all duration-300 hover:bg-n-8 hover:text-white ${
                isLoading ? "cursor-not-allowed opacity-60" : "cursor-pointer"
              }`}
            >
              {isLoading ? "Sending..." : "Notify me"}
            </motion.button>
          </motion.form>

          <AnimatePresence mode="wait">
            {result && (
              <motion.p
                key={result}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className={`mt-4 text-sm ${
                  isSuccess ? "text-green-400" : "text-red-400"
                }`}
              >
                {result}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Blogs;

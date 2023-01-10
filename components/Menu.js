import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function Menu({ open, toggle }) {
  const menuWidth = () => {
    if (window.innerWidth < 768) {
      return "100%";
    } else {
      return "33.3%";
    }
  };
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ width: "0%", opacity: 0 }}
          animate={{
            width: menuWidth(),
            opacity: 1,
            transition: { duration: 1 },
          }}
          exit={{
            width: "0%",
            opacity: 0,
            transition: { duration: 1 },
          }}
          className="fixed top-0 right-0 z-10 primaryColor"
          id="menu-container"
        >
          <div className="bg-[#202124] text-white fixed top-0 md:w-1/3 w-full h-screen opacity-95 subtitle tracking-[0.1rem]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeIn", duration: "2" }}
            >
              <button
                className="absolute right-0 m-10 uppercase text-3xl x"
                onClick={toggle}
              >
                X
              </button>
            </motion.div>
            <div className="flex flex-col h-full w-[80%] justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeIn", duration: "2" }}
                className="text-right text-xl h-[50%] flex flex-col justify-evenly"
              >
                <Link href="/info">
                  <div className="cursor-pointer hover:tracking-widest duration-700">
                    Home
                  </div>
                </Link>
                <Link href="/about">
                  <div className="cursor-pointer hover:tracking-widest duration-700">
                    About me
                  </div>
                </Link>
                <Link href="/schedule">
                  <div className="cursor-pointer hover:tracking-widest duration-700">
                    Schedule
                  </div>
                </Link>
                <Link href="/videos">
                  <div className="cursor-pointer hover:tracking-widest duration-700">
                    Recorded practice
                  </div>
                </Link>
                <Link href="/contact">
                  <div className="cursor-pointer hover:tracking-widest duration-700">
                    Contact
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

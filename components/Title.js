import { AnimatePresence, motion } from "framer-motion";

export default function Title({ children }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeIn", duration: "1" }}
      >
        <div className="absolute flex top-0 left-0 w-full h-full flex-col justify-center text-center primaryColor title">
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

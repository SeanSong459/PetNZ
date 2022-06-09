import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import SigninSection from "../Components/Signin/SigninSection";
import Footer from "../Components/Footer/Footer";
import { AnimatePresence, motion } from "framer-motion";

const Signin = () => {
  return (
    <>
      {/* <AnimatePresence> */}
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <Navbar />
        <SigninSection />
        <Footer />
      </motion.div>
      {/* </AnimatePresence> */}
    </>
  );
};

export default Signin;

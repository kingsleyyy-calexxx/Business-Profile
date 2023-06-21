import React from "react";
import { motion} from "framer-motion";
import "../Styles/Home.css";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
function Home() {
  const navigate = useNavigate();
  const textVariants = {
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%"],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };
  const handleCreate = () => {
    navigate("/Intro");
  };
  return (
    <div className="home-container">
      <div className="motion-container">

        <motion.div
            variants={textVariants}
          initial="animate"
          animate="animate"
          style={{
            background: "linear-gradient(to right, #ffff30, #00bfff, #ffff30)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundSize: "200% auto"}}
        >
          <h1 className="major-title">Looking for a new Link?</h1>
        </motion.div>
        <Button variant="contained" color="secondary" onClick={handleCreate}>
          Connect
        </Button>
      </div>
      <div className="button-container-home"></div>
    </div>
  );
}

export default Home;

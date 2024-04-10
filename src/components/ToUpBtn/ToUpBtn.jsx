import { useState, useEffect } from "react";
import css from "./ToUpBtn.module.css";
import clsx from "clsx";

const ToUpBtn = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const handleUpButton = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={css.toUpBtn}>
      <button
        className={clsx("", scroll > 300 && [css.show])}
        onClick={handleUpButton}
      >
        UP
      </button>
    </div>
  );
};

export default ToUpBtn;

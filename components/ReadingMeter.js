import { useEffect, useState } from "react";
import styles from "../styles/ReadingMeter.module.css"; // Create a CSS module for styling

const ReadingMeter = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const fullHeight = document.body.scrollHeight;
    const scrollPosition = window.scrollY;

    const totalHeight = fullHeight - windowHeight;
    const percentScrolled = (scrollPosition / totalHeight) * 100;

    setScrollPercent(percentScrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.readingMeter}>
      <div className={styles.progress} style={{ width: `${scrollPercent}%` }} />
    </div>
  );
};

export default ReadingMeter;

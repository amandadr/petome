import { useState, useEffect } from "react";

const Typewriter = ({ text, delay, infinite }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

    } 
    else if (infinite) {
      timeout = setTimeout(() => {
        setCurrentText('');
        setCurrentIndex(0);
      }, delay);
    }
    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text]);

  return <>{currentText}</>;
};

export default Typewriter;


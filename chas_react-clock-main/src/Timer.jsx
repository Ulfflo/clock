import { useState, useEffect } from "react";

export default function Timer({ initialCounter }) {
  const [counter, setCounter] = useState(initialCounter);

  useEffect(() => {
    setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter === 0) {
          return 0;
        }
        return prevCounter - 1;
      });
    }, 1000);
  }, []);

  const minutes = Math.floor(counter / 60);
  const seconds = counter - minutes * 60;

  return (
    <div>
      <p>
        Time Remaining: {minutes < 10 ? "0" : ""}
        {minutes}:{seconds < 10 ? "0" : ""}
        {seconds}
      </p>
    </div>
  );
}

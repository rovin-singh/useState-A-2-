import React, { useEffect } from "react";

const Timer = ({ start, end, setStart }) => {
  const [timer, setTimer] = React.useState(start);

  useEffect(() => {
    let id = setInterval(() => {
      if (timer < end) {
        setTimer(timer + 1);
      }
    }, 1000);
    return () => {
      clearTimeout(id);
    };
  }, [timer]);
  return (
    <div>
      <h1>
        Timer from {start} to {end}
      </h1>
      <h1>Time: {timer}</h1>
    </div>
  );
};
export default Timer;

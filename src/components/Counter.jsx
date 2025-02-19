import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import { animated, useSpring } from "react-spring";
import styles from "./Counter.module.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  // Dynamic background color logic:
  // - Positive: Blue (0, 0, 255)
  // - Negative: Red (255, 0, 0)
  // - Neutral (0): White (255, 255, 255)
  const bgSpring = useSpring({
    backgroundColor: count >= 0 
      ? `rgba(0, 0, 255, ${Math.min(count / 75, 1)})`
      : `rgba(255, 0, 0, ${Math.min(Math.abs(count) / 75, 1)})`,
    config: { tension: 200, friction: 20 },
  });

  return (
    <animated.div className={styles.container} style={bgSpring}>
      <Box>
        <h1> {count}</h1>
        <h2 className={styles.counterValue}>Counter</h2>
        <div className={styles.buttons}>
          <Button variant="contained" color="primary" onClick={() => setCount(count + 1)}>+</Button>
          <Button variant="contained" onClick={() => setCount(0)}>Reset</Button>
          <Button variant="contained" color="secondary" onClick={() => setCount(count - 1)}>-</Button>
         
        </div>
      </Box>
    </animated.div>
  );
};

export default Counter;

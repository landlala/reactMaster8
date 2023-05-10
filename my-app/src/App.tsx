import {useRef, useEffect} from "react";
import styled from "styled-components";
import {motion, useMotionValue, useTransform, useMotionValueEvent} from "framer-motion";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(225, 225, 225, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: white;
  height: 70px;
  width: 70px;
  place-self: center;
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: {scale: 1.5, rotateZ: 90},
  click: { scale: 1, borderRadius: "100px"},
  drag: {backgroundColor: "rgb(46, 204, 113)", transition: {duration: 10}},
};

function App() {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
  useMotionValueEvent(scale, "change", (l) => console.log(l));
  return (
    <Wrapper>
      <Box
        style = {{x, scale}}
        drag = "x" 
        dragSnapToOrigin
      />
    </Wrapper>
  );
}

export default App;
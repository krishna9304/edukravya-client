import { useEffect, useState } from "react";
import { useSpring, animated, config } from "react-spring";

function Loader() {
  const [isToRight, setIsToRight] = useState(false);
  const props = useSpring({
    to: {
      transform: `translateX(6.75rem)`,
      height: "0.75rem",
      width: "0.75rem",
      borderTopRightRadius: "0.5rem",
      borderBottomRightRadius: "0.5rem",
      borderTopLeftRadius: "0.5rem",
      borderBottomLeftRadius: "0.5rem",
    },
    from: {
      transform: `translateX(0rem)`,
      height: "0.75rem",
      width: "0.75rem",
      borderTopRightRadius: "0.5rem",
      borderBottomRightRadius: "0.5rem",
      borderTopLeftRadius: "0.5rem",
      borderBottomLeftRadius: "0.5rem",
    },
    delay: 300,
    reset: true,
    onRest: () => setIsToRight((itr) => !itr),
    reverse: isToRight,
    config: config.gentle,
  });
  return (
    <div className="rounded-full w-40 bg-gradient-to-r from-primary-700 to-secondary-300 border-4 border-white py-2 px-4">
      <animated.div
        className="rounded-full bg-white"
        style={props}
      ></animated.div>
    </div>
  );
}

export default Loader;

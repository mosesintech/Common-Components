import { useRef, useEffect } from "react";
import VanillaTilt, { type TiltOptions } from "vanilla-tilt";

// options = {
//   reverse:           false,  // reverse the tilt direction
//   max:               35,     // max tilt rotation (degrees)
//   perspective:       1000,   // Transform perspective, the lower the more extreme the tilt gets.
//   scale:             1,      // 2 = 200%, 1.5 = 150%, etc..
//   speed:             300,    // Speed of the enter/exit transition
//   transition:        true,   // Set a transition on enter/exit.
//   axis:              null,   // What axis should be disabled. Can be X or Y.
//   reset:             true,   // If the tilt effect has to be reset on exit.
//   easing:            "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
//   glare:             false,   // if it should have a "glare" effect
//   "max-glare":       1,      // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
//   "glare-prerender": false   // false = VanillaTilt creates the glare elements for you, otherwise
//                              // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
// }

export default function Tilt(props: {
  options: TiltOptions;
  children: JSX.Element;
  styles?: React.CSSProperties;
}) {
  const { options, styles, ...rest } = props;
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    VanillaTilt.init(tiltRef.current!, options);
  }, [options]);

  return <div ref={tiltRef} style={styles} {...rest} />;
}

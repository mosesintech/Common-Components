import { useRef, useEffect } from "react";
import VanillaTilt, { type TiltOptions } from "vanilla-tilt";

export default function Tilt(props: { options: TiltOptions }) {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tiltRef.current) VanillaTilt.init(tiltRef.current, props.options);
  }, [props.options]);

  return <div ref={tiltRef} {...props} />;
}

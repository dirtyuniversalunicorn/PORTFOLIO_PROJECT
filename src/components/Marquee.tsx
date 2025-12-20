import Marquee from "react-fast-marquee";
import type { MarqueeProps } from "react-fast-marquee";

export type MarqueeSliderProps = {
  children: React.ReactNode;
} & MarqueeProps;

export const MarqueeSlider = ({ children }: MarqueeSliderProps) => {
  return (
    <Marquee
      autoFill
      pauseOnHover
      speed={50}
      gradient
      gradientColor="#0e1011"
      className="h-28"
    >
      {children}
    </Marquee>
  );
};

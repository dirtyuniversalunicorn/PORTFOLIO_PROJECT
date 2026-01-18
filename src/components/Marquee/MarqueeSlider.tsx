import type { MarqueeProps } from "react-fast-marquee";
import Marquee from "react-fast-marquee";
import { withUniqueKeys } from "@/utils/withUniqueKeys";

export type MarqueeSliderProps = {
  children: React.ReactNode;
} & MarqueeProps;

export const MarqueeSlider = ({ children, ...props }: MarqueeSliderProps) => {
  return (
    <Marquee
      {...props}
      autoFill
      speed={50}
      gradient
      gradientColor="#0e1011"
      className="h-28"
    >
      {withUniqueKeys(children)}
    </Marquee>
  );
};

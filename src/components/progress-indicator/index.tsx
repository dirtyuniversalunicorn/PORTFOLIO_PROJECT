"use client";

import { Progress } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const ProgressIndicator = () => {
  const pathname = usePathname(); // detect page changes
  const [progress, setProgress] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <ignore this>
  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollable = docHeight > 0;
      setIsScrollable(scrollable);

      if (!scrollable) {
        setProgress(0);
        return;
      }

      setProgress((scrollTop / docHeight) * 100);
    };

    update();
    window.addEventListener("scroll", update);
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  if (!isScrollable) return null;

  return (
    <Progress.Root
      value={progress}
      max={100}
      orientation="vertical"
      style={{
        position: "fixed",
        top: "75%",
        right: 16,
        transform: "translateY(-50%)",
        height: "calc(100vh - 100px)",
        width: "6px",
        zIndex: 9999,
      }}
    >
      <Progress.Track height="50%">
        <Progress.Range />
      </Progress.Track>
    </Progress.Root>
  );
};

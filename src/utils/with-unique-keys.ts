import React, { cloneElement, isValidElement, type ReactNode } from "react";

export const withUniqueKeys = (children: ReactNode) => {
  return React.Children.map(children, (child, index) => {
    if (!isValidElement(child)) return child;

    return cloneElement(child, {
      key: `${child.key ?? index}-${Math.random()}`,
    });
  });
};

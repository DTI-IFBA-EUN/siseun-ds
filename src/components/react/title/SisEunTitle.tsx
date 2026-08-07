import { Title } from "@mantine/core";
import type { ReactNode } from "react";
import clsx from "clsx";
import classes from "./SisEunTitle.module.css";

export interface SisEunTitleProps {
  order?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  grid?: 4 | 8 | 12;
  isDark?: boolean;
}

export function SisEunTitle({
  order = 1,
  children,
  grid = 12,
  isDark = false,
}: SisEunTitleProps) {
  const variantClass = classes[`order${order}Grid${grid}`];

  return (
    <Title
      order={order}
      className={clsx(
        classes.title,
        variantClass,
        isDark ? classes.dark : classes.light,
      )}
    >
      {children}
    </Title>
  );
}

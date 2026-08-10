import { Divider } from "@mantine/core";
import type { MantineSize } from "@mantine/core";
import clsx from "clsx";
import classes from "./SisEunDivider.module.css";

interface SisEunDividerProps {
  size?: number | MantineSize;
  style?: "solid" | "dashed" | "dotted";
  isDark?: boolean;
}

export function SisEunDivider(props: SisEunDividerProps) {
  // parâmetros
  const size = props.size ?? "xl";
  const style = props.style ?? "solid";
  const isDark = props.isDark ?? false;

  return (
    <Divider
      size={size}
      variant={style}
      className={clsx(isDark && classes.dark, !isDark && classes.light, classes.divider)}
    />
  );
}

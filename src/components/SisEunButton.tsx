import { Button } from "@mantine/core";
import clsx from "clsx";
import classes from "./SisEunButton.module.css";

interface SisEunButtonProps {
  emphasis?: "primary" | "secondary" | "tertiary";
  type?: "default" | "circular";
  label?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  className?: string;
  overlay?: React.ReactNode;
  density?: "low" | "medium" | "high";
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
}

export function SisEunButton(props: SisEunButtonProps) {
  // parâmetros
  const emphasis = props.emphasis ?? "primary";
  const type = props.type ?? "default";
  const iconPosition = props.iconPosition ?? "left";
  const isCircular = type === "circular";
  const density = props.density ?? "medium";

  return (
    <Button
      variant="unstyled"
      onClick={props.onClick}
      aria-label={isCircular ? props.label : undefined}
      leftSection={
        !isCircular && iconPosition === "left" && props.icon
      }
      rightSection={
        !isCircular && iconPosition === "right" && props.icon
      }
      disabled={props.disabled}
      loading={props.loading}
      fullWidth={props.fullWidth}
      className={clsx(
        classes.button,
        classes[emphasis],
        classes[density],
        isCircular && classes.circular,
        props.className
      )}
    >
      <span className={classes.content}>
        {isCircular ? props.icon : props.label}
      </span>

      {props.overlay}
    </Button>
  );
}
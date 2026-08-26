import { TextInput, type TextInputProps } from "@mantine/core";
import classes from "./SisEunTextInput.module.css";

export type SisEunTextInputDensity = "low" | "medium" | "high";

export interface SisEunTextInputProps extends Omit<TextInputProps, "size"> {
  density?: SisEunTextInputDensity;
}

export function SisEunTextInput({
  density = "medium",
  classNames,
  ...props
}: SisEunTextInputProps) {
  return (
    <TextInput
      {...props}
      classNames={{
        ...classNames,
        root: classes.root,
        label: classes.label,
        input: `${classes.input} ${classes[density]}`,
        description: classes.description,
      }}
    />
  );
}
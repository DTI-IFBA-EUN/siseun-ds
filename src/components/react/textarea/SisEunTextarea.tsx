import { Textarea } from '@mantine/core';
import type { MantineSize } from "@mantine/core";

interface SisEunTextareaProps {
  size?: MantineSize;
  isResizeble?: boolean;
  label?: React.ReactNode;
  placeholder?: string;
  hasAuxiliarText?: boolean;
  maxLenght?: number;
}

export function SisEunTextarea(props: SisEunTextareaProps) {
    const size = props.size ?? "md";
    const Resize = props.isResizeble ? "both" : "none";




    return(
        <Textarea size={size} label={props.label} placeholder={props.placeholder} resize={Resize}>
            
        </Textarea>
    )
}

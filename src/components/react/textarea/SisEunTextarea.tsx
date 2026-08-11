import { Textarea } from '@mantine/core';
import type { MantineSize } from "@mantine/core";

interface SisEunTextareaProps {
  size?: MantineSize;
  isResizeble?: boolean;

}

export function SisEunTextarea(props: SisEunTextareaProps) {
    const size = props.size ?? "md";
    const Resize = props.isResizeble ? "both" : "none";




    return(
        <Textarea size={size} resize={Resize}>
            
        </Textarea>
    )
}

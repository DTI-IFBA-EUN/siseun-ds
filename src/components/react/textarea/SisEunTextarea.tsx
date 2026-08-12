import { Textarea } from '@mantine/core';
import type { MantineSize } from "@mantine/core";
import { boolean, maxLength, number } from 'astro:schema';
import { useState } from 'react';

interface SisEunTextareaProps {
  size?: MantineSize;
  isResizeble?: boolean;
  label?: React.ReactNode;
  placeholder?: string;
  hasAuxiliarText?: boolean;
  maxLength?: number;
  value?: string;
}

export function SisEunTextarea(props: SisEunTextareaProps) {
    const size = props.size ?? "md";
    const Resize = props.isResizeble ? "both" : "none";

    const [value, setValue] = useState(props.value ?? '');
    const maxLength = props.maxLength ?? Number.POSITIVE_INFINITY;
    
    console.log(value.length)
    return(
        <Textarea 
            size={size}
            label={props.label}
            placeholder={props.placeholder}
            resize={Resize}
            value={value}
            maxLength={props.maxLength}
            onChange={(event) => setValue(event.currentTarget.value.slice(0, maxLength))}
            bottomSection={`Restam ${maxLength - value.length}`}
            >
        </Textarea>
    )
}

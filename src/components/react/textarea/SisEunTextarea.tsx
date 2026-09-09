import { Textarea } from '@mantine/core';
import type { MantineSize } from "@mantine/core";
import { boolean, maxLength, number } from 'astro:schema';
import { useState } from 'react';
import clsx from "clsx";
import classes from "./SisEunTextarea.module.css"

interface SisEunTextareaProps {
  size?: MantineSize;
  isResizeble?: boolean;
  label?: React.ReactNode;
  placeholder?: string;
  hasAuxiliarText?: boolean;
  maxLength?: number;
  value?: string;
  density?: "low" | "mid" | "high";
}

export function SisEunTextarea(props: SisEunTextareaProps) {
    const size = props.size ?? "md";
    const Resize = props.isResizeble ? "both" : "none";
    const density = props.density ?? "mid";

    const [value, setValue] = useState(props.value ?? '');
    const maxLength = props.maxLength;
    const hasAuxiliarText = props.hasAuxiliarText;
    
    const auxiliarText = hasAuxiliarText ? getAuxiliarText(maxLength ?? 0, value.length): "";

    return(
        <Textarea 
            classNames={{input:classes[density]}}
            size={size}
            label={props.label}
            placeholder={props.placeholder}
            resize={Resize}
            value={value}
            maxLength={props.maxLength}
            onChange={(event) => setValue(event.currentTarget.value.slice(0, maxLength))}
            bottomSection={auxiliarText}
        />
    )
}

    function getAuxiliarText(max:number, current:number) {
        if(max > 0 && current === 0)
            return(`Limite máximo de ${max} caracteres`);
        
        if(max > 0 && current > 0)
            return(`Restam ${max - current} caracteres`);
        
        if(max <= 0 && current >= 0)
            return(`${current} caratere(s) digitado(s)`);
    
    }
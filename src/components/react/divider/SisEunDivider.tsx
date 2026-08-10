import { Divider } from "@mantine/core";
import type { MantineSize } from "@mantine/core";

interface SisEunDividerProps {
    size?: number | MantineSize;
    style?: "solid" | "dashed" | "dotted";
}

export function SisEunDivider(props: SisEunDividerProps) {

    // parâmetros
    const size = props.size ?? "xl";
    const style = props.style ?? "solid";

    return <Divider size={size} variant={style}/>;
}
import { Title } from "@mantine/core";
import type { ReactNode } from "react";
import clsx from "clsx";
import classes from "./SisEunTitle.module.css";


/**
 * Componente de título do SisEun
 * 
 * @param order - Ordem do título (H1-H6)
 * @param children - Conteúdo do título
 * @param grid - Tamanho da grid do design system (4, 8 ou 12)
 * @param isDark - Se está sendo apresentado em um tema escuro
 */
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
  const variantClass = classes[`grid${grid}-order${order}`];

  return (
    <Title
      order={order}
      className={clsx(
        classes["title"],
        variantClass,
        isDark ? classes["dark"] : classes["light"],
      )}
    >
      {children}
    </Title>
  );
}

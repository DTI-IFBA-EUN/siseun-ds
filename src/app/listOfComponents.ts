import type { ComponentType } from "react";
import { StandardButton } from "../components/react/button/StandardButton";
import { DisabledButton } from "../components/react/button/DisabledButton";

export interface ComponentEntry<
  TArgs extends Record<string, unknown> = Record<string, unknown>,
> {
  name: string;
  description: string;
  component: ComponentType<TArgs>;
  args: TArgs;
}

export const listOfComponents: ComponentEntry[] = [
  {
    name: "Botão Primário",
    description:
      "Botão padrão utilizando em chamadas para ação (CTA) como submeter formulários",
    component: StandardButton as ComponentType<Record<string, unknown>>,
    args: {},
  },
  {
    name: "Botão Desabilitado",
    description:
      "Utilizado para indicar que o botão não está disponível para clique",
    component: DisabledButton as ComponentType<Record<string, unknown>>,
    args: {},
  },
];

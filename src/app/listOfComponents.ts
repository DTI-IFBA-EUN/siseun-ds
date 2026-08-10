import type { ComponentType, PropsWithChildren } from "react";
import { StandardButton } from "../components/react/button/StandardButton";
import { DisabledButton } from "../components/react/button/DisabledButton";

import { SisEunTitle } from "../components/react/title/SisEunTitle";

export interface ComponentEntry<
  TArgs extends PropsWithChildren<Record<string, unknown>> = PropsWithChildren<Record<string, unknown>>,
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
    component: StandardButton as ComponentType<PropsWithChildren<Record<string, unknown>>>,
    args: {},
  },
  {
    name: "Botão Desabilitado",
    description:
      "Utilizado para indicar que o botão não está disponível para clique",
    component: DisabledButton as ComponentType<PropsWithChildren<Record<string, unknown>>>,
    args: {},
  },
  {
    name: "Título H1",
    description: "Utilizado para exibir títulos H1 em uma página",
    component: SisEunTitle as ComponentType<PropsWithChildren<Record<string, unknown>>>,
    args: {
      order: 1,
      children: "SisEun",
    },
  },
  {
    name: "Título H2",
    description: "Utilizado para exibir títulos H2 em uma página",
    component: SisEunTitle as ComponentType<PropsWithChildren<Record<string, unknown>>>,
    args: {
      order: 2,
      children: "SisEun",
    },
  },
  {
    name: "Título H3",
    description: "Utilizado para exibir títulos H3 em uma página",
    component: SisEunTitle as ComponentType<PropsWithChildren<Record<string, unknown>>>,
    args: {
      order: 3,
      children: "SisEun",
    },
  },
  {
    name: "Título H4",
    description: "Utilizado para exibir títulos H4 em uma página",
    component: SisEunTitle as ComponentType<PropsWithChildren<Record<string, unknown>>>,
    args: {
      order: 4,
      children: "SisEun",
    },
  },
  {
    name: "Título H5",
    description: "Utilizado para exibir títulos H5 em uma página",
    component: SisEunTitle as ComponentType<PropsWithChildren<Record<string, unknown>>>,
    args: {
      order: 5,
      children: "SisEun",
    },
  },
  {
    name: "Título H6",
    description: "Utilizado para exibir títulos H6 em uma página",
    component: SisEunTitle as ComponentType<PropsWithChildren<Record<string, unknown>>>,
    args: {
      order: 6,
      children: "SisEun",
    },
  },
];

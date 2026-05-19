# Design System do SisEun

## 🚀 Estrutura do Projeto

Dentro do seu projeto Astro, você verá as seguintes pastas e arquivos:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

O Astro procura por arquivos `.astro` ou `.md` no diretório `src/pages/`. Cada página é exposta como uma rota com base no nome do arquivo.

Não há nada de especial em `src/components/`, mas é lá que gostamos de colocar quaisquer componentes Astro/React/Vue/Svelte/Preact.

Quaisquer ativos estáticos, como imagens, podem ser colocados no diretório `public/`.

## 🧞 Comandos

Todos os comandos são executados a partir da raiz do projeto, em um terminal:

| Comando                   | Ação                                                           |
| :------------------------ | :------------------------------------------------------------- |
| `npm install`             | Instala as dependências                                        |
| `npm run dev`             | Inicia o servidor de desenvolvimento local em `localhost:4321` |
| `npm run build`           | Gera o site de produção em `./dist/`                           |
| `npm run preview`         | Pré-visualiza o build localmente, antes de publicar            |
| `npm run astro ...`       | Executa comandos CLI como `astro add`, `astro check`           |
| `npm run astro -- --help` | Obtém ajuda para usar o Astro CLI                              |

## Design System - Componentes React

O Design System exibe automaticamente todos os componentes registrados em `src/app/listOfComponents.ts`. O componente `SystemDesign` itera essa lista e renderiza cada entrada dentro de um `ComponentCard`, que exibe o nome, a descrição e um preview do componente.

### Como adicionar um novo componente

**1. Crie o componente React** em `src/components/react/<categoria>/MeuComponente.tsx`:

```tsx
export function MeuComponente() {
  return <button>Meu Componente</button>;
}
```

**2. Registre-o em `src/app/listOfComponents.ts`** adicionando uma entrada ao array `listOfComponents`:

```ts
import { MeuComponente } from "../components/react/<categoria>/MeuComponente";

export const listOfComponents: ComponentEntry[] = [
  // ...entradas existentes
  {
    name: "MeuComponente",
    description: "Descrição do que o componente faz e quando usá-lo.",
    component: MeuComponente as ComponentType<Record<string, unknown>>,
    args: {},
  },
];
```

### Passando props para o componente

O campo `args` é repassado como props ao componente via spread (`<Component {...args} />`). Para componentes que aceitam propriedades, basta tipá-las corretamente na entrada:

```ts
{
  name: "MeuBotao",
  description: "Botão com label configurável.",
  component: MeuBotao as ComponentType<Record<string, unknown>>,
  args: { label: "Clique aqui", disabled: false },
}
```

### Estrutura dos arquivos relevantes

| Arquivo                       | Responsabilidade                                  |
| :---------------------------- | :------------------------------------------------ |
| `src/app/listOfComponents.ts` | Registro central de todos os componentes exibidos |
| `src/app/SystemDesign.tsx`    | Itera a lista e renderiza os cards                |
| `src/app/ComponentCard.tsx`   | Card individual com nome, descrição e preview     |
| `src/components/react/`       | Diretório onde os componentes devem ser criados   |

## 👀 Quer aprender mais?

Fique à vontade para consultar [nossa documentação](https://docs.astro.build) ou entrar no nosso [servidor do Discord](https://astro.build/chat).

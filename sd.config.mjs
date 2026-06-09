import StyleDictionary from 'style-dictionary';
import { parse, oklch, formatCss } from 'culori';

StyleDictionary.registerTransform({
  name: 'color/oklch',
  type: 'value',
  filter: (token) => token.$type === 'color',
  transform: (token) => {
    const color = parse(token.$value);
    if (!color) throw new Error(`Cannot parse color: ${token.$value}`);
    const ok = oklch(color);
    const l = +ok.l.toFixed(4);
    const c = +ok.c.toFixed(4);
    const h = ok.h !== undefined ? +ok.h.toFixed(2) : 0;
    return `oklch(${l} ${c} ${h})`;
  },
});

const sd = new StyleDictionary({
  log: { verbosity: 'verbose' },
  usesDtcg: true,
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transforms: ['attribute/cti', 'name/kebab', 'color/oklch'],
      buildPath: 'src/styles/tokens/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: {
            selector: ':root',
            outputReferences: false,
          },
        },
      ],
    },
    js: {
      transforms: ['attribute/cti', 'name/camel', 'color/oklch'],
      buildPath: 'src/styles/tokens/',
      files: [
        {
          destination: 'tokens.ts',
          format: 'javascript/es6',
        },
      ],
    },
  },
});

await sd.buildAllPlatforms();

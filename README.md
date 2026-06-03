# fluid-clamp
A JavaScript function to generate CSS clamp() expressions for fluid typography and fluid spacing.

## Installation
npm install @matteorossiroy/fluid-clamp

## Usage
```js
import fluidClamp from '@matteorossiroy/fluid-clamp';

const fontSize = fluidClamp(16, 24, 320, 1280, { unit: 'rem', base: 16, precision: 2 });
// fontSize === 'clamp(1rem, 0.8rem + 0.8vw, 1.5rem)'

const spacing = fluidClamp(8, 32, 320, 1280);
// spacing === 'clamp(8px, 0.8px + 0.8vw, 32px)'
``` 
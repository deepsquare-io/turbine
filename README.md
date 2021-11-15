# `@deepsquare/turbine`

Zero-dependencies efficient wrapper to build Tailwind-based React components easily.

## Installation

```shell
npm install @deepsquare/turbine
```

```shell
yarn add @deepsquare/turbine
```

```shell
pnpm add @deepsquare/turbine
```

## Usage

This package only contains a single function `turbine` with allow creating components.

Bootstrap-like card:

```typescript jsx
import turbine from './turbine';

const Card = turbine('div', 'px-6 py-4 rounded bg-grey-200');
export default Card;
```

Third-parameter call be used to pass defaultProperties to the underlying component.

```typescript jsx
import turbine from './turbine';

const Card = turbine('div', 'px-6 py-4 rounded bg-grey-200', {
  style: { minWidth: '320px' },
});
export default Card;
```

# `@deepsquare/turbine`

Zero-dependencies efficient wrapper to build Tailwind-based React components easily.

## Dependencies

- React 17+ since we are using the new
  React [JSX Transform](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)
- No other dependency! :tada:

## Installation

Simply use your favorite package manager and install

```shell
npm install @deepsquare/turbine
# or
yarn add @deepsquare/turbine
# or
pnpm install @deepsquare/turbine
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
  style: {minWidth: '320px'},
});
export default Card;
```

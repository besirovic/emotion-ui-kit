# Card

## Props

| Prop name       | Type                 | Available options                                           | Default value |
| --------------- | -------------------- | ----------------------------------------------------------- | ------------- |
| fullWidth       | `bool`               | `true`, `false`                                             | `false`       |
| centered        | `bool`               | `true`, `false`                                             | `false`       |
| backgroundColor | `string`             | `primary`, `secondary`, `light`, `dark`, or any valid color | `light`       |
| borderWidth     | `string` or `number` | -                                                           | `undefined`   |
| borderColor     | `string`             | -                                                           | `undefined`   |
| borderStyle     | `string`             | -                                                           | `solid`       |

## Code snippets

```js
  /** Example of card with full width and custom background color */
  <Card fullWidth backgroundColor="red">Full width card with red background</Card>
```

<br />

```js
  /** Example of card with custom border */
  <Card borderColor="red" borderWidth={10} borderStyle="dashed">Card with custom border</Card>
```

<br />

```js
  /** Example of card with centered content */
  <Card centered>Centered content</Card>
```

## Demo
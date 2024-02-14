# 🍀 Transparent gradient
<div align="left">
<img src="./examples/src/img/left.png" alt="main" width="30%" height="30%" />
<img src="./examples/src/img/right.png" alt="ss" width="20%" height="20%" /><img src="./examples/src/img/text.png" alt="ss" width="20%" height="20%" />
</div>

[DOCS](https://transparent-gradient.netlify.app/eng.html) 

## Index
[JS](#what-does-it-look-like?-JS) [React](#what-does-it-look-like?-React)

## Hello 
Hello, families of developers~ This is a real transparent gradient, not a fake transparent one. I hope it will be helpful for your front desk development.

### Installation
```bash
npm i transparent-gradient
```

### What does it look like? React

### Tgradient

```ts
interface ITGprops = {
  //direction gradient
  dir?: string;
  children?: React.ReactNode | undefined;
  //parent className
  wrapperClass?: string;
  //className
  className?: string;
}
```

```jsx
import { Tgradient } from "transparent-gradient";

<Tgradient dir={"up"}>
  <p>transparent wow</p>
</Tgradient>
```



### What does it look like? JS

```js
import { TGradient } from "transparent-gradient";

//target
const content = document.querySelector('.target')
new TGradient(target, direction)
```

First, you have to be the target for the gradient.
The second is the direction.('right', 'bottom', 'top', 'left')

**You need to apply position: relative to the parent element.**

This is an example of use.

| func | Direction    | desc    |
| :---:   | :---: | :---: |
| new TGradient(target, 'right') | right   | new TGradient(target, 'right') creates a gradient from right to left.  |
| new TGradient(target, 'left') | left  | new TGradient(target, 'left') creates a gradient from left to right.  |
| new TGradient(target, 'top') | top  | new TGradient(target, 'top') creates a gradient from top to bottom.  |
| new TGradient(target, 'bottom') | bottom  | new TGradient(target, 'bottom') creates a gradient from bottom to top.  |

- example url - [https://codesandbox.io/s/transparent-gradient-profile-dmj28y]

2023.03.13/transparent-gradient/mr.chu

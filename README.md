# 📚 Transparent gradient

[Official](https://transparent-gradient.netlify.app/eng.html) 
- https://transparent-gradient.netlify.app/eng.html

<img src="./examples/src/img/left.png" alt="main" width="70%" height="30%" />
<img src="./examples/src/img/right.png" alt="ss" width="20%" height="20%" /><img src="./examples/src/img/text.png" alt="ss" width="20%" height="20%" />

Hello, families of developers~ This is a real transparent gradient, not a fake transparent one. I hope it will be helpful for your front desk development.

```
npm i transparent-gradient
```

```
new TGradient(target, direction)
```
First, you have to be the target for the gradient.
The second is the direction.('right', 'bottom', 'top', 'left')
**You need to apply 'position: absolute' to the target.(asterisks)**
This is an example of use.

```
import { TGradient } from "transparent-gradient";

//target
const content = document.querySelector('.target')
new TGradient(content)
```

- example url - [https://codesandbox.io/s/transparent-gradient-profile-dmj28y]

| func | Direction    | desc    |
| :---:   | :---: | :---: |
| new TGradient(target, 'right') | right   | new TGradient(target, 'right') creates a gradient from right to left.  |
| new TGradient(target, 'left') | left  | new TGradient(target, 'left') creates a gradient from left to right.  |
| new TGradient(target, 'top') | top  | new TGradient(target, 'top') creates a gradient from top to bottom.  |
| new TGradient(target, 'bottom') | bottom  | new TGradient(target, 'bottom') creates a gradient from bottom to top.  |


2023.03.13/transparent-gradient/mr.chu

# 📚 Transparent gradient

[Official](https://transparent-gradient.netlify.app/eng.html) 
- https://transparent-gradient.netlify.app/eng.html

<img src="./examples/src/img/main_img.png" alt="main" width="20%" height="20%" />
<img src="./examples/src/img/right.png" alt="ss" width="20%" height="20%" /><img src="./examples/src/img/text.png" alt="ss" width="20%" height="20%" />

Hello, families of developers~ This is a real transparent gradient, not a fake transparent one. I hope it will be helpful for your front desk development.

```
npm i transparent-gradient
```

```
tGradient(target, direction)
```
First, you have to be the target for the gradient.
The second is the direction.('right', 'bottom', 'top', 'left')

This is an example of use.

```
import { tGradient } from "transparent-gradient/lib/transparentGradient";

//target
const content = document.querySelector('.number2')
tGradient(content)
```

| func | Direction    | desc    |
| :---:   | :---: | :---: |
| tGradient(target, 'right') | right   | tGradient(target, 'right') creates a gradient from right to left.  |
| tGradient(target, 'left') | left  | tGradient(target, 'left') creates a gradient from left to right.  |
| tGradient(target, 'top') | top  | tGradient(target, 'top') creates a gradient from top to bottom.  |
| tGradient(target, 'bottom') | bottom  | tGradient(target, 'bottom') creates a gradient from bottom to top.  |


2023.03.13/transparent-gradient/mr.chu

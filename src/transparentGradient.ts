import { ITarget } from "./tGradientType";

const tGradient = ({target, direction}:ITarget) => {
  let main;
  if (!target) {
    throw new Error('target is required');
  }
  main = target;
  const validDirections = ['right', 'bottom', 'top', 'left'];
  const normalizedDirection = validDirections.includes(direction) ? direction : 'right';

  if(typeof target == "string"){
    main = document.querySelector(target)
  }else{
    main = target
  }
  main.setAttribute('style', `
    -webkit-mask-size: cover;
    mask-size: cover;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: ${normalizedDirection};
    mask-repeat: no-repeat;
    -webkit-mask-image: linear-gradient(to ${normalizedDirection},black, transparent), linear-gradient(to ${normalizedDirection},black,transparent);
    mask-image: linear-gradient(to ${normalizedDirection},black, transparent), linear-gradient(to ${normalizedDirection},black,transparent);
  `);
}

export default tGradient
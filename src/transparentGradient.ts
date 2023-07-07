import { ITarget } from "./tGradientType";

export function tGradient({target, direction = 'right'}:ITarget) {
    if (!target) {
      throw new Error('target is required');
    }
  
    const validDirections = ['right', 'bottom', 'top', 'left'];
    const normalizedDirection = validDirections.includes(direction) ? direction : 'right';
  
    target.setAttribute('style', `
      -webkit-mask-size: cover;
      mask-size: cover;
      -webkit-mask-repeat: no-repeat;
      -webkit-mask-position: ${normalizedDirection};
      mask-repeat: no-repeat;
      -webkit-mask-image: linear-gradient(to ${normalizedDirection},black, transparent), linear-gradient(to ${normalizedDirection},black,transparent);
      mask-image: linear-gradient(to ${normalizedDirection},black, transparent), linear-gradient(to ${normalizedDirection},black,transparent);
    `);
}

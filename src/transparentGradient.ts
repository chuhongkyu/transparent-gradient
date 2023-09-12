const tGradient = (target: string | Element, direction: string = 'right') => {
  let main: Element | null = null; // main을 Element 또는 null로 타입 지정

  if (typeof target === "string") {
    main = document.querySelector(target);
  } else {
    main = target;
  }

  if (!main) {
    throw new Error('target is required or invalid');
  }

  const validDirections = ['right', 'bottom', 'top', 'left'];
  const normalizedDirection = validDirections.includes(direction) ? direction : 'right';

  main.setAttribute('style', `
    -webkit-mask-size: cover;
    mask-size: cover;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: ${normalizedDirection};
    mask-repeat: no-repeat;
    -webkit-mask-image: linear-gradient(to ${normalizedDirection}, black, transparent), linear-gradient(to ${normalizedDirection}, black, transparent);
    mask-image: linear-gradient(to ${normalizedDirection}, black, transparent), linear-gradient(to ${normalizedDirection}, black, transparent);
  `);
};

export default tGradient;

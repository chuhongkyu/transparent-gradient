//module
const content2 = document.querySelector('.number2')
tGradient(content2)

function tGradient(element, direction = 'right') {
    if (!element) {
      throw new Error('element is required');
    }
  
    const validDirections = ['right', 'bottom', 'top', 'left'];
    const normalizedDirection = validDirections.includes(direction) ? direction : 'right';
  
    element.setAttribute('style', `
      -webkit-mask-size: cover;
      mask-size: cover;
      -webkit-mask-repeat: no-repeat;
      -webkit-mask-position: ${normalizedDirection};
      mask-repeat: no-repeat;
      -webkit-mask-image: linear-gradient(to ${normalizedDirection},black, transparent), linear-gradient(to ${normalizedDirection},black,transparent);
      mask-image: linear-gradient(to ${normalizedDirection},black, transparent), linear-gradient(to ${normalizedDirection},black,transparent);
    `);
}
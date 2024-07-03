document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
  
    sections.forEach(section => {
      section.addEventListener('mousemove', (e) => {
        const { clientX: x, clientY: y, target } = e;
        const { offsetWidth: width, offsetHeight: height } = target;
        const centerX = width / 2;
        const centerY = height / 2;
        const deltaX = x - target.getBoundingClientRect().left - centerX;
        const deltaY = y - target.getBoundingClientRect().top - centerY;
        const rotateY = (deltaX / centerX) * 10; // Adjust the multiplier for stronger/weaker effect
        const rotateX = -(deltaY / centerY) * 10; // Adjust the multiplier for stronger/weaker effect
  
        target.style.setProperty('--rotateY', `${rotateY}deg`);
        target.style.setProperty('--rotateX', `${rotateX}deg`);
      });
  
      section.addEventListener('mouseleave', () => {
        section.style.setProperty('--rotateY', '0deg');
        section.style.setProperty('--rotateX', '0deg');
      });
    });
  });

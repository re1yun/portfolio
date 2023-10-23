document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
      // Get scroll position values
      const trigger = window.scrollY;
      // The top position when we change the opacity
      const navbarHeight = navbar.clientHeight;
  
      if (trigger >= navbarHeight) {
        navbar.setAttribute('style', 'background-color: hsl(0 100% 100% / 1)');
      } else {
        navbar.setAttribute('style', 'background-color: hsl(0 100% 100% / 0.4)');
      }
    });
});
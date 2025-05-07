
export const initAnimateOnScroll = () => {
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('shown');
      }
    });
  }, { threshold: 0.1 });

  animateElements.forEach(element => {
    observer.observe(element);
  });

  return () => {
    animateElements.forEach(element => {
      observer.unobserve(element);
    });
  };
};

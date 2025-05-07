
export const initAnimateOnScroll = () => {
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('shown');
        // Add staggered animation delay based on index if elements are in a group
        const index = Array.from(entry.target.parentElement?.children || []).indexOf(entry.target);
        if (index > 0) {
          entry.target.style.transitionDelay = `${index * 0.1}s`;
        }
      } else {
        // Optional: remove the class when element is out of view for re-animation
        // entry.target.classList.remove('shown');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  animateElements.forEach(element => {
    observer.observe(element);
  });

  return () => {
    animateElements.forEach(element => {
      observer.unobserve(element);
    });
  };
};

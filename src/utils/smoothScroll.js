export function smoothScroll(e, target) {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, 
        behavior: 'smooth'
      });
    }
  }
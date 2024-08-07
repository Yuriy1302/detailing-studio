/**
 * Плавный скролл наверх
 */

const backToTop = document.getElementById('back-to-top');

export function initScrollToTop() {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });

  backToTop.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

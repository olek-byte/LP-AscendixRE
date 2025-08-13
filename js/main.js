// SMOOTH SCROLL
const smoothScroll = () => {
  // Only target in-page anchor links that actually point to an element id
  const anchors = document.querySelectorAll('a[href^="#"]:not([href="#"])');
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const blockID = anchor.getAttribute('href').substring(1);
      const targetElement = document.getElementById(blockID);
      if (!targetElement) {
        return;
      }
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    });
  }
};
smoothScroll();

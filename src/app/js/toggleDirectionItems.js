export function toggleDirectionItems() {
  const items = document.querySelectorAll('.directions__item');

  items.forEach((element) => {
    const titleImg = element.querySelector('.directions__item-title-img');

    titleImg.addEventListener('click', () => {
      const isActive = element.classList.contains('directions__item--active');

      if (isActive) {
        element.classList.remove('directions__item--active');
      } else {
        items.forEach((i) => i.classList.remove('directions__item--active'));
        element.classList.add('directions__item--active');
      }
    });
  });
}

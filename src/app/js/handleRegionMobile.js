export function handleRegionMobile() {
  const regionItems = document.querySelectorAll('.regions__item');

  regionItems.forEach((item) => {
    item.addEventListener('click', () => {
      regionItems.forEach((regionItem) => {
        if (regionItem !== item) {
          regionItem.classList.remove('active-mobile');
        }
      });

      item.classList.toggle('active-mobile');
    });
  });
}

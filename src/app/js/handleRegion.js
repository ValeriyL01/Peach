export function handleRegionClick() {
  const regionsItems = document.querySelectorAll('.regions__item');
  const svgElement = document.querySelector('.map');

  const maps = svgElement.querySelectorAll('[class*="map"]');

  regionsItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      regionsItems.forEach((region) => region.classList.remove('regions__item--active'));

      item.classList.add('regions__item--active');
      maps.forEach((map) => {
        const className = map.className.baseVal;

        if (/\d$/.test(className)) {
          map.style.display = 'none';
        }
      });

      if (index === 0) {
        maps.forEach((map) => {
          const className = map.className.baseVal;
          if (/\d$/.test(className)) {
            map.style.display = 'block';
          }
        });
      } else {
        const selectedMaps = svgElement.querySelectorAll(`.map${index}`);
        selectedMaps.forEach((map) => {
          map.style.display = 'block';
        });
      }
    });
  });
}

export function toggleСities() {
  const officesButton = document.querySelector('.map__offices');
  const officesImage = document.querySelector('.map__offices-img');
  const citiesBlock = document.querySelector('.map__cities');
  const mapBlock = document.querySelector('.map__map');
  const regions = document.querySelector('.regions');
  if (window.innerWidth <= 820) {
    return;
  }

  officesButton.addEventListener('click', () => {
    officesImage.classList.toggle('map__offices-img--rotated');
    citiesBlock.classList.toggle('map__cities--visible');
    regions.classList.toggle('regions--dimmed');
    mapBlock.classList.toggle('map__map--dimmed');
  });
}

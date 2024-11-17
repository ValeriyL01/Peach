import { handleRegionClick } from './js/handleRegion';
import { toggleСities } from './js/toggleCities';
import { toggleDirectionItems } from './js/toggleDirectionItems';
import { swiperControl } from './js/slider';
import { handleRegionMobile } from './js/handleRegionMobile';
import { mapSvg } from './js/mapSvg';

export default function renderApp() {
  const mapElement = document.querySelector('.map__map');
  mapElement.innerHTML = mapSvg;
  handleRegionClick();
  toggleСities();
  toggleDirectionItems();
  swiperControl();
  handleRegionMobile();
}

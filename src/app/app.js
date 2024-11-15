import { handleRegionClick } from './js/handleRegion';
import { toggleСities } from './js/toggleCities';
import { toggleDirectionItems } from './js/toggleDirectionItems';

export default function renderApp() {
  handleRegionClick();
  toggleСities();
  toggleDirectionItems();
}

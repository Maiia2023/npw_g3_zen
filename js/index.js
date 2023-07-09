import { data } from './data.js';
import { SectionPrimary } from './components/widgets/SectionPrimary/SectionPrimary.js';

const { download } = data.en;

const root = document.querySelector('#root');

root.insertAdjacentHTML('beforeend', SectionPrimary(download));

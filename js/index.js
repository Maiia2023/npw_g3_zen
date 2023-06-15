import { data } from './data/data.js';
import { Section } from './components/widgets/Section.js';

const { download, warranty } = data.en;

const root = document.querySelector('#root');

root.insertAdjacentHTML('beforeend', Section(download));
//root.insertAdjacentHTML('beforeend', Section(download));
//root.insertAdjacentHTML('beforeend', Section(warranty));

import { data } from './data.js';
import { Header } from './components/widgets/Header/Header.js';
import { SectionPrimary } from './components/widgets/SectionPrimary/SectionPrimary.js';
import { handleThemeClick } from './handlers.js';

const { header, download } = data.en;

const root = document.querySelector('#root');

root.insertAdjacentHTML('beforeend', Header(header));
root.insertAdjacentHTML('beforeend', SectionPrimary(download));

const $theme = document.querySelector('#theme');
$theme.addEventListener('click', handleThemeClick)

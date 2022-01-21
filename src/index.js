import baselayout from './baselayout';
import aboutFragement from './about';

const content = document.querySelector('#content');

content.appendChild(baselayout);

const dynamicContainer = document.querySelector('.dynamicContainer');

dynamicContainer.appendChild(aboutFragement);

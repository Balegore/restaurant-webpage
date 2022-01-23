import layout from './baselayout';
import about from './about';
import menu from './menu'; 
import contact from './contact';

//apply base content
const content = document.querySelector('#content');
content.appendChild(layout);

//apply first page and select tabs
const dynamicContainer = document.querySelector('.dynamicContainer');
const menuTab = document.getElementById('menuTab');
const contactTab = document.getElementById('contactTab');
const aboutTab = document.getElementById('aboutTab');

aboutTab.addEventListener('click', () => renderContainer(about));
contactTab.addEventListener('click', () => renderContainer(contact));
menuTab.addEventListener('click', () => renderContainer(menu));

function renderContainer(fragmentfunction){
    let dynamicFragment = fragmentfunction();
    dynamicContainer.replaceChildren(dynamicFragment);
};


renderContainer(about);

//create base layout for website
import createElement from "./create-element.js";

const layout = document.createDocumentFragment();

//text to go into tabs
const tabsText = ['About',' Menu', 'Contact'] 


function createTabs(){
    const tabContainer = createElement('div', '', 'tabContainer')
    
    tabsText.forEach(element => {
        tabContainer.appendChild(createElement('div', element, 'menuTab'))
    });
    
    return tabContainer;
}
//create header
layout.appendChild(createElement('div', 'Header', 'header'));
layout.appendChild(createTabs());

//create container for tabs and dynamic container and append
const container = createElement('div', '', 'mainContainer');
container.appendChild(createElement('div', 'This is content', 'dynamicContainer'));
layout.appendChild(container);

//create footer
layout.appendChild(createElement('div', 'Footer', 'footer'));

export default layout;
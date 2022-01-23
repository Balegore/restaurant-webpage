//create base layout for website
import createNode from "./createnode.js";

const layout = document.createDocumentFragment();

//text to go into tabs
const tabsText = ['About', 'Menu', 'Contact'] 


function createTabs(){
    const tabContainer = createNode('div', '', 'tabContainer')
    
    tabsText.forEach(element => {
        tabContainer.appendChild(createNode('div', element, 'tab', element.toLowerCase() + 'Tab'));
    });
    
    return tabContainer;
}
//create header
layout.appendChild(createNode('div', 'Header', 'header'));
layout.appendChild(createTabs());

//create container for tabs and dynamic container and append
const container = createNode('div', '', 'mainContainer');
container.appendChild(createNode('div', '', 'dynamicContainer'));
layout.appendChild(container);

//create footer
layout.appendChild(createNode('div', 'Footer', 'footer'));

export default layout;
//create base layout for website

const layout = document.createDocumentFragment();

//text to go into tabs
const tabsText = ['About',' Menu', 'Contact'] 

function createElement(html, text, classes){
    
    const element = document.createElement(`${html}`);
    
    element.innerText = text;
    element.classList.add(classes);
    
    return element;
}

function createTabs(){
    const tabContainer = createElement('div', '', 'tabContainer')
    
    tabsText.forEach(element => {
        tabContainer.appendChild(createElement('div', element, 'menuTab'))
    });
    
    return tabContainer;
}
//create header
layout.appendChild(createElement('div', 'JJ Joy', 'header'));

//create container for tabs and dynamic container and append
const container = createElement('div', '', 'mainContainer');
container.appendChild(createTabs());
container.appendChild(createElement('div', '', 'dynamicContainer'));
layout.appendChild(container);

//create footer
layout.appendChild(createElement('div', '', 'footer'));

export default layout;
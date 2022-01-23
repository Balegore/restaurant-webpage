import createNode from "./createnode";

//create menu from array
const createMenuItem = function (name, price, subscript){
     return {name,  price, subscript} 
};

let appetizers = [
    createMenuItem('Veggie Springroll', '8.00', '6pc'),
    createMenuItem('Pork Dumplings', '7.50', '6pc'),
    createMenuItem('Yam Tempura', '7.50', '6pc'),
    createMenuItem('Vegetable Tempura', '9.50','7pc assorted',)
];

let soup = [
    createMenuItem('Miso Soup', '2.00'),
    createMenuItem('Small Wonton', '5.50'),
    createMenuItem('Large Woton', '11.50', 'with veggies'),
    createMenuItem('Wor Wonton', '15.00', 'with Shrimp and Chicken')
];

let noodle = [
    createMenuItem('Chop Mein', '15.00', 'Beef, chicken, or tofu'),
    createMenuItem('Yakisoba', '15.00', 'Beef, chicken, or tofu'),
    createMenuItem('Pad Thai', '15.00', 'Beef, chicken, or tofu')
];

let rice = [
    createMenuItem('Fried Rice', '13.00', 'Chicken, Pork or Shrimp'),
    createMenuItem('Steamed Rice', '5.00')
];

let mains =[
    createMenuItem('Sweet and Sour Pork', '15.00'),
    createMenuItem('Ginger Beef', '15.00'),
    createMenuItem('Beef and Broccoli', '14.00'),
    createMenuItem('Beef Bulgogi', '16.00', 'with rice'),
    createMenuItem('Korean BBQ Wing', '15.00', '10pc Spcicy or Mild')
];;


const menu = function(){  
    const menuFragment = document.createDocumentFragment();
    
    const appetizersElement = createNode('div', 'Appetizer', 'menuHeader');
    const soupElement = createNode('div', 'Soup', 'menuHeader');
    const riceElement = createNode('div', 'Rice', 'menuHeader');
    const noodleElement = createNode('div', 'Noodle', 'menuHeader');
    const mainsElement = createNode('div', 'Mains', 'menuHeader')
    
    function createMenuNodes(menuItem){
        let menuNode = createNode('div');
        menuNode.appendChild(createNode('div', menuItem.name, 'menuItem'));
        menuNode.appendChild(createNode('div', menuItem.subscript, 'menuSubscript'));
        menuNode.appendChild(createNode('div', menuItem.price, 'menuPrice'))
    
        return menuNode;
    }

    function appendMenuObject(element, menuobject){

        menuobject.map(object => element.appendChild(createMenuNodes(object)));
    }

    appendMenuObject(appetizersElement, appetizers);
    appendMenuObject(soupElement, soup);
    appendMenuObject(riceElement, rice);
    appendMenuObject(noodleElement, noodle);
    appendMenuObject(mainsElement, mains);

    menuFragment.appendChild(appetizersElement);
    menuFragment.appendChild(soupElement);
    menuFragment.appendChild(riceElement);
    menuFragment.appendChild(noodleElement);
    menuFragment.appendChild(mainsElement);

    return menuFragment;    
}

export default menu;
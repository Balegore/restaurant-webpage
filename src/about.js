import createNode from "./createnode";

const aboutFragement = document.createDocumentFragment();
const aboutContainer = createNode('div', null, 'aboutContainer');
const timeContainer = createNode('div', null, 'timeContainer');

const aboutText =  `Joy Buffet Asian Cusine brings a mix of well known classics with a korean twist.`;
const phoneNumber = `236-422-3344`;

const morningHours = `11:30am-2:30pm`;
const eveningHours = `4:30pm-8:00pm`;
const timeHeaders = [   {name:'Dine-in',
                         morning: true,
                         evening: false,},
                        {name: 'Take-out',
                         morning: true,
                         evening: true}, 
                        {name: 'Delivery',
                         morning: false,
                         evening: true,}];
 
function createTimeTable(header, morning, evening){
    const timeTable = createNode('li', header, 'timeHeader');
    if(morning){ timeTable.appendChild(createNode('li', morningHours)) };      
    if(evening){ timeTable.appendChild(createNode('li', eveningHours)) };

    return timeTable;
}

aboutContainer.appendChild(createNode(`div`, aboutText, 'aboutMessage'));

timeHeaders.forEach(element => {
    timeContainer.appendChild(createTimeTable(element.name, element.morning, element.evening))
});

aboutFragement.appendChild(aboutContainer);
aboutFragement.appendChild(timeContainer);


export default aboutFragement;

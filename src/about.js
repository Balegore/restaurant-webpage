import createElement from "./create-element";

const aboutFragement = document.createDocumentFragment();

const aboutText =  `JJ Joy Asian Cusine brings a mix of well known classics with a korean twist.`;

const phoneNumber = `236-422-3344`;

const hours = 
`Dine-In Open
11:30am-2:30pm
Takeout
11:30am-2:30pm
4:30pm-8:00pm
Delivery
4:30pm-8:00pm`;

aboutFragement.appendChild(createElement('div', '', 'about'));
aboutFragement.appendChild(createElement(`div`, aboutText, 'aboutMessagge'));
aboutFragement.appendChild(createElement('div', hours, 'hours'));

export default aboutFragement;

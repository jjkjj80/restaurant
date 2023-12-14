import { aboutTest } from "./about";
import { contactTest } from "./contact";


const cont = document.querySelector('.container');


//tabs
const tabs = document.createElement('div');
const homeB = document.createElement('button');
const aboutB = document.createElement('button');
const contactB = document.createElement('button');

homeB.classList.add('tabcontent');
homeB.textContent='HOME'
tabs.appendChild(homeB);

aboutB.classList.add('tabcontent')
aboutB.textContent='ABOUT'
tabs.appendChild(aboutB);

contactB.classList.add('tabcontent')
contactB.textContent='CONTACT'
tabs.appendChild(contactB);

cont.appendChild(tabs);

//content
const content = document.createElement('div');
const header = document.createElement('h1');
const hours = document.createElement('p');

header.textContent='Header';
header.classList.add('header')
content.appendChild(header);

hours.textContent='6am-6pm all day every day!'
hours.classList.add('hours')
content.appendChild(hours);

cont.appendChild(content)




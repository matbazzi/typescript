// Import stylesheets
import './style.css';
import { Car } from './Car.class';
import { Cheval } from './Cheval.class';

// Write TypeScript code!
let car = new Car();
car.start();
car.drive(20);
let cheval= new Cheval();
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter ${car.getPosition()}</h1>`;

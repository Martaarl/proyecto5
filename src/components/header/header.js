import './header.css'

export default function createHeader () {

    const main = document.querySelector('main');
    const header = document.querySelector('header');

    const titleOfThePage = document.createElement('h1');
    titleOfThePage.textContent = 'Play everywhere';
    titleOfThePage.className = 'title';

    header.appendChild(titleOfThePage);
    main.appendChild(header);

}
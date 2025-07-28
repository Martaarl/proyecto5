import './header.css'

export default function createHeader () {

    const main = document.querySelector('main');
    const header = document.querySelector('header');

    const speechBubble = document.createElement('div');
    speechBubble.className = 'speechBubble';

    const titleOfThePage = document.createElement('h1');
    titleOfThePage.textContent = 'Play everywhere';
    titleOfThePage.className = 'title';

    speechBubble.appendChild(titleOfThePage);
    header.appendChild(speechBubble);
    main.appendChild(header);

}
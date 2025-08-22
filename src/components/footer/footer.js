import './footer.css'

export default function createFooter () {

    const main = document.querySelector('main');
    
    const footer = document.querySelector('footer');

    const divLink = document.createElement('div');
    divLink.className = 'divLink';

    const pLink = document.createElement('p');
    pLink.className = 'pLink';

    const link = document.createElement('a');
    link.className = 'link';
    link.textContent = ' 👀 https://github.com/Martaarl';
    link.href = 'https://github.com/Martaarl';

    pLink.appendChild(link);
    divLink.appendChild(pLink);
    footer.appendChild(divLink);
  
}
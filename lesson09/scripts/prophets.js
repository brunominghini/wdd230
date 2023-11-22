const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.prophets);
    displayProphets(data.prophets);
}
getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let fullName = document.createElement('_____'); // fill in the blank
        let portrait = document.createElement('img');

        // Build the h2 content out to show the prophet's full name
        fullName.textContent = `${prophet._____} _____`; // fill in the blank
        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.____} ______`); // fill in the blank
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Append the section(card) with the created elements
        //card.appendChild(_____);
        card.appendChild(portrait);
        card.appendChild(fullName);
        cards.appendChild(card);

    }); // end of arrow function and forEach loop
}


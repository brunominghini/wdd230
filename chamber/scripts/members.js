const url = '.data/members.json';
const cards = document.querySelector('#cards');

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.members);
    displayMembers(data.members);
}
getMemberData();

const displayMembers = (members) => {
    members.array.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let contact = document.createElement('p');
        let membership = document.createElement('h1');
        let logo = document.createElement('img');
        let information = document.createElement('p');
        let url = document.createElement('href');

        name.textContent = ` ${member.name}`;
        address.textContent = ` ${member.address}`;
        contact.textContent = ` ${member.contact}`;
        logo.setAttribute('src', member.logo);
        logo.setAttribute('alt', `Logo ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '100');
        logo.setAttribute('height', '150');
        membership.textContent = ` ${member.membershiplevel}`;
        information.textContent = ` ${member.otherinformation}`;
        url.textContent = `${member.websiteurl}`;


        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(contact);
        card.appendChild(logo);
        card.appendChild(membership);
        card.appendChild(information);
        card.appendChild(url);
    });
}
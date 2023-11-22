const baseURL = "https://github.com/brunominghini/wdd230/";
const linksURL = "https://github.com/brunominghini/wdd230/data/link.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);

}

function displayLinks(weeks) {
    const linksContainer = document.getElementById("links-container");

    weeks.forEach(week => {
        const weekElement = document.createElement("div");
        weekElement.classList.add("week");

        const weekTitle = document.createElement("h3");
        weekTitle.textContent = `Semana ${week.week}`;

        const linksList = document.createElement("ul");

        week.links.forEach(link => {
            const listItem = document.createElement("li");
            const linkElement = document.createElement("a");
            linkElement.href = `${baseURL}${link.url}`;
            linkElement.textContent = link.title;

            listItem.appendChild(linkElement);
            linksList.appendChild(listItem);
        });

        weekElement.appendChild(weekTitle);
        weekElement.appendChild(linksList);
        linksContainer.appendChild(weekElement);
    });
}

getLinks();
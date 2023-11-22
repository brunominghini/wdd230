const baseURL = "https://github.com/brunominghini/wdd230/";
const linksURL = "https://github.com/brunominghini/wdd230/data/linksURL";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
}

getLinks();
const baseURL = "https://github.com/brunominghini/wdd230/";
const linksURL = "https://github.com/brunominghini/wdd230/data/link.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayLinks(data.lessons);

    } catch (error) {
        console.error("Ocorreu um erro ao buscar os links:", error);
    }
}

function displayLinks(lessons) {
    const courseList = document.getElementById("course-list");

    lessons.forEach(lesson => {
        const lessonItem = document.createElement("li");
        const lessonTitle = document.createElement("a");
        lessonTitle.textContent = `Lesson ${lesson.lesson}`;
        lessonTitle.href = "#";

        const linksList = document.createElement("ul");

        lesson.links.forEach(link => {
            const listItem = document.createElement("li");
            const linkElement = document.createElement("a");
            linkElement.href = link.url;
            linkElement.textContent = link.title;

            listItem.appendChild(linkElement);
            linksList.appendChild(listItem);
        });

        lessonItem.appendChild(lessonTitle);
        lessonItem.appendChild(linksList);
        courseList.appendChild(lessonItem);
    });
}

getLinks();
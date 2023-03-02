const $links = document.getElementById('links');
const $name = document.querySelector('h1');

const data = {
    name: "Andres Badillo",
    nickname: "andresbadillo.co",
    description: "...",
    avatar: "...",
    social: [
      {
        name: "website",
        url: "https://www.andresbadillo.co/",
        username: "",
      },
      {
        name: "instagram",
        url: "https://www.instagram.com/andresbadillo.co/",
        username: "andresbadillo.co",
      },
    ],
    links: [
      {
        name: "blog",
        url: "https://www.andresbadillo.co/blog",
        color: "red",
        emoji: "📖",
      },
      {
        name: "tiktok",
        url: "https://www.tiktok.com/@andresbadillo.co",
        color: "yellow",
        emoji: "💬",
      },
    ],
    footer: "Made with Love in Colombia",
};

const main = () => {
    let name = document.createTextNode(data?.name);
    let links = data?.links?.map((link) => {
        return `<div class="bg-${link.color}-200 px-4 py-5 w-full flex justify-between">
            <a class="text-sm font-bold text-${link.color}-600 text-center hover:text-${link.color}-800 cursor-pointer"
            href="${link.url}" target="_blank">
            ${link.name}
            </a>
            <span>${link.emoji}</span>
        </div>`;
    }).join('');
    let newItem = document.createElement('section');
    newItem.innerHTML = links;
    $links.appendChild(newItem);
    $name.appendChild(name);
}

main();
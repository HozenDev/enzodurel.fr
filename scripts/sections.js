window.onload = function () {

    const main = document.getElementsByTagName("main")[0];

    const reviews = [
	{
	    name: "La fourmi de Langton",
	    author: "Durel Enzo, Mallepeyre Nourrane, Barra Vincent",
	    date: "2021",
	    img: "./img/fourmi.png",
	    alt: "Comportement de plusieurs fourmis de Langton avec le comportement LLR",
	    text: "Création d'un logiciel de simulation de la fourmi de Langton qui est une machine de Turing universelle bidimensionnelle constituée d'un ensemble de règles simples mais dont le comportement émergent est complexe. Logiciel développé sous Python 3 et avec la librarie graphique PyGame basée sur la SDL2. Plusieurs concepts ont été introduits dans ce travail notamment avec une approche du multiprocessing et un développement en paradigme objet qui se rapproche de la conception des vies émergentes d'après l'article écrit par le professeur Langton: <a href=\"https://www.semanticscholar.org/paper/Studying-artificial-life-with-cellular-automata-Langton/c52b8873de752b88da3d4f94b4060ec2a7d96377\"> Studying artificial life with cellular automata. </a>",
	    link: "https://perso.isima.fr/~endurel",
	    linkAlt: "Page Personnelle ISIMA"
	},
	{
	    name: "2048 en C",
	    author: "Durel Enzo, Villepreux Thibault",
	    date: "2021",
	    img: "./img/2048.png",
	    alt: "Interface de jeu du 2048",
	    text: "Développement du jeu 2048 par le biais d'un projet scolaire. Développé sous la librairie graphique SDL1.2 (par contrainte). La grille de jeu a été conçu sous le concept de TileMapping concept très développé dans les années 80 dans les jeux 2D et dans le rétro-gaming. Création, par moi-même, du fond-d'écran et conception, toujours par moi-même, de la musique.",
	    link: "",
	    linkAlt: "Téléchargement"
	}
    ];


    (function() {
	for (review of reviews) {
	    const section = document.createElement("section");
	    const article = document.createElement("article");

	    const title = document.createElement("h2");
	    title.textContent = review.name;

	    const link = document.createElement("a");
	    if (review.link !== "") {
		link.classList.add("article-link");
		link.href = review.link;
		if (review.linkAlt !== "") link.innerHTML = review.linkAlt;
		else link.innerHTML = review.link;
	    }
	    
	    const author = document.createElement("p");
	    author.classList.add("article-author");
	    author.innerHTML = review.author;

	    const date = document.createElement("p");
	    date.classList.add("article-date");
	    date.innerHTML = review.date;
	    
	    const img = document.createElement("img");
	    img.src = review.img;
	    img.alt = review.alt;

	    const description = document.createElement("p");
	    description.classList.add("article-description");
	    description.innerHTML = review.text;
	    
	    article.appendChild(author);
	    article.appendChild(date);
	    article.appendChild(description);
	    if (review.link !== "") {
		article.appendChild(link);
	    }
	    
	    section.appendChild(title);
	    section.appendChild(article);
	    section.appendChild(img);
	    
	    main.appendChild(section);
	}
    })();
}

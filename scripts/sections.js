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
	    name: "Test d'une review",
	    author: "Durel Enzo",
	    date: "2022",
	    img: "./img/Kakariko.jpg",
	    alt: "Ceci est une image test",
	    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed tellus tellus. Vivamus eget lacus blandit erat rhoncus pellentesque. Sed rutrum quam arcu, at laoreet diam aliquet eu. Aliquam a ultricies enim. Nam vel sagittis elit, a blandit lectus. Donec id ipsum id mi consequat vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut iaculis sodales lacus non faucibus. Curabitur tincidunt iaculis ipsum. Curabitur molestie nec tortor in varius. Fusce in massa elit. Pellentesque feugiat luctus elementum. Vivamus sed semper neque. Nunc aliquet dui nec nunc aliquam, at efficitur orci ultrices. Nulla sit amet turpis non nulla pretium varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed tellus tellus. Vivamus eget lacus blandit erat rhoncus pellentesque. Sed rutrum quam arcu, at laoreet diam aliquet eu. Aliquam a ultricies enim. Nam vel sagittis elit, a blandit lectus. Donec id ipsum id mi consequat vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut iaculis sodales lacus non faucibus. Curabitur tincidunt iaculis ipsum. Curabitur molestie nec tortor in varius. Fusce in massa elit. Pellentesque feugiat luctus elementum. Vivamus sed semper neque. Nunc aliquet dui nec nunc aliquam, at efficitur orci ultrices. Nulla sit amet turpis non nulla pretium varius.",
	    link: "",
	    linkAlt: "test-lien"
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

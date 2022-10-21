class Destination {
  constructor(nom, pays, prix, image) {
    this.nom = nom;
    this.pays = pays;
    this.prix = prix;
    this.image = image;
  }
}

let destinations = [];
let destination1 = new Destination(
  "Paris",
  "Paris est la capitale de la France. Elle est située sur la rive gauche de la Seine, dans le nord-est de la France, à environ 350 km de la mer du Nord, à 105 km de la Belgique, à 560 km de l'Allemagne et à 720 km de l'Espagne.",
  1000,
  "../img/paris.jpeg"
);
let destination2 = new Destination(
  "Budapest",
  "Budapest est la capitale et la plus grande ville de la Hongrie. Elle est située au bord de la rivière Danube, dans la plaine de Pannonie, à 80 km de la frontière avec la Slovaquie et à 175 km de la frontière avec l'Ukraine.",
  1500,
  "../img/budapest.jpeg"
);
let destination3 = new Destination(
  "Rome",
  "Rome est la capitale de l'Italie. Elle est située sur la rive gauche de la Tiber, dans le centre de l'Italie, à environ 1 290 km de la mer Méditerranée, à 1 500 km de la mer Méditerranée et à 1 500 km de la mer Méditerranée.",
  2000,
  "../img/rome.jpeg"
);
let destination4 = new Destination(
  "Londres",
  "Londres est la capitale de l'Angleterre et du Royaume-Uni. Elle est située sur la rive sud de la Tamise, dans le sud-est de l'Angleterre, à environ 50 km de la mer du Nord, à 340 km de la mer du Nord et à 340 km de la mer du Nord.",
  2500,
    "../img/londres.jpeg"
);
destinations.push(destination1);
destinations.push(destination2);
destinations.push(destination3);
destinations.push(destination4);

//afficher les destinations dans le tableau
let tableau = document.getElementById("table");
let html = "";
html += "<tr>";
html += "<th>Destination</th>";
html += "<th>Offre</th>";
html += "<th>Prix</th>";
html += "</tr>";

destinations.forEach((element) => {
  html += "<tr>";
  html +=
    "<td class='destination'>" +
    element.nom +
    "<img style='vertical-align: middle; margin: 10px' src='" +
    element.image +
    "' alt='Ville de " +
    element.nom +
    "' /></td>";
  html += "<td>" + element.pays + "</td>";
  html += "<td>" + element.prix + "€<button>Découvrir</button></td>";
  html += "</tr>";
});

tableau.innerHTML = html;


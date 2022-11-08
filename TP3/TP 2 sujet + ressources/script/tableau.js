class Destination {
  constructor(id, nom, desc, prix, image) {
    this.id = id;
    this.nom = nom;
    this.desc = desc;
    this.prix = prix;
    this.image = image;
  }
}

let destinations = [];
let destination1 = new Destination(
  1,
  "Paris",
  "Paris est la capitale de la France. Elle est située sur la rive gauche de la Seine, dans le nord-est de la France, à environ 350 km de la mer du Nord, à 105 km de la Belgique, à 560 km de l'Allemagne et à 720 km de l'Espagne.",
  1000,
  "../img/paris.jpeg"
);
let destination2 = new Destination(
  2,
  "Budapest",
  "Budapest est la capitale et la plus grande ville de la Hongrie. Elle est située au bord de la rivière Danube, dans la plaine de Pannonie, à 80 km de la frontière avec la Slovaquie et à 175 km de la frontière avec l'Ukraine.",
  1500,
  "../img/budapest.jpeg"
);
let destination3 = new Destination(
  3,
  "Rome",
  "Rome est la capitale de l'Italie. Elle est située sur la rive gauche de la Tiber, dans le centre de l'Italie, à environ 1 290 km de la mer Méditerranée, à 1 500 km de la mer Méditerranée et à 1 500 km de la mer Méditerranée.",
  2000,
  "../img/rome.jpeg"
);
let destination4 = new Destination(
  4,
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
function generateTableau() {
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
    html += "<td>" + element.desc + "</td>";
    html += "<td id="+ element.id +">" + element.prix + "€<div><button>Découvrir</button><button onclick=modifierDestination(this)>Modifier</button><button onclick=supprimerDestination(this)>Supprimer</button></div></td>";
    html += "</tr>";
  });

  tableau.innerHTML = html;
}

function supprimerDestination(dest) {//supp from destinations
  //parentElement = td
  //parentElement.parentElement = tr
  let id = dest.parentElement.parentElement.id;
  console.log(id);
  destinations.forEach((element) => {
    if (element.id == id) {
      //remove from destinations element
      destinations.splice(destinations.indexOf(element), 1);
      generateTableau()    
    }
  });
}

function modifierDestination(dest) {
  console.log("modifier");
}

function ajouterDestination() {
  //afficher un modal avec un formulaire
  //ajouter la destination dans le tableau
  //recharger le tableau

  

  let modal = document.getElementById("modal");
  modal.style.display = "block";

  let btnAjouter = document.getElementById("btnAjouter");
  btnAjouter.onclick = function () {
    let nom = document.getElementById("nom").value;
    let desc = document.getElementById("desc").value;
    let prix = document.getElementById("prix").value;
    let id = destinations.length + 1;
    let destination = new Destination(id, nom, desc, prix, imgAdd.src);
    destinations.push(destination);
    generateTableau();
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

}
let imgAdd;
window.onload = function ()
{
  generateTableau();
  var fileInput = document.getElementById('fileInput');
  var fileDisplayArea = document.getElementById('fileDisplayArea');


  fileInput.addEventListener('change', function(e) {
      let file = fileInput.files[0];
      var imageType = /image.*/;

      if (file.type.match(imageType)) {
          var reader = new FileReader();

          reader.onload = function(e) {
              fileDisplayArea.innerHTML = "";

              imgAdd = new Image();
              imgAdd.src = reader.result;

              fileDisplayArea.appendChild(imgAdd);
          }

          reader.readAsDataURL(file); 
      } else {
          fileDisplayArea.innerHTML = "File not supported!"
      }
  });
};

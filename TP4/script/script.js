contenu_menu = {
  menu: [
    {
      titre: "Accueil",
      url: "../pages/accueil.html",
      function: "accueil()",
    },
    {
      titre: "Espace personnel",
      sous_menu1: [
        {
          titre: "Connexion",
        },
        {
          titre: "Mes informations",
          sous_menu2: [
            {
              titre: "Nom et prenom",
            },
            {
              titre: "Numero",
            },
            {
              titre: "Email",
            },
          ],
        },
        {
          titre: "Messagerie",
        },
        {
          titre: "Historique",
        },
      ],
    },
    {
      titre: "Destinations",
      url: "../pages/destination.html",
      function: "destination()",
    },
    {
      titre: "Voyage audio",
      url: "../pages/voyageAudio.html",
      function: "voyageAudio()",
    },
    {
      titre: "Voyage vidéo",
      url: "../pages/voyageVideo.html",
      function: "voyageVideo()",
    },
    {
      titre: "Contact",
      url: "../pages/contact.html",
      function: "contact()",
    },
  ],
};
var isAdmin = false;
var isUser = false;

accueil();

Object.entries(contenu_menu).forEach(([key, value]) => {
  if (key === "menu") {
    let html = "";
    html += `<nav id="menu">`;
    html += "<h1>Mille et un voyage</h1>";
    html += "<ul>";
    value.forEach((element) => {
      html += "<li>";

      if (element.titre === "Espace personnel") {
        html += `<li class="dropdown">`;
        html += `<a onclick="${element.function}">${element.titre}</a>`;
        html += "<ul class='dropdown-content'>";
        element.sous_menu1.forEach((element) => {
          html += "<li>";
          if (element.titre === "Mes informations") {
            html += `<li class="sousMenu" ><a href="">${element.titre}</a>`;
            html += "<ul class='listSousMenu'>";
            element.sous_menu2.forEach((element) => {
              html += `<li><a href="">${element.titre}</a></li>`;
            });
            html += "</ul>";
            html += "</li>";
          } else if (element.titre === "Connexion") {
            html += `<li><a onclick="afficherConnexion()">${element.titre}</a></li>`;
          } else {
            html += `<li><a href="">${element.titre}</a></li>`;
          }
          html += "</li>";
        });
        html += "</ul>";
      } else {
        html += `<a onclick="${element.function}">${element.titre}</a>`;
      }
      html += "</li>";
    });
    html += "</ul>";
    html += " <div id='nomPersonneConnecte'></div>";
    html += "</nav>";
    //add to body
    document.body.innerHTML += html;
  }
});

function accueil() {
  var html = "<section>";
  html += "<h2>Description général</h2>";
  html += "<div style='margin-left: 40px'>";
  html += "<p>";
  html +=
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias porro vitae veniam deleniti dolore eaque dolor harum voluptates voluptatum? Magni nihil sapiente sunt? Pariatur natus, iure at minima magni optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias porro vitae veniam deleniti dolore eaque dolor harum voluptates voluptatum? Magni nihil sapiente sunt? Pariatur natus, iure at minima magni optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias porro vitae veniam deleniti dolore eaque dolor harum voluptates voluptatum? Magni nihil sapiente sunt? Pariatur natus, iure at minima magni optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias porro vitae veniam deleniti dolore eaque dolor harum voluptates voluptatum? Magni nihil sapiente sunt? Pariatur natus, iure at minima magni optio.";
  html += "</p>";
  html += "</div>";
  html += "<p>";
  html +=
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, aspernatur. Quasi distinctio in alias, modi tempora consequatur fugit optio eaque magni nemo, neque corporis, hic accusamus sit perspiciatis odit laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias porro vitae veniam deleniti dolore eaque dolor harum voluptates voluptatum? Magni nihil sapiente sunt? Pariatur natus, iure at minima magni optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias porro vitae veniam deleniti dolore eaque dolor harum voluptates voluptatum? Magni nihil sapiente sunt? Pariatur natus, iure at minima Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias porro vitae veniam deleniti dolore eaque dolor harum voluptates voluptatum? Magni nihil sapiente sunt? Pariatur natus, iure at minima magni optio. magni optio.";
  html += "</p>";
  html += "</section>";
  html += "<section>";
  html += "<hr />";
  html += "<h3>Infos pratique</h3>";
  html += "<p>";
  html +=
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ea ipsam distinctio modi autem perspiciatis a soluta molestias corrupti, excepturi deleniti minima accusamus sequi inventore. Repellat sequi error reprehenderit recusandae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias porro vitae veniam deleniti dolore eaque dolor harum voluptates voluptatum? Magni nihil sapiente sunt? Pariatur natus, iure at minima magni optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias porro vitae veniam deleniti dolore eaque dolor harum voluptates voluptatum? Magni nihil sapiente sunt? Pariatur natus, iure at minima magni optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias porro vitae veniam deleniti dolore eaque dolor harum voluptates voluptatum? Magni nihil sapiente sunt? Pariatur natus, iure at minima magni optio.";
  html += "</p>";
  html += "</section>";

  document.getElementById("contenu-page").innerHTML = html;
  genererConnexion();
}

function destination() {
  var html = "<section class='zoneTableau'>";
  html += "<h2>Destination</h2>";
  html += "<div id='table'>";
  html += "</div>";
  html +=
    "<button class='ajoutDestination' onclick=ajouterDestination()>Ajouter une destination</button>";
  html += "<div id='modal'>";
  html += "<div id='contenuModal' action='destination.html' method='POST'>";
  html +=
    "<input type='text' name='nom' id='nom' placeholder='Nom de la ville' value='' />";
  html +=
    "<input type='text' name='desc' id='desc' placeholder='Description de la ville' value='' />";
  html +=
    "<input type='text' name='prix' id='prix' placeholder='Prix du voyage' value='' />";
  html += "<div id='page-wrapper'>";
  html += "<div>";
  html += "<input type='file' id='fileInput'>";
  html += "</div>";
  html += "<div id='fileDisplayArea'></div>";
  html += "</div>";
  html += "<button id='btnAjouter'>Ajouter</button>";
  html += "</div>";
  html += "</div>";
  html += "</section>";
  html += "<script class ='scriptSup' src='../script/tableau.js'></script>";
  document.getElementById("contenu-page").innerHTML = html;
  generateTableau();
  genererConnexion();
}

function voyageAudio() {
  var html = "<section>";
  html += "<div class='card'>";
  html += "<div class='card-header-audio'>";
  html += "<h2>Audio 1</h2>";
  html += "<p>";
  html +=
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolorem sequi quam, quasi distinctio repellat nobis ex delectus ipsa minus dolore, impedit deserunt illum, voluptas veritatis! Doloremque saepe quisquam amet?";
  html += "</p>";
  html += "</div>";
  html += "<div class='card-body'>";
  html += "<audio controls muted autoplay>";
  html += "<source src='../songs/Sons.mp3' type='audio/mpeg' />";
  html += "</audio>";
  html += "</div>";
  html += "</div>";
  html += "</section>";
  html += "<section>";
  html += "<div class='card'>";
  html += "<div class='card-header-audio'>";
  html += "<h2>Audio 2</h2>";
  html += "<p>";
  html +=
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolorem sequi quam, quasi distinctio repellat nobis ex delectus ipsa minus dolore, impedit deserunt illum, voluptas veritatis! Doloremque saepe quisquam amet?";
  html += "</p>";
  html += "</div>";
  html += "<div class='card-body'>";
  html += "<audio controls>";
  html +=
    "<source src='../songs/powerful-beat-121791.mp3' type='audio/mpeg' />";
  html += "</audio>";
  html += "</div>";
  html += "</div>";
  html += "</section>";
  html += "<section>";
  html += "<div class='card'>";
  html += "<div class='card-header-audio'>";
  html += "<h2>Audio 3</h2>";
  html += "<p>";
  html +=
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolorem sequi quam, quasi distinctio repellat nobis ex delectus ipsa minus dolore, impedit deserunt illum, voluptas veritatis! Doloremque saepe quisquam amet?";
  html += "</p>";
  html += "</div>";
  html += "<div class='card-body'>";
  html += "<audio controls>";
  html +=
    "<source src='../songs/leonell-cassio-the-blackest-bouquet-118766.mp3' type='audio/mpeg' />";
  html += "</audio>";
  html += "</div>";
  html += "</div>";
  html += "</section>";
  html += "<section>";
  html += "<div class='card'>";
  html += "<div class='card-header-audio'>";
  html += "<h2>Audio 4</h2>";
  html += "<p>";
  html +=
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolorem sequi quam, quasi distinctio repellat nobis ex delectus ipsa minus dolore, impedit deserunt illum, voluptas veritatis! Doloremque saepe quisquam amet?";
  html += "</p>";
  html += "</div>";
  html += "<div class='card-body'>";
  html += "<audio controls>";
  html += "<source src='../songs/happy-day-113985.mp3' type='audio/mpeg' />";
  html += "</audio>";
  html += "</div>";
  html += "</div>";
  html += "</section>";

  document.getElementById("contenu-page").innerHTML = html;
  genererConnexion();
}

function voyageVideo() {
  var html = "<section>";
  html += "<section>";
  html += "<div class='cardVideo'>";
  html += "<div class='card-header'>";
  html += "<h3>video 1</h3>";
  html += "<p>";
  html +=
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim dignissimos vitae, nihil expedita dicta voluptates, laborum, asperiores cum commodi excepturi velit laboriosam voluptas inventore et? Magni exercitationem illum excepturi reiciendis.";
  html += "</p>";
  html += "</div>";
  html +=
    "<video autoplay width='320' height='240' controls src='../video/pexels-cottonbro-9544324.mp4'></video>";
  html += "</div>";
  html += "</section>";
  html += "<section>";
  html += "<div class='cardVideo'>";
  html += "<div class='card-header'>";
  html += "<h3>video 2</h3>";
  html += "<p>";
  html +=
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim dignissimos vitae, nihil expedita dicta voluptates, laborum, asperiores cum commodi excepturi velit laboriosam voluptas inventore et? Magni exercitationem illum excepturi reiciendis.";
  html += "</p>";
  html += "</div>";
  html +=
    "<video width='320' height='240' controls src='../video/file.mp4'></video>";
  html += "</div>";
  html += "</section>";
  html += "<section>";
  html += "<div class='cardVideo'>";
  html += "<div class='card-header'>";
  html += "<h3>video 3</h3>";
  html += "<p>";
  html +=
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim dignissimos vitae, nihil expedita dicta voluptates, laborum, asperiores cum commodi excepturi velit laboriosam voluptas inventore et? Magni exercitationem illum excepturi reiciendis.";
  html += "</p>";
  html += "</div>";
  html +=
    "<video width='320' height='240' controls src='../video/production ID 5078580.mp4'></video>";
  html += "</div>";
  html += "</section>";
  html += "<section>";
  html += "<div class='cardVideo'>";
  html += "<div class='card-header'>";
  html += "<h3>video 4</h3>";
  html += "<p>";
  html +=
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim dignissimos vitae, nihil expedita dicta voluptates, laborum, asperiores cum commodi excepturi velit laboriosam voluptas inventore et? Magni exercitationem illum excepturi reiciendis.";
  html += "</p>";
  html += "</div>";
  html +=
    "<video width='320' height='240' controls src='../video/sq.mp4'></video>";
  html += "</div>";
  html += "</section>";

  document.getElementById("contenu-page").innerHTML = html;
  genererConnexion();
}

function contact() {
  var html = "<form name='inscription' method='post' action=''>";
  html += "Nom et prénom<br />";
  html +=
    "<input type='text' name='nom' value='' pattern='.+@globex\\.' /><br />";
  html += "Email<br />";
  html +=
    "<input type='email' name='email' value='' placeholder='xyz@.com' /><br />";
  html += "Telephone<br />";
  html +=
    "<input type='tel' name='telephone' value='' pattern='[0-9]{10}' /><br />";
  html += "Message<br />";
  html += "<textarea name='message' cols='30' rows='10'></textarea><br />";
  html += "<input type='submit' name='envoyer' value='envoyer' />";
  html += "</form>";

  document.getElementById("contenu-page").innerHTML = html;
  genererConnexion();
}

function genererConnexion() {
  var html = "<div class='modal-connexion'>";
  html += "<div class='modal-connexion-content'>";
  html += "<div class='modal-connexion-header'>";
  html += "<div class='modal-connexion-title'>Connexion</div>";
  html += "</div>";
  html += "<div class='modal-connexion-body'>";
  //pseudo et mdp formulaire
  html += "Pseudo<br />";
  html +=
    "<input type='text' name='login' value='' pattern='.+@globex\\.' /><br />";
  html += "Mot de passe<br />";
  html += "<input type='password' name='password' value=''/><br />";
  html += "<button onclick='connexion()'>Connexion</button>";
  html += "</div>";
  html += "</div>";
  html += "</div>";

  document.getElementById("contenu-page").innerHTML += html;
}

function afficherConnexion() {
  var modal = document.querySelector(".modal-connexion");
  modal.style.display = "block";
}

//appel ajax pour la connexion
function connexion() {
  var modal = document.querySelector(".modal-connexion");
  var pseudo = document.querySelector("input[name='login']").value;
  var mdp = document.querySelector("input[name='password']").value;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "../script/connexion.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send("login=" + pseudo + "&password=" + mdp);

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var reponse = xhr.responseText;
      console.log(reponse);
      if (reponse == "Failed") {
        alert("Erreur de connexion");
      }
      if (reponse === "SuccessAdmin") {
        modal.style.display = "none";
        document.querySelector("#nomPersonneConnecte").innerHTML =
          "<img src='https://img.icons8.com/ios-glyphs/30/null/user--v1.png'/><p id='nom'> " +
          pseudo +
          "</p>";
        isAdmin = true;
        isUser = false;
      }
      if (reponse === "SuccessUser") {
        modal.style.display = "none";
        document.querySelector("#nomPersonneConnecte").innerHTML =
          "<img src='https://img.icons8.com/ios-glyphs/30/null/user--v1.png'/><p id='nom'>" +
          pseudo +
          "</p>";
        isUser = true;
        isAdmin = false;
      }
      //if on destination page
      if (document.querySelector(".zoneTableau") !== null) {
        destination();
      }
    }
  };
}

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
  html += "<div class='tableau'>";
  html += "<div class='ligne row'>";
  html += "<div class='col-xs-1 col-md-1'>Destination</div>";
  html += "<div class='col-xs-3 col-md-3'>Photo</div>";
  html += "<div class='col-xs-5 col-md-5'>Description</div>";
  html += "<div class='col-xs-3 col-md-3'>Prix</div>";
  html += "</div>";
  destinations.forEach((element) => {
    html += "<div class='ligne row'>";
    html += "<div class='col-xs-1 col-md-1'>" + element.nom + "</div>";
    html +=
      "<div class='col-xs-3 col-md-3'><img class='img-fluid img-thumbnail w-100' src='" +
      element.image +
      "' alt='Ville de " +
      element.nom +
      "' /></div>";
    html += "<div class='col-xs-4 col-md-4'>" + element.desc + "</div>";
    if (isAdmin) {
      html +=
        "<div class=' btnDelEdit col-xs-1 col-md-1'>" +
        element.prix +
        "€</div>";
      html +=
        "<div class='btnDelEdit col-xs-2 col-md-2'>" +
        "<button>découvrir</button>" +
        "<button onclick=modifierDestination(" +
        element.id +
        ")>Modifier</button>" +
        "<button onclick=supprimerDestination(" +
        element.id +
        ")>Supprimer</button>" +
        "</div>";
    }
    if (isUser) {
      //retirere la div btnDelEdit
      html +=
        "<div class='decouvrir col-xs-1 col-md-1'>" + element.prix + "€</div>";
      html +=
        "<div class='decouvrir col-xs-2 col-md-2'>" +
        "<button>découvrir</button>" +
        "</div>";
    }
    if (!isAdmin && !isUser) {
      html += "<div class='col-xs-3 col-md-3'>" + element.prix + "€</div>";
    }
    html += "</div>";
  });
  html += "</div>";
  tableau.innerHTML = html;
}

function supprimerDestination(idDest) {
  //supp from destinations
  //parentElement = td
  //parentElement.parentElement = tr
  destinations.forEach((element) => {
    if (element.id == idDest) {
      //remove from destinations element
      destinations.splice(destinations.indexOf(element), 1);
      generateTableau();
    }
  });
}

function modifierDestination(id) {
  let modal = document.getElementById("modal");
  modal.style.display = "block";

  let dest = destinations.find((element) => element.id == id);

  let nom = (document.getElementById("nom").value = dest.nom);
  let desc = (document.getElementById("desc").value = dest.desc);
  let prix = (document.getElementById("prix").value = dest.prix);
  let imgAdd = dest.image;
  let fileDisplayArea = document.getElementById("fileDisplayArea");
  fileDisplayArea.innerHTML =
    "<img class='img-fluid img-thumbnail' src='" + imgAdd + "' />";
  let btnAjouter = document.getElementById("btnAjouter");
  btnAjouter.innerHTML = "Modifier";
  btnAjouter.onclick = function () {
    nom = document.getElementById("nom").value;
    desc = document.getElementById("desc").value;
    prix = document.getElementById("prix").value;
    if (nom != "" && desc != "" && prix != "") {
      dest.nom = nom;
      dest.desc = desc;
      dest.prix = prix;
      if (imgAdd != dest.image) {
        dest.image = imgAdd.src;
      }
      modal.style.display = "none";
      generateTableau();
    } else {
      alert("Veuillez remplir tous les champs");
    }
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  generateTableau();
  let fileInput = document.getElementById("fileInput");
  fileInput.addEventListener("change", function (e) {
    let file = fileInput.files[0];
    var imageType = /image.*/;
    if (file.type.match(imageType)) {
      var reader = new FileReader();

      reader.onload = function (e) {
        fileDisplayArea.innerHTML = "";

        imgAdd = new Image();

        imgAdd.src = reader.result;
        console.log(imgAdd.src);

        fileDisplayArea.appendChild(imgAdd);
      };

      reader.readAsDataURL(file);
    } else {
      fileDisplayArea.innerHTML = "file not supported!";
    }
  });
}

function ajouterDestination() {
  //afficher un modal avec un formulaire
  //ajouter la destination dans le tableau
  //recharger le tableau
  let imgAdd = "../img/inconnu.png";
  let modal = document.getElementById("modal");

  modal.style.display = "block";
  let nom = (document.getElementById("nom").value = "");
  let desc = (document.getElementById("desc").value = "");
  let prix = (document.getElementById("prix").value = "");
  let fileInput = document.getElementById("fileInput");
  let fileDisplayArea = document.getElementById("fileDisplayArea");
  fileDisplayArea.innerHTML = "";

  let btnAjouter = document.getElementById("btnAjouter");
  btnAjouter.innerHTML = "Ajouter";
  btnAjouter.onclick = function () {
    nom = document.getElementById("nom").value;
    desc = document.getElementById("desc").value;
    prix = document.getElementById("prix").value;
    if (nom != "" && desc != "" && prix != "") {
      let id = destinations.length + 1;
      let destination = new Destination(id, nom, desc, prix, imgAdd.src);
      destinations.push(destination);
      modal.style.display = "none";
      generateTableau();
    } else {
      alert("Veuillez remplir tous les champs");
    }
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  fileInput.addEventListener("change", function (e) {
    let file = fileInput.files[0];
    var imageType = /image.*/;
    console.log("here");

    if (file.type.match(imageType)) {
      var reader = new FileReader();

      reader.onload = function (e) {
        fileDisplayArea.innerHTML = "";

        imgAdd = new Image();

        imgAdd.src = reader.result;
        console.log(imgAdd.src);

        fileDisplayArea.appendChild(imgAdd);
      };

      reader.readAsDataURL(file);
    } else {
      fileDisplayArea.innerHTML = "File not supported!";
    }
  });
}

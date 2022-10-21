contenu_menu = {
  menu: [
    {
      titre: "Accueil",
      url: "../pages/accueil.html",
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
    },
    {
      titre: "Voyage audio",
      url: "../pages/voyageAudio.html",
    },
    {
      titre: "Voyage vidéo",
      url: "../pages/voyageVideo.html",
    },
    {
      titre: "Contact",
      url: "../pages/contact.html",
    },
  ],
};

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
        html += `<a class="dropbtn" href="">${element.titre}</a>`;
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
                } else {
                    html += `<a href="">${element.titre}</a>`;
                }
            html += "</li>";
        });
        html += "</ul>";
      } else {
        html += `<a href="${element.url}">${element.titre}</a>`;
      }
      html += "</li>";
    });
    html += "</ul>";
    html += "</nav>";
    //add to body
    document.body.innerHTML += html;
  }
});

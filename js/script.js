let tema = ""
const temaEscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (temaEscuro) {
      tema = "img/icone/Logo_icon_white.png"
    } else {
      tema = "img/icone/Logo_icon.png"
    }

    document.getElementById("favicon").setAttribute("href", tema);
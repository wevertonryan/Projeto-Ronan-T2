let tema = "";
let icone_branco = "";
let icone_preto = "",
const temaEscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (temaEscuro) {
      tema = icone_branco;
    } else {
      tema = icone_preto;
    }

    console.log(icone_branco);
    document.getElementById("favicon").setAttribute("href", tema);
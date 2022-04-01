//declencher une action sans addEventListener mais avec onclick Event
const lebouton = document.querySelector("#bouton01");
lebouton.onclick = ()=> {
    alert("j'utilise onclick pour interagir avec le bouton");
};


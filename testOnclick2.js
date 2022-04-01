//declencher une action avec un ecouteur d'evenement 
const changerCouleuH1 = document.querySelector("h1");
changerCouleuH1.addEventListener("mouseover", () => {
    changerCouleuH1.style.backgroundColor = "red" 
});

changerCouleuH1.addEventListener("mouseout", () => {
    changerCouleuH1.style.backgroundColor = "white",
    alert("Attention je change de couleur")
});

console.log(changerCouleuH1);
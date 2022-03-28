// Define the string
function Enconding() { 

var decodedStringBtoA = document.getElementById("champ").value;
var decodedStringBtoB = document.getElementById("champ2").value;
var decodedStringBtoC = decodedStringBtoA+":"+decodedStringBtoB;

// Encode the String
var encodedStringBtoC = btoa(decodedStringBtoC);

console.log(encodedStringBtoC);
output.textContent = 'Notre encodage en base 64 qui doit rentrer dans notre table : '+encodedStringBtoC;
}


  
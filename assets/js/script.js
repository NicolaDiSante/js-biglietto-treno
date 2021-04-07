

var numKm = parseInt(prompt("Quanti km percorrerai?"));
var eta = parseInt(prompt("Quanti anni hai?"));
var prezzo = numKm * 0.21;

if(eta == 0){
  alert("Error!")
}

if(eta<18){
  prezzo=(prezzo * 80/100)
}else if(eta>65){
  prezzo=(prezzo * 60/100)
}


document.getElementById('msgInfo').innerHTML = "Il prezzo totale del viaggio sarà " + Math.round(prezzo);


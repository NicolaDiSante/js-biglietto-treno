var numKm = parseInt(prompt("Quanti km percorrerai?"));
var eta = parseInt(prompt("Quanti anni hai?"));
var prezzo = numKm * 0.21;

if(eta<18){
  console.log(prezzo * 80/100)
}else if(eta>65){
  console.log(prezzo * 60/100)
}else{
  console.log(prezzo)
}


document.getElementById('msgInfo').innerHTML = "Il prezzo totale del viaggio sarà " + prezzo;

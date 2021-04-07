var numKm = prompt("Quanti km percorrerai?");
var eta = prompt("Quanti anni hai?");
var prezzo = parseInt(numKm) * 0.21;

if(eta<18){
  console.log(prezzo * 80/100)
}else if(eta>65){
  console.log(prezzo * 60/100)
}else{
  console.log(prezzo)
}
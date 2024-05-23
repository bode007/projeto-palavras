let palavra;

function palavraAleatoria() {
    let palavras = ["zé ruela", "pessoa", "amigo", "vizinho"];
  return random(palavras);}
  
 function setup(){
createCanvas(400, 400);

  palavra = palavraAleatoria();

 }

function inicializaCores() {
  background("black");
  fill("red");
  textSize(98);
  textAlign(CENTER, CENTER);
}
  function palavraParcial(minimo, maximo){ 
 let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
 let parcial = palavra.substring(0, quantidade);
 return parcial;
  }

function draw() {
  inicializaCores();
  let texto = palavraParcial(0, width);
  text(texto, 200, 200);
}
function lugaresParaRodeioNofinalDESemana(diaDaSemana, sitio){
}


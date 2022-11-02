function setup() {
    createCanvas(500, 400);
}

function draw() {
    background(imagemDaEstrada); //chamanda a variavel que está a imagem
    mostraAtor();
    mostraCarro();
    movimentaCarro();
    movimentaAtor();
    voltaCarroDoInicio();

}



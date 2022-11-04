function setup() {
    createCanvas(500, 400);
    somDaTrilha.loop();
}

function draw() {
    background(imagemDaEstrada); //chamanda a variavel que está a imagem
    mostraAtor();
    mostraCarro();
    movimentaCarro();
    movimentaAtor();
    voltaCarroDoInicio();
    verificaColisao();
    incluiPontos();
    marcaPontos();

}



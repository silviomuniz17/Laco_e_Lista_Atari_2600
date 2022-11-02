//Variavel Ator
let xAtor = 100;
let yAtor = 366;

function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, 30, 30); //chamando a variavel que está a imagem, posiçãoX, posiçãoY, tamanho da imagem x tamanhp da imagem y
}

function movimentaAtor(){ //Função que movimento o ator
    if (keyIsDown(UP_ARROW)){ //seta para cima para subir
        yAtor -= 3;
    }
    if (keyIsDown(DOWN_ARROW)){ //seta para baixo para descer
        yAtor += 3;
    }
}

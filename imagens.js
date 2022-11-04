let imagemDaEstrada; //Variaveis das Imagens
let imagemDoCarro; //Variavel imagem do carro
let imagemDoCarro2; //Variavel imagem do carro
let imagemDoCarro3; //Variavel imagem do carro
let imagemDoAtor; //Variavel imagem do ator

let somDaTrilha; //criando variavel para receber o som
let somDaColisao; //criando variavel para receber o som
let somDoponto;//criando variavel para receber o som

function preload(){ //função carregar imagens
    imagemDaEstrada = loadImage("Imagens/estrada.png"); //mostrando onde está salva a imagem e salvando na variavel
    imagemDoAtor = loadImage("Imagens/ator-1.png"); //mostrando onde está salva a imagem e salvando na variavel
    imagemDoCarro = loadImage("Imagens/carro-1.png"); //mostrando onde está salva a imagem e salvando na variavel
    imagemDoCarro2 = loadImage("Imagens/carro-2.png"); //mostrando onde está salva a imagem e salvando na variavel
    imagemDoCarro3 = loadImage("Imagens/carro-3.png"); //mostrando onde está salva a imagem e salvando na variavel
    listaImagensCarros = [imagemDoCarro, imagemDoCarro2, imagemDoCarro3, imagemDoCarro, imagemDoCarro2, imagemDoCarro3];

    somDaTrilha = loadSound("Sons/trilha.mp3"); //mostrando onde está salva o som e salvando na variavel
    somDaColisao = loadSound("Sons/colidiu.mp3"); //mostrando onde está salva o som e salvando na variavel
    somDoponto = loadSound("Sons/pontos.wav"); //mostrando onde está salva o som e salvando na variavel
}

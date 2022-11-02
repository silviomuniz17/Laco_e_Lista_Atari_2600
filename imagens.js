let imagemDaEstrada; //Variaveis das Imagens
let imagemDoCarro; //Variavel imagem do carro
let imagemDoCarro2; //Variavel imagem do carro
let imagemDoCarro3; //Variavel imagem do carro
let imagemDoAtor; //Variavel imagem do ator

function preload(){ //função carregar imagens
    imagemDaEstrada = loadImage("Imagens/estrada.png"); //mostrando onde está salva a imagem e salvando na variavel
    imagemDoAtor = loadImage("Imagens/ator-1.png"); //mostrando onde está salva a imagem e salvando na variavel
    imagemDoCarro = loadImage("Imagens/carro-1.png"); //mostrando onde está salva a imagem e salvando na variavel
    imagemDoCarro2 = loadImage("Imagens/carro-2.png"); //mostrando onde está salva a imagem e salvando na variavel
    imagemDoCarro3 = loadImage("Imagens/carro-3.png"); //mostrando onde está salva a imagem e salvando na variavel
    listaImagensCarros = [imagemDoCarro, imagemDoCarro2, imagemDoCarro3];
}

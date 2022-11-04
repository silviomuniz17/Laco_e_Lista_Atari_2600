//Variavel Ator
let xAtor = 85;
let yAtor = 366;
let meusPontos = 0;
let colisao = false;

function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, 30, 30); //chamando a variavel que está a imagem, posiçãoX, posiçãoY, tamanho da imagem x tamanhp da imagem y
}
function movimentaAtor(){ //Função que movimento o ator
    if (keyIsDown(UP_ARROW)){ //seta para cima para subir
        yAtor -= 3;
    }
    if (keyIsDown(DOWN_ARROW)){ //seta para baixo para descer
        if(podeSeMover()){
            yAtor += 3;
        }
    }
}
 function verificaColisao(){
    for (let i = 0; i < listaImagensCarros.length; i++){ //fazendo um loop para saber sempre que colidiu
        colisao = collideRectCircle(xListaCarros[i],yListaCarros[i],comprimentoCarro, alturaCarro, xAtor, yAtor, 15); //pegamos esse codigo da internet
        if (colisao){
            voltaAtorPosisaoInicial(); //chama a função se colidiu
            somDaColisao.play();
            if (sePontosForMaiorQueZero()){ // chamando funsão para saber se é maior que zero
                meusPontos -= 1; //se for verdadeiro vai remover 1 ponto
            }
        }
    }
 }

 function voltaAtorPosisaoInicial(){ // função colidiu
    yAtor = 366; // se for verdadeira volta para o inicio o personagem
 }
 function marcaPontos(){ //para marcar meus pontos
    if (yAtor < 15){  //se o ator chegar na posisão 15
        somDoponto.play();
        meusPontos += 1; //meus pontos recebe meus pontos mais um
        voltaAtorPosisaoInicial(); //depois que recebeu volta para posisão inicial
    }
 }

 function incluiPontos(){
    textAlign(CENTER);//Pegar o centro da palavra
    textSize(25); //é o tamanho que vai ficar o placar
    text(meusPontos, width/5, 27); //imprimindo os pontos, width(comprimento da tela) dividido 5, altura da tela 60
    fill(color(255,240,60)); // cor do placar
 }
 function sePontosForMaiorQueZero(){
     return meusPontos > 0; // if para saber se os pontos é mair que 0
 }
 function podeSeMover(){
    return yAtor < 366;
 }

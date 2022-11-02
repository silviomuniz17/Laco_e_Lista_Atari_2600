//Variaveis Carro 1
// let xCarro = 600;  //posisão inicial do carro
// let yCarro = 40;  //posisão da altura do carro
// let velocidadeCarro = 2; //Velocidade que o carro vai andar

//Variaveis Carro 2
// let xCarro2 = 600; //posisão inicial do carro
// let yCarro2 = 96; //posisão da altura do carro
// let velocidadeCarro2 = 2.5; //Velocidade que o carro vai andar

//Variaveis Carro 3
// let xCarro3 = 600; //posisão inicial do carro
// let yCarro3 = 150; //posisão da altura do carro
// let velocidadeCarro3 = 3.2; //Velocidade que o carro vai andar

//Criar lista para salvar os valores em uma unica variavel
let xListaCarros = [600, 600, 600] //recebendo 3 valores para a posição x do carro
let yListaCarros = [40, 96, 150] //recebendo 3 valores para a posição y do carro
let listaVelocidadeCarros = [2, 2.5, 3.2] //recebendo 3 valores para a velocidade do carro

function mostraCarro(){
    for (let i = 0; i < listaImagensCarros.length; i = i + 1 ){ //criar variavel 1 valendo 0/ valor de i é maior que a quantidade de carros na minha lista/ i recebe i mais 1
        image(listaImagensCarros[i], xListaCarros[i], yListaCarros[i], 50, 40); //chamando a variavel que está a imagem, posiçãoX, posiçãoY, tamanho da imagem x tamanhp da imagem y
        print("O valor de I nessa repetição é:" + i); //essa linha é para testar e ver qual o valor de i (não é necessario)
    }
}

function movimentaCarro(){ //movimento do carro
    for (let i = 0; i < listaImagensCarros.length; i = i + 1 ){ //criar variavel 1 valendo 0/ valor de i é maior que a quantidade de carros na minha lista/ i recebe i mais 1
        xListaCarros[i] -= listaVelocidadeCarros[i];  //receber a posição do carro menos a velocidade (informado o valor na variavel)
    }
}

function voltaCarroDoInicio(){ //voltar do inicio quando passar a borda do jogo
    for (let i = 0; i < listaImagensCarros.length; i = i + 1 ){  //criar variavel 1 valendo 0/ valor de i é maior que a quantidade de carros na minha lista/ i recebe i mais 1
        if (passouTodaTela(xListaCarros[i])){   //chamando função passou toda tela para saber se é menor que 50 o valor de X
            xListaCarros[i] = 600; //se o valor for verdadeiro o carro recebe 600 que é inicio da tela
        }
    }
}

function passouTodaTela(xListaCarros){ //recebendo valor da função voltar do inicio para comparar se é menor que 50 o valor de x
    return xListaCarros < -50; // retorno se verdadeiro ou falso
}

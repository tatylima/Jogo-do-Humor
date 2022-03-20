const elementoNome = document.getElementById('nome'); /* Cria a variável elementoNome e coloca o elemento com o id nome nela */
const elementoSituacao = document.querySelector('#situacao'); /* Cria a variável elementoSituacao e coloca o elemento com o id situacao nela */
const elementoImg = document.querySelector('#imagem') /* Cria a variável elementoImg e coloca o elemento com o id imagem nela */
let elementoButton = document.querySelector('#alterar') /* Cria a variável elementoButton e coloca o elemento com o id alterar nela */

/* Adiciona o evento de click no elementoButton e executa a função anonima (arrow function) */
elementoButton.addEventListener('click', () =>{
/* Verifica se o valour do botão é 'primeiro', se for troque de humor para segunda */
    if(elementoButton.value == 'primeiro'){
        elementoImg.src = "./assets/midia/img01.webp" /* Troca a imagem do personagem */
        elementoNome.innerText = ' Madruga na Segunda-feira' /* Altera o texto do elemento nome */
        elementoSituacao.innerText = 'Tedio' /* Altera o texto do elemento situação */
        
        elementoButton.value = 'segundo' /* Altera valor do botão */
    } else if(elementoButton.value == 'segundo') { /* Verifica se o valour do botão é 'segundo', se for troque de humor para o terça */
        elementoImg.src = "./assets/midia/img02.jpg"  /* Troca a imagem do personagem */
        elementoNome.innerText = 'Madruga na Terça' /* Altera o texto do elemento nome */
        elementoSituacao.innerText = 'To doido' /* Altera o texto do elemento situação */
        
        elementoButton.value = 'terceiro'  /* Altera valor do botão */
    } else if ( elementoButton.value == 'terceiro'){/* Se os valores do botão não forem, 'primeiro' nem 'segundo' mude para quarta */
        elementoImg.src ='./assets/midia/img03.jpg' /* Troca a imagem do personagem */
        elementoNome.innerText = 'Madruga na Quarta' /* Altera o texto do elemento nome */
        elementoSituacao.innerText = 'sei lá' /* Altera o texto do elemento situação */
       
        elementoButton.value = 'quarto' /* Altera valor do botão */
    }else if (elementoButton.value == 'quarto'){
        elementoImg.src ='./assets/midia/img04.webp' /* Troca a imagem do personagem */
        elementoNome.innerText = 'Madruga na Quinta' /* Altera o texto do elemento nome */
        elementoSituacao.innerText = 'To Pensando' /* Altera o texto do elemento situação */
        
        elementoButton.value = 'quinto' /* Altera valor do botão */
    }else if(elementoButton.value == 'quinto'){
        elementoImg.src = './assets/midia/img05.jpg' /* Troca a imagem do personagem */
        elementoNome.innerText = 'Madruga na Sexta' /* Altera o texto do elemento nome */
        elementoSituacao.innerText = 'Sextou!!!' /* Altera o texto do elemento situação */
        
        elementoButton.value = 'sexto' /* Altera valor do botão */
    }else if(elementoButton.value == 'sexto'){
        elementoImg.src = './assets/midia/img06.jpg' /* Troca a imagem do personagem */
        elementoNome.innerText = 'Madruga no Sabado' /* Altera o texto do elemento nome */
        elementoSituacao.innerText = 'Balada? to pronto!' /* Altera o texto do elemento situação */
 
        elementoButton.value = 'setimo' /* Altera valor do botão */
    }else{
    elementoImg.src = './assets/midia/img07.JPG' /* Troca a imagem do personagem */
    elementoNome.innerText = 'Madruga no Domingo' /* Altera o texto do elemento nome */
    elementoSituacao.innerText = 'Ah,não,Segunda Feira tá chegando....'
     /* Altera o texto do elemento situação */
     elementoButton.value = 'primeiro'

}
});




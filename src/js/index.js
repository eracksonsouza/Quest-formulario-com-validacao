const botaoDoFormulario = document.querySelector('.btn-enviar')

botaoDoFormulario.addEventListener('click', (clicou) =>{
    clicou.preventDefault();
    enviarFormulario();
})

function enviarFormulario(){
    verificarSeFoiPreenchido();
}

function verificarSeFoiPreenchido(){
    let informacoesUsuario = document.querySelectorAll('.informacoes');
    
    informacoesUsuario.forEach(function(input){
        let informacaoDigitada = input.value; //ou seja, se tiver valor no campo digitado
        let colocarTextoDeCampoObrigatorio = input.nextElementSibling; //aqui vai adicionar um elemento filho

        if(informacaoDigitada){
            input.classList.remove('borda-de-preenchimento', 'borda-de-erro');
            colocarTextoDeCampoObrigatorio.textContent = '';
        }

        if(informacaoDigitada){
            input.classList.add('borda-de-preenchimento')
        }else{
            input.classList.add('borda-de-erro')
            colocarTextoDeCampoObrigatorio.innerHTML = 'campo obrigatorio*'
        }
    })
}

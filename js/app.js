const formulario = 
document.querySelector('#formCadastro');
const mensagem = 
document.querySelector('#mensagemSucesso')

formulario.addEventListener('submit',function(event){
    event.preventDefault();
    mensagem.classList.remove('d-none');
    formulario.reset();
});

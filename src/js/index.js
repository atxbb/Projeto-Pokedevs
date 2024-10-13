const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");

listaSelecaoPokedevs.forEach(pokedev =>{
    pokedev.addEventListener('click', () => {
        esconderCartaoPokedev();

        const idPokedevSelecianado = mostrarCartaoPokedevSelecionado(pokedev);

        DesativarPokedevNaListagem();

      
      ativarPokedevSelecionadoNaListagem(idPokedevSelecianado);
        
    })
    
})
 





function ativarPokedevSelecionadoNaListagem(idPokedevSelecianado) {
    const pokedevSelevionnadoNaListagem = document.getElementById(idPokedevSelecianado);
    pokedevSelevionnadoNaListagem.classList.add('ativo');
}

function DesativarPokedevNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector('.ativo');
    pokedevAtivoNaListagem.classList.remove('ativo');
}

function mostrarCartaoPokedevSelecionado(pokedev) {
    const idPokedevSelecianado = pokedev.attributes.id.value;
    const idDoCartaoParaAbrir = "cartao-" + idPokedevSelecianado;
    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoParaAbrir);
    cartaoPokedevParaAbrir.classList.add('aberto');
    return idPokedevSelecianado;
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove('aberto');
}


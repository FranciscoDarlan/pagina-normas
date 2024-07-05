const caixaTraco = document.querySelector('.img-traco');

const spanInforme = document.querySelector('.caixa-de-saber-mais');

function menuItens() {
    const menuresponsivo = document.querySelector('.ul-responsivo');
    if (menuresponsivo.classList.contains('apaga')) {
        menuresponsivo.classList.remove('apaga')
    }else{
        menuresponsivo.classList.add('apaga')
    }
}

caixaTraco.addEventListener('click', menuItens);

function MostrarMaisNr33() {

    if (spanInforme.classList.contains('apagaInfomacao')) {
        spanInforme.classList.remove('apagaInfomacao')
    }else{
        spanInforme.classList.add('apagaInfomacao')
    }

}

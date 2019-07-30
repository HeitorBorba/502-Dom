// function mostrarMouse(event){
//     if(event.pageY >=1 & event.pageX >= 1){
//     }
//     else{
//         confirm("Voce deseja sair desta pagina")
//     }
// }

// window.onmousemove = mostrarMouse;

// let texto = document.querySelector("h1");

// localStorage.setItem('nome' , 'Heitor')

// texto.innerHTML= `Saja bem vindo ${localStorage.nome}`

let caixaTexto = document.querySelector("input");
let botao = document.querySelector("button")
let texto = document.querySelector("p");
let naosou = document.querySelector("a")
let dn = document.querySelector("h3")
let h = document.querySelector('h2')


if (localStorage.nome) {
    dn.innerHTML = `Seja bem vindo ${localStorage.nome}`
    caixaTexto.style.display = 'none';
    botao.style.display = 'none';
    naosou.innerHTML = `Não é ${localStorage.nome}?`

}
else {
    function acessar() {
        dn.innerHTML = 'Digite seu nome'
        localStorage.setItem('nome', caixaTexto.value)
        texto.innerHTML = `Seja bem vindo ${localStorage.nome}`
        naosou.innerHTML = `Não é ${localStorage.nome} ?`
        dn.style.display = 'none';
        caixaTexto.style.display = 'none';
        botao.style.display = 'none';

    }
    botao.onclick = acessar;
}


function limpar() {
    localStorage.removeItem('nome')
}



naosou.onclick = limpar;


//Código pro menu dropdown!
var dropdownBtn = document.getElementById('dropdownBtn'); //Armazenando o botão do menu na variável.
var dropdownEl = document.getElementById('dropdownMenu'); //Armazenando o menu dropdown na variável.

//Adicionando um evento de click no botão do menu dropdown pra trocar o display da div com os botões.
dropdownBtn.addEventListener('click', function() {

    if (dropdownEl.style.display === 'block'){
    dropdownEl.style.display = 'none'
    } else {
        dropdownEl.style.display = 'block'
    }
});

//Adicionando um evento pra caso o menu dropdown estiver em uma situação diferente da função acima, verificar e mudar para display none.
document.addEventListener('click', function(event) {
    if (event.target !== dropdownBtn) {
        dropdownEl.style.display = "none";
    }
})


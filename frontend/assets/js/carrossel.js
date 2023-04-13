const slide = document.querySelector('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const img = slide.querySelectorAll('img');

let index = 0; //????

prevBtn.addEventListener('click', () => {
    if (index < 0) {
        index = img.length - 1;
    }

    slide.style.transform = `translateX(-${index * 100}%)`;
});

nextBtn.addEventListener('click', () => {
    index++;
    if(index >= img.length) {
        index = 0
    }

    slide.style.transform = `translateX(-${index * 100}%)`;
});

// clica no primeiro botão de próximo, o da Filmes de Ação <<<


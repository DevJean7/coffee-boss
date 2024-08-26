let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-images img');
    const thumbnails = document.querySelectorAll('.thumbnail');
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }
    const offset = -slideIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;

    // oculta todas as imagens
    thumbnails.forEach(thumb => thumb.classList.remove('active'));

    // mostra a imagem ativa
    const activeThumbnail = document.getElementById(`thumb-${slideIndex}`);
    if (activeThumbnail) {
        activeThumbnail.classList.add('active');
    }
}

function moveSlide(n) {
    showSlide(slideIndex + n);
}

// Inicia o carrossel
showSlide(slideIndex);

// Optional: passa as imagens altomaticamente de 5 em 5 segundos
setInterval(() => {
    moveSlide(1);
}, 5000);

const cartButton = document.getElementById('cart-button');
const cartPopup = document.getElementById('cart-popup');

cartButton.addEventListener('click', () => {
    cartPopup.style.display = (cartPopup.style.display === 'block') ? 'none' : 'block';
});

window.addEventListener('click', (event) => {
    if (event.target !== profileButton && !profilePopup.contains(event.target)) {
        profilePopup.style.display = 'none';
    }
    if (event.target !== cartButton && !cartPopup.contains(event.target)) {
        cartPopup.style.display = 'none';
    }
});
function voltarParaPaginaPrincipal() {
    // Redireciona para a página principal; ajuste o URL conforme necessário
    window.location.href = 'cardapio.html';
}
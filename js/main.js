window.addEventListener('load', () => {
    setTimeout(() => {
        const introElement = document.querySelector('.star-wars-intro');
        const headerElement = document.querySelector('header');

        if (introElement && headerElement) {
            introElement.style.display = 'none'; // Esconde a introdução após a animação
            headerElement.style.display = 'block';  // Exibe o conteúdo principal
        }
    }, 13000); // Tempo de animação (13 segundos)
});

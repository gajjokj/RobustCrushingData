function loadHeader(headerNumber) {
  const contentDiv = document.getElementById('header-content');

  // Limpa o conteúdo anterior
  contentDiv.innerHTML = '';

  // Caminho base das imagens
  const basePath = './assets/imagens/';

  // Cria a imagem principal do Header
  const headerImage = document.createElement('img');
  headerImage.src = `${basePath}header${headerNumber}.jpg`;
  headerImage.alt = `Header ${headerNumber}`;
  headerImage.classList.add('header-image');

  // Cria os perfis correspondentes
  const profileContainer = document.createElement('div');
  profileContainer.classList.add('profile-container');

  const profileWhite = document.createElement('img');
  profileWhite.src = `${basePath}Ve7s_perfil${headerNumber}_branco.png`;
  profileWhite.alt = `Perfil ${headerNumber} Branco`;
  profileWhite.classList.add('profile-image');

  const profileBlack = document.createElement('img');
  profileBlack.src = `${basePath}Ve7s_perfil${headerNumber}_preto.png`;
  profileBlack.alt = `Perfil ${headerNumber} Preto`;
  profileBlack.classList.add('profile-image');

  // Função para exibir a imagem em tela cheia
  function showFullScreenImage(imageSrc) {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    const enlargedImage = document.createElement('img');
    enlargedImage.src = imageSrc;
    enlargedImage.alt = 'Imagem Ampliada';
    enlargedImage.classList.add('enlarged-image');

    // Fecha a imagem ao clicar na overlay
    overlay.addEventListener('click', function () {
      overlay.remove();
    });

    overlay.appendChild(enlargedImage);
    document.body.appendChild(overlay);
  }

  // Adiciona os eventos de clique para ampliar as imagens
  profileWhite.addEventListener('click', function () {
    showFullScreenImage(profileWhite.src);
  });

  profileBlack.addEventListener('click', function () {
    showFullScreenImage(profileBlack.src);
  });

  // Adiciona os elementos na página
  profileContainer.appendChild(profileWhite);
  profileContainer.appendChild(profileBlack);
  contentDiv.appendChild(headerImage);
  contentDiv.appendChild(profileContainer);
}

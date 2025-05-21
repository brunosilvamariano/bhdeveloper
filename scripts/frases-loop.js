 // Lista de frases que serão exibidas rotativamente
  const frases = [
    "Transformamos ideias em soluções criativas.",
    "Seu projeto digital começa aqui.",
    "Design moderno, funcional e eficaz.",
    "Desenvolvimento com foco em resultado.",
    "Soluções sob medida para cada cliente.",
    "Inovação que conecta sua marca ao mundo."
  ];

  let fraseIndex = 0;
  const fraseElemento = document.getElementById('frase-slide');

  // Função para trocar frases com animação
  function trocarFrase() {
    fraseElemento.classList.remove('animando'); // remove classe para reiniciar a animação
    void fraseElemento.offsetWidth; // forçar reflow para reiniciar a animação
    fraseElemento.textContent = frases[fraseIndex];
    fraseElemento.classList.add('animando');
    fraseIndex = (fraseIndex + 1) % frases.length;
  }

  // Troca inicial
  trocarFrase();

  // Troca a cada 4 segundos
  setInterval(trocarFrase, 4000);
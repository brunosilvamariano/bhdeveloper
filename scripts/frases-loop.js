document.addEventListener("DOMContentLoaded", function () {
    const frases = [
      { texto: "Soluções Web sob medida", icone: "bi-gear-fill" },
      { texto: "Experiência do usuário em primeiro lugar", icone: "bi-emoji-smile" },
      { texto: "Design moderno e responsivo", icone: "bi-phone-landscape" },
      { texto: "Back-end seguro e escalável", icone: "bi-shield-lock" },
      { texto: "Integração com APIs", icone: "bi-diagram-3" },
      { texto: "Automação para seu negócio", icone: "bi-robot" }
    ];
  
    const fraseEl = document.getElementById("frase-slide");
    const iconeEl = document.getElementById("icone-frase");
    let index = 0;
  
    function trocarFrase() {
      // Remove a animação atual
      fraseEl.classList.remove("frase-ativa");
      setTimeout(() => {
        const { texto, icone } = frases[index];
        fraseEl.textContent = texto;
        iconeEl.className = `bi ${icone} me-3 fs-4`;
        fraseEl.classList.add("frase-ativa");
        index = (index + 1) % frases.length;
      }, 300); // espera animação de saída
    }
  
    trocarFrase();
    setInterval(trocarFrase, 4000); // troca a cada 4 segundos
  });
  
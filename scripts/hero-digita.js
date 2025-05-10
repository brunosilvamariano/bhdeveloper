document.addEventListener("DOMContentLoaded", function () {
  const text = "HB Developers";
  const element = document.getElementById("typewriter");
  let index = 0;
  let isDeleting = false;

  function type() {
    if (!isDeleting) {
      element.textContent = text.substring(0, index + 1);
      index++;

      if (index === text.length) {
        isDeleting = true;
        setTimeout(type, 1500); // Pausa após digitar tudo
        return;
      }
    } else {
      element.textContent = text.substring(0, index - 1);
      index--;

      if (index === 0) {
        isDeleting = false;
        setTimeout(type, 1000); // Pausa antes de recomeçar
        return;
      }
    }

    // Velocidade ajustada
    setTimeout(type, isDeleting ? 80 : 150);
  }

  type(); // Inicia o efeito
});

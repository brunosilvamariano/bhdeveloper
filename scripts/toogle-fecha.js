document.addEventListener('DOMContentLoaded', () => {
    const offcanvasEl = document.getElementById('offcanvasMenu');
    const offcanvasInstance = bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);
  
    // Todos os links dentro do offcanvas que apontam para seções (com href começando com "#")
    const links = document.querySelectorAll('#offcanvasMenu a[href^="#"]');
  
    links.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
  
        // Fecha o offcanvas
        offcanvasInstance.hide();
  
        // Aguarda o fechamento do offcanvas para rolar suavemente
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          setTimeout(() => {
            target.scrollIntoView({ behavior: 'smooth' });
          }, 300); // Espera a animação de fechamento
        }
      });
    });
  });
  
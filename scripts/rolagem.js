// Calcula a altura exata do cabeçalho e adiciona uma margem de segurança
function getHeaderOffset() {
    const header = document.getElementById('header-principal');
    return header ? header.offsetHeight + 20 : 80; // Adiciona 20px extras por segurança
}

// Rolagem suave com compensação
function scrollToSection(targetId) {
    const target = document.getElementById(targetId);
    if (!target) return;

    const offset = target.offsetTop - getHeaderOffset();

    window.scrollTo({
        top: offset,
        behavior: 'smooth'
    });
}

// Aplica em todos os links com âncoras
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            scrollToSection(targetId);

            // Fecha o menu lateral, se aberto
            const offcanvasEl = document.querySelector('.offcanvas.show');
            if (offcanvasEl) {
                const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
                if (offcanvas) offcanvas.hide();
            }
        }
    });
});
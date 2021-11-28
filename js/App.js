
//função para mover o scroll da pagina através dos links href.
function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.ul-nav a[href^="#"]')
    const header = document.querySelector('.cabecalho');
    const btnVoltar = document.createElement('button');
    header.appendChild(btnVoltar);

    if (linksInternos) {
        function scrolToSection(event) {
            event.preventDefault();
            const href = event.currentTarget.getAttribute('href');
            const section = document.querySelector(href)
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        }
        linksInternos.forEach((link) => {
            link.addEventListener('click', scrolToSection)
        })

        // botão scroll voltar para o topo.
        btnVoltar.classList.toggle('btn-scroll')
        btnVoltar.innerText = 'Voltar'
        window.addEventListener("scroll", function () {
            btnVoltar.classList.toggle("active", window.scrollY > 500);
        });
        if (btnVoltar) {
            btnVoltar.addEventListener("click", () => {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            });
        }
    }
}
initScrollSuave();
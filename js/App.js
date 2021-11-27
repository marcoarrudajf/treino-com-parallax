
//função para mover o scroll da pagina através dos links href.
function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.ul-nav a[href^="#"]')
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
    }
}
initScrollSuave();
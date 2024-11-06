const barra_lateral = document.getElementById('barra_lateral')
const sidebar = document.getElementsByClassName('nav_sections')[0]

barra_lateral.addEventListener('click', () => {
    if (sidebar.className == 'nav_sections') {
        sidebar.classList.remove('nav_sections')
        sidebar.classList.add('nav_sections-active')
    } else {
        sidebar.classList.remove('nav_sections-active')
        sidebar.classList.add('nav_sections')
    }
})

window.addEventListener('click', (event) => {
    if (sidebar.className == 'nav_sections-active') {
        if (!sidebar.contains(event.target) && !barra_lateral.contains(event.target)) {
            sidebar.classList.remove('nav_sections-active')
            sidebar.classList.add('nav_sections')
        }
    }
})
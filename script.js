// esta ess Lógica para el Cambio de Tema Claro/Oscuro (Interactividad obligatoria)

// para mi ffunción para alternar la clase 'dark-mode' en el body
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Aquí Cree un Botón de Tema y Añadi al Header
document.addEventListener('DOMContentLoaded', () => {
    // Crear el botón
    const themeButton = document.createElement('button');
    themeButton.textContent = 'Toggle Dark/Light Mode';
    themeButton.id = 'theme-toggle-btn';

    themeButton.addEventListener('click', toggleDarkMode);

    // Encontrar el header y añadir el botón
    const header = document.querySelector('header');
    if (header) {
        // Estilo simple para que se vea bien perrón
        themeButton.style.padding = '10px 15px';
        themeButton.style.marginTop = '20px';
        themeButton.style.cursor = 'pointer';
        themeButton.style.backgroundColor = 'var(--color-primario)';
        themeButton.style.color = 'white';
        themeButton.style.border = 'none';
        themeButton.style.borderRadius = '5px';
        
        header.appendChild(themeButton);
    }

    const modelViewer = document.querySelector('model-viewer');
    if (modelViewer) {
        console.log('Modelo 3D cargado correctamente papus gg.');
    }
});
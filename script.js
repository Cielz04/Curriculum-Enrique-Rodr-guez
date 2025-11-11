// --- MFE #1: Información de Contacto ---
const contactMFE = `
    <section class="mfe-section">
        <h2>Información de Contacto</h2>
        <ul>
            <li><strong>Email:</strong> enrique.rodriguez246966@potros.itson.edu.mx </li>
            <li><strong>Teléfono:</strong> +52 6441353650</li>
            <li><strong>LinkedIn:</strong> linkedin.com/in/cielz04</li>
            <li><strong>GitHub:</strong> github.com/cielz04 </li>
            <li><strong>Ubicación:</strong> Obregón, Sonora, México</li>
        </ul>
    </section>
`;

// --- MFE #2: Perfil Profesional ---
const profileMFE = `
    <section class="mfe-section">
        <h2>Perfil Profesional</h2>
        <p>
            Desarrollador de software proactivo y orientado a resultados con más de 2 años de experiencia en
            el diseño, desarrollo y despliegue de aplicaciones web escalables. Experto en JavaScript, React
            y Node.js, con un fuerte enfoque en la creación de interfaces de usuario intuitivas
            y en la optimización del rendimiento. Actualmente trabajando en el area de IA.
        </p>
    </section>
`;

// --- MFE #3: Experiencia Laboral ---
const experienceMFE = `
    <section class="mfe-section">
        <h2>Experiencia Laboral</h2>
        
        <div class="entry">
            <h3>Desarrollador Backend</h3>
            <div class="sub-header">
                Synaptical Core | Obregón
                <span class="date"> Septiembre 2025 - Presente</span>
            </div>
            <ul>
                <li>Trabajé proactivamente en la implementación de diversos workflows con IA</li>
                <li>Agilización y automatización de procesos con IA</li>
                <li>Creé diversos sitios webs adoptando labores fullStack</li>
            </ul>
        </div>
        
    </section>
`;

// --- MFE #4: Educación ---
const educationMFE = `
    <section class="mfe-section">
        <h2>Educación</h2>
        
        <div class="entry">
            <h3>Ingeniería en Software</h3>
            <div class="sub-header">
                ITSON| Obregón
                <span class="date">2022 - 2026</span>
            </div>
        </div>
        
        <div class="entry">
            <h3>Certificación en Desarrollo Web Full-Stack</h3>
            <div class="sub-header">
                Plataforma de Cursos Online
                <span class="date">2024</span>
            </div>
        </div>
    </section>
`;

// --- MFE #5: Habilidades ---
const skillsMFE = `
    <section class="mfe-section">
        <h2>Habilidades Técnicas</h2>
        <ul class="skills-list">
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>HTML5</li>
            <li>CSS3 (Flexbox, Grid)</li>
            <li>Git</li>
            <li>SQL (PostgreSQL)</li>
            <li>MongoDB</li>
            <li>Docker</li>
            <li>Metodologías Ágiles (Scrum)</li>
        </ul>
    </section>
`;

// --- MFE #6: Idiomas (Opcional) ---
const languagesMFE = `
    <section class="mfe-section">
        <h2>Idiomas</h2>
        <ul class="skills-list">
            <li>Español (Nativo)</li>
            <li>Inglés (Avanzado - C1)</li>
        </ul>
    </section>
`;


// --- Función de Carga ---
function loadMFE(elementId, content) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = content;
    } else {
        console.warn('El contenedor del MFE no fue encontrado:', elementId);
    }
}

// --- Ejecución de la Carga ---
loadMFE('contact-mfe', contactMFE);
loadMFE('profile-mfe', profileMFE);
loadMFE('experience-mfe', experienceMFE);
loadMFE('education-mfe', educationMFE);
loadMFE('skills-mfe', skillsMFE);
loadMFE('languages-mfe', languagesMFE);
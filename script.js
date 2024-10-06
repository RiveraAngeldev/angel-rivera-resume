document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const langToggle = document.getElementById("lang-toggle");
    
    darkModeToggle.addEventListener("change", () => {
        document.body.classList.toggle("dark-mode");
    });

    langToggle.addEventListener("change", () => {
        const isEnglish = langToggle.checked;

        if (isEnglish) {
            document.getElementById("summary-title").textContent = "Professional Summary";
            document.getElementById("summary").textContent = "Frontend developer with one year of experience in HTML, CSS, and JavaScript, focused on creating attractive and functional web interfaces. In addition to my frontend experience, my studies in C++ have strengthened my programming skills, allowing me to tackle complex problems and develop more efficient solutions. Although I temporarily paused my frontend training due to my C++ studies at university, I am ready to refocus and continue growing in this field. I am seeking a Co-op opportunity where I can apply my design and web development skills, while learning from experienced professionals in a collaborative environment.";
            document.getElementById("education-title").textContent = "Education";
            document.querySelector("#education-section p:nth-of-type(1)").textContent = "University of Puerto Rico - Software Engineer (2023 - Present)";
            document.querySelector("#education-section p:nth-of-type(2)").textContent = "Self-Study in Programming (2019 - Present)";
            document.getElementById("experience-title").textContent = "Experience";
            document.querySelector("#experience-section h3:nth-of-type(1)").textContent = "Voltorb Switch Project";
            document.querySelector("#experience-section p:nth-of-type(1)").textContent = "Developer, University of Puerto Rico (September 2024 - October 2024)";
            document.querySelector("#experience-section ul:nth-of-type(1)").innerHTML = `
                <li>Collaborated in the creation of a video game using OpenFrameworks in C++.</li>
                <li>Implemented game logic and optimized animation engine performance.</li>
            `;
            document.querySelector("#experience-section h3:nth-of-type(2)").textContent = "Space Invaders Project";
            document.querySelector("#experience-section p:nth-of-type(2)").textContent = "Personal Project (August 2024 - September 2024)";
            document.querySelector("#experience-section ul:nth-of-type(2)").innerHTML = `
                <li>Recreated the famous Space Invaders game in Python.</li>
                <li>Utilized object-oriented programming and libraries such as Pygame, Random, and Sys to structure the project.</li>
            `;
            document.querySelector("#experience-section h3:nth-of-type(3)").textContent = "To-Do List Project";
            document.querySelector("#experience-section p:nth-of-type(3)").textContent = "Personal Project (July 2024 - August 2024)";
            document.querySelector("#experience-section ul:nth-of-type(3)").innerHTML = `
                <li>Developed a task manager that allows users to add, remove, and mark tasks as completed.</li>
                <li>Used HTML, CSS, and JavaScript to create an interactive and user-friendly application.</li>
                <li>Implemented features like browser storage to maintain tasks between sessions.</li>
            `;
            document.getElementById("skills-title").textContent = "Technical Skills";
            document.getElementById("skills").innerHTML = `
                <li>Git</li>
                <li>GitHub</li>
                <li>Python</li>
                <li>C++</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Web Development</li>
                <li>Game Development</li>
                <li>Fluency in Spanish and English</li>
            `;
            document.getElementById("references-title").textContent = "References";
            document.querySelector("#references-section p").textContent = "Available upon request.";
        } else {
            document.getElementById("summary-title").textContent = "Resumen Profesional";
            document.getElementById("summary").textContent = "Desarrollador frontend con un año de experiencia en HTML, CSS y JavaScript, enfocado en crear interfaces web atractivas y funcionales. Además de mi experiencia en desarrollo frontend, mis estudios en C++ han fortalecido mis habilidades en programación, lo que me permite abordar problemas complejos y desarrollar soluciones más eficientes. Aunque pausé temporalmente mi formación en frontend debido a mis estudios de C++ en la universidad, estoy listo para retomar mi enfoque y seguir creciendo en este campo. Busco una oportunidad de Co-op donde pueda aplicar mis habilidades de diseño y desarrollo web, además de aprender de profesionales experimentados en un entorno colaborativo.";
            document.getElementById("education-title").textContent = "Educación";
            document.querySelector("#education-section p:nth-of-type(1)").textContent = "Universidad de Puerto Rico - Ingeniero de Software (2023 - Presente)";
            document.querySelector("#education-section p:nth-of-type(2)").textContent = "Estudios Autodidactas en Programación (2019 - Actualidad)";
            document.getElementById("experience-title").textContent = "Experiencia";
            document.querySelector("#experience-section h3:nth-of-type(1)").textContent = "Proyecto Voltorb Switch";
            document.querySelector("#experience-section p:nth-of-type(1)").textContent = "Desarrollador, Universidad de Puerto Rico (Septiembre 2024 - Octubre 2024)";
            document.querySelector("#experience-section ul:nth-of-type(1)").innerHTML = `
                <li>Colaboré en la creación de un videojuego utilizando OpenFrameworks en C++.</li>
                <li>Implementé la lógica del juego y optimicé el rendimiento del motor de animación.</li>
            `;
            document.querySelector("#experience-section h3:nth-of-type(2)").textContent = "Proyecto Space Invaders";
            document.querySelector("#experience-section p:nth-of-type(2)").textContent = "Proyecto Personal (Agosto 2024 - Septiembre 2024)";
            document.querySelector("#experience-section ul:nth-of-type(2)").innerHTML = `
                <li>Recreé el famoso juego de Space Invaders en Python.</li>
                <li>Utilicé programación orientada a objetos y bibliotecas como Pygame, Random y Sys para estructurar el proyecto.</li>
            `;
            document.querySelector("#experience-section h3:nth-of-type(3)").textContent = "Proyecto To-Do List";
            document.querySelector("#experience-section p:nth-of-type(3)").textContent = "Proyecto Personal (Julio 2024 - Agosto 2024)";
            document.querySelector("#experience-section ul:nth-of-type(3)").innerHTML = `
                <li>Desarrollé un gestor de tareas que permite a los usuarios añadir, eliminar y marcar tareas como completadas.</li>
                <li>Utilicé HTML, CSS y JavaScript para crear una aplicación interactiva y fácil de usar.</li>
                <li>Implementé características como almacenamiento en el navegador para mantener las tareas entre sesiones.</li>
            `;
            document.getElementById("skills-title").textContent = "Habilidades Técnicas";
            document.getElementById("skills").innerHTML = `
                <li>Git</li>
                <li>GitHub</li>
                <li>Python</li>
                <li>C++</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Desarrollo Web</li>
                <li>Desarrollo de Videojuegos</li>
                <li>Dominio del Español e Inglés</li>
            `;
            document.getElementById("references-title").textContent = "Referencias";
            document.querySelector("#references-section p").textContent = "Disponibles de ser requeridas.";
        }
    });
});

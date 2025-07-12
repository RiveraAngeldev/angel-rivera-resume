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
      document.getElementById("summary").textContent =
        "Frontend developer with one year of experience in HTML, CSS, and JavaScript, focused on building modern and optimized interfaces. In addition to my frontend experience, my C++ studies have strengthened my programming skills, allowing me to tackle complex problems and develop efficient solutions. I’m seeking a Co-op opportunity where I can apply my web design and development skills while learning from experienced professionals in a collaborative environment.";
      
      document.getElementById("education-title").textContent = "Education";
      document.querySelector("#education-section p:nth-of-type(1)").textContent = "UPRM - Software Engineering (2023 - 2025)";
      document.querySelector("#education-section p:nth-of-type(2)").textContent = "UAGM - Computer Engineering (2025 - Present)";
      document.querySelector("#education-section p:nth-of-type(3)").textContent = "Self-Taught Programming Studies (2019 - Present)";

      document.getElementById("experience-title").textContent = "Experience";

      document.querySelector("#experience-section h3:nth-of-type(1)").textContent = "To-Do List App";
      document.querySelector("#experience-section p:nth-of-type(1)").textContent = "Personal Project (July 2024 - August 2024)";
      document.querySelector("#experience-section ul:nth-of-type(1)").innerHTML = `
        <li>Designed and developed an interactive task manager web app using HTML, CSS, and JavaScript.</li>
        <li>Implemented add, delete, and complete task functionality.</li>
        <li>Integrated local storage to keep data persistent between sessions.</li>
      `;

      document.querySelector("#experience-section h3:nth-of-type(2)").textContent = "Ukiku Web Clone";
      document.querySelector("#experience-section p:nth-of-type(2)").textContent = "Personal Project (August 2024 - September 2024)";
      document.querySelector("#experience-section ul:nth-of-type(2)").innerHTML = `
        <li>Recreated the core design and experience of the Ukiku app, focusing on user experience and responsiveness.</li>
        <li>Built using HTML, CSS, and JavaScript with modular design.</li>
        <li>Simulated SPA behavior for a dynamic and seamless user experience.</li>
      `;

      document.querySelector("#experience-section h3:nth-of-type(3)").textContent = "Zelda Fan Game (C++)";
      document.querySelector("#experience-section p:nth-of-type(3)").textContent = "Personal Project (August 2024 - January 2025)";
      document.querySelector("#experience-section ul:nth-of-type(3)").innerHTML = `
        <li>Developed a 2D game inspired by Zelda using C++ and the OpenFrameworks library.</li>
        <li>Implemented movement, combat, scoring system, and sound integration.</li>
        <li>Reinforced object-oriented programming, game logic, and animation rendering.</li>
      `;

      document.getElementById("skills-title").textContent = "Technical Skills";
      document.getElementById("skills").innerHTML = `
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Git / GitHub</li>
        <li>C++</li>
        <li>Python</li>
        <li>Web Development</li>
        <li>Game Development</li>
        <li>Fluent in Spanish and English</li>
      `;

      document.getElementById("references-title").textContent = "References";
      document.querySelector("#references-section p").textContent = "Available upon request.";

    } else {
      document.getElementById("summary-title").textContent = "Resumen Profesional";
      document.getElementById("summary").textContent =
        "Desarrollador frontend con un año de experiencia en HTML, CSS y JavaScript, enfocado en contribuir al desarrollo de interfaces modernas y optimizadas. Además de mi experiencia en desarrollo frontend, mis estudios en C++ han fortalecido mis habilidades en programación, lo que me permite abordar problemas complejos y desarrollar soluciones más eficientes. Busco una oportunidad de Co-op donde pueda aplicar mis habilidades de diseño y desarrollo web, además de aprender de profesionales experimentados en un entorno colaborativo.";

      document.getElementById("education-title").textContent = "Educación";
      document.querySelector("#education-section p:nth-of-type(1)").textContent = "UPRM - Ingeniería en Software (2023 - 2025)";
      document.querySelector("#education-section p:nth-of-type(2)").textContent = "UAGM - Ingeniería en Computadoras (2025 - Presente)";
      document.querySelector("#education-section p:nth-of-type(3)").textContent = "Estudios Autodidactas en Programación (2019 - Actualidad)";

      document.getElementById("experience-title").textContent = "Experiencia";

      document.querySelector("#experience-section h3:nth-of-type(1)").textContent = "To-Do List App";
      document.querySelector("#experience-section p:nth-of-type(1)").textContent = "Proyecto Personal (Julio 2024 - Agosto 2024)";
      document.querySelector("#experience-section ul:nth-of-type(1)").innerHTML = `
        <li>Diseñé y desarrollé una aplicación web interactiva para la gestión de tareas usando HTML, CSS y JavaScript.</li>
        <li>Implementé funcionalidades como agregar, eliminar y marcar tareas como completadas.</li>
        <li>Incluí almacenamiento local en el navegador para mantener datos persistentes entre sesiones.</li>
      `;

      document.querySelector("#experience-section h3:nth-of-type(2)").textContent = "Clon de Ukiku Web";
      document.querySelector("#experience-section p:nth-of-type(2)").textContent = "Proyecto Personal (Agosto 2024 - Septiembre 2024)";
      document.querySelector("#experience-section ul:nth-of-type(2)").innerHTML = `
        <li>Recreé el diseño y funcionalidades principales de la app Ukiku, enfocándome en experiencia de usuario y navegación fluida.</li>
        <li>Usé HTML, CSS y JavaScript para construir una interfaz modular y responsiva.</li>
        <li>Incorporé estructura visual tipo SPA para simular cambios dinámicos de contenido sin recargar la página.</li>
      `;

      document.querySelector("#experience-section h3:nth-of-type(3)").textContent = "Zelda Fan Game (C++)";
      document.querySelector("#experience-section p:nth-of-type(3)").textContent = "Proyecto Personal (Agosto 2024 - Enero 2025)";
      document.querySelector("#experience-section ul:nth-of-type(3)").innerHTML = `
        <li>Desarrollé un videojuego 2D inspirado en Zelda utilizando C++ y la librería OpenFrameworks.</li>
        <li>Incluí mecánicas de movimiento, combate, sonido y sistema de puntajes.</li>
        <li>Fomenté el aprendizaje de programación orientada a objetos, estructuras lógicas y renderizado gráfico.</li>
      `;

      document.getElementById("skills-title").textContent = "Habilidades Técnicas";
      document.getElementById("skills").innerHTML = `
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Git / GitHub</li>
        <li>C++</li>
        <li>Python</li>
        <li>Desarrollo Web</li>
        <li>Desarrollo de Videojuegos</li>
        <li>Dominio del Español e Inglés</li>
      `;

      document.getElementById("references-title").textContent = "Referencias";
      document.querySelector("#references-section p").textContent = "Disponibles de ser requeridas.";
    }
  });
});

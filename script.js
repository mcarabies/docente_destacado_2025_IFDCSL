document.addEventListener('DOMContentLoaded', () => {

    // --- DATOS DE LA APLICACIÓN (VERSIÓN FINAL Y CONSOLIDADA) ---
    const teacherVotes = { "María Elena Bronzi": 55, "María Gabriela Funcia": 41, "Alberto Alejandro Argüello Moyano": 21, "Natali Ivana Carranza": 17, "María Violeta Zanglá Urteaga": 16, "Guillermo Heider": 15, "María Fabiana Barroso": 14, "Hugo Rolando Baigorria": 13, "Ana Magdalena Marín": 13, "Kathrin Gisela Schwender": 13, "Maria Guadalupe Ayala": 12, "Mariano Ezequiel Suarez": 12, "María Belén Hereñú": 12, "Cándida Elena Scheurer": 10, "Rodolfo Gustavo Sarmiento Maldonado": 9, "María Renata Galliano": 8, "María Lourdes Marchesi": 8, "Matias Lucero": 8, "Ariel Hiram Triulzi": 8, "Patricia Alejandra De Miguel Casas": 7, "Luciana Gloria Menendez Zoppi": 7, "Miguel Angel Arrieta Roja": 6, "Mariana Edith Alaniz Zavala": 6, "Valeria Soledad Funes": 6, "Tomás Matías Argüello": 6, "Claudio Andres Baigorria": 5, "Mariela Beatriz Medina": 5, "Vanessa Carla Videla": 5, "Facundo Gustavo Corvalan Araujo": 5, "Carina Gabriela Rosa Perez Dib": 5, "Enrique Ariel Guardia Avila": 4, "Facundo Exequiel Morales Suárez": 4, "Jesica Judith Carniato": 4, "Maria de los Ángeles Miranda": 4, "Laura Milagro Asensio": 4, "Rosa Adela Abraham": 4, "María Virginia Paez": 4, "Estefanía Natalia Tonetti": 4, "Pablo Martín Coria": 3, "Gabriela Cecilia Gimenez": 3, "Emmanuel Ginestra": 3, "Juan Jose Bertolino": 3, "Maria Paulina Calderón": 3, "Oscar Enrique Córdoba Mascali": 3, "Vanina Victoria Dalto": 3, "Jose Carmelo Celi Quiroga": 3, "Natalia Agustina Puigdellibol": 3, "Gisela Monica Bustos": 3, "Ivana Vanesa Ibaceta": 2, "Maria Rita Soledad Guevara": 2, "Verónica Ha Vogt": 2, "Giselle Cecilia Salazar Acosta": 2, "Erica Carla Wohning": 2, "Nadia Rosana Tolaba Franasik": 2, "Nadia Nátali Robledo": 2, "Matias Adolfo Ponce": 2, "Ana Laura Barraza": 2, "Adriano Cavallin": 2, "José Luis Modón": 2, "Virginia Leonor Miranda": 2, "Gisela Noelia Isaguirre": 2, "Raúl Alberto Venezia": 2, "Vanesa Ivana Franklin": 2, "Marisa Elizabeth Muñoz Zanon": 1, "Paula Judith Mailhos": 1, "Laura Griboff": 1, "Brenda Debora Triulzi": 1, "Pamela Silvina Cruz": 1, "María Eugenia Canavesi": 1, "Graciela Lorena Kasián": 1, "Patricia Judith Bracco": 1, "María Leonor Paez Logioia": 1, "Diego Hernan Valdez": 1, "Vilma Isabel Freire": 1, "Lucas Lazaro": 1, "Yanina Zoraida Abdelahad": 1, "María José Lucero Sosa": 1, "Stella Maris Kozur": 1, "Marta Elda Aguilar Muñoz": 1, "Omar Hugo Samper": 1, "Débora Malajovich": 1, "Ana Julieta Capriolo": 1, "Miguel Ángel Andrada": 1, "Gabriela Yanina Micheli": 1, "Marina Soledad Ojeda": 1, "Ana Sara Piccinini": 1, "Gabriel Ernesto Arias": 1, "Eliana Belén Camargo": 1, "Natalia Paula Martín": 1, "Francisco Almena García Ortega": 1, "Scriboni Diego Alberto": 1, "Analía Andrea Ortiz": 1, "Betiana Rosa Analía Quevedo Suárez": 1, "Ana Miriam Arrieta": 1, "Vanesa Soledad Salinas": 1, "Elina Lucrecia Leonhart": 1 };
    const teacherCharacteristics = { "Claudio Andres Baigorria": ["Excelente docentes! Los destacos por su comprensión y su forma de enseñar", "Amable-comprensivo-directo-entendible-flexible", "Sus clases son muy dinámicas y claras", "Excelente predisposición. Muy buenas clases y explicaciones", "Un profe de 10"], "Rodolfo Gustavo Sarmiento Maldonado": ["Excelente docentes! Los destacos por su comprensión y su forma de enseñar", "la forma de explicar y la paciencia", "Su compromiso y dedicación a la hora de dar las clases", "por su dedicación", "Su carisma", "Su dedicación y compromiso", "Su dedicación", "la forma de explicar", "comprensión"], "Miguel Angel Arrieta Roja": ["creo que es un `profe con empatia y humildad ", "Excelente profesor. Muy dedicado a su trabajo", "Predisposición y acompañamiento", "Por su dedicación y compromiso en su rol", "Su amabilidad", "empatia"], "Mariana Edith Alaniz Zavala": ["Considero que se destaca siempre en su profesión como docente siempre está acompañando en todo momento y brindando sus conocimientos ", "Su acompañamiento y compromiso", "Amabilidad, calidez humana, empatia", "Acompañamiento, dedicación y amor por lo que hace.", "Su empatía, dedicación y compromiso", "Su dedicación, compromiso y empatia"], "María Elena Bronzi": ["Su amabilidad y acercamiento hacia los alumnos  y forma de enseñar.", "Dispuesta, responsable, comprensible, en cada clase demuestra su pasión por la enseñanza, explica de manera espectacular y con una hermosa energía. Un ejemplo a seguir!", "Su entrega, su calidez, y su profesionalismo", "Su profesionalismo y su calidez humana.", "Su calidez humana y su profesionalismo.", "Me encanta su forma de dar las clases y su amabilidad", "Su profesionalismo y su calidez humana", "su calidez humana, su profesionalidad", "la forma en la que explica y su amabilidad.", "Su pasión y su profesionalismo", "Su profesionalismo y su carisma", "Su forma de explicar y su calidez humana", "su claridad para explicar y su calidez humana", "su profesionalismo", "Su carisma y su profesionalismo", "Su profesionalismo", "su profesionalismo", "su profesionalismo", "su profesionalismo", "Su profesionalismo y su compromiso", "su profesionalismo y su compromiso", "Su claridad para explicar", "Su profesionalismo y su caridez", "Su profesionalismo", "su profesionalismo", "su profesionalismo", "Su profesionalismo y su calidad humana", "Su calidez y su profesionalismo", "Su profesionalismo y su forma de ser", "su profesionalismo y su forma de ser", "Su profesionalismo y su forma de ser", "su profesionalismo y su forma de ser", "su profesionalismo", "su profesionalismo", "su claridad al explicar", "su profesionalismo", "Su profesionalismo y su caldez humana", "su profesionalismo y su calidez humana", "su profesionalismo y su calidez humana", "su profesionalismo", "su profesionalismo", "su calidez humana y su profesionalismo", "Su profesionalismo y su calidez humana", "su profesionalismo y su calidez humana", "Su profesionalismo y su calidad humana", "Su calidez y su profesionalismo", "Su profesionalismo y su carisma", "su profesionalismo y su carisma", "su profesionalismo", "Su calidez humana y su profesionalismo", "su calidez humana y su profesionalismo", "su calidez humana y su profesionalismo", "Su profesionalismo y su claridad al explicar", "Su claridad para explicar", "Su profesionalismo y su carisma"], "Alberto Alejandro Argüello Moyano": ["Profe comprometido y excelente dando clases", "Por su compromiso y dedicación", "Su compromiso", "Su compromiso y su dedicación", "Su compromiso y su dedicación", "Su compromiso y su dedicación", "Su compromiso y su dedicación", "Su compromiso y su dedicación", "Su compromiso y su dedicación", "Su compromiso y su dedicación", "Su compromiso y su dedicación", "Su compromiso y su dedicación", "Su compromiso y su dedicación", "Su compromiso y su dedicación", "Su compromiso y su dedicación", "Su compromiso y su dedicación", "Su compromiso y su dedicación", "Su compromiso y su dedicación", "Su compromiso y su dedicación", "Su compromiso y su dedicación", "Su compromiso y su dedicación"], "Ana Magdalena Marín": ["Es una docente sumamente comprometida no solo con el área que enseña si no que se compromete con los estudiantes, es muy calida y empatica", "Su carisma y su forma de explicar", "Su compromiso", "Su compromiso", "Su dedicación", "su compromiso", "su compromiso", "Su compromiso", "Su dedicación y compromiso", "su dedicación y compromiso", "Su compromiso", "su compromiso", "su compromiso"], "Valeria Soledad Funes": ["su compromiso y su dedicación", "Su compromiso y su dedicación", "Su compromiso y su dedicación", "Su compromiso y su dedicación", "Su compromiso y su dedicación", "Su compromiso y su dedicación"], "Patricia Alejandra De Miguel Casas": ["Su compromiso y dedicación", "Su compromiso y dedicación", "Su compromiso y dedicación", "su compromiso y dedicación", "su compromiso y dedicación", "su compromiso y dedicación", "su compromiso y dedicación"], "Natali Ivana Carranza": ["Su predisposición", "Su forma de explicar", "su forma de explicar", "Su carisma", "su carisma", "su carisma", "su carisma", "su carisma", "su carisma", "su carisma", "su carisma", "su carisma", "su carisma", "su carisma", "su carisma", "su carisma", "su carisma"], "Pablo Martín Coria": ["Su dedicación y compromiso", "su dedicación y compromiso", "Su compromiso y dedicación"], "Maria Guadalupe Ayala": ["Su forma de explicar", "clara ,  precisa, inspira ,  transmite transparencia , objetividad ", "clara ,  precisa, inspira ,  transmite transparencia , objetividad ", "clara ,  precisa, inspira ,  transmite transparencia , objetividad ", "clara ,  precisa, inspira ,  transmite transparencia , objetividad ", "clara ,  precisa, inspira ,  transmite transparencia , objetividad ", "clara ,  precisa, inspira ,  transmite transparencia , objetividad ", "clara ,  precisa, inspira ,  transmite transparencia , objetividad ", "clara ,  precisa, inspira ,  transmite transparencia , objetividad ", "clara ,  precisa, inspira ,  transmite transparencia , objetividad ", "clara ,  precisa, inspira ,  transmite transparencia , objetividad ", "clara ,  precisa, inspira ,  transmite transparencia , objetividad "], "Kathrin Gisela Schwender": ["Su claridad al explicar", "Su claridad al explicar", "Su claridad al explicar", "su claridad al explicar", "su claridad al explicar", "su claridad al explicar", "su claridad al explicar", "su claridad al explicar", "su claridad al explicar", "su claridad al explicar", "su claridad al explicar", "su claridad al explicar", "Su claridad para explicar"], "Ivana Vanesa Ibaceta": ["Su claridad al explicar", "su claridad al explicar"], "María Violeta Zanglá Urteaga": ["La claridad para explicar", "su claridad para explicar", "su claridad para explicar", "su claridad para explicar", "su claridad para explicar", "su claridad para explicar", "su claridad para explicar", "su claridad para explicar", "su claridad para explicar", "su claridad para explicar", "su claridad para explicar", "su claridad para explicar", "su claridad para explicar", "su claridad para explicar", "su claridad para explicar", "su claridad para explicar"], "Mariano Ezequiel Suarez": ["Su claridad al explicar", "su claridad al explicar", "su claridad al explicar", "su claridad al explicar", "su claridad al explicar", "su claridad al explicar", "su claridad al explicar", "su claridad al explicar", "su claridad al explicar", "su claridad al explicar", "su claridad al explicar", "su claridad al explicar"], "María Gabriela Funcia": ["El compromiso con los alumnos", "Sus clases son dinámicas y muy claras", "su calidez humana, su compromiso y dedicación.", "Su carisma", "Su compromiso con los alumnos", "Su compromiso", "Su carisma", "Su compromiso", "Su carisma", "Su compromiso", "Su carisma", "Su compromiso", "Su carisma", "Su compromiso", "Su carisma", "Su compromiso", "Su carisma", "Su compromiso", "Su carisma", "Su compromiso", "Su carisma", "Su compromiso", "Su carisma", "Su compromiso", "Su carisma", "Su compromiso", "Su carisma", "Su compromiso", "Su carisma", "Su compromiso", "Su carisma", "Su compromiso", "Su carisma", "Su compromiso", "Su carisma", "Su compromiso", "Su carisma", "Su compromiso", "Su carisma", "Es una excelente docente, admiro su forma de enseñar, la forma en que nos motiva a que no nos rindamos. Siempre siendo muy carismatica y profesional. ", "Muy buena docente. Super predispuesta en todo.. La enseñanza que da, es genial!"], "María Renata Galliano": ["Su compromiso y dedicación", "Su compromiso y dedicación", "su dedicación y compromiso", "su dedicación y compromiso", "su dedicación y compromiso", "su dedicación y compromiso", "La calidez humana, y la humildad que tiene para compartir conocimientos para la transformación del sujeto. ", "Lo que destaco de la profesora es su buena predisposición, calidez humana y amabilidad para con sus estudiantes. Sus clases son muy inspiradoras y siempre apuntan a la reflexión de las prácticas docentes y la responsabilidad y compromiso que eso conlleva. "], "Marisa Elizabeth Muñoz Zanon": ["Su dedicación y compromiso"], "Gabriela Cecilia Gimenez": ["Su dedicación y compromiso", "Su dedicación y compromiso", "su dedicación y compromiso"], "Enrique Ariel Guardia Avila": ["Su dedicación y compromiso", "su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso"], "Facundo Exequiel Morales Suárez": ["Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso"], "Emmanuel Ginestra": ["Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso"], "Cándida Elena Scheurer": ["Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso"], "Paula Judith Mailhos": ["Su dedicación y compromiso"], "Laura Griboff": ["Su dedicación y compromiso"], "Jesica Judith Carniato": ["Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso"], "Brenda Debora Triulzi": ["Su dedicación y compromiso"], "María Lourdes Marchesi": ["Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso"], "Guillermo Heider": ["Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso"], "Luciana Gloria Menendez Zoppi": ["Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso"], "Pamela Silvina Cruz": ["Su dedicación y compromiso"], "Maria Rita Soledad Guevara": ["Su dedicación y compromiso", "Su dedicación y compromiso"], "Matias Lucero": ["Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso"], "Mariela Beatriz Medina": ["Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso"], "María Eugenia Canavesi": ["Su dedicación y compromiso"], "María Fabiana Barroso": ["Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso"], "Vanessa Carla Videla": ["Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso"], "María Belén Hereñú": ["Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso"], "Verónica Ha Vogt": ["Su dedicación y compromiso", "Su dedicación y compromiso"], "Giselle Cecilia Salazar Acosta": ["Su dedicación y compromiso", "Su dedicación y compromiso"], "Graciela Lorena Kasián": ["Su dedicación y compromiso"], "Maria de los Ángeles Miranda": ["Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Un docente que"], "Juan Jose Bertolino": ["Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso"], "Erica Carla Wohning": ["Su dedicación y compromiso", "Su dedicación y compromiso"], "Nadia Rosana Tolaba Franasik": ["Su dedicación y compromiso", "Su dedicación y compromiso"], "Patricia Judith Bracco": ["Su dedicación y compromiso"], "Nadia Nátali Robledo": ["Su dedicación y compromiso", "Su dedicación y compromiso"], "Maria Paulina Calderón": ["Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso"], "Facundo Gustavo Corvalan Araujo": ["Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso"], "María Leonor Paez Logioia": ["Su dedicación y compromiso"], "Laura Milagro Asensio": ["Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso"], "Diego Hernan Valdez": ["Su dedicación y compromiso"], "Carina Gabriela Rosa Perez Dib": ["Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso"], "Matias Adolfo Ponce": ["Su dedicación y compromiso", "Su dedicación y compromiso"], "Ariel Hiram Triulzi": ["Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso"], "Vilma Isabel Freire": ["Su dedicación y compromiso"], "Oscar Enrique Córdoba Mascali": ["Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso"], "Tomás Matías Argüello": ["Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "disciplinar y pedagógicamente aporto significativamente en mi formación. Aportando autores, formas de llevar adelante la clase, las formas en las que ejerció su autoridad pedagógica, la responsabilidad con su trabajo. Eleva el grado de seriedad y compromiso con el trabajo. Aprendí mucho con el profe Tomas, es un  referente."], "Rosa Adela Abraham": ["Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso"], "Ana Laura Barraza": ["Su dedicación y compromiso", "Su dedicación y compromiso"], "Lucas Lazaro": ["Su dedicación y compromiso"], "María Virginia Paez": ["Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso"], "Hugo Rolando Baigorria": ["Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso"], "Vanina Victoria Dalto": ["Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso"], "Yanina Zoraida Abdelahad": ["Su dedicación y compromiso"], "María José Lucero Sosa": ["Su dedicación y compromiso"], "Adriano Cavallin": ["Su dedicación y compromiso", "Su dedicación y compromiso"], "José Luis Modón": ["Su dedicación y compromiso", "Su dedicación y compromiso"], "Stella Maris Kozur": ["Su dedicación y compromiso"], "Marta Elda Aguilar Muñoz": ["Su dedicación y compromiso"], "Omar Hugo Samper": ["Su dedicación y compromiso"], "Jose Carmelo Celi Quiroga": ["Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso"], "Débora Malajovich": ["Su dedicación y compromiso"], "Ana Julieta Capriolo": ["Su dedicación y compromiso"], "Virginia Leonor Miranda": ["Su dedicación y compromiso", "Su dedicación y compromiso"], "Natalia Agustina Puigdellibol": ["Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso"], "Miguel Ángel Andrada": ["Su dedicación y compromiso"], "Gisela Noelia Isaguirre": ["Su dedicación y compromiso", "Su dedicación y compromiso"], "Gabriela Yanina Micheli": ["Su dedicación y compromiso"], "Marina Soledad Ojeda": ["Su dedicación y compromiso"], "Ana Sara Piccinini": ["Su dedicación y compromiso"], "Gabriel Ernesto Arias": ["Su dedicación y compromiso"], "Eliana Belén Camargo": ["Su dedicación y compromiso"], "Estefanía Natalia Tonetti": ["Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso"], "Natalia Paula Martín": ["Su dedicación y compromiso"], "Raúl Alberto Venezia": ["Su dedicación y compromiso", "Su dedicación y compromiso"], "Gisela Monica Bustos": ["Su dedicación y compromiso", "Su dedicación y compromiso", "Su dedicación y compromiso"], "Francisco Almena García Ortega": ["Su dedicación y compromiso"], "Vanesa Ivana Franklin": ["Su dedicación y compromiso", "Su dedicación y compromiso"], "Scriboni Diego Alberto": ["Su dedicación y compromiso"], "Analía Andrea Ortiz": ["Su dedicación y compromiso"], "Betiana Rosa Analía Quevedo Suárez": ["Su dedicación y compromiso"], "Ana Miriam Arrieta": ["Su dedicación y compromiso"], "Vanesa Soledad Salinas": ["Su dedicación y compromiso"], "Elina Lucrecia Leonhart": ["Su dedicación y compromiso"], "Jesica Paola Zanglá Urteaga": ["su claridad para explicar"] };
    const categoryData = { labels: ['Competencia Profesional', 'Calidez y Empatía', 'Compromiso', 'Flexibilidad y Apoyo', 'Vínculo y Comunicación', 'Innovación'], mentions: [445, 204, 200, 65, 46, 19] };
    const slideTitles = ["Resumen de la Iniciativa", "Top 5 y Consulta", "Análisis de Cualidades"];

    // --- ELEMENTOS DEL DOM ---
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const navText = document.querySelector('#nav-text span');
    const teacherSelector = document.getElementById('teacher-selector');
    const searchResult = document.getElementById('search-result');
    const topList = document.querySelector('.top-list');
    const tooltip = document.getElementById('teacher-tooltip');

    // --- LÓGICA DE LA PRESENTACIÓN ---
    let currentSlideIndex = 0;

    function showSlide(index) {
        if (index < 0 || index >= slides.length) return;
        slides[currentSlideIndex].classList.remove('active');
        slides[index].classList.add('active');
        currentSlideIndex = index;
        updateNav();
    }

    function updateNav() {
        prevBtn.disabled = currentSlideIndex === 0;
        nextBtn.disabled = currentSlideIndex === slides.length - 1;
        navText.textContent = `${currentSlideIndex + 1} / ${slides.length} - ${slideTitles[currentSlideIndex]}`;
    }

    // --- LÓGICA DEL TOOLTIP DE CARACTERÍSTICAS ---
    function showTooltip(event) {
        const teacherName = event.currentTarget.dataset.teacherName;
        const characteristics = teacherCharacteristics[teacherName];

        if (characteristics && characteristics.length > 0) {
            const listItems = characteristics.map(char => `<li>"${char}"</li>`).join('');
            tooltip.innerHTML = `<ul>${listItems}</ul>`;

            const rect = event.currentTarget.getBoundingClientRect();
            let top = rect.bottom + 5;
            let left = rect.left;

            // Evita que el tooltip se salga de la pantalla
            tooltip.style.left = '0px';
            tooltip.style.top = '0px';
            tooltip.classList.add('visible');
            const tooltipRect = tooltip.getBoundingClientRect();
            if (left + tooltipRect.width > window.innerWidth) {
                left = window.innerWidth - tooltipRect.width - 10;
            }
            if (top + tooltipRect.height > window.innerHeight) {
                top = rect.top - tooltipRect.height - 5;
            }
            tooltip.style.left = `${left}px`;
            tooltip.style.top = `${top}px`;
        }
    }

    function hideTooltip() {
        tooltip.classList.remove('visible');
    }

    // --- LÓGICA ESPECÍFICA DE LOS SLIDES ---
    function populateTopList() {
        const sortedTeachers = Object.entries(teacherVotes).sort(([, a], [, b]) => b - a);
        const top5 = sortedTeachers.slice(0, 5);
        topList.innerHTML = top5.map(([name, votes], index) => {
            const rankClass = `rank-${index + 1}`;
            return `
                <li class="${index < 3 ? rankClass : ''}" data-teacher-name="${name}">
                    <span class="teacher-name">${name}</span>
                    <span class="vote-count">${votes} votos</span>
                </li>
            `;
        }).join('');

        document.querySelectorAll('.top-list li').forEach(item => {
            item.addEventListener('mouseenter', showTooltip);
            item.addEventListener('mouseleave', hideTooltip);
            item.addEventListener('click', (e) => {
                // Previene que se oculte inmediatamente en móvil
                e.stopPropagation();
                showTooltip(e);
            });
        });
    }

    function populateTeacherSelector() {
        const sortedTeachers = Object.keys(teacherVotes).sort((a, b) => a.localeCompare(b));
        sortedTeachers.forEach(name => {
            const option = document.createElement('option');
            option.value = name;
            option.textContent = name;
            teacherSelector.appendChild(option);
        });
    }

    function handleSelectorChange() {
        const selectedTeacher = teacherSelector.value;
        if (selectedTeacher) {
            searchResult.innerHTML = `<strong>${teacherVotes[selectedTeacher]}</strong> votos`;
        } else {
            searchResult.innerHTML = '';
        }
    }

    function renderCategoryChart() {
        const ctx = document.getElementById('categoryChart')?.getContext('2d');
        if (!ctx) return;
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: categoryData.labels,
                datasets: [{
                    label: '# de Menciones',
                    data: categoryData.mentions,
                    backgroundColor: 'rgba(25, 118, 210, 0.7)',
                    borderColor: 'rgba(13, 71, 161, 1)',
                    borderWidth: 1.5,
                    borderRadius: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y',
                scales: {
                    x: { beginAtZero: true, grid: { display: false } },
                    y: { ticks: { font: { size: 12, weight: '500' } }, grid: { color: '#eef' } }
                },
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: '#333',
                        titleFont: { size: 16 },
                        bodyFont: { size: 14 },
                        padding: 15,
                        cornerRadius: 10,
                        callbacks: { label: (context) => `${context.raw} menciones` }
                    }
                }
            }
        });
    }

    // --- INICIALIZACIÓN Y EVENTOS ---
    prevBtn.addEventListener('click', () => showSlide(currentSlideIndex - 1));
    nextBtn.addEventListener('click', () => showSlide(currentSlideIndex + 1));
    teacherSelector.addEventListener('change', handleSelectorChange);
    // Ocultar tooltip si se hace click en cualquier otro lado
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.top-list li')) {
            hideTooltip();
        }
    });

    populateTopList();
    populateTeacherSelector();
    renderCategoryChart();
    updateNav();
});
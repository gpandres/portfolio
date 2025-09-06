// Portfolio Marco Silva - Terminal Interactivo

// Sistema de traducciones centralizado
const translations = {
    es: {
        // Navegación
        nav: {
            terminal: 'Terminal',
            profile: 'Perfil',
            work: 'Trabajo',
            contact: 'Contacto'
        },
        // Títulos de secciones
        sections: {
            terminalTitle: '',
            profileTitle: 'SysAdmin en Prácticas',
            workTitle: 'Experiencia',
            contactTitle: 'Contacto'
        },
        // Terminal
        terminal: {
            prompt: 'andres@linux:~$',
            helpTitle: 'Comandos disponibles:',
            helpCommands: [
                'help        - Mostrar este mensaje de ayuda',
                'whoami      - Mostrar información del usuario',
                'profile     - Mostrar perfil profesional',
                'work        - Mostrar trabajo reciente',
                'contact     - Mostrar información de contacto',
                'clear       - Limpiar terminal'
            ],
            helpFooter: 'Usa el menú de navegación o desplázate para explorar secciones.',
            whoami: [
                'Andrés González - Estudiante de ASIR',
                'Especialización: Administración de Sistemas | Ciberseguridad | Redes',
                'Estado actual: Estudiante 2º ASIR + Experiencia profesional',
                'Ubicación: Huelva, España'
            ],
            profile: [
                '=== SYSADMIN EN PRÁCTICAS ===',
                '',
                'Nombre: Andrés González',
                'Rol: Estudiante 2º ASIR + SysAdmin',
                'Especialización: Linux, Ciberseguridad, Redes, Sistemas',
                '',
                'Competencias principales:',
                '  • Administración de Sistemas (75%)',
                '  • Ciberseguridad (65%)',
                '  • Seguridad de Redes (70%)',
                '  • Infraestructura (68%)'
            ],
            work: [
                '=== EXPERIENCIA RECIENTE ===',
                '',
                'Jul 2024 - Sep 2024, May 2025 - Sep 2025 - Informático/SysAdmin',
                '  • Administración de sistemas y servidores',
                '  • Mantenimiento de infraestructura IT',
                '  • Soporte técnico a usuarios',
                '  • Ubicación: San Juan del Puerto, Huelva',
                '',
                'Mar 2024 - Jun 2024 - Técnico de Telecomunicaciones',
                '  • Instalación y mantenimiento de redes de fibra',
                '  • Configuración de equipos de telecomunicaciones',
                '  • Tecnologías: GPON, FTTH, WiMAX, Switches, Routers',
                '  • Ubicación: San Juan del Puerto, Huelva',
                '',
                'Jun 2023 - Sep 2023 - Prácticas en NOC',
                '  • Monitoreo de red y sistemas',
                '  • Gestión de incidencias',
                '  • Ubicación: Palermo, Italia'
            ],
            contact: [
                '=== INFORMACIÓN DE CONTACTO ===',
                '',
                'Email: contact@andresgp.dev',
                'LinkedIn: linkedin.com/in/andresgonp',
                'GitHub: github.com/gpandres',
                'Ubicación: Huelva, España',
                '',
                'Tiempo de respuesta: Dentro de 24 horas',
                'Disponibilidad: Preferencia por trabajo remoto'
            ],
            commandNotFound: 'Comando no encontrado: {command}. Escribe \'help\' para comandos disponibles.',
            typeCommand: 'Escribe cualquier comando y presiona Enter para ejecutar.'
        },
        // Perfil
        profile: {
            title: 'SysAdmin en Prácticas',
            subtitle: 'Estudiante de ASIR con experiencia en empresas',
            role: 'Estudiante 2º ASIR + SysAdmin',
            company: 'Experiencia en empresas',
            location: 'Huelva, España',
            expertise: 'Competencias Principales',
            currentStack: 'Stack Actual',
            skills: {
                linux: 'Administración Sistemas',
                kubernetes: 'Ciberseguridad',
                aws: 'Seguridad de Redes',
                security: 'Infraestructura'
            },
            metrics: 'Métricas',
            yearsExperience: 'Años de Experiencia',
            serversManaged: 'Sistemas Gestionados',
            incidentsResolved: 'Incidencias Resueltas',
            companiesWorked: 'Empresas Trabajadas',
            uptimeAchieved: 'Tiempo de Actividad',
            availability: 'Disponibilidad'
        },
        // Trabajo
        work: {
            title: 'Experiencia Reciente',
            subtitle: 'Experiencia en empresas como técnico y sysadmin',
            completed: 'Completado',
            inProgress: 'En Progreso',
            zeroTrustTitle: 'Informático/SysAdmin',
            zeroTrustDesc: 'Administración de sistemas y servidores, mantenimiento de infraestructura IT y soporte técnico a usuarios en Televalentín.',
            automationTitle: 'Técnico de Telecomunicaciones',
            automationDesc: 'Instalación y mantenimiento de redes de fibra óptica, configuración de equipos de telecomunicaciones en Televalentín.',
            nocTitle: 'Prácticas en NOC',
            nocDesc: 'Monitoreo de red y sistemas, gestión de incidencias en Fibertelecom.it.',
            reductionIncidents: 'Sistemas administrados',
            performanceImprovement: 'Redes instaladas',
            deploymentAutomation: 'Incidencias gestionadas',
            manualInterventions: 'Resolución en 48h'
        },
        // Contacto
        contact: {
            title: 'Conectemos',
            subtitle: '¿Listo para discutir tus necesidades de infraestructura?',
            email: 'Email',
            emailAddress: 'contact@andresgp.dev',
            emailNote: 'Respuesta en 24 horas',
            linkedin: 'LinkedIn',
            linkedinProfile: 'linkedin.com/in/andresgonp',
            linkedinNote: 'Conecta profesionalmente',
            github: 'GitHub',
            githubProfile: 'github.com/gpandres',
            githubNote: 'Código y proyectos',
            location: 'Ubicación',
            locationAddress: 'Huelva, España',
            locationNote: 'Trabajo remoto preferido'
        },
        // Footer
        footer: {
            copyright: '© 2024 Andrés González. Todos los derechos reservados.',
            tagline: ''
        }
    },
    en: {
        // Navigation
        nav: {
            terminal: 'Terminal',
            profile: 'Profile',
            work: 'Work',
            contact: 'Contact'
        },
        // Section titles
        sections: {
            terminalTitle: '',
            profileTitle: 'SysAdmin in Training',
            workTitle: 'Experience',
            contactTitle: 'Contact'
        },
        // Terminal
        terminal: {
            prompt: 'andres@linux:~$',
            helpTitle: 'Available commands:',
            helpCommands: [
                'help        - Show this help message',
                'whoami      - Display user information',
                'profile     - Show professional profile',
                'work        - Display recent work',
                'contact     - Show contact information',
                'clear       - Clear terminal'
            ],
            helpFooter: 'Use navigation menu or scroll to explore sections.',
            whoami: [
                'Andrés González - ASIR Student',
                'Specializing in: System Administration | Cybersecurity | Networks',
                'Current Status: 2nd year ASIR student + Professional experience',
                'Location: Huelva, Spain'
            ],
            profile: [
                '=== SYSADMIN IN TRAINING ===',
                '',
                'Name: Andrés González',
                'Role: 2nd year ASIR student + SysAdmin',
                'Specialization: Linux, Cybersecurity, Networks, Systems',
                '',
                'Core Expertise:',
                '  • System Administration (75%)',
                '  • Cybersecurity (65%)',
                '  • Network Security (70%)',
                '  • Infrastructure (68%)'
            ],
            work: [
                '=== RECENT EXPERIENCE ===',
                '',
                'Jul 2024 - Sep 2024, May 2025 - Sep 2025 - IT/SysAdmin',
                '  • System and server administration',
                '  • IT infrastructure maintenance',
                '  • User technical support',
                '  • Location: San Juan del Puerto, Huelva',
                '',
                'Mar 2024 - Jun 2024 - Telecommunications Technician',
                '  • Installation and maintenance of fiber networks',
                '  • Telecommunications equipment configuration',
                '  • Technologies: GPON, FTTH, WiMAX, Switches, Routers',
                '  • Location: San Juan del Puerto, Huelva',
                '',
                'Jun 2023 - Sep 2023 - NOC Internship',
                '  • Network and system monitoring',
                '  • Incident management',
                '  • Location: Palermo, Italy'
            ],
            contact: [
                '=== CONTACT INFORMATION ===',
                '',
                'Email: contact@andresgp.dev',
                'LinkedIn: linkedin.com/in/andresgonp',
                'GitHub: github.com/gpandres',
                'Location: Huelva, Spain',
                '',
                'Response time: Within 24 hours',
                'Availability: Remote work preferred'
            ],
            commandNotFound: 'Command not found: {command}. Type \'help\' for available commands.',
            typeCommand: 'Type any command and press Enter to execute.'
        },
        // Profile
        profile: {
            title: 'SysAdmin in Training',
            subtitle: 'ASIR student with company experience',
            role: '2nd year ASIR student + SysAdmin',
            company: 'Company experience',
            location: 'Huelva, Spain',
            expertise: 'Core Expertise',
            currentStack: 'Current Stack',
            skills: {
                linux: 'System Administration',
                kubernetes: 'Cybersecurity',
                aws: 'Network Security',
                security: 'Infrastructure'
            },
            metrics: 'Metrics',
            yearsExperience: 'Years Experience',
            serversManaged: 'Systems Managed',
            incidentsResolved: 'Incidents Resolved',
            companiesWorked: 'Companies Worked',
            uptimeAchieved: 'Uptime Achieved',
            availability: 'Availability'
        },
        // Work
        work: {
            title: 'Recent Experience',
            subtitle: 'Experience in companies as technician and sysadmin',
            completed: 'Completed',
            inProgress: 'In Progress',
            zeroTrustTitle: 'IT/SysAdmin',
            zeroTrustDesc: 'System and server administration, IT infrastructure maintenance and user technical support at Televalentín.',
            automationTitle: 'Telecommunications Technician',
            automationDesc: 'Installation and maintenance of fiber optic networks, telecommunications equipment configuration at Televalentín.',
            nocTitle: 'NOC Internship',
            nocDesc: 'Network and system monitoring, incident management at Fibertelecom.it.',
            reductionIncidents: 'Systems administered',
            performanceImprovement: 'Networks installed',
            deploymentAutomation: 'Incidents managed',
            manualInterventions: 'Resolution in 48h'
        },
        // Contact
        contact: {
            title: 'Let\'s Connect',
            subtitle: 'Ready to discuss your infrastructure needs?',
            email: 'Email',
            emailAddress: 'contact@andresgp.dev',
            emailNote: 'Response within 24 hours',
            linkedin: 'LinkedIn',
            linkedinProfile: 'linkedin.com/in/andresgonp',
            linkedinNote: 'Connect professionally',
            github: 'GitHub',
            githubProfile: 'github.com/gpandres',
            githubNote: 'Code and projects',
            location: 'Location',
            locationAddress: 'Huelva, Spain',
            locationNote: 'Remote work preferred'
        },
        // Footer
        footer: {
            copyright: '© 2024 Andrés González. All rights reserved.',
            tagline: ''
        }
    }
};

document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio loaded');
    
    const terminalOutput = document.getElementById('terminal-output');
    if (!terminalOutput) {
        console.error('Terminal not found');
        return;
    }
    
    // Limpiar el terminal
    terminalOutput.innerHTML = '';
    
    // Ejecutar help al inicio
    setTimeout(() => {
        const currentLanguage = localStorage.getItem('portfolio-language') || 'es';
        refreshTerminal(currentLanguage);
    }, 1000);
    
    function addLine(command) {
        const line = document.createElement('div');
        line.className = 'terminal-line';
        line.innerHTML = `<span class="prompt">andres@linux:~$</span> <span class="command">${command}</span>`;
        terminalOutput.appendChild(line);
        scrollToBottom();
    }
    
    function addOutput(text) {
        const line = document.createElement('div');
        line.className = 'output-line';
        line.textContent = text;
        terminalOutput.appendChild(line);
        scrollToBottom();
    }
    
    function addInputLine() {
        const line = document.createElement('div');
        line.className = 'terminal-input-line';
        line.innerHTML = `<span class="prompt">andres@linux:~$</span> <input type="text" class="command-input" autofocus>`;
        terminalOutput.appendChild(line);
        scrollToBottom();
        
        const input = line.querySelector('.command-input');
        input.focus();
        
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const command = input.value.trim();
                if (command) {
                    executeCommand(command);
                }
                input.remove();
            }
        });
    }
    
    function executeCommand(command) {
        addLine(command);
        
        setTimeout(() => {
            const currentLanguage = languageSelect ? languageSelect.value : 'es';
            const t = translations[currentLanguage].terminal;
            
            if (command === 'help') {
                addOutput(t.helpTitle);
                addOutput('');
                t.helpCommands.forEach(cmd => addOutput(`  ${cmd}`));
                addOutput('');
                addOutput(t.helpFooter);
            } else if (command === 'whoami') {
                t.whoami.forEach(line => addOutput(line));
            } else if (command === 'profile') {
                t.profile.forEach(line => addOutput(line));
            } else if (command === 'work') {
                t.work.forEach(line => addOutput(line));
            } else if (command === 'contact') {
                t.contact.forEach(line => addOutput(line));
            } else if (command === 'clear') {
                terminalOutput.innerHTML = '';
            } else {
                addOutput(t.commandNotFound.replace('{command}', command));
            }
            
            setTimeout(() => {
                addInputLine();
            }, 100);
        }, 300);
    }
    
    function scrollToBottom() {
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }
    
    // Navegación
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Efectos hover
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-2px)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0)';
        });
    });
    
    document.querySelectorAll('.profile-card, .contact-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-4px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
    
    // Selector de idioma
    const languageSelect = document.getElementById('languageSelect');
    
    if (languageSelect) {
        // Cargar idioma guardado o usar español por defecto
        const savedLanguage = localStorage.getItem('portfolio-language') || 'es';
        languageSelect.value = savedLanguage;
        
        // Aplicar idioma inicial
        applyLanguage(savedLanguage);
        
        // Cambiar idioma al seleccionar
        languageSelect.addEventListener('change', function() {
            const selectedLanguage = this.value;
            localStorage.setItem('portfolio-language', selectedLanguage);
            applyLanguage(selectedLanguage);
        });
    }
    

    function applyLanguage(language) {
        const t = translations[language];
        
        // Actualizar navegación
        document.querySelectorAll('.nav-item').forEach((item, index) => {
            const keys = ['terminal', 'profile', 'work', 'contact'];
            if (keys[index]) {
                item.textContent = t.nav[keys[index]];
            }
        });
        
        // Actualizar títulos de secciones
        const terminalTitle = document.querySelector('.terminal-title');
        const profileTitle = document.querySelector('.profile-title');
        const workTitle = document.querySelector('.work-title');
        const contactTitle = document.querySelector('.contact-title');
        
        if (terminalTitle) terminalTitle.textContent = t.sections.terminalTitle;
        if (profileTitle) profileTitle.textContent = t.sections.profileTitle;
        if (workTitle) workTitle.textContent = t.sections.workTitle;
        if (contactTitle) contactTitle.textContent = t.sections.contactTitle;
        
        // Actualizar sección de perfil
        const profileSubtitle = document.querySelector('.profile-subtitle');
        const profileRole = document.querySelector('.profile-role');
        const profileCompany = document.querySelector('.profile-company');
        const profileLocation = document.querySelector('.profile-location');
        const profileAvailability = document.querySelector('.profile-availability');
        const profileExpertise = document.querySelector('.profile-expertise');
        const profileMetrics = document.querySelector('.profile-metrics');
        
        if (profileSubtitle) profileSubtitle.textContent = t.profile.subtitle;
        if (profileRole) profileRole.textContent = t.profile.role;
        if (profileCompany) profileCompany.textContent = t.profile.company;
        if (profileLocation) profileLocation.textContent = t.profile.location;
        if (profileAvailability) profileAvailability.textContent = t.profile.availability;
        if (profileExpertise) profileExpertise.textContent = t.profile.expertise;
        if (profileMetrics) profileMetrics.textContent = t.profile.metrics;
        
        // Actualizar títulos de secciones
        const expertiseTitle = document.querySelector('.profile-card:nth-child(1) h3');
        const stackTitle = document.querySelector('.profile-card:nth-child(2) h3');
        const metricsTitle = document.querySelector('.profile-card:nth-child(3) h3');
        
        if (expertiseTitle) expertiseTitle.textContent = t.profile.expertise;
        if (stackTitle) stackTitle.textContent = t.profile.currentStack;
        if (metricsTitle) metricsTitle.textContent = t.profile.metrics;
        
        // Actualizar métricas del perfil
        const metricLabels = document.querySelectorAll('.metric-label');
        if (metricLabels.length >= 6) {
            metricLabels[0].textContent = t.profile.yearsExperience;
            metricLabels[1].textContent = t.profile.serversManaged;
            metricLabels[2].textContent = t.profile.incidentsResolved;
            metricLabels[3].textContent = t.profile.companiesWorked;
            metricLabels[4].textContent = t.profile.uptimeAchieved;
            metricLabels[5].textContent = t.profile.availability;
        }
        
        // Actualizar sección de trabajo
        const workSubtitle = document.querySelector('.work-subtitle');
        const timelineStatuses = document.querySelectorAll('.timeline-status');
        const timelineTitles = document.querySelectorAll('.timeline-title');
        const timelineDescriptions = document.querySelectorAll('.timeline-description');
        const metricLabelsWork = document.querySelectorAll('.timeline-metrics .metric-label');
        
        if (workSubtitle) workSubtitle.textContent = t.work.subtitle;
        
        // Actualizar estados de timeline
        timelineStatuses.forEach((status, index) => {
            if (status.classList.contains('completed')) {
                status.textContent = t.work.completed;
            } else if (status.classList.contains('in-progress')) {
                status.textContent = t.work.inProgress;
            }
        });
        
        // Actualizar títulos de timeline
        if (timelineTitles.length >= 3) {
            timelineTitles[0].textContent = t.work.zeroTrustTitle;
            timelineTitles[1].textContent = t.work.automationTitle;
            timelineTitles[2].textContent = t.work.nocTitle;
        }
        
        // Actualizar descripciones de timeline
        if (timelineDescriptions.length >= 3) {
            timelineDescriptions[0].textContent = t.work.zeroTrustDesc;
            timelineDescriptions[1].textContent = t.work.automationDesc;
            timelineDescriptions[2].textContent = t.work.nocDesc;
        }
        
        // Actualizar etiquetas de métricas de trabajo
        if (metricLabelsWork.length >= 4) {
            metricLabelsWork[0].textContent = t.work.reductionIncidents;
            metricLabelsWork[1].textContent = t.work.performanceImprovement;
            metricLabelsWork[2].textContent = t.work.deploymentAutomation;
            metricLabelsWork[3].textContent = t.work.manualInterventions;
        }
        
        // Actualizar sección de contacto
        const contactSubtitle = document.querySelector('.contact-subtitle');
        const contactCardTitles = document.querySelectorAll('.contact-details h3');
        const contactNotes = document.querySelectorAll('.contact-note');
        
        if (contactSubtitle) contactSubtitle.textContent = t.contact.subtitle;
        
        // Actualizar títulos de tarjetas de contacto
        if (contactCardTitles.length >= 4) {
            contactCardTitles[0].textContent = t.contact.email;
            contactCardTitles[1].textContent = t.contact.linkedin;
            contactCardTitles[2].textContent = t.contact.github;
            contactCardTitles[3].textContent = t.contact.location;
        }
        
        // Actualizar notas de contacto
        if (contactNotes.length >= 4) {
            contactNotes[0].textContent = t.contact.emailNote;
            contactNotes[1].textContent = t.contact.linkedinNote;
            contactNotes[2].textContent = t.contact.githubNote;
            contactNotes[3].textContent = t.contact.locationNote;
        }
        
        // Actualizar footer
        const footerCopyright = document.querySelector('.footer-bottom p:first-child');
        const footerTagline = document.querySelector('.footer-bottom p:last-child');
        
        if (footerCopyright) footerCopyright.textContent = t.footer.copyright;
        if (footerTagline) footerTagline.textContent = t.footer.tagline;
        
        // Actualizar enlaces del footer
        document.querySelectorAll('.footer-link').forEach((link, index) => {
            const keys = ['terminal', 'profile', 'work', 'contact'];
            if (keys[index]) {
                link.textContent = t.nav[keys[index]];
            }
        });
        
        // Refrescar terminal con el nuevo idioma
        refreshTerminal(language);
    }
    
    function refreshTerminal(language) {
        const terminalOutput = document.getElementById('terminal-output');
        if (!terminalOutput) return;
        
        // Limpiar terminal
        terminalOutput.innerHTML = '';
        
        // Ejecutar help con el nuevo idioma
        setTimeout(() => {
            addLine('help');
            setTimeout(() => {
                const t = translations[language].terminal;
                
                addOutput(t.helpTitle);
                addOutput('');
                t.helpCommands.forEach(cmd => addOutput(`  ${cmd}`));
                addOutput('');
                addOutput(t.helpFooter);
                addInputLine();
            }, 500);
        }, 100);
    }
    
    // Funcionalidad de contacto
    // Copiar email al hacer clic
    const emailCard = document.querySelector('.contact-card');
    if (emailCard) {
        emailCard.addEventListener('click', async () => {
            const email = 'contact@andresgp.dev';
            try {
                await navigator.clipboard.writeText(email);
                // Feedback visual
                const originalText = emailCard.querySelector('p').textContent;
                emailCard.querySelector('p').textContent = 'Email copiado!';
                emailCard.style.borderColor = 'var(--primary)';
                emailCard.style.boxShadow = '0 0 20px rgba(0, 255, 136, 0.3)';
                
                setTimeout(() => {
                    emailCard.querySelector('p').textContent = originalText;
                    emailCard.style.borderColor = 'rgba(0, 212, 255, 0.1)';
                    emailCard.style.boxShadow = 'var(--shadow-lg)';
                }, 2000);
            } catch (err) {
                console.error('Error al copiar email:', err);
            }
        });
        
        // Cursor pointer para indicar que es clickeable
        emailCard.style.cursor = 'pointer';
    }
    
    // Abrir LinkedIn en nueva pestaña
    const linkedinCard = document.querySelectorAll('.contact-card')[1];
    if (linkedinCard) {
        linkedinCard.addEventListener('click', () => {
            window.open('https://linkedin.com/in/andresgonp', '_blank');
        });
        linkedinCard.style.cursor = 'pointer';
    }
    
    // Abrir GitHub en nueva pestaña
    const githubCard = document.querySelectorAll('.contact-card')[2];
    if (githubCard) {
        githubCard.addEventListener('click', () => {
            window.open('https://github.com/gpandres', '_blank');
        });
        githubCard.style.cursor = 'pointer';
    }
    
    // Funciones del terminal con traducciones
    function showHelp() {
        const currentLanguage = languageSelect ? languageSelect.value : 'es';
        const t = translations[currentLanguage].terminal;
        
        addOutput(t.helpTitle);
        addOutput('');
        t.helpCommands.forEach(cmd => addOutput(`  ${cmd}`));
        addOutput('');
        addOutput(t.helpFooter);
    }
    
    function showWhoami() {
        const currentLanguage = languageSelect ? languageSelect.value : 'es';
        const t = translations[currentLanguage].terminal;
        
        t.whoami.forEach(line => addOutput(line));
    }
    
    function showProfile() {
        const currentLanguage = languageSelect ? languageSelect.value : 'es';
        const t = translations[currentLanguage].terminal;
        
        t.profile.forEach(line => addOutput(line));
    }
    
    function showWork() {
        const currentLanguage = languageSelect ? languageSelect.value : 'es';
        const t = translations[currentLanguage].terminal;
        
        t.work.forEach(line => addOutput(line));
    }
    
    function showContact() {
        const currentLanguage = languageSelect ? languageSelect.value : 'es';
        const t = translations[currentLanguage].terminal;
        
        t.contact.forEach(line => addOutput(line));
    }

    // Animate expertise level bars
    function animateExpertiseBars() {
        const levelBars = document.querySelectorAll('.level-bar');
        levelBars.forEach(bar => {
            const level = bar.getAttribute('data-level');
            if (level) {
                setTimeout(() => {
                    bar.style.width = level + '%';
                }, 500);
            }
        });
    }

    // Initialize expertise bars animation
    setTimeout(animateExpertiseBars, 1000);
});
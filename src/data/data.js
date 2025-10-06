export const data = {
    name: "Yria Forján",
    occupation: "Junior Web Developer",
    avatar_dark: "/images/avatar-light.webp",
    avatar_light: "/images/avatar-dark.webp",
    about: "I'm passionate about web development and currently pursuing a Higher Technician in Web Development and a Full-Stack Web Development Master's Program. Previously, I studied and worked in physiotherapy, which helped me develop strong problem-solving and communication skills. Now, I focus on creating functional, visually appealing web applications with an emphasis on clean design and user experience. Always eager to learn, I continuously explore new technologies to build innovative digital solutions.",

    skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Java",
        "Node.js",
        "React",
        "API Rest",
        "Vite",
        "Git",
        "Github",
        "MySQL",
        "MongoDB",
        "VSCode",
    ],

    loves: [
        {
            name: "Riding waves and enjoying the ocean",
            icon: "🏄🏼‍♀️"
        },
        {
            name: "Hitting the road to clear my mind",
            icon: "🏃🏼‍♀️"
        },
        {
            name: "Constructing epic Lego masterpieces",
            icon: "🧱"
        },
        {
            name: "Rocking classics that never fade away",
            icon: "🎸"
        },
        {
            name: "Exploring endless cheese possibilities",
            icon: "🧀"
        }
    ],

    hates: [
        {
            name: "Slow internet",
            icon: "🛜"
        },
        {
            name: "Traffic jams",
            icon: "🚘"
        },
        {
            name: "Running out of coffee ",
            icon: "☕️"
        },
        {
            name: "Flat batteries",
            icon: "🔋"
        },
        {
            name: "Bad hair days",
            icon: "💇🏼‍♀️"
        },
    ],
  
    education: {
        higherDegree: {
            name: "Higher Technician in Web Development",
            entity: "thePower Business School (Spain)",
            entity_logo: "/images/thepower_logo.webp",
            duration: "2024 - Currently"
        },
        master: {
            name: "Master's Program in Full-Stack Web Development",
            entity: "thePower Business School (Spain)",
            entity_logo: "/images/thepower_logo.webp",
            duration: "2024 - Currently"
        },
        physiotherapyDegree: {
            name: "Bachelor's Degree in Physiotherapy",
            entity: "University of A Coruña",
            entity_logo: "/images/udc_logo.webp",
            duration: "2015 - 2020"
        },
        physiotherapyMaster: {
            name: "Master's Degree in Pediatric Physiotherapy",
            entity: "Pontifical University of Salamanca",
            entity_logo: "/images/upsa_logo.webp",
            duration: "2020 - 2021"
        }
    },

    projects: [
        {
            title: "Yumflix (under development)",
            description: "Sleek web app inspired by Netflix's iconic interface, showcasing delicious recipes fetched live from the ThemealDB REST API. Built with Vite and modular JavaScript, it features responsive CSS3 design and a user-friendly light/dark theme toggle. Currently, the project is under active development with exciting features on the way.",
            tech: ["Vite", "JS", "CSS3", "Rest API"],
            image: "/images/projects/yumflix.webp",
            github: "",
            link: ""
        },
        {
            title: "Professional Athlete Landing",
            description: "Responsive landing page developed with Vite, Tailwind CSS, and modern JavaScript. Features smooth scrolling navigation, parallax effects, and animations powered by Intersection Observer. Additionally, it includes a dynamic news banner that fetches recent relevant updates from a regional news source via RSS.",
            tech: ["Vite", "JS", "Tailwind", "EmailJS", "RS Feed", "Intersection Observer"],
            image: "/images/projects/lidiaparada.webp",
            github: "https://github.com/yriaforjan/landing-lidiap.git",
            link: "https://lidiaparada.vercel.app/"
        },
        {
            title: "Dootzy App",
            description: "Responsive task and calendar management app built with Vite and modern JavaScript. It integrates FullCalendar.io for scheduling, offers offline functionality through PWA support, and ensures persistent data with localStorage. Developed as a collaborative project, it uses GitHub branches and commits to manage features and teamwork efficiently.",
            tech: ["Vite", "JS", "CSS3", "PWA", "FullCalendar", "WeatherAPI", "LocalStorage", "GitHub (team project)"],
            image: "/images/projects/dootzy.webp",
            github: "https://github.com/Cvidal84/proyecto5.git",
            link: "https://dootzy.vercel.app/"
        },
        {
            title: "PixHive App",
            description: "Asynchronous web app built with Vite and modern JavaScript. It uses the Unsplash API to dynamically display high-quality images, featuring pagination and orientation filters. Created for educational purposes to practice API consumption, with a focus on designing a clean and intuitive user interface.",
            tech: ["Vite", "JS", "CSS3", "UnsplashAPI"],
            image: "/images/projects/pixhive.webp",
            github: "https://github.com/yriaforjan/Proyecto-Web-Asincrono.git",
            link: "https://pixhive.vercel.app/"
        },
        {
            title: "My Digital CV",
            description: "A digital resume web app showcasing my education, experience, and skills in a clean and modern way. Built as a SPA using Vite and vanilla JavaScript, featuring responsive design, interactive animations, and light/dark mode support. This project highlights my frontend abilities and serves as my professional introduction.",
            tech: ["Vite", "JavaScript", "CSS3", "SPA", "Intersection Observer"],
            image: "/images/projects/cv.webp",
            github: "https://github.com/yriaforjan/Proyecto-4-cv.git",
            link: "https://yriaforjan-cv.vercel.app"
        },
        {
            title: "My Portfolio",
            description: "My first project using components and focusing on modularization. Built with Vite as a Single Page Application (SPA), it serves as my personal portfolio to showcase all my projects moving forward. The app emphasizes clean, maintainable code structure and responsive design.",
            tech: ["Vite", "JS", "CSS3"],
            image: "/images/projects/portfolio.webp",
            github: "https://github.com/yriaforjan/Proyecto-2-portfolio.git",
            link: "https://portfolio-yriaforjan.vercel.app/"
        },
        {
            title: "PcComponentes Mockup",
            description: "A faithful visual replication of the PcComponentes gallery crafted with HTML, CSS and JavaScript. The project highlights precise DOM manipulation, event handling, and responsive design to accurately reproduce the original user interface experience.",
            tech: ["HTML5", "CSS3", "JS"],
            image: "/images/projects/galeriadinamica.webp",
            github: "https://github.com/yriaforjan/practica_DOM.git",
            link: "https://practica-domgaleria-dinamica.vercel.app/",
        },
        {
            title: "Library Management App",
            description: "A simple web application for managing library books, built with HTML5, JavaScript, and Bootstrap via CDN. Features include adding, viewing, and searching books, as well as importing and exporting data in XML format.",
            tech: ["HTML5", "Bootstrap", "JS", "XML"],
            image: "/images/projects/biblioteca.webp",
            github: "https://github.com/yriaforjan/registro-biblioteca.git",
            link: "https://registro-biblioteca.vercel.app/",
          },
        {
            title: "Small Business Website",
            description: "My first complete project built entirely with HTML5 and CSS3. It focuses on semantic markup, accessibility, and clean, modern design. It showcases product offerings with an intuitive layout and smooth user experience.",
            tech: ["HTML5", "CSS3"],
            image: "/images/projects/bisutere.webp",
            github: "https://github.com/yriaforjan/Proyecto-1.git",
            link: "https://www.bisutere.com/",
        },
        {
            title: "Landing Page Prototype",
            description: "My first mini-project, a prototype landing page designed using CSS Flexbox to create a flexible and responsive layout. It highlights mastering layout techniques.",
            tech: ["HTML5", "CSS3"],
            image: "/images/projects/jvcasesores.webp",
            github: "https://github.com/yriaforjan/entrega_flexbox.git",
            link: "https://jvc-asesores.vercel.app/"
        },
    ],

    socials: [
        {
            name: "GitHub",
            address: "https://github.com/yriaforjan",
            icon: "/icons/github.webp",
        },
        {
            name: "LinkedIn",
            address: "https://www.linkedin.com/in/yria-forjan-oliveira/",
            icon: "/icons/linkedin.webp",
        },
        {
            name: "Telegram",
            address: "https://t.me/yriaforjan",
            icon: "/icons/telegram.webp",
        }
    ]
};
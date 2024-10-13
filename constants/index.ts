

export const skills: {
    name: string,
    icon: string
}[] = [
    {
        name: "React",
        icon: 'uil:react'
    },
    {
        name: "Next.js",
        icon: 'akar-icons:nextjs-fill'
    },
    {
        name: "Vue",
        icon: 'uit:vuejs-alt'
    },
    {
        name: "Nuxt",
        icon: 'mdi:nuxt'
    },
    {
        name: "Typescript",
        icon: 'mdi:language-typescript'
    },
    {
        name: "Node.js",
        icon: 'ri:nodejs-fill'
    },
    {
        name: "MySQL",
        icon: 'tabler:brand-mysql'
    },
    {
        name: "Tailwind",
        icon:'mdi:tailwind'
    },
    {
        name: "Figma",
        icon: 'akar-icons:figma-fill'
    },
    {
        name: "OpenAi Api",
        icon: 'ri:openai-fill'
    },
    {
        name: "JavaScript",
        icon: 'akar-icons:javascript-fill'
    }, 
    {
        name: "Puppeteer",
        icon: 'self:puppeteer'
    },
    {
        name: "Turborepo",
        icon: 'self:turborepo'
    },
    {
        name: "Jest",
        icon: 'self:jest'
    },
    {
        name: "Cypress",
        icon: 'self:cypress'
    },
    {
        name: "Electron",
        icon: 'simple-icons:electron'
    }
]

export const helloTranslations = [
    'Hello',
    'Hej',
    'Hola',
    'Bonjour',
    'Ciao',
    'Olá',
    'Hei',
    'Здравствуйте',
    'こんにちは',
    '你好',
    '안녕하세요',
    'مرحبا',
    'Merhaba',
    'Γειά σου',
    'नमस्ते',
    'হ্যালো'
];

export const projectSkills:{
    [project: string]: {
        en: {
            name: string;
            description: string;
            icon: string;
            color: string;
        }[],
        da: {
            name: string;
            description: string;
            icon: string;
            color: string;
        }[] 
    }
} = {
    'db-center': {
        en: [
            {
                name: 'Nuxt',
                description: 'Frontend framework used for the project.',
                icon: 'mdi:nuxt',
                color: '#00c678'
            },
            {
                name: 'Electron',
                description: 'Nuxt electron module used to build the desktop app.',
                icon: 'simple-icons:electron',
                color: '#9feaf9'
            },
            {
                name: 'Dockerode',
                description: 'Used to create and run databases easily on the users device.',
                icon: 'uil:docker',
                color: '#2494b6'
            },
            {
                name: 'Tailwind',
                description: 'Css framework used for easy and fast ui development.',
                icon: 'mdi:tailwind',
                color: '#38bdf8'
            },
            {
                name: 'Pinia',
                description: 'Used to keep track of the databases in local storage.',
                icon: 'logos:pinia',
                color: '#ffe267'
            }
        ],
        da: [
            {
                "name": "Nuxt",
                "description": "Frontend framework brugt til projektet.",
                "icon": "mdi:nuxt",
                "color": "#00c678"
            },
            {
                "name": "Electron",
                "description": "Nuxt Electron modul brugt til at bygge desktop appen.",
                "icon": "simple-icons:electron",
                "color": "#9feaf9"
            },
            {
                "name": "Dockerode",
                "description": "Bruges til nemt at oprette og køre databaser på brugerens enhed.",
                "icon": "uil:docker",
                "color": "#2494b6"
            },
            {
                "name": "Tailwind",
                "description": "CSS framework brugt til nem og hurtig UI-udvikling.",
                "icon": "mdi:tailwind",
                "color": "#38bdf8"
            },
            {
                "name": "Pinia",
                "description": "Bruges til at holde styr på databaser i local storage.",
                "icon": "logos:pinia",
                "color": "#ffe267"
            }
        ]        
    }
}

export const projectFeatures:{
    [project: string]: {
        en: {
            title: string;
            description: string;
            icon: string;
        }[],
        da: {
            title: string;
            description: string;
            icon: string;
        }[]
    } 
} = {
    'db-center': {
        en: [
            {
                title: 'Database editor WIP',
                description: 'Create tables, delete tables, update data or get data through the query runner.',
                icon: 'oui:editor-code-block',
            },
            {
                title: 'Database overview',
                description: 'Keep track of all you’re databases, see which ones are running, easy start and stop database and copy connection string,',
                icon: 'bi:binoculars',
            },
            {
                title: 'Create databases',
                description: 'Easily set up a MySQL and Postgresql database with just a few clicks. The app then launches a Docker container with MySQL that you can use.',
                icon: 'proicons:database-add',
            }
        ],
        da: [
            {
                "title": "Database editor WIP",
                "description": "Opret tabeller, slet tabeller, opdater data eller hent data gennem query runneren.",
                "icon": "oui:editor-code-block"
            },
            {
                "title": "Database oversigt",
                "description": "Hold styr på alle dine databaser, se hvilke der kører, start og stop databaser nemt, og kopier forbindelsesstrengen.",
                "icon": "bi:binoculars"
            },
            {
                "title": "Opret databaser",
                "description": "Opsæt nemt en MySQL og PostgreSQL database med blot et par klik. Appen starter derefter en Docker-container med MySQL, som du kan bruge.",
                "icon": "proicons:database-add"
            }
        ]        
    }
}

type NavLinkTypes = ({
    title: string,
    icon: string,
    href: string,
    offpage: boolean,
    type: 'link'
} | {
    type: 'divider'
} | {
    type: 'i18n'
})[]

export const navLinks: NavLinkTypes = [
    {
        title: 'Home',
        icon: '/icons/home.svg',
        href: '/',
        offpage: false,
        type: 'link'
    },
    {
        title: 'Projects',
        icon: '/icons/project.svg',
        href: '/projects',
        offpage: false,
        type: 'link'
    },
    {
        type: 'divider'
    },
    {
        type: 'i18n'
    },
    {
        type: 'divider'
    },
    {
        title: 'Github',
        icon: 'uiw:github',
        href: '/',
        offpage: true,
        type: 'link'
    },
    {
        title: 'Linkedin',
        icon: 'uiw:linkedin',
        href: '/projects',
        offpage: true,
        type: 'link'
    },

]
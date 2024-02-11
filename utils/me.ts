class TimePeriod {
    startTime: Date;
    endTime: Date;
    constructor(data?: Partial<TimePeriod>) {
        Object.assign(this, data);
    }

    get yearDuration(): string {
        return `${this.startTime.getFullYear()} - ${this.endTime.getFullYear()}`;
    }

    get monthDuration(): string {
        return `${this.startTime.toLocaleString('default', { month: '2-digit' })}.${this.startTime.getFullYear()} - ${this.endTime.toLocaleString('default', { month: '2-digit' })}.${this.endTime.getFullYear()}`;
    }
}

class GridImage {
    cols: string;
    imgPath: string;
    children?: GridImage[];
    alt: string;
    constructor(data?: Partial<GridImage>) {
        Object.assign(this, data);
    }
}

class Skill {
    name: string;
    description: string;
    icon: string;
    link: string;
    constructor(data?: Partial<Skill>) {
        Object.assign(this, data);
    }
}

class Social {
    name: string;
    url: string;
    icon: string;
    constructor(data?: Partial<Social>) {
        Object.assign(this, data);
    }
}

class Project {
    name: string;
    description: string;
    repoLink1: string;
    repoLink2: string;
    appLink: string;
    photos: GridImage[] = [];
    constructor(data?: Partial<Project>) {
        Object.assign(this, data);
    }
}

class Experience extends TimePeriod {
    company: string;
    position: string;
    description: string;
    location: string;
    frequency: string;
    constructor(data?: Partial<Experience>) {
        super();
        Object.assign(this, data);
    }
}

class Education extends TimePeriod {
    institution: string;
    degree: string;
    constructor(data?: Partial<Education>) {
        super();
        Object.assign(this, data);
    }
}

export const me = {
    fullName: 'Karol Rutkowski',
    profession: 'Software Engineer',
    city: 'Wroclaw',
    phoneNumber: '+48 692 804 506',
    email: 'karol.rutkowski.a@gmail.com',
    skills: [
        new Skill({
            name: 'Vue.js',
            description: 'Popular front end framework',
            icon: 'mdi-vuejs',
            link: 'https://vuejs.org/',
        }),
        new Skill({
            name: 'Nuxt.js',
            description: 'Framework for creating Vue.js applications',
            icon: 'mdi-nuxt',
            link: 'https://nuxt.com/',
        }),
        new Skill({
            name: 'Vuetify',
            description: 'Material Design Component Framework for Vue.js',
            icon: 'mdi-vuetify',
            link: 'https://vuetifyjs.com/',
        }),
        new Skill({
            name: 'PWA',
            description: 'Progressive Web App',
            icon: 'mdi-progress-wrench',
            link: 'https://web.dev/progressive-web-apps/',
        }),
        new Skill({
            name: 'SCSS',
            description: 'CSS preprocessor',
            icon: 'mdi-sass',
            link: 'https://sass-lang.com/',
        }),
        new Skill({
            name: 'Node.js',
            description: 'Creating server side applications in JavaScript',
            icon: 'mdi-nodejs',
            link: 'https://nodejs.org/',
        }),
        new Skill({
            name: 'TypeScript',
            description: 'Typed superset of JavaScript',
            icon: 'mdi-language-typescript',
            link: 'https://www.typescriptlang.org/',
        }),
        new Skill({
            name: 'Nestjs',
            description: 'A progressive Node.js framework for building efficient, reliable and scalable server-side applications',
            icon: 'mdi-server-network',
            link: 'https://nestjs.com/',
        }),
        new Skill({
            name: 'Java',
            description: 'Object-oriented programming language',
            icon: 'mdi-language-java',
            link: 'https://www.java.com/',
        }),
        new Skill({
            name: 'PostgreSQL',
            description: 'Open source object-relational database system',
            icon: 'mdi-database',
            link: 'https://www.postgresql.org/',
        }),
        new Skill({
            name: 'MySQL',
            description: 'Open-source relational database management system',
            icon: 'mdi-database',
            link: 'https://www.mysql.com/',
        }),
        new Skill({
            name: 'TypeOrm',
            description: 'An Object-Relational Mapping library',
            icon: 'mdi-database-settings',
            link: 'https://typeorm.io/',
        }),
        new Skill({
            name: 'Docker',
            description: 'A platform for building, sharing and running applications',
            icon: 'mdi-docker',
            link: 'https://www.docker.com/',
        }),
        new Skill({
            name: 'Git',
            description: 'Version control system',
            icon: 'mdi-git',
            link: 'https://git-scm.com/',
        }),
        new Skill({
            name: 'GitHub',
            description: 'A platform for version control and collaboration',
            icon: 'mdi-github',
            link: 'github.com',
        }),
        new Skill({
            name: 'GitLab',
            description: 'A complete DevOps platform',
            icon: 'mdi-gitlab',
            link: 'gitlab.com',
        }),
    ],
    experiences: [
        new Experience({
            company: 'Ulan Software',
            position: 'Full Stack Developer',
            description: `<p><a class="nuxtLink" href="https://ulansoftware.com/portfolio/teamo" target="_blank">Detail description to a project where I took a part</a>&nbsp(Ikea) </p>
            <p> <a class="nuxtLink" href="https://bowwe.com/" target="_blank">Another big project in which I had contributed</a>&nbsp(Web creator Bowwe)</p>`,
            location: 'Wroclaw, Poland',
            startTime: new Date('2021-11-01'),
            endTime: new Date('2024-1-31'),
        }),
        new Experience({
            company: 'Sotis',
            location: 'Clermont-Ferrand, France',
            position: 'Air ventilation fitter',
            description: 'Installing air filters in the new factory, provading comunication between Polish squad and french boss',
            startTime: new Date('2021-07-01'),
            endTime: new Date('2021-09-24'),
        }),
        new Experience({
            company: 'Hengst Filtration Poland (automotive)',
            location: 'Gogolin, Poland',
            position: 'Helpdesk Administrator (Intership)',
            description: 'Office administartion, Developed local production app, first steps into OOP with Django and automatic tests with Selenium',
            startTime: new Date('2020-10-01'),
            endTime: new Date('2021-06-01'),
        }),
        new Experience({
            company: 'Polaris Quads',
            location: 'Opole, Poland',
            position: 'Production Fitter',
            description: 'Installing and setting up machiner',
            startTime: new Date('2020-07-01'),
            endTime: new Date('2020-08-01'),
        }),
        new Experience({
            company: '-',
            location: 'Opole, Poland',
            position: 'Construction worker',
            description: 'Private flat renovation, responsible for the team of 4 people',
            startTime: new Date('2018-09-01'),
            endTime: new Date('2018-12-01'),
        }),
        new Experience({
            company: 'Bluesoft',
            location: 'Krapkowice, Poland',
            position: 'Construction assistant',
            description: 'Renovation of staircases',
            startTime: new Date('2018-07-01'),
            endTime: new Date('2018-8-01'),
        }),
        new Experience({
            company: 'Bluesoft | Science and Technology Park in Opole',
            location: 'Opole, Poland',
            position: 'Technical Assistant',
            description: 'Soldering capacitors and other components on the integrated circuit',
            startTime: new Date('2015-07-01'),
            endTime: new Date('2015-08-01'),
        }),
    ],
    educations: [
        new Education({
            institution: 'Wroclaw University of Science and Technology',
            degree: 'Master Degree of Aritificial Intelligence',
            startTime: new Date('2024-02-28'),
            endTime: new Date('2025-06-30'),
        }),
        new Education({
            institution: 'Wroclaw University of Science and Technology',
            degree: 'Engeneer Degree of Computer Science',
            startTime: new Date('2020-10-01'),
            endTime: new Date('2024-02-06'),
        }),
        new Education({
            institution: 'HighSchool number II in Opole',
            degree: '',
            startTime: new Date('2017-9-01'),
            endTime: new Date('2020-5-30'),
        }),
        new Education({
            institution: 'Junior HighSchool number X in Opole',
            degree: '',
            startTime: new Date('2014-9-01'),
            endTime: new Date('2017-6-31'),
        }),
        new Education({
            institution: 'Primary School number 15 in Opole',
            degree: '',
            startTime: new Date('2008-9-01'),
            endTime: new Date('2014-6-31'),
        }),
    ],
    projects: [
        new Project({
            name: 'Apartment Management System',
            description: 'App which makes it easier to manage apartments',
            repoLink1: 'https://github.com/szarl/asm-client',
            repoLink2: 'https://github.com/szarl/asm-service',
            appLink: 'https://asm-client-production.up.railway.app/',
            photos: [
                new GridImage({
                    cols: '8',
                    imgPath: '/projects/asm/dashboard.webp',
                    alt: 'Dashboard of the app',
                }),
                new GridImage({
                    cols: '4',
                    imgPath: '/projects/asm/menu.webp',
                    alt: 'Hamburger menu of the app',
                }),
                new GridImage({
                    cols: '6',
                    imgPath: '/projects/asm/flat-details.webp',
                    alt: 'Flat details page with some awsome futures',
                    children: [
                        new GridImage({
                            cols: '12',
                            imgPath: '/projects/asm/adding-new-fee.webp',
                            alt: 'Adding new fee to the flat',
                        }),
                        new GridImage({
                            cols: '12',
                            imgPath: '/projects/asm/rates.webp',
                            alt: 'Rates of the flat',
                        }),
                    ],
                }),
                new GridImage({
                    cols: '8',
                    imgPath: '/projects/asm/stack.webp',
                    alt: 'Technology composition of the app in Railway',
                }),
            ],
        }),
        new Project({
            name: 'CWash',
            repoLink1: 'https://github.com/szarl/cwash_client',
            repoLink2: 'https://github.com/szarl/cwash-service',
        }),
    ],
    socials: [
        new Social({
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/karol-rutkowski-06100320a',
            icon: 'mdi-linkedin',
        }),
        new Social({
            name: 'GitHub',
            url: 'https://github.com/szarl',
            icon: 'mdi-github',
        }),
        new Social({
            name: 'Facebook',
            url: 'https://www.facebook.com/karol.rutkowski.9212/',
            icon: 'mdi-facebook',
        }),
        new Social({
            name: 'Twitter',
            url: 'https://twitter.com/szarl',
            icon: 'mdi-twitter',
        }),
    ],
};

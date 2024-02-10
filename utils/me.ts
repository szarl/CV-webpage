import { TimePeriod } from './TimePeriod';

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

class Experience extends TimePeriod {
    company: string;
    position: string;
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

class Project extends TimePeriod {
    name: string;
    description!: string;
    repoLink: string;
    appLink: string;
    photos: string[] = [];
    constructor(data?: Partial<Project>) {
        super();
        Object.assign(this, data);
    }
}

export const me = {
    fullName: 'Karol Rutkowski',
    profession: 'Software Engeneer',
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
            name: 'Nestjs',
            description: 'A progressive Node.js framework for building efficient, reliable and scalable server-side applications',
            icon: 'mdi-server-network',
            link: 'https://nestjs.com/',
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
    ],
    experiences: [
        {
            company: 'Company A',
            position: 'Full Stack Developer',
            duration: '2018 - Present',
        },
        {
            company: 'Company B',
            position: 'Frontend Developer',
            duration: '2016 - 2018',
        },
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
            startTime: new Date('2020-10-01'),
            endTime: new Date('2021-06-30'),
            repoLink: '',
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

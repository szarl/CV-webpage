import { TimePeriod } from './TimePeriod';

class Skill {
    name: string;
    experience: string;
    icon: string;
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
    skills: ['Vue.js', 'JavaScript', 'HTML', 'CSS', 'Node.js'],
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
};

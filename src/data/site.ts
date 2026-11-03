// All of the site's content lives here. Edit this file to update the site.

export const site = {
  name: 'Mohammed Naser Othman AlOthmanli',
  shortName: 'Mohammed AlOthmanli',
  role: 'Software engineer and data analyst',
  intro:
    'I build full-stack web and Android applications, and I turn data into clear answers.',
  about:
    'I have worked as a freelance software engineer since 2023 and a freelance data analyst since 2024. I hold a Bachelor of Science in Software Engineering from Al Ain University, and I work across the stack, from relational database design and REST APIs to the interfaces people use.',
  // Links stay hidden until they are filled in.
  email: 'hamoodn69@gmail.com',
  github: 'https://github.com/TheWastedArab',
  linkedin: 'https://www.linkedin.com/in/mohammed-naser-alothmanli',
};

export const categories = ['Software', 'Data', 'Mobile'] as const;

type Project = {
  title: string;
  category: (typeof categories)[number];
  description: string;
  tech: string[];
  link?: string;
  // Sample entries are not shown on the site. Remove this line once a project is real.
  sample?: boolean;
};

// TODO: replace these samples with your real projects.
// The Selected work section appears once at least one project is not a sample.
export const projects: Project[] = [
  {
    title: 'Web project title',
    category: 'Software',
    description: 'What you built, who it was for, and what came out of it.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    sample: true,
  },
  {
    title: 'Data project title',
    category: 'Data',
    description: 'The question you answered, the data you used, and what you found.',
    tech: ['Python', 'scikit-learn', 'Power BI'],
    sample: true,
  },
  {
    title: 'Android project title',
    category: 'Mobile',
    description: 'What the app does and the problem it solves.',
    tech: ['Java', 'Android Studio'],
    sample: true,
  },
];

export const experience = [
  { title: 'Freelance Data Analyst', period: 'January 2024 – Present' },
  { title: 'Freelance Software Engineer', period: 'January 2023 – Present' },
];

export const education = [
  { title: 'Bachelor of Science in Software Engineering', detail: 'Al Ain University' },
  { title: 'The Complete Full-Stack Web Development Bootcamp', detail: 'Udemy' },
];

export const skills = [
  { group: 'Languages', items: ['Java', 'JavaScript', 'Python', 'SQL', 'PHP', 'C', 'HTML', 'CSS'] },
  { group: 'Web and mobile', items: ['React', 'Node.js', 'Express', 'Laravel', 'Android'] },
  { group: 'Data', items: ['PostgreSQL', 'scikit-learn', 'Power BI', 'Tableau', 'Excel'] },
  { group: 'Engineering', items: ['REST APIs', 'System design', 'Testing and QA', 'Agile', 'Scrum'] },
  { group: 'Tools and cloud', items: ['Git', 'GitHub', 'Linux', 'AWS', 'Azure', 'Google Cloud'] },
  { group: 'Spoken', items: ['Arabic (native)', 'English (fluent)', 'French (basic)', 'German (basic)'] },
];

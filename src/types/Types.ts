interface Experience {
  company: string;
  companyLink: string;
  logo?: string;
  roles: {
    jobTitle: string;
    time: { start: Date; end?: Date; current?: boolean };
    details: string[];
  }[];
}

interface Project {
  title: string;
  link: string;
  tagline: string;
}

interface Contact {
  email: string;
  phone: string;
  linkedin: Social;
  github: Social;
  twitter: Social;
}

interface Social {
  userName: string;
  link: string;
}

interface Skill {
  title: string;
  level: number;
  icon: string;
  color: string;
}

interface Education {
  degree: string;
  school: string;
  duration: string;
}

interface Language {
  name: string;
  description: string;
}

export type {
  Experience,
  Project,
  Contact,
  Social,
  Skill,
  Education,
  Language,
};

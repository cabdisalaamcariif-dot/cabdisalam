export interface Project {
  id: string;
  title: string;
  category: 'Full Stack' | 'Frontend' | 'UI/UX' | 'Mobile Friendly';
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
  completionDate: string;
}

export interface Skill {
  id: string;
  name: string;
  percentage: number;
  category: string;
  description: string;
  color: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  description: string;
  skillsAcquired: string[];
  type: 'University' | 'Bootcamp' | 'Certification' | 'Self-Taught';
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  read: boolean;
  replied: boolean;
}

export interface ProfileData {
  name: string;
  title: string;
  subTitle: string;
  shortIntro: string;
  bioParagraph1: string;
  bioParagraph2: string;
  bioParagraph3: string;
  phone: string;
  email: string;
  location: string;
  avatarUrl: string;
  aboutPhotoUrl: string;
  availableForHire: boolean;
  experienceYears: number;
  projectsCompleted: number;
  happyClients: number;
  socialLinks: {
    github: string;
    linkedin: string;
    whatsapp: string;
    twitter: string;
    telegram: string;
  };
}

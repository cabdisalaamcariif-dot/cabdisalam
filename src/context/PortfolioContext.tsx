import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  ProfileData,
  Skill,
  Project,
  Education,
  ContactMessage,
} from '../types';
import {
  initialProfile,
  initialSkills,
  initialProjects,
  initialEducation,
  initialMessages,
} from '../data/initialData';

interface PortfolioContextType {
  // Public data
  profile: ProfileData;
  skills: Skill[];
  projects: Project[];
  education: Education[];
  messages: ContactMessage[];
  
  // Update methods
  updateProfile: (updated: Partial<ProfileData>) => void;
  
  // Projects
  addProject: (project: Omit<Project, 'id'>) => void;
  updateProject: (id: string, project: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  
  // Skills
  addSkill: (skill: Omit<Skill, 'id'>) => void;
  updateSkill: (id: string, skill: Partial<Skill>) => void;
  deleteSkill: (id: string) => void;
  
  // Education
  addEducation: (edu: Omit<Education, 'id'>) => void;
  updateEducation: (id: string, edu: Partial<Education>) => void;
  deleteEducation: (id: string) => void;
  
  // Messages
  addMessage: (msg: { name: string; email: string; subject: string; message: string }) => boolean;
  markMessageRead: (id: string) => void;
  markMessageReplied: (id: string) => void;
  deleteMessage: (id: string) => void;
  
  // Reset
  resetToDefaults: () => void;

  // Admin Auth & Navigation
  isAdminLoggedIn: boolean;
  loginAdmin: (password: string) => boolean;
  logoutAdmin: () => void;
  isAdminViewOpen: boolean;
  setIsAdminViewOpen: (open: boolean) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load state from localStorage or use initial defaults
  const [profile, setProfile] = useState<ProfileData>(() => {
    try {
      const saved = localStorage.getItem('cabdisalaam_profile');
      if (saved) {
        const parsed = JSON.parse(saved);
        // If previous cache had old name or unsplash placeholders, update to new profile
        if (
          parsed.name === 'Cabdisalaam Cariif' ||
          !parsed.avatarUrl ||
          parsed.avatarUrl.includes('unsplash.com') ||
          !parsed.name
        ) {
          const merged = { ...parsed, name: initialProfile.name, avatarUrl: initialProfile.avatarUrl, aboutPhotoUrl: initialProfile.aboutPhotoUrl, shortIntro: initialProfile.shortIntro, bioParagraph1: initialProfile.bioParagraph1 };
          localStorage.setItem('cabdisalaam_profile', JSON.stringify(merged));
          return merged;
        }
        return parsed;
      }
      return initialProfile;
    } catch {
      return initialProfile;
    }
  });

  const [skills, setSkills] = useState<Skill[]>(() => {
    try {
      const saved = localStorage.getItem('cabdisalaam_skills');
      if (saved) {
        const parsed = JSON.parse(saved);
        // ensure sorted descending
        return parsed.sort((a: Skill, b: Skill) => b.percentage - a.percentage);
      }
      return initialSkills;
    } catch {
      return initialSkills;
    }
  });

  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem('cabdisalaam_projects');
      return saved ? JSON.parse(saved) : initialProjects;
    } catch {
      return initialProjects;
    }
  });

  const [education, setEducation] = useState<Education[]>(() => {
    try {
      const saved = localStorage.getItem('cabdisalaam_education');
      return saved ? JSON.parse(saved) : initialEducation;
    } catch {
      return initialEducation;
    }
  });

  const [messages, setMessages] = useState<ContactMessage[]>(() => {
    try {
      const saved = localStorage.getItem('cabdisalaam_messages');
      return saved ? JSON.parse(saved) : initialMessages;
    } catch {
      return initialMessages;
    }
  });

  // Admin Auth State
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    try {
      return localStorage.getItem('cabdisalaam_admin_auth') === 'true';
    } catch {
      return false;
    }
  });

  const [isAdminViewOpen, setIsAdminViewOpen] = useState<boolean>(false);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('cabdisalaam_profile', JSON.stringify(profile));
    } catch (e) {
      console.error(e);
    }
  }, [profile]);

  useEffect(() => {
    try {
      localStorage.setItem('cabdisalaam_skills', JSON.stringify(skills));
    } catch (e) {
      console.error(e);
    }
  }, [skills]);

  useEffect(() => {
    try {
      localStorage.setItem('cabdisalaam_projects', JSON.stringify(projects));
    } catch (e) {
      console.error(e);
    }
  }, [projects]);

  useEffect(() => {
    try {
      localStorage.setItem('cabdisalaam_education', JSON.stringify(education));
    } catch (e) {
      console.error(e);
    }
  }, [education]);

  useEffect(() => {
    try {
      localStorage.setItem('cabdisalaam_messages', JSON.stringify(messages));
    } catch (e) {
      console.error(e);
    }
  }, [messages]);

  // Listen to hash change for hidden URL route e.g. #admin or #/admin
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#admin' || window.location.hash === '#/admin') {
        setIsAdminViewOpen(true);
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update Profile
  const updateProfile = (updated: Partial<ProfileData>) => {
    setProfile((prev) => ({ ...prev, ...updated }));
  };

  // Projects CRUD
  const addProject = (projectData: Omit<Project, 'id'>) => {
    const newProject: Project = {
      ...projectData,
      id: `proj-${Date.now()}`,
    };
    setProjects((prev) => [newProject, ...prev]);
  };

  const updateProject = (id: string, updated: Partial<Project>) => {
    setProjects((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updated } : item))
    );
  };

  const deleteProject = (id: string) => {
    setProjects((prev) => prev.filter((item) => item.id !== id));
  };

  // Skills CRUD (auto sort descending percentage)
  const addSkill = (skillData: Omit<Skill, 'id'>) => {
    const newSkill: Skill = {
      ...skillData,
      id: `skill-${Date.now()}`,
    };
    setSkills((prev) =>
      [...prev, newSkill].sort((a, b) => b.percentage - a.percentage)
    );
  };

  const updateSkill = (id: string, updated: Partial<Skill>) => {
    setSkills((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, ...updated } : item))
        .sort((a, b) => b.percentage - a.percentage)
    );
  };

  const deleteSkill = (id: string) => {
    setSkills((prev) => prev.filter((item) => item.id !== id));
  };

  // Education CRUD
  const addEducation = (eduData: Omit<Education, 'id'>) => {
    const newEdu: Education = {
      ...eduData,
      id: `edu-${Date.now()}`,
    };
    setEducation((prev) => [newEdu, ...prev]);
  };

  const updateEducation = (id: string, updated: Partial<Education>) => {
    setEducation((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updated } : item))
    );
  };

  const deleteEducation = (id: string) => {
    setEducation((prev) => prev.filter((item) => item.id !== id));
  };

  // Messages CRUD
  const addMessage = (msgData: { name: string; email: string; subject: string; message: string }) => {
    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    
    const newMsg: ContactMessage = {
      id: `msg-${Date.now()}`,
      name: msgData.name,
      email: msgData.email,
      subject: msgData.subject || 'Portfolio Inquiry',
      message: msgData.message,
      date: formattedDate,
      read: false,
      replied: false,
    };
    setMessages((prev) => [newMsg, ...prev]);
    return true;
  };

  const markMessageRead = (id: string) => {
    setMessages((prev) =>
      prev.map((item) => (item.id === id ? { ...item, read: true } : item))
    );
  };

  const markMessageReplied = (id: string) => {
    setMessages((prev) =>
      prev.map((item) => (item.id === id ? { ...item, replied: !item.replied } : item))
    );
  };

  const deleteMessage = (id: string) => {
    setMessages((prev) => prev.filter((item) => item.id !== id));
  };

  // Reset to default
  const resetToDefaults = () => {
    setProfile(initialProfile);
    setSkills(initialSkills);
    setProjects(initialProjects);
    setEducation(initialEducation);
    setMessages(initialMessages);
    localStorage.removeItem('cabdisalaam_profile');
    localStorage.removeItem('cabdisalaam_skills');
    localStorage.removeItem('cabdisalaam_projects');
    localStorage.removeItem('cabdisalaam_education');
    localStorage.removeItem('cabdisalaam_messages');
  };

  // Admin Auth Logic
  const loginAdmin = (password: string): boolean => {
    // Demo password 'admin' or 'admin123' or 'cabdisalaam'
    const validPasswords = ['admin', 'admin123', 'cabdisalaam', 'password123'];
    if (validPasswords.includes(password.trim())) {
      setIsAdminLoggedIn(true);
      try {
        localStorage.setItem('cabdisalaam_admin_auth', 'true');
      } catch (e) {
        console.error(e);
      }
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminLoggedIn(false);
    try {
      localStorage.removeItem('cabdisalaam_admin_auth');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <PortfolioContext.Provider
      value={{
        profile,
        skills,
        projects,
        education,
        messages,
        updateProfile,
        addProject,
        updateProject,
        deleteProject,
        addSkill,
        updateSkill,
        deleteSkill,
        addEducation,
        updateEducation,
        deleteEducation,
        addMessage,
        markMessageRead,
        markMessageReplied,
        deleteMessage,
        resetToDefaults,
        isAdminLoggedIn,
        loginAdmin,
        logoutAdmin,
        isAdminViewOpen,
        setIsAdminViewOpen,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};

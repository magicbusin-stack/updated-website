import { Brain, Users, Compass, Wrench, Target, Puzzle, MessageCircle, Laptop, Briefcase, GraduationCap } from "lucide-react";

// FRAMEWORK CONTENT for the interactive wheels on the Youth Skilling and Connect With Work pages.
// Segment names and skill lists come from the framework diagrams in the programme documents.
// The one-line descriptions are DRAFT wording: please have the programme team confirm them.
// When the revised framework arrives, edit only this file: add, remove or rename segments here
// and the wheel redraws itself (it supports 3 to 8 segments).

export const YOUTH_FRAMEWORK = {
  ariaLabel: "Youth Skilling Programme framework wheel",
  footnote: "Delivered in the 8-week programme (200 hours).",
  hub: {
    title: "21st Century Life and Employability Skills",
    category: "Programme Framework",
    color: "#E12228",
    icon: GraduationCap,
    centre: ["21st Century", "Life and", "Employability", "Skills"],
    centreSub: ["200 hours", "over 8 weeks"],
    desc: "The programme is delivered for 200 hours over 8 weeks and equips young people with these skills.",
  },
  segments: [
    {
      id: "thinking",
      title: "Ways of Thinking",
      lines: ["Ways of", "Thinking"],
      color: "#E12228",
      icon: Brain,
      desc: "How young people think through ideas, problems and choices.",
      items: [
        ["Creative Thinking", "Coming up with new ideas and approaches to everyday and workplace challenges."],
        ["Critical Thinking", "Questioning information and weighing evidence before forming a view."],
        ["Problem Solving", "Breaking a problem down and working through practical steps to solve it."],
        ["Decision Making", "Weighing options and their consequences to make sound choices."],
      ],
    },
    {
      id: "working",
      title: "Ways of Working",
      lines: ["Ways of", "Working"],
      color: "#1E9AD0",
      icon: Users,
      desc: "How young people work and communicate with others.",
      items: [
        ["Communication", "Expressing ideas clearly and listening well, in person and at work."],
        ["Collaboration", "Working with others towards a shared goal."],
      ],
    },
    {
      id: "living",
      title: "Skills for living in the world",
      lines: ["Skills for", "living in", "the world"],
      color: "#E01085",
      icon: Compass,
      desc: "Skills for building a career and living responsibly in society.",
      items: [
        ["Life and Career", "Planning for work and life, and finding a way through the career path ahead."],
        ["Personal & Social Responsibility", "Acting with integrity, respect and accountability towards self and others."],
      ],
    },
    {
      id: "tools",
      title: "Tools for Working",
      lines: ["Tools for", "Working"],
      color: "#6B8E00",
      icon: Wrench,
      desc: "The practical tools young people need to do well in a job.",
      items: [
        ["Digital Literacy", "Using digital tools and the internet confidently and safely."],
        ["Communicative English", "Building spoken English for the workplace and for interviews."],
        ["Financial Literacy", "Understanding money basics such as budgeting, saving and banking."],
      ],
    },
  ],
};

export const CWW_FRAMEWORK = {
  ariaLabel: "Connect With Work life and employability skills wheel",
  footnote: "Covered in the 7–8 days of intensive offline sessions.",
  hub: {
    title: "Life & Employability Skills Education",
    category: "Programme Framework",
    color: "#E12228",
    icon: GraduationCap,
    centre: ["Life &", "Employability", "Skills Education"],
    centreSub: ["Youth Agency", "and Empowerment"],
    desc: "Connect With Work builds these skills in 7–8 days of intensive offline sessions covering 21st century life and employability skills, strengthening youth agency and empowerment.",
  },
  segments: [
    {
      id: "goals",
      title: "Goal Setting & Time Management",
      lines: ["Goal Setting", "& Time", "Management"],
      color: "#F97316",
      icon: Target,
      desc: "Setting clear goals and managing time to follow through on them.",
      items: [],
    },
    {
      id: "problem",
      title: "Problem Solving",
      lines: ["Problem", "Solving"],
      color: "#1E9AD0",
      icon: Puzzle,
      desc: "Working through everyday and workplace problems with practical steps.",
      items: [],
    },
    {
      id: "communication",
      title: "Communication Skills",
      lines: ["Communi-", "cation", "Skills"],
      color: "#E01085",
      icon: MessageCircle,
      desc: "Speaking and listening clearly and with confidence, at work and in interviews.",
      items: [],
    },
    {
      id: "digital",
      title: "Basic Digital & Financial Literacy",
      lines: ["Basic Digital", "& Financial", "Literacy"],
      color: "#9333EA",
      icon: Laptop,
      desc: "Using digital tools with confidence and understanding money basics such as banking and budgeting.",
      items: [],
    },
    {
      id: "interview",
      title: "Interview Preparation",
      lines: ["Interview", "Preparation"],
      color: "#0D9488",
      icon: Briefcase,
      desc: "Getting ready for job interviews, from presenting yourself well to answering common questions.",
      items: [],
    },
  ],
};

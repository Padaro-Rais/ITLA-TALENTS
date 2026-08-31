export interface NavLink {
  label: string;
  path: string;
  children?: NavLink[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Sector {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  positions: number;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
  duration: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  type: 'enterprise' | 'school' | 'training' | 'agency';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

export interface Statistic {
  id: string;
  value: number;
  suffix?: string;
  label: string;
  icon: string;
}

export interface Value {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string;
  social: {
    linkedin: string;
    facebook: string;
    twitter: string;
    instagram: string;
  };
}

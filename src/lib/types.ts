// Location Types
export interface Location {
  city: string;
  slug: string;
  address: string;
  phone: string;
  email: string;
  areaManager: {
    name: string;
    title: string;
    image?: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  benefits?: string[];
  testimonials?: string[];
}

// Benefit Types
export interface Benefit {
  title: string;
  slug: string;
  icon: string;
  shortDescription: string;
  seoTitle: string;
  seoDescription: string;
}

// Testimonial Types
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  area: "pflege" | "paedagogik" | "medizin";
  quote: string;
  image?: string;
  video?: string;
  location?: string;
}

// Job Types
export interface Job {
  id: string;
  title: string;
  location: string;
  area: "pflege" | "paedagogik" | "medizin";
  type: "vollzeit" | "teilzeit" | "minijob";
  description: string;
  postedAt: string;
}

// Form Types
export interface ContactFormData {
  type: "bewerber" | "kunde";
  name: string;
  email: string;
  phone?: string;
  message: string;
  location?: string;
}

export interface ApplicationFormData {
  area: "pflege" | "paedagogik" | "medizin";
  qualification: string;
  region: string;
  name: string;
  email: string;
  phone: string;
}

// Quiz Types
export interface QuizQuestion {
  id: string;
  myth: string;
  answer: boolean;
  explanation: string;
  fact: string;
}

// Navigation Types
export type UserMode = "bewerber" | "unternehmen";

export interface NavItem {
  label: string;
  href: string;
  mode?: UserMode;
  children?: NavItem[];
}

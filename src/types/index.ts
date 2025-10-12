export interface Automation {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
}

export interface AutomationDetail {
  id: string;
  title: string;
  overview: string;
  detailedDescription: string;
  capabilities: string[];
  useCases: string[];
  pricing: PricingTier[];
}
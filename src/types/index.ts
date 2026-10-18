export type DeviceType = 'desktop' | 'tablet' | 'mobile';

export type ActiveTab = 'preview' | 'code' | 'templates' | 'deployments';

export type AppCategory = 
  | 'E-Commerce' 
  | 'SaaS & Dashboard' 
  | 'Health & Clinic' 
  | 'Booking & Hospitality' 
  | 'Restaurant & Food' 
  | 'Real Estate' 
  | 'Portfolio & Agency' 
  | 'Custom';

export type AppScale = 'micro' | 'standard' | 'enterprise';

export interface AppTemplate {
  id: string;
  name: string;
  nameAm: string;
  tagline: string;
  taglineAm: string;
  category: AppCategory;
  categoryAm: string;
  description: string;
  descriptionAm: string;
  iconName: string;
  badge: string;
  badgeAm: string;
  features: string[];
  featuresAm: string[];
  html: string;
}

export interface GeneratedApp {
  id: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  features: string[];
  html: string;
  suggestedPrompts?: string[];
  createdAt: string;
  lastModified: string;
}

export interface DeployedAppInfo {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  url: string;
  deployedAt: string;
  status: 'active' | 'updating' | 'stopped';
  metrics: {
    cpu: string;
    ram: string;
    latency: string;
    requests: number;
    region: string;
  };
}

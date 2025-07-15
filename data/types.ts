export interface HeroData {
  headline: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  heroImage: string;
  heroImageAlt: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  link: string;
  description: string;
}

export interface AboutData {
  title: string;
  content: string;
  image: string;
  imageAlt: string;
}

export interface ContactData {
  title: string;
  email: string;
  phone: string;
  address: string;
}

export interface CompanyData {
  name: string;
  hero: HeroData;
  services: Service[];
  projects: Project[];
  about: AboutData;
  contact: ContactData;
}
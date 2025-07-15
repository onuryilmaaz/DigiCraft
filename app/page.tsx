'use client';

import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import { companyData } from '@/data/data';

export default function Home() {
  return (
    <Layout>
      <HeroSection data={companyData.hero} />
      <ServicesSection services={companyData.services} />
      <ProjectsSection projects={companyData.projects} />
      <AboutSection data={companyData.about} />
      <ContactSection data={companyData.contact} />
    </Layout>
  );
}
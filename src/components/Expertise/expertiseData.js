// src/components/Expertise/expertiseData.js
import { Megaphone, MousePointerClick, Settings, ChartNoAxesCombined } from 'lucide-react';

export const servicesData = [
  {
    id: 'marketing-ia',
    title: 'Marketing IA',
    description: 'Des stratégies marketing intelligentes, basées sur la donnée et l\'intelligence artificielle.',
    Icon: Megaphone,
  },
  {
    id: 'smart-ads',
    title: 'Smart Ads',
    description: 'Des campagnes publicitaires ciblées pour améliorer votre retour sur investissement.',
    Icon: MousePointerClick,
  },
  {
    id: 'automatisation',
    title: 'Automatisation',
    description: 'Automatisez vos processus marketing et gagnez en efficacité.',
    Icon: Settings,
  },
  {
    id: 'business-growth',
    title: 'Business & Growth',
    description: 'Pilotez votre croissance avec des solutions sur mesure.',
    Icon: ChartNoAxesCombined,
  }
];

export const benefitsData = [
  { id: 'strategie', text: 'Stratégie sur mesure', icon: 'trophy' },
  { id: 'resultats', text: 'Résultats concrets', icon: 'zap' },
  { id: 'partenariat', text: 'Partenariat durable', icon: 'handshake' },
];
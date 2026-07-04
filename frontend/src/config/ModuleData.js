import LeadsDetails from '@/pages/Leads/LeadsDetails';
import { Headset, Handshake, Ad, MailPlus, Settings, Users } from 'lucide-react';

const MODULES = {
  leads: {
    key: 'leads',
    label: 'Leads',
    path: '/leads',
    icon: Headset,
    title: 'Leads',
    description: 'Manage all your leads from here',
    component: LeadsDetails,
  },
  deals: {
    key: 'deals',
    label: 'Deals',
    path: '/deals',
    icon: Handshake,
    title: 'Deals',
    description: 'Track deals in progress',
    component: null, // fill in as you build each page
  },
  // ...campaigns, email_templates, settings, users — same shape
};

export default MODULES;
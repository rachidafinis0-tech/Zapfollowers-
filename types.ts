
import React from 'react';

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  icon: React.ComponentType<{ className?: string }>;
}

export enum Platform {
  Instagram = 'Instagram',
  TikTok = 'TikTok',
  Facebook = 'Facebook',
}

export interface PlatformData {
  name: Platform;
  icon: React.ComponentType<{ className?: string }>;
  services: Service[];
}

export interface Testimonial {
  id: number;
  name: string;
  handle: string;
  avatarUrl: string;
  text: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

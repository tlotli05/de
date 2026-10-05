export interface Doctor {
  id: string;
  name: string;
  role: string;
  degrees: string;
  university: string;
  specialties: string[];
  bio: string;
  image: string;
  registrationNumber: string;
  consultationDays: string[];
  roomNumber: string;
}

export interface MedicalService {
  id: string;
  title: string;
  description: string;
  icon: string;
  duration: string;
  details: string;
  keyBenefits: string[];
  practitioners: string[];
  preparationTip: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  suburb: string;
  visitType: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'billing' | 'appointments';
}

export interface BookingData {
  serviceId: string;
  doctorId: string;
  date: string;
  timeSlot: string;
  fullName: string;
  email: string;
  phone: string;
  medicalAid: string;
  medicalAidNumber?: string;
  notes?: string;
}

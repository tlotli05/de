import { Doctor, MedicalService, Testimonial, FaqItem } from '../types';

export const DOCTORS: Doctor[] = [
  {
    id: 'maya-daniels',
    name: 'Dr. Maya Daniels',
    role: 'General Practitioner',
    degrees: 'MBChB',
    university: 'University of Cape Town',
    specialties: ['Preventative Medicine', 'Family Health', 'Cardiometabolic Wellness'],
    bio: 'Dr. Maya Daniels graduated from the University of Cape Town with distinction. She completed her clinical residency at Groote Schuur Hospital before establishing a private practice focused on preventative health and proactive patient wellness. Dr. Daniels believes that exceptional medicine combines clinical precision with the time to listen deeply to each patient’s story.',
    image: '/src/assets/images/doctor_maya_daniels_1791242034883.jpg',
    registrationNumber: 'MP 0689241',
    consultationDays: ['Monday', 'Tuesday', 'Wednesday', 'Friday'],
    roomNumber: 'Suite 301'
  },
  {
    id: 'ethan-williams',
    name: 'Dr. Ethan Williams',
    role: 'General Practitioner',
    degrees: 'MBChB',
    university: 'Stellenbosch University',
    specialties: ['Chronic Disease Management', 'Cardiovascular Screening', 'Executive Wellness'],
    bio: 'Educated at Stellenbosch University and Tygerberg Hospital, Dr. Ethan Williams brings over 14 years of clinical experience in general practice and chronic care management. He has a dedicated interest in hypertension, metabolic syndrome, and evidence-guided preventative diagnostics, helping patients manage complex conditions with clarity and dignity.',
    image: '/src/assets/images/doctor_ethan_williams_1791242043725.jpg',
    registrationNumber: 'MP 0594318',
    consultationDays: ['Monday', 'Wednesday', 'Thursday', 'Saturday'],
    roomNumber: 'Suite 302'
  },
  {
    id: 'leila-naidoo',
    name: 'Dr. Leila Naidoo',
    role: 'Women’s Health Practitioner',
    degrees: 'MBChB, Dip Obst (SA)',
    university: 'University of Cape Town',
    specialties: ['Women’s Health', 'Hormonal Wellness', 'Contraceptive Health', 'Postpartum Care'],
    bio: 'Dr. Leila Naidoo holds her medical degree from the University of Cape Town alongside a postgraduate Diploma in Obstetrics from the Colleges of Medicine of South Africa. She has spent the past decade fostering a gentle, highly confidential practice dedicated to women across all life stages, from early reproductive years through menopause.',
    image: '/src/assets/images/doctor_leila_naidoo_1791242052095.jpg',
    registrationNumber: 'MP 0712490',
    consultationDays: ['Tuesday', 'Thursday', 'Friday', 'Saturday'],
    roomNumber: 'Suite 303'
  }
];

export const SERVICES: MedicalService[] = [
  {
    id: 'general-consultations',
    title: 'General Consultations',
    description: 'Professional medical consultations for adults and families.',
    icon: 'Stethoscope',
    duration: '30 – 45 min',
    details: 'Comprehensive, unrushed consultations addressing acute illnesses, infections, diagnostic investigations, prescription reviews, and general physical wellbeing in a calm environment.',
    keyBenefits: [
      'Same-day acute appointments available',
      'Thorough clinical examinations without time pressure',
      'Electronic prescription direct to your preferred pharmacy',
      'Coordination of diagnostic pathology & radiology'
    ],
    practitioners: ['Dr. Maya Daniels', 'Dr. Ethan Williams'],
    preparationTip: 'Bring your current medication list and any recent laboratory test results.'
  },
  {
    id: 'preventative-healthcare',
    title: 'Preventative Healthcare',
    description: 'Routine health assessments, screenings and wellness guidance.',
    icon: 'ShieldCheck',
    duration: '45 – 60 min',
    details: 'Proactive health management designed to identify early risk factors before symptoms arise, including blood pressure monitoring, cholesterol profiles, glycemic screenings, and biometric analyses.',
    keyBenefits: [
      'Evidence-based risk stratification models',
      'Personalised nutrition and lifestyle action plans',
      'Annual preventative health roadmap',
      'Vitality & medical aid wellness point compliance'
    ],
    practitioners: ['Dr. Maya Daniels', 'Dr. Ethan Williams'],
    preparationTip: 'A fasting blood draw may be required; our team will advise prior to your visit.'
  },
  {
    id: 'womens-health',
    title: "Women's Health",
    description: "Compassionate healthcare focused on women's individual needs.",
    icon: 'HeartHandshake',
    duration: '40 – 60 min',
    details: 'Dedicated clinical care covering cervical screenings (liquid-based cytology & HPV co-testing), breast examinations, fertility guidance, contraceptive counseling, and perimenopause/menopause hormone therapy.',
    keyBenefits: [
      'Gentle, sensitive clinical approach in private suites',
      'State-of-the-art diagnostic screening partnerships',
      'Evidence-based hormone replacement therapy (HRT)',
      'Holistic support for reproductive and pelvic health'
    ],
    practitioners: ['Dr. Leila Naidoo'],
    preparationTip: 'Consultations are scheduled with ample time for open, comfortable discussion.'
  },
  {
    id: 'mens-health',
    title: "Men's Health",
    description: 'Private, confidential healthcare and preventative support.',
    icon: 'Activity',
    duration: '30 – 45 min',
    details: 'Discreet and comprehensive healthcare addressing prostate health, cardiovascular risk profiling, hormone level evaluations, metabolic health, and stress-related conditions.',
    keyBenefits: [
      'Confidential consultations in a discreet setting',
      'Age-appropriate PSA screening & risk evaluation',
      'Cardiometabolic assessments and stress biomarkers',
      'Supportive approach to longevity and physical resilience'
    ],
    practitioners: ['Dr. Ethan Williams'],
    preparationTip: 'You may request combined morning blood tests alongside your consultation.'
  },
  {
    id: 'chronic-condition-management',
    title: 'Chronic Condition Management',
    description: 'Ongoing support for patients managing long-term conditions.',
    icon: 'FileHeart',
    duration: '30 – 45 min',
    details: 'Longitudinal, coordinated care for diabetes mellitus, hypertension, hyperlipidemia, asthma, thyroid disorders, and autoimmune conditions with regular monitoring and treatment optimisation.',
    keyBenefits: [
      'Dedicated chronic medicine repeat coordination',
      'Direct integration with medical aid Chronic Disease Benefit programs',
      'Quarterly or biannual treatment reviews',
      'Close multi-disciplinary coordination with allied specialists'
    ],
    practitioners: ['Dr. Ethan Williams', 'Dr. Maya Daniels'],
    preparationTip: 'Please bring your medical aid chronic registration documents if applicable.'
  },
  {
    id: 'health-assessments',
    title: 'Health Assessments',
    description: 'Comprehensive assessments designed around your individual health needs.',
    icon: 'ClipboardCheck',
    duration: '60 – 90 min',
    details: 'An exhaustive full-body audit incorporating resting ECG, lung function spirometry, comprehensive blood chemistries, visual acuity, and clinical cardiovascular review.',
    keyBenefits: [
      'In-depth 12-page bespoke medical summary report',
      'Baseline tracking against normative demographic cohorts',
      'Priority follow-up review consultation',
      'Suitable for executive physicals and life cover requirements'
    ],
    practitioners: ['Dr. Maya Daniels', 'Dr. Ethan Williams'],
    preparationTip: 'Arrive in comfortable clothing; fasting protocol will be confirmed 48 hours prior.'
  },
  {
    id: 'travel-occupational-health',
    title: 'Travel & Occupational Health',
    description: 'Medical assessments and health guidance for travel and workplace requirements.',
    icon: 'Globe',
    duration: '30 min',
    details: 'Destination-specific immunisations, malaria prophylaxis, international health clearance certificates, and certified corporate pre-employment fitness-to-work examinations.',
    keyBenefits: [
      'Up-to-date WHO & South African travel disease advisories',
      'Certified yellow fever & regional travel certificates',
      'Standardised executive occupational clearance',
      'Custom travel first-aid kits and emergency advisories'
    ],
    practitioners: ['Dr. Ethan Williams'],
    preparationTip: 'Please bring your full travel itinerary and previous vaccination record.'
  },
  {
    id: 'specialist-referrals',
    title: 'Specialist Referrals',
    description: 'Access to a trusted network of specialists when additional care is required.',
    icon: 'Sparkles',
    duration: '30 min',
    details: 'Seamless triage and peer-to-peer handover to premier cardiologists, dermatologists, orthopedic surgeons, neurologists, and radiologists across Cape Town’s southern suburbs and city centres.',
    keyBenefits: [
      'Established connections with Cape Town top academic specialists',
      'Detailed clinical handover dossier to expedite appointment triage',
      'Continuous post-specialist review and care continuity',
      'Radiology expedited booking support (Kingsbury & Claremont Hospital)'
    ],
    practitioners: ['Dr. Maya Daniels', 'Dr. Ethan Williams', 'Dr. Leila Naidoo'],
    preparationTip: 'Any prior specialist notes or MRI/CT scan reports will assist in precise triage.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'From booking my appointment to seeing the doctor, everything felt incredibly professional and effortless. The consultation was thorough and completely unhurried.',
    author: 'Sarah M.',
    suburb: 'Cape Town',
    visitType: 'Preventative Health Assessment'
  },
  {
    id: '2',
    quote: "I've never experienced a medical practice that felt this modern and welcoming. Dr. Williams took the time to explain every detail of my treatment plan.",
    author: 'Michael R.',
    suburb: 'Claremont',
    visitType: 'Chronic Condition Management'
  },
  {
    id: '3',
    quote: 'The level of attentiveness from Dr. Daniels was extraordinary. She listened without rushing, explained my blood work clearly, and followed up personally.',
    author: 'David V.',
    suburb: 'Constantia',
    visitType: 'Executive Medical'
  },
  {
    id: '4',
    quote: 'Dr. Naidoo provided the kindest, most thorough women’s health consultation I have had in South Africa. The clinic space itself is peaceful and serene.',
    author: 'Elena K.',
    suburb: 'Rondebosch',
    visitType: "Women's Health Screening"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Do I need an appointment?',
    answer: 'Yes, Aurelia Medical Suite operates strictly by appointment to ensure zero waiting room congestion and to protect patient privacy. Same-day appointments are reserved each morning for urgent medical concerns.',
    category: 'appointments'
  },
  {
    id: 'faq-2',
    question: 'Do you accept medical aid?',
    answer: 'Yes. We are registered with all major South African medical schemes, including Discovery Health, Momentum, Bonitas, Fedhealth, Bankmed, and Medscheme. For contracted plans we submit claims directly on your behalf; self-pay options with immediate detailed statement receipts are also available.',
    category: 'billing'
  },
  {
    id: 'faq-3',
    question: 'What should I bring to my appointment?',
    answer: 'Please bring your South African Identity Document or Passport, your current Medical Aid membership card, and a list of any chronic medications or supplements you take. If you have recent pathology or imaging results, having those available is helpful.',
    category: 'general'
  },
  {
    id: 'faq-4',
    question: 'Do you treat children?',
    answer: 'Yes, our general practitioners treat children from age 2 upwards for general pediatric health, acute childhood illnesses, respiratory infections, and routine developmental checks. For specialized neonatal care, we coordinate with trusted pediatric colleagues.',
    category: 'general'
  },
  {
    id: 'faq-5',
    question: 'Can I request a specific doctor?',
    answer: 'Absolutely. When booking online or over the telephone, you may select Dr. Maya Daniels, Dr. Ethan Williams, or Dr. Leila Naidoo depending on their consulting days and your personal care preference.',
    category: 'appointments'
  },
  {
    id: 'faq-6',
    question: 'Where are you located?',
    answer: 'We are situated at 123 Main Road, Claremont, Cape Town (Suite 302, 3rd Floor, Claremont Medical Pavilion). Secure basement parking is available on-site with direct elevator access to our suite.',
    category: 'general'
  },
  {
    id: 'faq-7',
    question: 'How can I reschedule my appointment?',
    answer: 'You may easily reschedule or cancel your appointment online through the link provided in your confirmation email or by calling our reception team on 021 555 0148. We appreciate at least 2 hours notice to offer the slot to other patients in need.',
    category: 'appointments'
  }
];

export const MEDICAL_AID_PROVIDERS = [
  'Discovery Health (KeyCare, Classic, Essential, Coastal)',
  'Momentum Health',
  'Bonitas Medical Fund',
  'Fedhealth',
  'Bankmed',
  'Medscheme (Wooltru, Barloworld, AECI)',
  'Bestmed Medical Scheme',
  'Private / Self-Paying (Direct Statement)'
];

export const TIME_SLOTS = [
  '08:30 AM',
  '09:15 AM',
  '10:00 AM',
  '10:45 AM',
  '11:30 AM',
  '02:00 PM',
  '02:45 PM',
  '03:30 PM',
  '04:15 PM'
];

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickInfoStrip } from './components/QuickInfoStrip';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedExperience } from './components/FeaturedExperience';
import { DoctorsSection } from './components/DoctorsSection';
import { CapeTownSection } from './components/CapeTownSection';
import { AppointmentSection } from './components/AppointmentSection';
import { PatientInfoSection } from './components/PatientInfoSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ServiceModal } from './components/ServiceModal';
import { DoctorModal } from './components/DoctorModal';
import { DiscoverModal } from './components/DiscoverModal';
import { PrivacyModal } from './components/PrivacyModal';
import { Doctor, MedicalService } from './types';
import { SERVICES } from './data/mockData';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>();
  const [selectedDoctorId, setSelectedDoctorId] = useState<string | undefined>();

  const [activeServiceForModal, setActiveServiceForModal] = useState<MedicalService | null>(null);
  const [activeDoctorForModal, setActiveDoctorForModal] = useState<Doctor | null>(null);
  const [discoverModalOpen, setDiscoverModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  const handleOpenBooking = (serviceId?: string, doctorId?: string) => {
    setSelectedServiceId(serviceId);
    setSelectedDoctorId(doctorId);
    setBookingModalOpen(true);
  };

  const handleSelectServiceFromQuickStrip = (serviceId: string) => {
    const found = SERVICES.find((s) => s.id === serviceId);
    if (found) {
      setActiveServiceForModal(found);
    } else {
      handleOpenBooking(serviceId);
    }
  };

  const handleOpenFaq = () => {
    const el = document.getElementById('faq');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#111827] flex flex-col font-sans selection:bg-[#14746F]/15 selection:text-[#0C182A]">
      {/* 3-Zone Sticky Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Body */}
      <main className="flex-1">
        {/* Cinematic Full-width Hero */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Quick Information Strip with 4 sleek cards */}
        <QuickInfoStrip onSelectService={handleSelectServiceFromQuickStrip} />

        {/* About Section: Story, Consultation Photo, 3 Animated Stats */}
        <AboutSection onOpenBooking={() => handleOpenBooking()} />

        {/* Services Section: 8 Medical Disciplines */}
        <ServicesSection
          onSelectService={(service) => setActiveServiceForModal(service)}
          onBookService={(serviceId) => handleOpenBooking(serviceId)}
        />

        {/* Featured Experience Section: Split Screen Facility Showcase */}
        <FeaturedExperience
          onOpenDiscoverModal={() => setDiscoverModalOpen(true)}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Doctors Section: 3 Care Team Members with Profiles */}
        <DoctorsSection
          onSelectDoctor={(doctor) => setActiveDoctorForModal(doctor)}
          onBookWithDoctor={(doctorId) => handleOpenBooking(undefined, doctorId)}
        />

        {/* Cape Town / Claremont Section: Map, Location, Hours & Directions */}
        <CapeTownSection />

        {/* Premium Dark Appointment CTA Section */}
        <AppointmentSection onOpenBooking={() => handleOpenBooking()} />

        {/* Patient Information Section: 5-step visit journey & guides */}
        <PatientInfoSection
          onOpenFaq={handleOpenFaq}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Patient Testimonials Carousel */}
        <TestimonialsSection />

        {/* Minimal Accordion FAQ Section */}
        <FaqSection />
      </main>

      {/* Sophisticated Dark Footer */}
      <Footer
        onOpenPrivacyModal={() => setPrivacyModalOpen(true)}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedServiceId={selectedServiceId}
        preselectedDoctorId={selectedDoctorId}
      />

      <ServiceModal
        service={activeServiceForModal}
        onClose={() => setActiveServiceForModal(null)}
        onBookService={(serviceId) => handleOpenBooking(serviceId)}
      />

      <DoctorModal
        doctor={activeDoctorForModal}
        onClose={() => setActiveDoctorForModal(null)}
        onBookWithDoctor={(doctorId) => handleOpenBooking(undefined, doctorId)}
      />

      <DiscoverModal
        isOpen={discoverModalOpen}
        onClose={() => setDiscoverModalOpen(false)}
        onOpenBooking={() => handleOpenBooking()}
      />

      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
    </div>
  );
}

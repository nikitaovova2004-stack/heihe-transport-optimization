import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import TrackingSection from '@/components/TrackingSection'
import FleetSection from '@/components/FleetSection'
import RoutesSection from '@/components/RoutesSection'
import ServicesSection from '@/components/ServicesSection'
import CasesSection from '@/components/CasesSection'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <TrackingSection />
      <FleetSection />
      <RoutesSection />
      <ServicesSection />
      <CasesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Index
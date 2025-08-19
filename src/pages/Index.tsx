import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import FleetSection from '@/components/FleetSection'
import RoutesSection from '@/components/RoutesSection'
import ServicesSection from '@/components/ServicesSection'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FleetSection />
      <RoutesSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Index
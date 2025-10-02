//import Header from '../components/Header'
import Hero from '../components/Hero'
import AnimatedLogo from '../components/AnimatedLogo'
import WhatIsSNSManagement from '../components/WhatIsSNSManagement'
import ProblemSolution from '../components/ProblemSolution'
import Services from '../components/Services'
import Achievements from '../components/Achievements'
import CompanyStrengths from '../components/CompanyStrengths'
import ConsultationFlow from '../components/ConsultationFlow'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
     
      <main>
        <Hero />
        <AnimatedLogo />
        <WhatIsSNSManagement />
        <ProblemSolution />
        <Services />
        <Achievements />
        <CompanyStrengths />
        <ConsultationFlow />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

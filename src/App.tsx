import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Specialties from "@/components/Specialties"
import Pricing from "@/components/Pricing"
import ContactFAQ from "@/components/ContactFAQ"
import Footer from "@/components/Footer"

export function App() {
  return (
    <div className="min-h-svh bg-background">
      <Navbar />
      <main>
        <Hero />
        <Specialties />
        <Pricing />
        <ContactFAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App

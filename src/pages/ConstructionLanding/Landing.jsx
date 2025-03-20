import About from "../../components/About/About"
import Contact from "../../components/Contact/Contact"
import WhatsAppButton from "../../components/Contact/WhatsAppButton"
import Footer from "../../components/Footer/Footer"
import Home from "../../components/Home/Home"
import Navigation from "../../components/Navigation/Navigation"
import Projects from "../../components/Projects/Projects"
import Services from "../../components/Services/Services"

const Landing = () => {
    return (
        <div className="relative min-h-screen bg-stone-100">
            <WhatsAppButton />
            <Navigation />
            <Home />
            <About />
            <Services />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default Landing
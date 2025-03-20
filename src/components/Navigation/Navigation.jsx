import { Menu, X } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const Navigation = () => {

    const [activeSection, setActiveSection] = useState("home")
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const sections = ["Inicio", "Nosotros", "Servicios", "Proyectos", "Contacto"]
    const sectionRefs = useRef({})


    useEffect(() => {
            // Set up intersection observer to detect which section is in view
            const observerOptions = {
                root: null,
                rootMargin: "-50% 0px",
                threshold: 0,
            }
    
            const observerCallback = (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id
                        setActiveSection(id)
                    }
                })
            }
    
            const observer = new IntersectionObserver(observerCallback, observerOptions)
    
            // Observe all sections
            sections.forEach((section) => {
                const element = document.getElementById(section)
                if (element) {
                    sectionRefs.current[section] = element
                    observer.observe(element)
                }
            })
    
            return () => {
                sections.forEach((section) => {
                    const element = sectionRefs.current[section]
                    if (element) observer.unobserve(element)
                })
            }
        }, [sections])

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
            setMobileMenuOpen(false)
        }
    }

    return (
        <>
            <nav className="fixed top-4 left-0 right-0 z-50 mx-auto w-fit px-6 py-2 backdrop-blur-md bg-stone-800/60 rounded-full shadow-md">
                <div className="hidden md:flex items-center space-x-8">
                    {sections.map((section) => (
                        <button
                            key={section}
                            onClick={() => scrollToSection(section)}
                            className={`text-sm font-medium capitalize transition-colors ${activeSection === section ? "text-amber-600" : "text-white hover:text-amber-500"
                            }`}
                            >
                            {section}
                        </button>
                    ))}
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden flex justify-between items-center">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white p-2">
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>
            {/* Mobile menu */ }
            {
                mobileMenuOpen && (
                    <div className="fixed inset-0 z-40 bg-stone-800/95 flex flex-col items-center justify-center space-y-6 md:hidden">
                        {sections.map((section) => (
                            <button
                            key={section}
                            onClick={() => scrollToSection(section)}
                            className={`text-xl font-medium capitalize transition-colors ${activeSection === section ? "text-amber-600" : "text-white hover:text-amber-500"
                            }`}
                            >
                                {section}
                            </button>
                        ))}
                    </div>
                )
            }
        </>
    )
}

export default Navigation
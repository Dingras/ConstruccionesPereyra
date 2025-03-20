import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"

export default function ConstructionLanding() {
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
        <div className="relative min-h-screen bg-stone-100">
            {/* Floating Navigation */}
            <nav className="fixed top-4 left-0 right-0 z-50 mx-auto w-fit px-6 py-2 backdrop-blur-md bg-white/20 rounded-full shadow-md">
                <div className="hidden md:flex items-center space-x-8">
                    {sections.map((section) => (
                        <button
                            key={section}
                            onClick={() => scrollToSection(section)}
                            className={`text-sm font-medium capitalize transition-colors ${activeSection === section ? "text-amber-600" : "text-stone-700 hover:text-amber-500"
                                }`}
                        >
                            {section}
                        </button>
                    ))}
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden flex justify-between items-center">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-stone-800 p-2">
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-white/95 flex flex-col items-center justify-center space-y-6 md:hidden">
                    {sections.map((section) => (
                        <button
                            key={section}
                            onClick={() => scrollToSection(section)}
                            className={`text-xl font-medium capitalize transition-colors ${activeSection === section ? "text-amber-600" : "text-stone-700 hover:text-amber-500"
                                }`}
                        >
                            {section}
                        </button>
                    ))}
                </div>
            )}

            {/* Home Section with Full Screen Video */}
            <section id="Inicio" className="relative h-screen w-full overflow-hidden">
                <div className="absolute inset-0 z-0">
                    {/* <video autoPlay muted loop playsInline className="h-full w-full object-cover">
                    </video> */}
                    <img src="/work_10.jpg" alt="Construcción" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Construcciones <span className="text-amber-500">Pereyra</span>
                    </h1>
                    <p className="max-w-2xl text-lg md:text-xl mb-8">
                        Somos expertos en construcción con más de 25 años de experiencia. Transformamos sus ideas en estructuras
                        sólidas y duraderas con los más altos estándares de calidad.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/Contacto"
                            onClick={(e) => {
                                e.preventDefault()
                                scrollToSection("Contacto")
                            }}
                            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-md font-medium transition-colors"
                        >
                            Contáctanos
                        </Link> 
                        <Link
                            to="/Proyectos"
                            onClick={(e) => {
                                e.preventDefault()
                                scrollToSection("Proyectos")
                            }}
                            className="bg-transparent hover:bg-white/10 border border-white text-white px-8 py-3 rounded-md font-medium transition-colors"
                        >
                            Ver Proyectos
                        </Link>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="Nosotros" className="py-20 px-4 md:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        Sobre <span className="text-amber-600">Nosotros</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">Nuestra Historia</h3>
                            <p className="text-stone-700 mb-6">
                                Fundada en 1998, nuestra empresa ha crecido hasta convertirse en un referente en el sector de la
                                construcción. Comenzamos como una pequeña empresa familiar y hoy contamos con un equipo de más de 200
                                profesionales altamente cualificados.
                            </p>
                            <p className="text-stone-700">
                                Nuestra filosofía se basa en la excelencia, la innovación y el compromiso con nuestros clientes. Cada
                                proyecto es único y recibe toda nuestra atención y dedicación.
                            </p>
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-xl">
                            <img src="team_1.jpg" alt="Equipo de construcción" className="w-full h-auto" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="Servicios" className="py-20 px-4 md:px-8 bg-stone-100">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        Nuestros <span className="text-amber-600">Servicios</span>
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Construcción Residencial",
                                description:
                                    "Casas y edificios residenciales con los más altos estándares de calidad y eficiencia energética.",
                                icon: "🏠",
                            },
                            {
                                title: "Proyectos Comerciales",
                                description:
                                    "Oficinas, centros comerciales y espacios de retail diseñados para maximizar la funcionalidad y el atractivo.",
                                icon: "🏢",
                            },
                            {
                                title: "Infraestructura",
                                description:
                                    "Puentes, carreteras y obras públicas construidas para durar y servir a la comunidad durante generaciones.",
                                icon: "🌉",
                            },
                            {
                                title: "Renovaciones",
                                description:
                                    "Transformamos espacios existentes para darles nueva vida y funcionalidad con un enfoque moderno.",
                                icon: "🔨",
                            },
                            {
                                title: "Diseño Arquitectónico",
                                description:
                                    "Servicios de diseño que combinan estética, funcionalidad y sostenibilidad para crear espacios únicos.",
                                icon: "📐",
                            },
                            {
                                title: "Consultoría",
                                description:
                                    "Asesoramiento experto en todas las fases de su proyecto, desde la planificación hasta la ejecución.",
                                icon: "📋",
                            },
                        ].map((service, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-stone-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="Proyectos" className="py-20 px-4 md:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        <span className="text-amber-600">Proyectos</span> Destacados
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                            <div key={item} className="group relative overflow-hidden rounded-lg shadow-md">
                                <img
                                    src={`/work_${item}.jpg`}
                                    alt={`Proyecto ${item}`}
                                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <h3 className="text-white text-xl font-bold">Proyecto {item}</h3>
                                    <p className="text-stone-200 mt-2">
                                        Descripción breve del proyecto y sus características principales.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-md font-medium transition-colors">
                            Ver Todos los Proyectos
                        </button>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="Contacto" className="py-20 px-4 md:px-8 bg-stone-800 text-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        Contacta con <span className="text-amber-500">Nosotros</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-semibold mb-6">Información de Contacto</h3>
                            <div className="space-y-4">
                                <p className="flex items-start">
                                    <span className="mr-3">📍</span>
                                    <span>Moreno 281, Benito Juarez, País</span>
                                </p>
                                <p className="flex items-start">
                                    <span className="mr-3">📞</span>
                                    <span>+123 456 7890</span>
                                </p>
                                <p className="flex items-start">
                                    <span className="mr-3">✉️</span>
                                    <span>construcionespereyra@gmail.com</span>
                                </p>
                                <p className="flex items-start">
                                    <span className="mr-3">⏰</span>
                                    <span>Lunes a Viernes: 7:00 AM - 5:00 PM</span>
                                </p>
                            </div>
                            <div className="mt-8">
                                <h4 className="text-xl font-semibold mb-4">Síguenos</h4>
                                <div className="flex space-x-4">
                                    {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((social) => (
                                        <a
                                            key={social}
                                            href="#"
                                            className="bg-stone-700 hover:bg-amber-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                                        >
                                            {social[0]}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div>
                            <form className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                                            Nombre
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-4 py-2 rounded-md bg-stone-700 border border-stone-600 focus:border-amber-500 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full px-4 py-2 rounded-md bg-stone-700 border border-stone-600 focus:border-amber-500 focus:outline-none"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                                        Asunto
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        className="w-full px-4 py-2 rounded-md bg-stone-700 border border-stone-600 focus:border-amber-500 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                                        Mensaje
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        className="w-full px-4 py-2 rounded-md bg-stone-700 border border-stone-600 focus:border-amber-500 focus:outline-none"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
                                >
                                    Enviar Mensaje
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-stone-900 text-stone-400 py-8 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-xl font-bold text-white">CONSTRUCCIONES PEREYRA</h3>
                            <p className="mt-2">Construyendo el futuro, un proyecto a la vez.</p>
                        </div>
                        <div>
                            <p>© {new Date().getFullYear()} Construcciones Pereyra. Todos los derechos reservados.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}


import { Link } from "react-router-dom";

const Home = () => {
    return (
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
    )
}

export default Home
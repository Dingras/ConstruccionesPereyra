import React from 'react'

const About = () => {
    return (
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
    )
}

export default About
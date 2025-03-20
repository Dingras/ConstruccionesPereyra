import React from 'react'
import DataServices from './../../assets/Data/Services.json'

const Services = () => {
    return (
        <section id="Servicios" className="py-20 px-4 md:px-8 bg-stone-100">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Nuestros <span className="text-amber-600">Servicios</span>
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {DataServices.map((service, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-stone-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
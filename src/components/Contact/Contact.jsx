import DataContacts from "./../../assets/Data/Contacts.json"

const Contact = () => {
    return (
        <section id="Contacto" className="py-20 px-4 md:px-8 bg-stone-800 text-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Contacta con <span className="text-amber-500">Nosotros</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-12">
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
                    <div className="justify-items-center">
                        <h3 className="text-2xl font-semibold mb-6">Información de Contacto</h3>
                        <div className="space-y-4">
                            <p className="flex items-start">
                                <span className="mr-3">📍</span>
                                <span>Moreno 281, Benito Juarez, Buenos Aires, Argentina</span>
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
                                {DataContacts.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        className="bg-stone-700 hover:bg-amber-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                                    >
                                        <img src={`Icons/${social.icon}.svg`}  alt={social.name} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
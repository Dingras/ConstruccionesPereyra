import DataProjects from './../../assets/Data/Projects.json'

const Projects = () => {
    return (
        <section id="Proyectos" className="py-20 px-4 md:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    <span className="text-amber-600">Proyectos</span> Destacados
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {DataProjects.map((item,index) => (
                        <div key={index} className="group relative overflow-hidden rounded-lg shadow-md">
                            <img
                                src={`/work_${item.id}.jpg`}
                                alt={`${item.name}`}
                                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <h3 className="text-white text-xl font-bold">{item.name}</h3>
                                <p className="text-stone-200 mt-2">
                                    {item.description}
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
    )
}

export default Projects
import DataProjects from './../../assets/Data/Projects.json'
import Project from './Project'

const Projects = () => {
    return (
        <section id="Proyectos" className="py-20 px-4 md:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    <span className="text-amber-600">Proyectos</span> Destacados
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {DataProjects.map((item,index) => (
                        <Project key={index} item={item}/>
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
import React from 'react'

const Footer = () => {
    return (
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
    )
}

export default Footer
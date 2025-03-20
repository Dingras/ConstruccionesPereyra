import React from 'react'

const Project = (props) => {
    return (
        <div className="group relative overflow-hidden rounded-lg shadow-md">
            <img
                src={`/work_${props.item.id}.jpg`}
                alt={`${props.item.name}`}
                className="w-full h-64 object-cover transition-transform duration-500 scale-110 md:scale-100 md:group-hover:scale-110"
            />
            <div 
                className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
                >
                <h3 className="text-white text-xl font-bold">{props.item.name}</h3>
                <p className="text-stone-200 mt-2">
                    {props.item.description}
                </p>
            </div>
        </div>
    )
}

export default Project
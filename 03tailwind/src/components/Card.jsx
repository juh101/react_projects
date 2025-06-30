import React from 'react'

function Card({username ,}) {
    console.log(username);
    
    return (
        <div className="relative h-[400px] w-[300px] rounded-md">
            <img
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&ixid=M3w5NjAxfDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
                alt="User"
                className="h-full w-full rounded-md object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

            <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-white">{username}</h1>
                <p className="text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, dolorum?
                </p>
                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                    {text}
                </button>
            </div>
        </div>

    )
}

export default Card

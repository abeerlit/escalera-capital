export const PropertyImages = () => {
    const images = [
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=400&q=80',
    ]
    return (
        <div className="flex-1 flex gap-2 overflow-x-auto px-2 ">
            {images.map((image, index) => (
                <div key={index} className="min-w-[350px] h-full p-2 border border-gray-400 rounded">
                    <img
                        src={image}
                        alt="Property Image"
                        className="w-full h-full object-cover rounded"
                    />
                </div>
            ))}
        </div>
    )
}
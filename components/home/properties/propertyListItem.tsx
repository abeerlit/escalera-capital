import Link from 'next/link'
import React, { useState } from 'react'

interface PropertyListItemProps {
    image: string
    title: string
    address: string
    price: string
    lots: string
    lotSize: string
}

export const PropertyListItem: React.FC<PropertyListItemProps> = ({
    image,
    title,
    address,
    price,
    lots,
    lotSize,
}) => {
    const [isFavorite, setIsFavorite] = useState(false)

    const handleFavoriteClick = (e: React.MouseEvent) => {
        e.preventDefault()
        setIsFavorite(!isFavorite)
    }

    return (
        <Link href={`/property-details`} className='flex group bg-white mt-2 relative shadow-[0_0_5px_rgba(0,0,0,0.3)] h-40 overflow-hidden'>
            <div className='relative h-full w-fit min-w-[160px] max-w-[160px]'>
                <img src={image} alt={title} className='w-full h-full object-cover' />
                <button
                    className='absolute top-2 right-2 cursor-pointer'
                    onClick={handleFavoriteClick}
                >
                    <span className={`text-white text-2xl font-extrabold leading-none ${isFavorite && '!text-red-500'}`}>&#9825;</span>
                </button>
            </div>
            <div className='px-4 py-2 flex flex-col  flex-1 min-w-0'>
                <div className='font-bold text-lg truncate group-hover:underline' title={title}>{title}</div>
                <div className='text-gray-500 text-sm mb-3 truncate' title={address}>{address}</div>
                <div className='text-gray-500 text-sm truncate' title={price}>{price}</div>
                <div className='text-gray-500 text-sm truncate' title={lotSize}>{lotSize}</div>
                <div className='text-gray-500 text-sm truncate' title={lots}>{lots}</div>
            </div>
        </Link>
    )
}
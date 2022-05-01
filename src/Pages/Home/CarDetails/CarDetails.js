import React from 'react'

const CarDetails = ({ car, children }) => {
    const { name, image, price, quantity, description, supplier } = car

    return (
        <div className="mx-auto" style={{ width: '300px' }}>
            <img style={{ width: '100%', height: '200px' }} src={image} alt="" />
            <div className="bg-white text-center">
                <p className="text-xl text-red-700 pt-2">{name}</p>
                <p className="text-gray-800 font-[600] mb-1">${price}</p>
                <hr className="block mx-auto h-[1px] w-14 bg-red-600 border-none" />
                <hr className="block mx-auto my-1 h-[1px] w-10 bg-red-600 border-none" />
                <div className="text-gray-600 text-left pb-2 px-2">
                    <p>{description}</p>
                    <p>Supplier: {supplier}</p>
                    <div className="flex justify-between py-2">
                        <p>
                            In-Stock: <span className="text-orange-500">{quantity}</span>{' '}
                        </p>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarDetails

import React from 'react'

const CarDetails = ({ car }) => {
    const { name, image, price, quantity, description, supplier } = car
    return (
        <div className="mx-auto" style={{ width: '300px' }}>
            <img style={{ width: '100%', height: '200px' }} src={image} alt="" />
            <div className="bg-white text-center">
                <p className="text-xl text-red-700 pt-2">{name}</p>
                <p className="text-gray-800 font-[600] mb-1">${price}</p>
                <hr className="block mx-auto h-[1px] w-14 bg-red-600 border-none" />
                <hr className="block mx-auto my-1 h-[1px] w-10 bg-red-600 border-none" />
                <div className="text-gray-600 text-left pb-5 pl-2">
                    <p className="">{description}</p>
                    <p className="">Supplier: {supplier}</p>
                    <p className="">
                        in-stock: <span className="text-orange-500">{quantity}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CarDetails

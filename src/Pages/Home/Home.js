import { faCar, faCarBurst, faDollar, faHeadset } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import banner1 from '../../Assets/banner1.jpg'
import car1 from '../../Assets/car1.png'
import car2 from '../../Assets/car2.png'
import assistant from '../../Assets/help-center.jpg'
import '../../Styles/Home.css'
import CarDetails from './CarDetails/CarDetails'

const Home = () => {
    const [cars, setCars] = useState([])

    useEffect(() => {
        const getCarInventory = async () => {
            const url = 'http://localhost:5000/car'
            const { data } = await axios.get(url)
            setCars(data)
        }
        getCarInventory()
    }, [])

    return (
        <section>
            <img className="h-screen w-full" src={banner1} alt="" />
            <div className="absolute top-56 left-[33%] uppercase">
                <p className="ml-24 text-xl text-red-600 font-[500]">BMW X3 Sports Activity Vehicle </p>
                <p className="text-4xl text-gray-900 font-[600]">Arrives new car everyday</p>
            </div>

            <div className="text-center mt-16">
                <p className="text-gray-500">Welcome to our website</p>
                <p className="text-3xl text-gray-900 font-semibold uppercase">nextgen Automobiles</p>
                <hr className="block mx-auto mt-1 h-[1px] w-32 bg-red-600 border-none" />
                <hr className="block mx-auto mt-2 h-[1px] w-28 bg-red-600 border-none" />

                <p className="mt-10 px-52 text-gray-500">
                    NEXTGEN AUTOMOBILES is offering you a variety of car collections. Here you can find your most
                    endearing car in a affordable price. We are also providing 5years of servicing for free of cost.
                    There are always concession on vehicle parts if you buy a car from us. Having business with 50+
                    years of excellency!
                </p>

                <div className="grid grid-cols-4 gap-10 px-24 mt-10">
                    <div>
                        <FontAwesomeIcon icon={faCar} className="w-6 h-6 text-gray-400 bg-gray-100 rounded-full p-3" />
                        <p className="uppercase text-md font-[600] mt-2">All Brands</p>
                        <hr className="block mx-auto mt-2 h-[2px] w-6 bg-red-600 border-none" />
                        <p className="text-gray-500 mt-2">Here you can get all the brand's car at your hand</p>
                    </div>
                    <div>
                        <FontAwesomeIcon
                            icon={faHeadset}
                            className="w-6 h-6 text-gray-400 bg-gray-100 rounded-full p-3"
                        />
                        <p className="uppercase text-md font-[600] mt-2">Free Support</p>
                        <hr className="block mx-auto mt-2 h-[2px] w-6 bg-red-600 border-none" />
                        <p className="text-gray-500 mt-2">Free servicing upto 5+ years and many more</p>
                    </div>
                    <div>
                        <FontAwesomeIcon
                            icon={faCarBurst}
                            className="w-6 h-6 text-gray-400 bg-gray-100 rounded-full p-3"
                        />
                        <p className="uppercase text-md font-[600] mt-2">Insurance facilities</p>
                        <hr className="block mx-auto mt-2 h-[2px] w-6 bg-red-600 border-none" />
                        <p className="text-gray-500 mt-2">We are proving a handy solution for car insurance</p>
                    </div>
                    <div>
                        <FontAwesomeIcon
                            icon={faDollar}
                            className="w-6 h-6 text-gray-400 bg-gray-100 rounded-full p-3"
                        />
                        <p className="uppercase text-md font-[600] mt-2">Affordable</p>
                        <hr className="block mx-auto mt-2 h-[2px] w-6 bg-red-600 border-none" />
                        <p className="text-gray-500 mt-2">
                            All the cars in stock is coming with an affordable price tag
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 my-14">
                <img className="hover:-translate-x-3 hover:ease-in-out duration-500" src={car2} alt="" />
                <div className="flex flex-col justify-center items-center">
                    <img className="rounded-full" src={assistant} alt="" />
                    <p className="text-gray-500">Have Any Question?</p>
                    <p className="text-3xl text-red-600 font-[600] mt-4">+880 189 0022 5588</p>
                </div>
                <img className="hover:translate-x-3 hover:ease-in-out duration-500" src={car1} alt="" />
            </div>

            <div className="feature-car mb-10">
                <p className="text-white text-center pt-12">Our car</p>
                <p className="text-4xl text-white text-center font-[600] uppercase">inventory</p>

                <div className="text-white grid lg:grid-cols-3 gap-10 mt-10 px-20">
                    {cars.slice(0, 6).map(car => (
                        <CarDetails car={car} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Home

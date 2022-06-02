import { faCar, faCarBurst, faComments, faDollar, faHeadset, faTrophy, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import banner1 from '../../Assets/banner1.jpg'
import car1 from '../../Assets/car1.png'
import car2 from '../../Assets/car2.png'
import assistant from '../../Assets/help-center.jpg'
import useInventory from '../../hooks/useInventory'
import '../../Styles/Home.css'
import Counter from '../Shared/Counter/Counter'
import Spinner from '../Shared/Spinner/Spinner'
import CarDetails from './CarDetails/CarDetails'

const Home = () => {
    const [cars, , loading] = useInventory()

    if (loading) {
        return (
            <div className="h-screen flex items-center">
                <Spinner />
            </div>
        )
    }

    return (
        <section>
            <img className="lg:h-screen w-full" src={banner1} alt="" />
            <div
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="1000"
                className="absolute top-[12%] md:top-56 left-[15%] md:left-[20%] lg:left-[33%] uppercase"
            >
                <p className="ml-2 md:ml-20 lg:ml-24 text-sm md:text-xl text-red-600">
                    BMW X3 Sports Activity Vehicle{' '}
                </p>
                <p className="text-lg md:text-4xl text-gray-900 font-[600]">Arrives new car everyday</p>
            </div>

            <div className="text-center mt-6 md:mt-8 lg:mt-16">
                <p className="text-gray-500">Welcome to our website</p>
                <p className="text-2xl lg:text-3xl text-gray-900 font-semibold uppercase">nextgen Automobiles</p>
                <hr className="block mx-auto mt-1 h-[1px] w-32 bg-red-600 border-none" />
                <hr className="block mx-auto mt-2 h-[1px] w-28 bg-red-600 border-none" />

                <p className="mt-4 lg:mt-10 px-4 lg:px-52 text-gray-500">
                    NEXTGEN AUTOMOBILES is offering you a variety of car collections. Here you can find your most
                    endearing car in a affordable price. We are also providing 5years of servicing for free of cost.
                    There are always concession on vehicle parts if you buy a car from us. Having business with 50+
                    years of excellency!
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 px-24 mt-10">
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

            <div className="car-entry grid grid-cols-3 gap-2 my-14">
                <img data-aos="fade-right" data-aos-duration="2000" src={car2} alt="" />
                <div className="flex flex-col justify-center items-center">
                    <img className="rounded-full" src={assistant} alt="" />
                    <p className="mt-1 text-sm md:text-lg text-center text-gray-500">Have Any Question?</p>
                    <p className="text-lg text-center md:text-3xl text-red-600 font-[600] mt-3">+880 189 0022 5588</p>
                </div>
                <img data-aos="fade-left" data-aos-duration="2000" src={car1} alt="" />
            </div>

            <div className="feature-car pb-20">
                <p className="text-white text-center pt-12">Our car</p>
                <p className="text-4xl text-white text-center font-[600] uppercase">inventory</p>
                <div className="text-white grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 md:px-14 lg:px-20">
                    {cars.slice(0, 6).map(car => (
                        <CarDetails car={car}>
                            <Link to={`/inventory/${car._id}`}>
                                <button className="bg-red-600 text-white rounded px-2 py-1">Stock Update</button>
                            </Link>
                        </CarDetails>
                    ))}
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 my-14 md:my-24 md:px-24 md:py-10 text-center">
                <div>
                    <FontAwesomeIcon icon={faCar} className="w-6 h-6 text-[#ff0000] bg-gray-100 rounded-full p-3" />
                    <p className="uppercase text-md font-[600] mt-2">vehicles in stock</p>
                    <hr className="block mx-auto mt-2 h-[2px] w-6 bg-red-600 border-none" />
                    <Counter end="150" />
                </div>
                <div>
                    <FontAwesomeIcon
                        icon={faComments}
                        className="w-6 h-6 text-[#ff0000] bg-gray-100 rounded-full p-3"
                    />
                    <p className="uppercase text-md font-[600] mt-2">Dealer Reviews</p>
                    <hr className="block mx-auto mt-2 h-[2px] w-6 bg-red-600 border-none" />
                    <Counter end="380" />
                </div>
                <div>
                    <FontAwesomeIcon icon={faUser} className="w-6 h-6 text-[#ff0000] bg-gray-100 rounded-full p-3" />
                    <p className="uppercase text-md font-[600] mt-2">Happy Customers</p>
                    <hr className="block mx-auto mt-2 h-[2px] w-6 bg-red-600 border-none" />
                    <Counter end="1150" />
                </div>
                <div>
                    <FontAwesomeIcon icon={faTrophy} className="w-6 h-6 text-[#ff0000] bg-gray-100 rounded-full p-3" />
                    <p className="uppercase text-md font-[600] mt-2">Awards</p>
                    <hr className="block mx-auto mt-2 h-[2px] w-6 bg-red-600 border-none" />
                    <Counter end="15" />
                </div>
            </div>
        </section>
    )
}

export default Home

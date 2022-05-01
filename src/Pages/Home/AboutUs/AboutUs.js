import React from 'react'
import { Link } from 'react-router-dom'
import aboutPic from '../../../Assets/about-us.jpg'

const AboutUs = () => {
    return (
        <div className="grid md:grid-cols-2 gap-10 py-24 px-4 md:px-10 lg:px-20">
            <div className="order-2 md:order-1">
                <p className="text-3xl text-gray-800 mt-8">About Us</p>
                <hr className="mt-2 mb-5 h-[2px] w-14 bg-[#ff0000] border-none" />
                <p className="text-gray-500">
                    NEXTGEN AUTOMOBILES was founded by four brothers from Chittagong City in 1886. It sells all brands
                    of car those are currently available in Bangladesh. As of today, 140 employee are involved with us.
                    We are opening soon our new three outlets in Barisal , Khulna and Sylhet.
                </p>

                <Link to="/">
                    <button className="block mt-10 px-3 py-2 bg-blue-500 text-white rounded outline-none">
                        Learn More
                    </button>
                </Link>
            </div>
            <img className="lg:w-9/12 mx-auto order-1 md:order-2" src={aboutPic} alt="" />
        </div>
    )
}

export default AboutUs

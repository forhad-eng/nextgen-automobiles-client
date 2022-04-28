import React from 'react'
import banner1 from '../../Assets/banner1.jpg'

const Home = () => {
    return (
        <section>
            <img className="h-screen w-full" src={banner1} alt="" />
            <div className="absolute top-56 left-[33%] uppercase">
                <p className="ml-16 text-xl text-red-600 font-[500]">Welcome to nextgen Automobiles</p>
                <p className="text-4xl font-[600]">Arrives new car everyday</p>
            </div>
        </section>
    )
}

export default Home

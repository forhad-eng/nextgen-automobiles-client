import { faChevronRight, faEnvelope, faLocationDot, faPhoneFlip } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../Assets/logos/logo.png'
import '../../../Styles/Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="grid lg:grid-cols-4 gap-10 px-12 py-20 text-white">
                <div>
                    <div className="flex gap-3">
                        <img src={logo} style={{ height: '30px' }} alt="" />
                        <p className="uppercase">
                            <span className="font-bold">nextgen</span> automobiles
                        </p>
                    </div>
                    <div className="mt-3 ml-4 text-[#c4c3c3] text-sm">
                        <p>
                            We provide any kind of car you need. There are always more from us. Keep exploring our web
                            to get the best deal of town!
                        </p>

                        <div className="flex items-center gap-3 mt-2">
                            <FontAwesomeIcon icon={faLocationDot} className="text-[#ff0000]" />
                            <p>Agrabad C/A, Chittagong</p>
                        </div>

                        <div className="flex items-center gap-3 mt-3">
                            <FontAwesomeIcon icon={faPhoneFlip} className="text-[#ff0000]" />
                            <p>+880 183 555 999</p>
                        </div>

                        <div className="flex items-center gap-3 mt-3">
                            <FontAwesomeIcon icon={faEnvelope} className="text-[#ff0000]" />
                            <p>support@nextgen.com</p>
                        </div>
                    </div>
                </div>

                <div className="lg:mx-auto">
                    <p className="uppercase font-bold">Useful links</p>
                    <hr className=" mt-2 h-[2px] w-6 bg-[#ff0000] border-none" />

                    <ul className="text-sm">
                        <li>
                            <Link to="/all-cars" className="flex items-center mt-3">
                                <div>
                                    <FontAwesomeIcon icon={faChevronRight} className="h-3" />
                                    <FontAwesomeIcon icon={faChevronRight} className="h-3" />
                                </div>
                                <p className="ml-2 text-[#c4c3c3]">Cars In Stock</p>
                            </Link>
                        </li>

                        <li>
                            <Link to="/all-cars" className="flex mt-3">
                                <div>
                                    <FontAwesomeIcon icon={faChevronRight} className="h-3" />
                                    <FontAwesomeIcon icon={faChevronRight} className="h-3" />
                                </div>
                                <p className="ml-2 text-[#c4c3c3]">Brands</p>
                            </Link>
                        </li>

                        <li>
                            <Link to="/all-cars" className="flex mt-3">
                                <div>
                                    <FontAwesomeIcon icon={faChevronRight} className="h-3" />
                                    <FontAwesomeIcon icon={faChevronRight} className="h-3" />
                                </div>
                                <p className="ml-2 text-[#c4c3c3]">Support</p>
                            </Link>
                        </li>

                        <li>
                            <Link to="/all-cars" className="flex mt-3">
                                <div>
                                    <FontAwesomeIcon icon={faChevronRight} className="h-3" />
                                    <FontAwesomeIcon icon={faChevronRight} className="h-3" />
                                </div>
                                <p className="ml-2 text-[#c4c3c3]">Terms &amp; Conditions</p>
                            </Link>
                        </li>

                        <li>
                            <Link to="/all-cars" className="flex mt-3">
                                <div>
                                    <FontAwesomeIcon icon={faChevronRight} className="h-3" />
                                    <FontAwesomeIcon icon={faChevronRight} className="h-3" />
                                </div>
                                <p className="ml-2 text-[#c4c3c3]">Offers</p>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="lg:mx-auto">
                    <p className="uppercase font-bold">Find Us</p>
                    <hr className=" mt-2 h-[2px] w-6 bg-[#ff0000] border-none" />

                    <ul className="text-sm">
                        <li>
                            <Link to="/all-cars" className="flex items-center mt-3">
                                <div>
                                    <FontAwesomeIcon icon={faChevronRight} className="h-3" />
                                    <FontAwesomeIcon icon={faChevronRight} className="h-3" />
                                </div>
                                <p className="ml-2 text-[#c4c3c3]">Facebook</p>
                            </Link>
                        </li>

                        <li>
                            <Link to="/all-cars" className="flex mt-3">
                                <div>
                                    <FontAwesomeIcon icon={faChevronRight} className="h-3" />
                                    <FontAwesomeIcon icon={faChevronRight} className="h-3" />
                                </div>
                                <p className="ml-2 text-[#c4c3c3]">Twitter</p>
                            </Link>
                        </li>

                        <li>
                            <Link to="/all-cars" className="flex mt-3">
                                <div>
                                    <FontAwesomeIcon icon={faChevronRight} className="h-3" />
                                    <FontAwesomeIcon icon={faChevronRight} className="h-3" />
                                </div>
                                <p className="ml-2 text-[#c4c3c3]">Instagram</p>
                            </Link>
                        </li>

                        <li>
                            <Link to="/all-cars" className="flex mt-3">
                                <div>
                                    <FontAwesomeIcon icon={faChevronRight} className="h-3" />
                                    <FontAwesomeIcon icon={faChevronRight} className="h-3" />
                                </div>
                                <p className="ml-2 text-[#c4c3c3]">Telegram</p>
                            </Link>
                        </li>

                        <li>
                            <Link to="/all-cars" className="flex mt-3">
                                <div>
                                    <FontAwesomeIcon icon={faChevronRight} className="h-3" />
                                    <FontAwesomeIcon icon={faChevronRight} className="h-3" />
                                </div>
                                <p className="ml-2 text-[#c4c3c3]">LinkedIn</p>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="mx-auto">
                    <p className="uppercase font-bold">Subscribe Our Newsletter</p>
                    <hr className=" mt-2 h-[2px] w-6 bg-[#ff0000] border-none" />

                    <p className="text-sm text-[#c4c3c3] mt-3">
                        Keep up on our always evolving products features and technology. Enter your e-mail and subscribe
                        to our newsletter.
                    </p>
                    <input
                        type="text"
                        className="w-10/12 mt-3 p-2 pl-4 text-sm bg-[#6666661a] border-[1px] border-gray-800"
                        placeholder="Enter Your Email"
                    />
                    <button className="bg-red-600 text-white mt-3 px-6 py-2">Subscribe</button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-5 px-20 py-8 border-t-[1px] border-[#ffffff14] text-[#c4c3c3] text-sm">
                <p>&copy;Copyright 2022 NEXTGEN AUTOMOBILES</p>
                <div className="flex gap-5">
                    <p>Privacy Policy</p>
                    <p>Terms &amp; Conditions</p>
                    <p>Contact Us</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

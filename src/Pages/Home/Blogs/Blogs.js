import React from 'react'
import jsNode from '../../../Assets/javascript-vs-nodejs.png'
import jwtImage from '../../../Assets/jwt.jpg'
import nodeMongo from '../../../Assets/node-vs-mongo.png'
import sqlNoSql from '../../../Assets/sql-vs-nosql.png'

const Blogs = () => {
    return (
        <section className="blog py-20 lg:py-28 px-4 md:px-8 lg:px-0 bg-[#e5e5e5]">
            <p className="text-2xl md:text-3xl text-center mb-5">𝒲𝑒𝓁𝒸𝑜𝓂𝑒 𝒯𝑜 𝐵𝓁𝑜𝑔𝓈</p>
            <div className="lg:w-9/12 mx-auto p-4 bg-white rounded">
                <div>
                    <p className="text-2xl md:text-3xl">Differences between JavaScript and Node.js</p>
                    <p className="text-sm text-gray-500">Posted on 1st May 2022</p>
                    <hr className="my-1" />
                    <img src={jsNode} style={{ margin: '15px auto' }} alt="" />

                    <div className="lg:px-20">
                        <table className="mt-3 border-collapse border-[1px] border-black leading-8 tracking-wide">
                            <thead>
                                <tr>
                                    <th className="border-collapse border-[1px] border-black md:text-lg text-center p-0 py-2">
                                        JavaScript
                                    </th>
                                    <th className="border-collapse border-[1px] border-black md:text-lg text-center p-0 py-2">
                                        Node
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border-collapse border-[1px] border-black text-center p-0">
                                        Javascript is a programming language that is used for writing scripts on the
                                        website.
                                    </td>
                                    <td className="border-collapse border-[1px] border-black text-center p-0">
                                        NodeJS is a Javascript runtime environment.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-collapse border-[1px] border-black text-center p-0">
                                        Javascript can only be run in the browsers.
                                    </td>
                                    <td className="border-collapse border-[1px] border-black text-center p-0">
                                        We can run Javascript outside the browser with the help of NodeJS.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-collapse border-[1px] border-black text-center p-0">
                                        It is basically used on the client-side.
                                    </td>
                                    <td className="border-collapse border-[1px] border-black text-center p-0">
                                        It is mostly used on the server-side.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-collapse border-[1px] border-black text-center p-0">
                                        Javascript is capable enough to add HTML and play with the DOM.
                                    </td>
                                    <td className="border-collapse border-[1px] border-black text-center p-0">
                                        Nodejs does not have capability to add HTML tags.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-collapse border-[1px] border-black text-center p-0">
                                        Javascript is used in frontend development.
                                    </td>
                                    <td className="border-collapse border-[1px] border-black text-center p-0">
                                        Nodejs is used in server-side development.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-collapse border-[1px] border-black text-center p-0">
                                        Some of the javascript frameworks are ReactJS, AngularJS, etc
                                    </td>
                                    <td className="border-collapse border-[1px] border-black text-center p-0">
                                        Some of the Nodejs modules are Lodash, express etc. These modules are to be
                                        imported from npm.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <hr className="mt-10" />

                <div>
                    <p className="text-2xl md:text-3xl">When one should use Node.Js and when MongoDB</p>
                    <p className="text-sm text-gray-500">Posted on 1st May 2022</p>
                    <hr className="my-1" />
                    <img src={nodeMongo} style={{ margin: '0 auto' }} alt="" />

                    <div>
                        <p className="text-2xl">Node.JS should be used for:</p>
                        <ul className="list-disc pl-8 leading-7 tracking-wide">
                            <li>
                                <span className="font-bold">Real-time applications:</span> As we have found that Node.js
                                can ensure great speed and performance, one of the textbook Node.js use cases is
                                real-time messaging, or chatting. The environment can support heavy traffic of multiple
                                short messages, or chatrooms when messages are displayed to many users at the same time.
                            </li>
                            <li className="mt-2">
                                <span className="font-bold">Data streaming applications:</span> The term “streaming”
                                means exactly that sending large amounts of data in smaller packages instead of a single
                                batch. This ability is especially critical for audio or video streaming applications.
                                Node.js is perfectly suited for this task with built-in modules supporting data
                                streaming and allowing to create both readable and writable data streams. If we add that
                                Netflix, a global media service provider, uses Node.js, you may get the idea of how
                                powerful this environment is.
                            </li>
                            <li className="mt-2">
                                <span className="font-bold">Applications relying on scalability:</span> The superb
                                scalability supported by Node.js answers the “why Node.js” question for apps required to
                                withstand high peak loads. This is the reason why Uber chose Node.js to develop its app.
                                The global taxi network is always growing and expanding its presence; at the same time,
                                the nature of the taxi business causes high demand peaks during holidays. Node.js
                                handles these challenges quite well.
                            </li>
                        </ul>

                        <p className="text-2xl mt-5">MongoDB should be used for:</p>
                        <ul className="list-disc pl-8 leading-7 tracking-wide">
                            <li>
                                <span className="font-bold">Massive-scale Data:</span> MongoDB database are especially
                                good at handling big data because they're architected to scale well horizontally across
                                multiple servers. MongoDB's built-in support for sharding lets developers scale clusters
                                just by adding machines, which in a cloud environment is simple to do with minimal
                                latency. It's a more cost-effective approach than businesses used to have available,
                                when they had to provision their data centers with enough server storage and CPU
                                resources for the highest use cycles, leaving systems underutilized when loads
                                decreased.
                            </li>
                            <li className="mt-2">
                                <span className="font-bold">Content Management and Cataloging:</span> Content-based
                                applications are a special case of streaming feeds. Consider a retail product catalog.
                                New products come and go regularly. Product inventories change as units are sold, and
                                prices change too. Depending on the retailer’s needs, developers could create data
                                models in the form of JSON structures to represent the way the company handles inventory
                                and sales, with a flexible, dynamic structure that they can change easily.
                            </li>
                            <li className="mt-2">
                                <span className="font-bold">Applications relying on scalability:</span> The superb
                                scalability supported by Node.js answers the “why Node.js” question for apps required to
                                withstand high peak loads. This is the reason why Uber chose Node.js to develop its app.
                                The global taxi network is always growing and expanding its presence; at the same time,
                                the nature of the taxi business causes high demand peaks during holidays. Node.js
                                handles these challenges quite well.
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="mt-10" />

                <div>
                    <p className="text-2xl md:text-3xl">Differences between Sql and NoSql databases</p>
                    <p className="text-sm text-gray-500">Posted on 1st May 2022</p>
                    <hr className="my-1" />
                    <img src={sqlNoSql} style={{ width: '100%', height: '400px', margin: '15px auto' }} alt="" />

                    <div className="lg:px-20">
                        <table className="mt-3 border-collapse border-[1px] border-black leading-8 tracking-wide">
                            <thead>
                                <tr>
                                    <th className="border-collapse border-[1px] border-black md:text-lg text-center p-0 py-2">
                                        SQL
                                    </th>
                                    <th className="border-collapse border-[1px] border-black md:text-lg text-center p-0 py-2">
                                        NoSQL
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border-collapse border-[1px] border-black text-center p-0">
                                        RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)
                                    </td>
                                    <td className="border-collapse border-[1px] border-black text-center p-0">
                                        Non-relational or distributed database system.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-collapse border-[1px] border-black text-center p-0">
                                        These databases have fixed or static or predefined schema
                                    </td>
                                    <td className="border-collapse border-[1px] border-black text-center p-0">
                                        They have dynamic schema
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-collapse border-[1px] border-black text-center p-0">
                                        These databases are not suited for hierarchical data storage.
                                    </td>
                                    <td className="border-collapse border-[1px] border-black text-center p-0">
                                        These databases are best suited for hierarchical data storage.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-collapse border-[1px] border-black text-center p-0">
                                        Vertically Scalable
                                    </td>
                                    <td className="border-collapse border-[1px] border-black text-center p-0">
                                        Horizontally scalable
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-collapse border-[1px] border-black text-center p-0">
                                        Follows ACID property
                                    </td>
                                    <td className="border-collapse border-[1px] border-black text-center p-0">
                                        Follows CAP(consistency, availability, partition tolerance)
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <hr className="mt-10" />

                <div className="mb-14">
                    <p className="text-2xl md:text-3xl">Purpose of JWT and the way It Works</p>
                    <p className="text-sm text-gray-500">Posted on 1st May 2022</p>
                    <hr className="my-1" />
                    <img src={jwtImage} style={{ width: '100%', height: '400px', margin: '15px auto' }} alt="" />

                    <div className="leading-8 tracking-wide">
                        <p>
                            <span className="text-lg font-bold">Purpose of JWT: </span> JSON Web Token is a standard
                            used to create access tokens for an application.
                        </p>
                        <p>
                            <span className="text-lg font-bold">How JWT works: </span>
                            At first server generates a token usually at the time of login/signup, that certifies the
                            user identity and sends it to the client. The token will be stored at client side and the
                            client will send the token back to the server for every subsequent request, so the server
                            knows the request comes from a particular identity.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blogs

import React from 'react'
import Image from "next/image";
import { FaGithub, FaHtml5 } from "react-icons/fa";

export const Skills = () => {
    return (
        <section id="skills">
            <div
                className=" flex items-center max-w-7xl   mx-auto leading-8 mb-10"
                id="skills"
            >
                <div className=" px-10 mt-32 mx-auto">
                    <h1 className="text-center text-4xl text-black mb-10">Skills</h1>

                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-20">
                        {/* start */}
                        <div className=" p-5 ">
                            <img
                                src={"/images/skills/html.png"}
                                className="w-20 h-20  object-contain  hover:translate-y-2 hover:scale-110 duration-700 "
                            />
                            <p className="text-black text-center mt-4">Html</p>
                        </div>
                        {/* ends  */}

                        {/* start  */}
                        <div className="p-5">
                            <img
                                src={"/images/skills/css.png"}
                                className="w-20 h-20 object-contain  hover:-translate-y-2 hover:scale-110 duration-700"
                            />
                            <p className="text-black text-center mt-4">CSS</p>
                        </div>
                        {/* ends  */}

                        {/* starts  */}

                        <div className=" p-5 ">
                            <img
                                src={"/images/skills/js.png"}
                                className="w-20 h-20  object-contain  hover:-translate-y-2 duration-700"
                            />
                            <p className="text-black text-center mt-4">Javascript</p>
                        </div>
                        {/* ends  */}

                        {/* starts  */}
                        <div className=" p-5 ">
                            <img
                                src={"/images/skills/reactjs.png"}
                                className="w-20 h-20  object-contain  hover:-translate-y-2 duration-700"
                            />
                            <p className="text-black text-center mt-4">React</p>
                        </div>
                        {/* ends  */}

                        {/* starts  */}
                        <div className=" p-5 ">
                            <img
                                src={"/images/skills/nextjs.png"}
                                className="w-20 h-20  object-contain  hover:-translate-y-2 duration-700"
                            />
                            <p className="text-black text-center mt-4">NextJS 13</p>
                        </div>
                        {/* 1 ends  */}
                        <div className=" p-5 ">
                            <img
                                src={"/images/skills/tailwindcss.png"}
                                className="w-20 h-20  object-contain  hover:-translate-x-2 duration-700"
                            />
                            <p className="text-black text-center mt-4">Tailwind</p>
                        </div>
                        {/* ends  */}

                        {/* starts  */}
                        {/* <div className=" p-5 ">
                            <img
                                src="https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/media/logo-colored@2x.png?raw=true"
                                className="w-20 h-20  object-contain  hover:-translate-y-2 duration-700"
                            />
                            <p className="text-black text-center mt-4">Chakra</p>
                        </div> */}
                        {/* ends  */}

                        {/* starts  */}
                        <div className=" p-5 ">
                            <img
                                src={"/images/skills/nodejs.png"}
                                className="w-20 h-20  object-contain  hover:-translate-y-2 duration-700"
                            />
                            <p className="text-black text-center mt-4">NodeJS</p>
                        </div>
                        {/* ends  */}

                                                {/* starts  */}
                                                <div className=" p-5 ">
                            <img
                                src={"/images/skills/ts.png"}
                                className="w-20 h-20  object-contain  hover:-translate-y-2 duration-700"
                            />
                            <p className="text-black text-center mt-4">TypeScript</p>
                        </div>
                        {/* ends  */}

                        {/* starts  */}
                        {/* <div className=" p-5 ">
                            <img
                                src="data:image/png;base64,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"
                                className="w-20 h-20  object-contain  hover:-translate-y-2 duration-700"
                            />
                            <p className="text-black text-center mt-4">HackerRank</p>
                        </div> */}
                        {/* ends  */}

                        {/* starts  */}
                        {/* <div className=" p-5 ">
                            <img
                                src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/zruiknbedz8yqafxbazb"
                                className="w-20 h-20  object-contain  hover:-translate-y-2 duration-700"
                            />
                            <p className="text-black text-center mt-4">CodeChef</p>
                        </div> */}
                        {/* ends  */}
                    </div>
                </div>
            </div>


        </section>
    )
}

import React from 'react'

export const Portfolio = () => {
    return (
        <section>
            <div className="flex items-center max-w-7xl mx-auto leading-8 mb-10" id="portfolio">
                <div className="text-black px-10 mt-32 mx-auto">
                    <h1 className="text-center text-4xl text-black mb-10">Portfolio</h1>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-24 mx-auto w-full  ">
                        {/* card start */}
                        <div className="shadow-md shadow-gray-600 h-60 hover:scale-105 duration-75 ">
                            <div>
                                <img
                                    src={"/images/portfolio/p1.jpg"}
                                    className="w-60 h-40 rounded-t-md"
                                />
                            </div>
                            <div className="flex justify-between px-5 text-black">
                                <button className="p-4 hover:scale-120 duration-200 hover:font-bold">
                                    <a href="https://resume-waqarunnabi.vercel.app/" target={"_blank"}>
                                        Demo
                                    </a>
                                </button>
                                <button className="p-4 hover:scale-120 duration-200 hover:font-bold">
                                    <a href="https://github.com/waqarunnabi/my-resume-wun" target={"_blank"}>
                                        Code
                                    </a>
                                </button>
                            </div>
                        </div>
                        {/* card end */}

                        {/* card start */}
                        <div className="shadow-md shadow-gray-600 h-60 hover:scale-105 duration-75 ">
                            <div>
                                <img
                                    src={"/images/portfolio/p1.jpg"}
                                    className="w-60 h-40 rounded-t-md"
                                />
                            </div>
                            <div className="flex justify-between px-5 text-black">
                                <button className="p-4 hover:scale-120 duration-200 hover:font-bold">
                                    <a href="https://resume-waqarunnabi.vercel.app/" target={"_blank"}>
                                        Demo
                                    </a>
                                </button>
                                <button className="p-4 hover:scale-120 duration-200 hover:font-bold">
                                    <a href="https://github.com/waqarunnabi/my-resume-wun" target={"_blank"}>
                                        Code
                                    </a>
                                </button>
                            </div>
                        </div>
                        {/* card end */}

                        {/* card start */}
                        <div className="shadow-md shadow-gray-600 h-60 hover:scale-105 duration-75 ">
                            <div>
                                <img
                                    src={"/images/portfolio/p1.jpg"}
                                    className="w-60 h-40 rounded-t-md"
                                />
                            </div>
                            <div className="flex justify-between px-5 text-black">
                                <button className="p-4 hover:scale-120 duration-200 hover:font-bold">
                                    <a href="https://resume-waqarunnabi.vercel.app/" target={"_blank"}>
                                        Demo
                                    </a>
                                </button>
                                <button className="p-4 hover:scale-120 duration-200 hover:font-bold">
                                    <a href="https://github.com/waqarunnabi/my-resume-wun" target={"_blank"}>
                                        Code
                                    </a>
                                </button>
                            </div>
                        </div>
                        {/* card end */}
                    </div>
                </div>
            </div>
        </section>
    )
}

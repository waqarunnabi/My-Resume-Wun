import React from "react";

export default function Contact() {
    return (
        <div>
            <div
                className=" ml-5 flex items-center max-w-6xl mx-auto leading-8 mb-10"
                id="contact"
            >
                <div className="text-black-500 px-10 mt-32 mx-auto">
                    <h1 className="text-center text-4xl text-black ">Contact</h1>
                    <p className="text-center text-black my-5">Get in touch with me</p>
                    <form action="https://formspree.io/f/xwkjwjal" method="POST">
                        <div>
                            <input
                                placeholder="Your name"
                                type="text"
                                required
                                name="name"
                                className="p-2 w-80 bg-transparent border-2 rounded-md focus:outline-cyan-700 text-black"
                            />
                        </div>
                        <div className="my-5">
                            <input

                                required
                                className="p-2 w-80 bg-transparent border-2 rounded-md focus:outline-cyan-700 text-black"
                                placeholder="Your email"
                                type="email"
                                name="email"
                            />
                        </div>
                        <div>
                            <textarea
                                rows={8}
                                name="meraMessage"
                                required
                                className="p-2 w-80 bg-transparent border-2 rounded-md focus:outline-cyan-700 text-black"
                                placeholder="Your message here..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="mx-auto block items-center py-2 px-4 rounded-xl bg-gradient-to-b from-cyan-600 to-cyan-800">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
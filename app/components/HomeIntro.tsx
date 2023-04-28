import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

export default function HomeIntro() {
    return (
        <section id="home" className="max-w-4xl mx-auto flex md:flex-row flex-col mt-5">
            {/* {left div start} */}
            <div className="p-5">

                <h1>Full Stack Developer</h1>
                <p >
                As an experienced Full Stack Developer, I am skilled in HTML, CSS, JavaScript, TypeScript, React, Nextjs, Python, AI, Machine learning, deep learning, and SQL. 
                I am passionate about creating scalable and efficient web applications that are both user-friendly and aesthetically pleasing.
                With a strong problem-solving ability and a collaborative approach, I am committed to delivering top-quality work that meets the highest standards of excellence.
                My dedication to staying up-to-date with the latest technologies ensures that my clients always receive cutting-edge solutions.
               </p>
                <button className=" group flex items-center py-2 px-4 my-2 rounded-xl bg-gradient-to-b from-cyan-600 to-cyan-800">
                    Profile
                    <MdKeyboardArrowRight size={20} className="group-hover:rotate-90 duration-500" />
                </button>
            </div>
            {/* {left div end} */}
            {/* {right div start} */}
            <div>
                <img src="images\profile4(2).jpg" alt="profile" 
                className="md:w-full w-1/2 mx-auto"/>
            </div>
            {/* {right div end} */}
        </section>
    )
}

import Link from 'next/link';
import React from 'react'
import { FaLinkedin, FaGithub, FaFacebook} from 'react-icons/fa';


export const Socialicons = () => {
    return (
        <section>
            <Link href="https://www.linkedin.com/in/waqarunnabi/" target={"_blank"}>
                <div className="ml-[-85px] justify-between hover:ml-0 duration-200 flex gap-2 text-x1 fixed top-[40vh] w-35 items-center text-black rounded-r-lg bg-gradient-to-b from-cyan-600 to-cyan-800 py-3 px-5">
                    LinkedIn <FaLinkedin size={30} />
                </div>
            </Link>

            <Link href="https://github.com/waqarunnabi" target={"_blank"}>
                <div className="ml-[-85px] justify-between hover:ml-0 duration-200 flex gap-5 text-x1 fixed top-[57vh] w-35 items-center text-black rounded-r-lg bg-gradient-to-b from-cyan-600 to-cyan-800 py-3 px-5">
                    Github <FaGithub size={30} />
                </div>
            </Link>

            <Link href="https://www.facebook.com/waqarunnabi1/" target={"_blank"}>
                <div className=" ml-[-90px] justify-between hover:ml-0 duration-200 flex gap-2 text-x1 fixed top-[74vh] w-35 items-center text-black rounded-r-lg bg-gradient-to-b from-cyan-600 to-cyan-800 py-3 px-5">
                    Facebook <FaFacebook size={30} />
                </div>
            </Link>

        </section>
    );
}
/* eslint-disable react/jsx-no-undef */
import Image from "next/image";
import Link from "next/link";

const HomePage = ()=>{
    return <div className="bg-[#e0e0e0] h-[150vh] w-full flex items-center justify-center">
        <div className="flex items-center justify-center flex-col gap-[25px]">
            <Image
            src="/profile.jpg"
            width={500}
            height={500}
            alt="profile"
            />
            <h2 className="text-black text-[40px] font-bold">Jopfel B. Gafate</h2>
            <h2 className="text-black text-[25px] italic">"DevOps Specialist"</h2>
            <p className="max-w-[500px] w-full text-black text-center">"Why limit yourself to just one skill?" was the line one of 
                my mentors said when I was still in high school. The role of DevOps was one that embodied this skill; not limiting
                yourself to just software development or IT operations. To become the bridge between them. But I don't settle for
                being good at both, I learn everything I can to influence it all.
            </p>
            <h2 className="text-black">Not just a Jack of All Trades, but a Master of All</h2>
            <div className="mt-1 flex gap-4">
                <Link 
                href="/story" 
                aria-label="My Story" 
                className="inline-flex sm:w-40 h-12 items-center justify-center bg-[#3a3d58] text-white px-6 py-3 rounded-md text-[25px] font-semibold hover:opacity-90 transition">
                    My Story
                </Link>
                <Link 
                href="/skills" 
                aria-label="My Skills" 
                className="inline-flex sm:w-40 h-12 items-center justify-center bg-[#3a3d58] text-white px-6 py-3 rounded-md text-[25px] font-semibold hover:opacity-90 transition">
                    My Skills
                </Link>
            </div>
            <div className="mt-1 flex gap-4">
                <Link 
                href="/projects" 
                aria-label="My Projects" 
                className="inline-flex sm:w-40 h-12 items-center justify-center bg-[#3a3d58] text-white px-6 py-3 rounded-md text-[25px] font-semibold hover:opacity-90 transition">
                    Projects
                </Link>
                <Link 
                href="/contact" 
                aria-label="Contact Me" 
                className="inline-flex sm:w-40 h-12 items-center justify-center bg-[#3a3d58] text-white px-6 py-3 rounded-md text-[25px] font-semibold hover:opacity-90 transition">
                    Contact
                </Link>
            </div>
        </div>
    </div>
}
export default HomePage
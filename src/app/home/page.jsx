/* eslint-disable react/jsx-no-undef */
import Image from "next/image";

const HomePage = ()=>{
    return <div className="bg-white h-[100vh] w-full flex items-center justify-center">
        <div className="flex items-center justify-center flex-col gap-[25]">
            <Image
            src="/profile.jpg"
            width={500}
            height={500}
            alt="profile"
            />
            <h2 className="text-black text-[60px] font-bold">Jopfel Basan Gafate</h2>
            <p className="max-w-[500px] w-full text-black text-center">HAHAHAHAHA Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fuga eveniet, corrupti porro facere aut nulla ducimus voluptas minima unde nobis nisi natus soluta illum! Hic sunt voluptatum accusamus nesciunt!</p>
        </div>
    </div>
}
export default HomePage
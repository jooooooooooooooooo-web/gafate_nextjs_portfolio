import Link from "next/link"

export default function Contact() {
  return (
    <div className="w-full bg-[#e0e0e0] py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-6xl font-bold text-center text-black mb-12">Contact</h1>
        <p className="text-2xl text-center text-black">Resides in the Nevada area, capable of long-distance work for software development</p>

        <div className="bg-[#a8b2d1] rounded-lg shadow-sm p-8 mt-16">
          <h2 className="text-2xl font-bold text-center text-black mb-6">
            <Link href="https://drive.google.com/file/d/1bwaKp3t3Zs2wdS8vTwOM0VCjB91g06ji/view?usp=sharing" className="underline">
            Professional Resume</Link>
          </h2>
        </div>
        <div className="bg-[#a8b2d1] rounded-lg shadow-sm p-8 mt-16">
          <h2 className="text-2xl font-bold text-center text-black mb-6">
            Email 
          </h2>
          <p className="text-base text-black text-center">
            Email: <a className="underline">jbasga07@gmail.com</a>
          </p>
        </div>
        <div className="bg-[#a8b2d1] rounded-lg shadow-sm p-8 mt-16">
          <h2 className="text-2xl font-bold text-center text-black mb-6">
            Github Account
          </h2>
          <p className="text-base text-black text-center">
            <a href="https://github.com/jooooooooooooooooo-web" className="underline">Jopza_10</a>
          </p>
        </div>
        <div className="bg-[#a8b2d1] rounded-lg shadow-sm p-8 mt-16">
          <h2 className="text-2xl font-bold text-center text-black mb-6">
            <Link href="http://linkedin.com/in/jopfelgafate" className="underline">
            Linkedin Account</Link>
          </h2>
        </div>
      </div>
    </div>
  )
}
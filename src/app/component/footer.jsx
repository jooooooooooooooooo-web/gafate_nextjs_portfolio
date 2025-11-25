import Link from "next/link";

const RootFooter = ()=>{
    return <footer className="bg-[#1c1c2d] flex p-10 justify-center items-center text-white font-bold">
        <p>© 2024 Jopfel Basan Gafate. All rights reserved.</p>
        <div className="flex space-x-4 p-12">
    <Link href="#top">Back to top</Link>
    <Link href="https://drive.google.com/file/d/1bwaKp3t3Zs2wdS8vTwOM0VCjB91g06ji/view?usp=sharing" className="underline">
            Resume</Link>
    <Link href="http://linkedin.com/in/jopfelgafate" className="underline">
            Linkedin</Link>
            <p>Contact number: (998) 860-0240</p>
  </div>
    </footer>
}
export default RootFooter;
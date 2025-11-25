"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const RootHeader = ()=>{
    const pathname = usePathname()
    const links = [
      { href: "/home", label: "Home" },
      { href: "/story", label: "Story" },
      { href: "/skills", label: "Skills" },
      { href: "/projects", label: "Projects" },
      { href: "/contact", label: "Contact" },
    ]

    return <div>
        <div className="bg-[#1c1c2d] text-white font-bold p-6 flex flex-col items-center space-y-2">
  <h1 className="text-2xl">Jopfel Gafate</h1>
  <nav className="w-full flex justify-center space-x-6">
    {links.map(l => (
      <Link
        key={l.href}
        href={l.href}
        className={`px-3 py-1 rounded ${pathname === l.href ? "bg-[#a8b2d1] text-black" : "text-white"}`}
      >
        {l.label}
      </Link>
    ))}
  </nav>
</div>
    </div>

}
export default RootHeader
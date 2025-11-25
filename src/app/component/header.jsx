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
        <div className="bg-[#1c1c2d] flex p-20 justify-between items-center text-white font-bold">
            <h1>Jopfel Gafate</h1>
            <nav>
                {links.map(l => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`ml-4 ${pathname === l.href ? "text-black bg-[#a8b2d1] px-3 py-1 rounded" : "text-white"}`}
                  >
                    {l.label}
                  </Link>
                ))}
            </nav>
        </div>
    </div>

}
export default RootHeader
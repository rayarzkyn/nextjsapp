import { useState } from "react";
import Link from "next/link";
import { Home, User, Wrench, Briefcase, Mail, Code, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#526D82] text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo / Nama */}
        <h1 className="text-2xl font-bold">Raya Rizkyana</h1>

        {/* Tombol Hamburger untuk Mobile */}
        <button onClick={toggleMenu} className="lg:hidden text-white focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu Navbar untuk PC */}
        <ul className="hidden lg:flex space-x-6">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="group flex items-center space-x-2 relative px-3 py-2 border border-transparent rounded-lg hover:border-white transition">
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Sidebar Menu untuk Mobile */}
      <div className={`fixed top-16 right-4 bg-[#526D82] shadow-lg rounded-lg p-4 transition-all duration-300 ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
        <ul className="flex flex-col space-y-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href} onClick={toggleMenu} className="group flex items-center space-x-2 px-4 py-2 rounded-lg border border-transparent hover:border-white transition">
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

const menuItems = [
  { label: "Home", href: "/", icon: <Home size={20} /> },
  { label: "About", href: "/about", icon: <User size={20} /> },
  { label: "Skills", href: "/skills", icon: <Code size={20} /> },
  { label: "Services", href: "/services", icon: <Wrench size={20} /> },
  { label: "Contact", href: "/contact", icon: <Mail size={20} /> },
];

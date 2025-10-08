"use client";
import NetflixLogoDesktop from "../public/netflix-logo-desktop.svg"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

interface linkProps {
  name: string;
  href: string;
}

const links: linkProps[] = [
  { name: "Home", href: "/" },
  { name: "TV Shows", href: "/tv-shows" },
  { name: "Movies", href: "/movies" },
  { name: "New & Popular", href: "/new-popular" },
  { name: "My List", href: "/my-list" },
  { name: "Browse by Languages", href: "/languages" },
];

const Navbar = () => {
  const pathName = usePathname();

  return (
    <div className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
      <div className="flex items-center">
        <Link href="/" className="w-32">
          <Image
            src={NetflixLogoDesktop}
            alt="Netflix Logo"
            width={150}
            height={50}
            priority
          />
        </Link>
        <ul className="lg:flex gap-x-4 ml-14 hidden">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathName === link.href ? (
                <li>
                  <Link
                    href={link.href}
                    className="text-white font-semibold underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white "
                  >
                    {link.name}
                  </Link>
                </li>
              )}
            </div>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-x-8">
        <Search className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
        <Bell className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
        <Avatar>
          <AvatarImage
            src="https://github.com/shadcn.png"
            className="w-5 h-5 rounded-md"
          />
          <AvatarFallback>👤</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;

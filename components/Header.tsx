"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Connect", href: "/connect" },
  { name: "Resources", href: "/resources" },
];

const getLinkClass = (pathname: string, href: string): string => {
  if (pathname === href) {
    return "underline underline-offset-4 decoration-2";
  }

  return "link";
};

export const Header = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full border-b border-border">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* left */}
        <Link
          href="/"
          className="flex items-center transition-opacity hover:opacity-90 gap-3"
        >
          <Image
            src="/trk-icon.png"
            alt="Branden Moya"
            loading="eager"
            width={56}
            height={56}
            className="rounded-full object-cover"
          />

          <span className="text-lg font-medium tracking-tight">TRK</span>
        </Link>

        {/* desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-5 text-sm">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={getLinkClass(pathname, link.href)}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <ThemeToggle />
        </div>

        {/* mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />

          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {mobileOpen && (
        <nav className="border-t border-border px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={getLinkClass(pathname, link.href)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

"use client";

import "../globals.css";
import Footer from "@/components/Footer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Login", href: "/login/3" },
  { name: "Register", href: "/register" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [input, setInput] = useState("");

  return (
    <div>
      <div className="flex items-center justify-center space-x-5">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-black text-white my-10"
        />
        {navLinks.map((link) => {
          //
          //
          //
          const isActive =
            pathname === link.href ||
            (pathname.startsWith(link.href) && link.href !== "/");
          //
          //
          //
          return (
            <Link
              key={link.href}
              href={link.href}
              className={isActive ? "font-bold" : "text-blue-500"}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      {children}
      <Footer />
    </div>
  );
}

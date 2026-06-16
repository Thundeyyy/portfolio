import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Porfotlio",
  description: "Portfolio de proyectos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#000032] text-[white]`}
      >
      {/* 1. NAVBAR (HEADER) - Fijo arriba */}
        <header className=" border-b border-[#2e323f] bg-[#0d0e12]/80 backdrop-blur-md sticky top-0 z-50">
          	<div className="w-full h-16 flex justify-between items-center">
            	{/* Enlaces de navegación */}
				<div className="flex-1">
					
				</div>
				<div className="">
					<nav className="flex gap-10 text-sm font-bold uppercase tracking-wider text-gray-400">
						<a href="#inicio" className="hover:text-[#ffffff] transition-colors duration-400">Inicio</a>
						<a href="#sobre-mi" className="hover:text-[#ffffff] transition-colors duration-400">Sobre Mí</a>
						<a href="#proyectos" className="hover:text-[#ffffff] transition-colors duration-400">Proyectos</a>
						<a href="#contacto" className="hover:text-[#ffffff] transition-colors duration-400">Contacto</a>
					</nav>
				</div>
				<div className="flex-1 flex justify-end">
					<p className="pr-10">
						dm/lm
					</p>
		  		</div>

          	</div>
		  
        </header>

        {children}
      </body>
    </html>
  );
}

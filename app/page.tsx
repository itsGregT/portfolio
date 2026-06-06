import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { ChevronLeft, ChevronRight, Slash } from "lucide-react";


export default function Home() {
  return (
    <div>
        <header className="header">
            <a className="header__logo" href="#home"><span className="header__logo-icon"><ChevronLeft strokeWidth={3} width={32} height={32} /><Slash strokeWidth={4} /><ChevronRight strokeWidth={3} width={32} height={32} /></span> Greg Thomas</a>
            <Navigation />
        </header>
        <main className="main">
            <Hero />
            <Projects />
            <About />
        </main>
        <Footer />
    </div>
  );
}

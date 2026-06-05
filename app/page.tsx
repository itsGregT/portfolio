import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div>
        <header className="header">
            <a className="header__logo" href="#home">Greg Thomas</a>
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

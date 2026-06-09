import Image from "next/image";
import { ArrowRight, Dot, Download, MailIcon } from 'lucide-react';
import GitHubIcon from "@/components/icons/GithubIcon";
import LinkedInIcon from "@/components/icons/LinkedinIcon";

export default function Hero() {
    return (
        <section id="home" className="hero section">
            <div className="hero__grid grid grid--50-50">
                <div className="hero__left">
                    <h2 className="hero__subtitle">Frontend Engineer <Dot /> UX Designer <Dot /> Product-minded Developer</h2>
                    <h1 className="hero__title">Transforming complex systems into intuitive digital experiences.</h1>
                    <p className="hero__description">I combine modern frontend development, user experience, and architectural thinking to create digital products that are intuitive, scalable, and built around real user needs.</p>
                    <div className="hero__actions">
                        <a className="button button--primary" href="#projects">View My Work <ArrowRight /></a>
                        <a className="button button--secondary" href="/img/Greg_Thomas_Resume.pdf" download>Download Resume <Download /></a>
                    </div>
                    <div className="hero__links">
                        <a href="https://github.com/itsGregT" target="_blank" rel="noopener noreferrer">
                            <p className="visually-hidden">View my GitHub profile.</p>
                            <GitHubIcon className="hero__link-svg" />
                        </a>
                        <a href="https://linkedin.com/in/itsgregt" target="_blank" rel="noopener noreferrer">
                            <p className="visually-hidden">View my LinkedIn profile.</p>
                            <LinkedInIcon className="hero__link-svg" />
                        </a>
                        <a href="mailto:gregthomas.dev@gmail.com">
                            <p className="visually-hidden">Send me an email.</p>
                            <MailIcon className="hero__link-svg--alt" stroke="white" width="45" height="45" />
                        </a>
                    </div>
                </div>
                <div className="hero__right">
                    <div className="hero__right-media">
                        <Image 
                            className="hero__media" 
                            src="/img/greg.jpg" 
                            alt="Greg Thomas." 
                            width={480}
                            height={684}    
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
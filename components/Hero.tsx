import Image from "next/image";
import { MailIcon } from 'lucide-react';
import GitHubIcon from "@/components/icons/GithubIcon";
import LinkedInIcon from "@/components/icons/LinkedinIcon";

export default function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero__grid grid grid--50-50">
                <div className="hero__left">
                    <h2 className="hero__subtitle">Frontend Engineer * UX Designer * Product Owner</h2>
                    <h1 className="hero__title">I build digital products that solve real problems</h1>
                    <p className="hero__description">I combine product thinking, user experience, and modern frontend development to build scalable, data-drive applications that deliver measurable impact.</p>
                    <div className="hero__actions">
                        <a className="button button--primary" href="#work">View My Work</a>
                        <a className="button button--secondary" href="" download>Download Resume</a>
                    </div>
                </div>
                <div className="hero__right">
                    <div className="hero__right-media">
                        <Image 
                            className="hero__media" 
                            src="/img/greg.jpg" 
                            alt="Greg Thomas." 
                            width={500}
                            height={500}    
                        />
                    </div>
                </div>
            </div>
            <div className="hero__links">
                <a href="https://github.com/itsGregT" target="_blank" rel="noopener noreferrer">
                    <p className="visually-hidden">View my GitHub profile.</p>
                    <GitHubIcon />
                </a>
                <a href="https://linkedin.com/in/itsgregt" target="_blank" rel="noopener noreferrer">
                    <p className="visually-hidden">View my LinkedIn profile.</p>
                    <LinkedInIcon />
                </a>
                <a href="mailto:gregthomas.dev@gmail.com">
                    <p className="visually-hidden">Send me an email.</p>
                    <MailIcon stroke="yellow" width="32" />
                </a>
            </div>
        </section>
    )
}
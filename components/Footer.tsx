import { ArrowRight, FileDown } from "lucide-react";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__grid">
                <div className="footer__grid-item">
                    <span className="footer__icon">FOOTER_ICON</span>
                    <p className="footer__title">Let's build something amazing together.</p>
                </div>
                <div className="footer__grid-item">
                    <h3 className="footer__subtitle">Get in touch</h3>
                    <p className="footer__desc">I'm always open to discussing new opportunities and interesting projects.</p>
                    <a className="footer__email" href="mailto:gregthomas.dev@gmail.com">gregthomas.dev@gmail.com</a>
                </div>
                <div className="footer__grid-item">
                    <ul className="footer__social-links">
                        <li className="footer__social-link">
                            <a className="footer__social-link" href="https://www.linkedin.com/in/itsgregt/">
                                <LinkedinIcon className="footer__social-link-icon" />
                                <p className="footer__social-link-text">LinkedIn</p>
                                <ArrowRight />
                            </a>
                            <a className="footer__social-link" href="https://github.com/itsGregT">
                                <GithubIcon className="footer__social-link-icon" />
                                <span className="footer__social-link-icon">SOCIAL_LINK_ICON</span>
                                <p className="footer__social-link-text">GitHub</p>
                                <ArrowRight />
                            </a>
                            <a className="footer__social-link" href="https://www.linkedin.com/in/itsgregt/">
                                <FileDown className="footer__social-link-icon" />
                                <p className="footer__social-link-text">Download Resume</p>
                                <ArrowRight />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="footer__copyright">&copy; {new Date().getFullYear()} Greg Thomas</p>
        </footer>
    )
}
import { ChartNoAxesCombined, Code, Laptop, Users } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="section grid grid--40-60">
            <div className="about__left">
                <h2 className="section__subtitle">About Me</h2>
                <p className="section__title">Turning Complex Problems into Intuitive Experiences</p>
                <p className="section__desc">For more than a decade, I've worked at the intersection of design and engineering, helping teams turn complex ideas into intuitive digital products. My experience spans SaaS platforms, industrial IoT, high-traffic e-commerce, and custom business applications.</p>
            </div>
            <div className="about__right">
                <div className="about-grid">
                    <div className="about-grid__item">
                        <span className="about-grid__icon"><Laptop className="about-grid__icon-svg" stroke="white" width="50" height="50" /></span>
                        <p className="about-grid__title">
                            <span className="about-grid__title--lg">13+ years</span>
                            <span className="about-grid__title--sm">Design & Development</span>
                        </p>
                    </div>
                    <div className="about-grid__item">
                        <span className="about-grid__icon"><Code className="about-grid__icon-svg" stroke="white" width="50" height="50" /></span>
                        <p className="about-grid__title">
                            <span className="about-grid__title--lg">10+ years</span>
                            <span className="about-grid__title--sm">Frontend Engineering</span>
                        </p>
                    </div>
                    <div className="about-grid__item">
                        <span className="about-grid__icon"><Users className="about-grid__icon-svg" stroke="white" width="45" height="45" /></span>
                        <p className="about-grid__title">
                            <span className="about-grid__title--lg">Team Leadership</span>
                            <span className="about-grid__title--sm">Mentoring & Code Review</span>
                        </p>
                    </div>
                    <div className="about-grid__item">
                        <span className="about-grid__icon"><ChartNoAxesCombined className="about-grid__icon-svg" stroke="white" width="45" height="45" /></span>
                        <p className="about-grid__title">
                            <span className="about-grid__title--lg">Product Ownership</span>
                            <span className="about-grid__title--sm">Discovery to Delivery</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default function About() {
    return (
        <section id="work" className="section projects">
            <div className="about__left">
                <h2 className="section__title">About Me</h2>
                <p className="section__subtitle">I bridge the gap between business needs and technical solutions.</p>
                <p className="section__desc">With 13+ years in design, 10+ years in frontend development and experience as a Product Owner, I bring a unique blend of skills to build products that users love and businesses value.</p>
            </div>
            <div className="about__right">
                <div className="about-grid">
                    <div className="about-grid__item">
                        <span className="about-grid__icon">TILE_ICON</span>
                        <p className="about-grid__title">
                            <span className="about-grid__title--lg">13+ years</span>
                            <span className="about-grid__title--sm">In digital design and development</span>
                        </p>
                    </div>
                    <div className="about-grid__item">
                        <span className="about-grid__icon">TILE_ICON</span>
                        <p className="about-grid__title">
                            <span className="about-grid__title--lg">10+ years</span>
                            <span className="about-grid__title--sm">Frontend development with modern technologies</span>
                        </p>
                    </div>
                    <div className="about-grid__item">
                        <span className="about-grid__icon">TILE_ICON</span>
                        <p className="about-grid__title">
                            <span className="about-grid__title--lg">Product Leader</span>
                            <span className="about-grid__title--sm">Experience as Product Owner and team lead</span>
                        </p>
                    </div>
                    <div className="about-grid__item">
                        <span className="about-grid__icon">TILE_ICON</span>
                        <p className="about-grid__title">
                            <span className="about-grid__title--lg">Results Driven</span>
                            <span className="about-grid__title--sm">Delivering measurable impact through technology</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
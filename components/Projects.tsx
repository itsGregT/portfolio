import { ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "VoxSomnia Website",
        desc: "Built a modern Next.js website from the ground up, including custom UI development, responsive design, form integrations, analytics tracking, and performance optimizations.",
        tags: ["Next.js", "Typescript", "SCSS", "Google Analytics", "Mailgun"],
        img: "/img/voxsomnia.jpg",
        link: "https://voxsomnia.io/"
    },
    {
        title: "Trellis",
        desc: "Led frontend development, UX design, and product strategy for Trellis, VoxSomnia's Industrial IoT platform that transforms factory data into actionable insights through a unified dashboard.",
        tags: ["React", "Electron", "Typescript", "SCSS", "Apache ECharts"],
        img: "/img/trellis.jpg",
        link: "https://voxsomnia.io/trellis"
    }
]

export default function Projects() {
    return (
        <section id="projects" className="section projects">
            <h2 className="section__subtitle">Featured Projects</h2>
            <p className="section__title">Recent Work</p>
            <div className="project-tiles">
                {projects.map((project, i) => (
                    <a href={project.link} target="_blank" key={i} className="project-tile">
                        <div className="project-tile__media">
                            <Image 
                                src={project.img}
                                alt={project.title}
                                className="project-tile__media-img"
                                width={536}
                                height={302}
                            />
                        </div>
                        <div className="project-tile__content">
                            <h3 className="project-tile__title">{project.title} <ExternalLink /></h3>
                            <p className="project-tile__description">{project.desc}</p>
                            <div className="project-tile__tags">
                                {project.tags.map((tag, j) => (
                                    <span className="project-tile__tag" key={j}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}
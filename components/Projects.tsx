import { ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "VoxSomnia Website",
        desc: "VoxSomnia company website",
        tags: ["React", "Next.js", "Typescript", "SCSS"],
        img: "/img/voxsomnia-poster.jpg"
    },
    {
        title: "VoxSomnia Website",
        desc: "VoxSomnia company website",
        tags: ["React", "Next.js", "Typescript", "SCSS"],
        img: "/img/voxsomnia-poster.jpg"
    },
    {
        title: "VoxSomnia Website",
        desc: "VoxSomnia company website",
        tags: ["React", "Next.js", "Typescript", "SCSS"],
        img: "/img/voxsomnia-poster.jpg"
    }
]

export default function Projects() {
    return (
        <section id="work" className="section projects">
            <h2 className="section__title">Featured Projects</h2>
            <p className="section__subtitle">Here are some of my recent works.</p>
            <div className="project-tiles">
                {projects.map((project, i) => (
                    <div key={i} className="project-tile">
                        <div className="project-tile__media">
                            <Image 
                                src={project.img}
                                alt={project.title}
                                className="project-tile__media-img"
                                width={500}
                                height={500}
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
                    </div>
                ))}
            </div>
        </section>
    )
}
const navItems = [
    {
        label: "Home",
        href: "",
    },
    {
        label: "Projects",
        href: "#projects",
    },
    {
        label: "About",
        href: "#about",
    },
];

export default function Navigation() {
    return (
        <nav className="nav">
            <ul className="nav__items">
                {navItems.map((item, i) => (
                    <li className="nav__item" key={i}>
                        <a className="nav__link" href={item.href}>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

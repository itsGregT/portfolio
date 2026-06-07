'use client';

import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
    {
        label: "Home",
        href: "#home",
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
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    }

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
            <button className="nav__action" onClick={() => handleMenuClick()} >
                <p className="visually-hidden">Expand/Close Mobile Navigation</p>{isMobileNavOpen ? <X size="32" /> : <Menu size="32" />}
            </button>
            {isMobileNavOpen ? (
                <ul className="nav__items nav__items--mobile">
                    {navItems.map((item, i) => (
                        <li className="nav__item" key={i}>
                            <a className="nav__link" href={item.href}>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            ) : null}
        </nav>
    )
}

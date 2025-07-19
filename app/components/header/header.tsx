import React from 'react';
import HeaderButton from "./headerButton";

const Header = () => {

    const navigationItems = [
        {link: "about", label: "About"},
        {link: "skills", label: "Skills"},
        {link: "projects", label: "Projects"},
        {link: "experience", label: "Experience"},
        {link: "contact", label: "Contact"}
    ];


    return (
        <header className="max-w-screen px-4 flex items-center justify-between border-b border-neutral-200 shadow-md">
            <div className="text-lg font-semibold">Sean Joyce</div>
            <nav className=" px-4 py-4 flex items-center">

                <div className="flex items-center gap-6">
                    {navigationItems.map((item) => (
                        <HeaderButton key={item.link} link={item.link}>
                            {item.label}
                        </HeaderButton>
                    ))}
                </div>


            </nav>
        </header>
    );
};

export default Header;




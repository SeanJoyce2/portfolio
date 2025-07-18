import React from 'react';

const HeaderButton = ({children, section}) => {
    const scrollToSection = () => {
        const element = document.getElementById(section);
        element?.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <button
            className="text-muted-foreground hover:text-foreground transition-colors"
            onClick={scrollToSection}>
            {children}
        </button>
    );
};

export default HeaderButton;



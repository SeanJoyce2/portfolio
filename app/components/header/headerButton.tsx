import React from 'react';

const HeaderButton = ({children, link}) => {
    const scrollToSection = () => {
        const element = document.getElementById(link);
        console.log(element)
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



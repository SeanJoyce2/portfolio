import React, {PropsWithChildren} from 'react';
import {Button} from "@/components/ui/button";

interface HeaderButtonProps {
    link: string
}

const HeaderButton = ({link, children}: PropsWithChildren<HeaderButtonProps>) => {
    const scrollToSection = () => {
        const element = document.getElementById(link);
        element?.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <Button
            variant={"link"}
            className={"cursor-pointer"}
            onClick={scrollToSection}>
            {children}
        </Button>
    );
};

export default HeaderButton;



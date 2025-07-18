import React from 'react';

const Hero = () => {
    return (
        <section
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20">
            <div className="container mx-auto px-4 py-20 text-center">
                <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                    Frontend Developer
                </h1>
            </div>
        </section>
    );
};

export default Hero;
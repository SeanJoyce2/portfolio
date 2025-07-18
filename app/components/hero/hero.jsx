import React from 'react';

const Hero = () => {
    return (
        <section
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20">
            <div className="container mx-auto px-4 py-20 text-center">
                <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                    Frontend Developer
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                    I craft beautiful, responsive web experiences with modern technologies.
                    Passionate about clean code, user experience, and bringing ideas to life.
                </p>
            </div>
        </section>
    );
};

export default Hero;
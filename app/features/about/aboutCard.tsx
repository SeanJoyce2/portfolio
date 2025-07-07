import * as motion from "motion/react-client";

const AboutCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
    >
      <section className="w-full bg-card/80 backdrop-blur-md rounded-2xl shadow-xl border border-primary/30 p-6 sm:p-8 flex flex-col items-center gap-4">
        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center shadow-lg mb-2">
          <span className="text-4xl font-bold text-primary-foreground">SJ</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary text-center">
          Sean Joyce
        </h1>
        <h2 className="text-lg md:text-xl text-muted-foreground font-medium text-center">
          Software Engineer
        </h2>
        <p className="text-base md:text-lg text-foreground text-center mt-2">
          Passionate about building modern web experiences, creative problem
          solving, and delivering clean, maintainable code. Always learning,
          always shipping.
        </p>
      </section>
    </motion.div>
  );
};

export default AboutCard;

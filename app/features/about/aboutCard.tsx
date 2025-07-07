import * as motion from "motion/react-client";

const AboutCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1.5,
      }}
    >
      <section className=" p-4 max-w-lg">
        <h1 className="text-6xl">Sean Joyce</h1>
        <h2 className="text-lg">Software Engineer</h2>
      </section>
    </motion.div>
  );
};

export default AboutCard;

import AboutCard from "./features/about/aboutCard";
import { experiences } from "./features/experience/data";
import ExperienceCard from "./features/experience/experienceCard";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <AboutCard />

      <section className="max-w-full p-4">
        <div className="mb-2 text-2xl">Experience</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} experience={exp} />
          ))}
        </div>
      </section>

      <section className="max-w-full p-4">
        <div className="mb-2 text-2xl">Projects</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className="bg-card/80 border border-primary/20 rounded-2xl shadow-md p-6 flex flex-col gap-2 hover:shadow-primary/30 transition-shadow duration-300"
            >
              <div className="h-32 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-xl mb-2 flex items-center justify-center">
                <span className="text-4xl text-primary-foreground font-bold opacity-60">
                  Project {num}
                </span>
              </div>
              <div className="text-lg font-semibold text-primary">
                Project Title {num}
              </div>
              <div className="text-sm text-muted-foreground">
                This is a placeholder description for project {num}. Replace
                this with your real project details.
              </div>
              <div className="flex gap-2 mt-2">
                <span className="px-2 py-1 rounded bg-secondary text-xs text-primary font-medium">
                  React
                </span>
                <span className="px-2 py-1 rounded bg-secondary text-xs text-primary font-medium">
                  Next.js
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-full p-4">
        <div className="mb-2 text-2xl">Contact</div>
        <form
          className="w-full max-w-lg mx-auto bg-card/80 backdrop-blur-md rounded-2xl shadow-lg border border-primary/30 p-6 flex flex-col gap-4"
          action="mailto:your@email.com"
          method="POST"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="px-4 py-2 rounded-lg border border-primary/20 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="px-4 py-2 rounded-lg border border-primary/20 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={4}
            className="px-4 py-2 rounded-lg border border-primary/20 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition resize-none"
          />
          <button
            type="submit"
            className="bg-primary text-primary-foreground font-bold py-2 px-6 rounded-lg shadow hover:bg-primary/90 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      <footer className="w-full mt-8 py-6 flex flex-col items-center bg-background/80 border-t border-primary/20 text-sm text-muted-foreground">
        <div>&copy; {new Date().getFullYear()} Sean Joyce</div>
        <div className="mt-1 flex gap-3">
          <a
            href="https://github.com/seanjoyce2"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            GitHub
          </a>
          <a
            href="mailto:seanthomasjoyce@icloud.com"
            className="hover:text-primary transition"
          >
            Email
          </a>
        </div>
      </footer>
    </div>
  );
}

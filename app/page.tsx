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
        <div className="text-gray-500 italic">Coming soon...</div>
      </section>
      <section className="max-w-full p-4">
        <div className="mb-2 text-2xl">Contact</div>
        <div className="text-gray-500 italic">Coming soon...</div>
      </section>
    </div>
  );
}

import AboutCard from "./features/about/aboutCard";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <AboutCard />
      <section className="max-w-full p-4">
        <div className="mb-2 text-2xl">Projects</div>
        <div className="text-gray-500 italic">Coming soon...</div>
      </section>
      <section className="max-w-full p-4">
        <div className="mb-2 text-2xl">Experience</div>
        <div className="text-gray-500 italic">Coming soon...</div>
      </section>
      <section className="max-w-full p-4">
        <div className="mb-2 text-2xl">Contact</div>
        <div className="text-gray-500 italic">Coming soon...</div>
      </section>
    </div>
  );
}

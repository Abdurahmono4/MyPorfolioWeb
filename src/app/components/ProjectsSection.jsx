export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12 text-white">
      <h2 className="text-4xl font-bold mb-6">Selected projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <article className="rounded-xl bg-[#181818] border border-[#33353F] p-6">
          <h3 className="text-2xl font-semibold">Oil pipeline monitoring</h3>
          <p className="my-4 text-slate-300">A remote monitoring system for tracking oil pipeline pressure and flow using IoT sensors.</p>
          <a className="text-purple-300 underline" href="https://bejewelled-granita-b3208f.netlify.app/">Open monitoring site</a>
        </article>
        <article className="rounded-xl bg-[#181818] border border-[#33353F] p-6">
          <h3 className="text-2xl font-semibold">Developer portfolio</h3>
          <p className="my-4 text-slate-300">I built this portfolio with Next.js and Tailwind CSS to share my projects and engineering background.</p>
          <a className="text-purple-300 underline" href="https://github.com/Abdurahmono4/MyPorfolioWeb">View source on GitHub</a>
        </article>
      </div>
    </section>
  );
}

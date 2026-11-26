export default function ResearchSection() {
  return (
    <section id="research" className="scroll-mt-24 py-12 text-white">
      <h2 className="mb-6 text-4xl font-bold">Research</h2>
      <div className="border-l-2 border-purple-400 pl-6">
        <p className="text-purple-300">MSc in Intelligent Engineering Systems · In progress</p>
        <h3 className="my-3 max-w-3xl text-2xl font-semibold">
          How can operators monitor pipeline pressure and flow from a distance?
        </h3>
        <p className="mb-4 max-w-2xl text-slate-300">
          My oil pipeline project explores this question using IoT sensors.
          Pressure and flow are the two measurements I focus on when monitoring a pipeline remotely.
        </p>
        <a className="text-purple-300 underline" href="https://scholar.google.com/scholar?q=IoT+oil+pipeline+pressure+flow+remote+monitoring">
          Find related papers on Google Scholar
        </a>
      </div>
    </section>
  );
}

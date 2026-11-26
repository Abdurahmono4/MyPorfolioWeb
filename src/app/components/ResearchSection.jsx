const manuscripts = [
  {
    title: "Development of an ESP32- and IoT-Based System for Remote Monitoring of Pressure and Flow Rate in Oil Pipelines",
    authors: "A. A. Rakhimov and R. O. Olimjonov",
    summary: "An ESP32 sends pressure and flow measurements to a React dashboard. In preliminary tests on a water rig, the prototype detected a simulated leak in under two seconds. Industrial use would require further calibration and field testing.",
    file: "/research/esp32-pipeline-monitoring.docx",
  },
  {
    title: "Technologies for Presenting Uzbek Digital Texts in Sign Language and Prospects for SignBridgeUZ",
    authors: "R. Olimjonov",
    summary: "This review compares seven sign-language datasets and modelling approaches. It proposes a collection linking historical texts, modern Uzbek interpretations and expert-reviewed sign videos. The proposed evaluation asks whether signers understand the videos and whether the translations preserve the source meaning.",
    file: "/research/signbridgeuz.docx",
  },
];

export default function ResearchSection() {
  return (
    <section id="research" className="scroll-mt-24 py-12 text-white">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-4xl font-bold">Research</h2>
        <a className="text-purple-300 underline underline-offset-4" href="https://scholar.google.com/citations?user=b9oFPgcAAAAJ&hl=ru">My Google Scholar profile ↗</a>
      </div>
      <div className="project-list">
        {manuscripts.map(paper => (
          <article key={paper.file}>
            <h3>{paper.title}</h3>
            <p className="mb-4">{paper.authors}</p>
            <p>{paper.summary}</p>
            <a className="mt-4" href={paper.file} download aria-label={`Download manuscript: ${paper.title} (DOCX)`}>Download manuscript (DOCX)</a>
          </article>
        ))}
      </div>
    </section>
  );
}

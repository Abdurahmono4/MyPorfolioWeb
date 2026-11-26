import Link from "next/link";
import { manuscripts } from "../research/manuscripts";

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
            <div className="mt-4 flex flex-wrap items-center gap-x-5"><Link href={`/research/${paper.slug}`}>Read abstract →</Link>
            <a href={paper.file} download aria-label={`Download manuscript: ${paper.title} (DOCX)`}>Download manuscript (DOCX)</a></div>
          </article>
        ))}
      </div>
    </section>
  );
}

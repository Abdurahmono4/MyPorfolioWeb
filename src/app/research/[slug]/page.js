import Link from "next/link";
import { notFound } from "next/navigation";
import { manuscripts } from "../manuscripts";
import AbstractReader from "./AbstractReader";

export const dynamicParams = false;
export function generateStaticParams() {
  return manuscripts.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }) {
  const paper = manuscripts.find(item => item.slug === params.slug);
  if (!paper) notFound();
  return { title: paper.title + " | Rahmonjon Olimjonov", description: paper.summary };
}

export default function ResearchPaper({ params }) {
  const paper = manuscripts.find(item => item.slug === params.slug);
  if (!paper) notFound();
  return <main className="mx-auto max-w-4xl px-5 py-10 sm:px-10 sm:py-16">
    <Link href="/#research" className="text-purple-300 underline">← All research</Link>
    <article>
      <header className="my-9 border-b border-[#37343f] pb-8">
        <h1 className="mb-5 text-3xl font-bold leading-tight sm:text-5xl">{paper.title}</h1>
        <p className="text-lg">{paper.authors}</p>
        <p className="mt-1 text-slate-300">Fergana State Technical University</p>
      </header>
      <AbstractReader abstracts={paper.abstracts} />
      <a className="solid mt-8 inline-block" href={paper.file} download>Download full manuscript (DOCX)</a>
    </article>
  </main>;
}

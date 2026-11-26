"use client";
import { useState } from "react";

const languages = { en: "English", uz: "O‘zbekcha", ru: "Русский" };
const headings = { en: "Abstract", uz: "Annotatsiya", ru: "Аннотация" };

export default function AbstractReader({ abstracts }) {
  const [language, setLanguage] = useState("en");
  return <section aria-labelledby="abstract-title">
    <div className="filters" role="group" aria-label="Abstract language">
      {Object.entries(languages).map(([code, label]) => <button type="button" key={code} lang={code}
        aria-pressed={language === code} onClick={() => setLanguage(code)}>{label}</button>)}
    </div>
    <div lang={language} aria-live="polite">
      <h2 id="abstract-title" className="mb-3 text-2xl font-semibold">{headings[language]}</h2>
      <p className="max-w-prose text-lg leading-8 text-slate-200">{abstracts[language]}</p>
    </div>
  </section>;
}

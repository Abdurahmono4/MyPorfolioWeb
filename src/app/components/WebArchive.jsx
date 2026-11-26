import Image from "next/image";

const websites = [
  ["Smart School", "school-lyart-psi.vercel.app", "smart-school.jpg"],
  ["Book Marketplace", "market-place-co1h.vercel.app", "1.png"],
  ["Interactive Portfolio", "myadmirableweb.netlify.app", "2.png"],
  ["Recipe Collection", "main-exam-seven.vercel.app", "3.png"],
  ["Sneaker Store", "sneakers-drab-alpha.vercel.app", "4.png"],
  ["Comfy Store", "feature-tawny.vercel.app", "5.png"],
  ["To-Do List", "to-do-list-five-chi-76.vercel.app", "6.png"],
  ["CUser Directory", "c-user-rho.vercel.app", "7.png"],
  ["Frontend Quiz", "quiz-apps-sigma.vercel.app", "quiz.jpg"],
];

export default function WebArchive() {
  return (
    <section id="web-archive" className="border-t border-[#33353f] py-12">
      <h2 className="mb-6 text-3xl font-bold">Earlier web projects</h2>
      <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {websites.map(([title, domain, image]) => (
          <li key={domain}>
            <a href={`https://${domain}/`} className="group block overflow-hidden rounded-xl border border-[#37343f] bg-[#181818] hover:border-purple-400">
              <Image src={`/image/projects/${image}`} alt="" width={600} height={360}
                sizes="(min-width: 1280px) 25vw, (min-width: 640px) 45vw, 90vw"
                className="aspect-video w-full object-cover object-top" />
              <span className="flex items-center justify-between p-4 font-semibold">
                {title}<span aria-hidden="true" className="text-purple-300">↗</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

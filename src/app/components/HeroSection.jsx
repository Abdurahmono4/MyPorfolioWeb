export default function HeroSection() {
  return (
    <section id="home" className="intro">
      <div>
        <p className="eyebrow">Frontend developer · Fergana, Uzbekistan</p>
        <h1>Rahmonjon<br/><em>Olimjonov</em></h1>
        <p className="lead">I build web interfaces with React and Next.js. My engineering research explores how to monitor oil pipelines through pressure and flow sensors.</p>
        <div className="actions"><a className="solid" href="#projects">Explore projects ↓</a><a className="outline" download="Rahmonjon-Olimjonov-CV.pdf" href="/cv/my-cv.pdf">Download CV ↓</a></div>
      </div>
      <figure className="instrument">
        <div className="eyebrow">Pipeline monitoring</div>
        <div className="pipeline"><span>Pressure</span><span>Flow</span></div>
        <figcaption>IoT sensors <b>→</b> Remote dashboard</figcaption>
        <a href="#research">Explore the research ↗</a>
      </figure>
    </section>
  );
}

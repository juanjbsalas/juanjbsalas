import SectionWrapper from '@/components/SectionWrapper'

const SKILLS = [
  'Python',
  'JavaScript',
  'TypeScript',
  'C++',
  'HTML & CSS',
  'Flask',
  'Next.js',
  'Tailwind CSS',
  'PostgreSQL',
  'Git & GitHub',
  'Arduino',
  'Selenium',
]

export default function About() {
  return (
    <SectionWrapper id="about">
      {/* Section heading */}
      <div className="mb-12">
        <p className="text-sm font-semibold text-camo-700 uppercase tracking-widest mb-2">
          About Me
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-camo-900 tracking-tight">
          A little about me
        </h2>
      </div>

      <div className="grid lg:grid-cols-5 gap-12 items-start">
        {/* Text — 3 cols */}
        <div className="lg:col-span-3 flex flex-col gap-5 text-base text-camo-900/70 leading-relaxed">
          <p>
            I&apos;m Juan Salas, a Computer Science and Applied Mathematics student at{' '}
            <span className="text-camo-700 font-medium">Wofford College</span> (Class of 2027),
            passionate about building software that is both useful and well-crafted. I enjoy the full
            stack — from designing intuitive user interfaces to architecting databases and APIs that
            power them.
          </p>
          <p>
            Right now I&apos;m focused on{' '}
            <span className="text-camo-700 font-medium">InvoiceXchange</span>, a modern invoicing
            platform I&apos;m building from the ground up. I&apos;m also deepening my skills in
            databases, cloud architecture, and full-stack web development. My goal is to work at a
            company where I can contribute to impactful products, grow quickly, and eventually build
            my own.
          </p>
          <p>
            Outside of engineering, I competed as a swimmer for 12 years — including 3 years of
            collegiate Open Water Swimming. I bring that same work ethic and discipline to everything
            I build.
          </p>
        </div>

        {/* Skills — 2 cols */}
        <div className="lg:col-span-2">
          <h3 className="text-xs font-semibold text-camo-900/50 uppercase tracking-widest mb-4">
            Technologies &amp; Tools
          </h3>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 bg-camo-100 text-camo-700 text-sm font-medium rounded-lg border border-camo-300/50 hover:border-camo-700 hover:bg-white transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

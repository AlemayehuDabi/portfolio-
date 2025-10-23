import {
  SiCss3,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongoose,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiReactbootstrap,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

const sections = [
  {
    title: 'Languages',
    items: [
      { icon: <SiJavascript color="#F7DF1E" size={50} />, name: 'JavaScript' },
      { icon: <SiTypescript color="#3178C6" size={50} />, name: 'TypeScript' },
    ],
  },
  {
    title: 'Framework',
    items: [
      { icon: <SiHtml5 color="#E44D26" size={50} />, name: 'HTML' },
      { icon: <SiCss3 color="#264DE4" size={50} />, name: 'CSS' },
      { icon: <SiTailwindcss color="#38BDF8" size={50} />, name: 'Tailwind' },
      {
        icon: <SiReactbootstrap color="#563D7C" size={50} />,
        name: 'Bootstrap',
      },
      { icon: <SiReact color="#61DAFB" size={50} />, name: 'React' },
      {
        icon: <SiNextdotjs className="text-black dark:text-white" size={50} />,
        name: 'Next.js',
      },
      {
        icon: <SiExpress className="text-black dark:text-white" size={50} />,
        name: 'Express',
      },
      { icon: <SiNodedotjs color="#339933" size={50} />, name: 'Node.js' },
      { icon: <SiSupabase color="#3ECF8E" size={50} />, name: 'Supabase' },
      { icon: <SiNestjs color="#FF0000" size={50} />, name: 'Nest' },
    ],
  },
  {
    title: 'Database',
    items: [
      { icon: <SiMongoose color="#800000" size={50} />, name: 'Mongoose' },
      { icon: <SiPostgresql color="#336791" size={50} />, name: 'Postgresql' },
    ],
  },
  {
    title: 'Version Control',
    items: [
      {
        icon: <SiGit className="text-black dark:text-white" size={50} />,
        name: 'Git',
      },
      {
        icon: <SiGithub className="text-black dark:text-white" size={50} />,
        name: 'GitHub',
      },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="w-full py-14 px-6 flex flex-col gap-12 mt-10">
      <h1 className="text-4xl md:text-5xl font-semibold text-center">
        Tech <span className="text-[var(--primary)]">Stack</span>
      </h1>

      <div className="flex flex-col gap-14">
        {sections.map((section, i) => (
          <div key={section.title} className="w-full">
            <h2 className="text-center text-lg md:text-xl font-medium text-gray-600 mb-6">
              {section.title}
            </h2>

            {/* marquee container */}
            <div className="marquee overflow-hidden flex justify-center items-center">
              {/* track contains two identical groups for seamless loop */}
              <div
                className={`marquee-track text-center ${
                  i % 2 === 1 ? 'marquee-reverse' : 'marquee-forward'
                }`}
                // aria-hidden for duplicated track semantics
                aria-hidden="true"
              >
                {/* group 1 */}
                <div className="marquee-group flex items-center gap-10">
                  {section.items.map((tech, idx) => (
                    <div
                      key={`${section.title}-a-${idx}`}
                      className="marquee-item flex flex-col items-center justify-center min-w-[120px]"
                    >
                      <div className="icon">{tech.icon}</div>
                      <span className="mt-2 text-sm text-gray-400">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

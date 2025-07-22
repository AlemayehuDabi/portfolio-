import {
  SiCss3,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongoose,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiReactbootstrap,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

const techs = [
  {
    icon: (
      <SiHtml5
        className="fill-current text-[#E44D26] dark:text-[#E44D26]"
        size={50}
      />
    ),
    name: 'HTML',
  },
  { icon: <SiCss3 color="#264DE4" size={50} />, name: 'CSS' },
  { icon: <SiTailwindcss color="#38BDF8" size={50} />, name: 'TAILWIND' },
  { icon: <SiReactbootstrap color="#563D7C" size={50} />, name: 'BOOTSTRAP' },
  { icon: <SiJavascript color="#F7DF1E" size={50} />, name: 'JS' },
  { icon: <SiTypescript color="#3178C6" size={50} />, name: 'TYPESCRIPT' },
  { icon: <SiReact color="#61DAFB" size={50} />, name: 'REACT' },
  {
    icon: (
      <SiNextdotjs
        className="fill-current text-[#000] dark:text-[#fff]"
        size={50}
      />
    ),
    name: 'NEXT',
  },
  {
    icon: (
      <SiExpress
        className="fill-current text-[#000] dark:text-[#fff]"
        size={50}
      />
    ),
    name: 'EXPRESS',
  },
  { icon: <SiNodedotjs color="#339933" size={50} />, name: 'NODE JS' },
  { icon: <SiSupabase color="#3ECF8E" size={50} />, name: 'SUPABASE' },
  { icon: <SiMongoose color="#800000" size={50} />, name: 'MONGOOSE' },
  {
    icon: (
      <SiGit className="fill-current text-[#000] dark:text-[#fff]" size={50} />
    ),
    name: 'GIT',
  },
  {
    icon: (
      <SiGithub
        className="fill-current text-[#181717] dark:text-[#fff]"
        size={50}
      />
    ),
    name: 'GITHUB',
  },
];

export default function TechStack() {
  return (
    <section className="flex flex-col justify-center items-center gap-20 px-4 py-10 w-full overflow-hidden mt-20 mb-20">
      <h1 className="text-4xl md:text-5xl font-semibold tracking-wide text-[var(--gray)]">
        Tech <span className="text-[var(--primary)]">Stack</span>
      </h1>

      <div className="relative w-full">
        <div className="flex gap-10 animate-marquee w-max">
          {[...techs, ...techs].map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 min-w-[80px]"
            >
              {tech.icon}
              <span className="text-center text-gray-400 font-bold tracking-wider text-sm md:text-base">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

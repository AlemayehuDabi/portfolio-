import {
  SiCss3,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongoose,
  SiNativescript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiReactbootstrap,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
export default function TechStack() {
  return (
    <div className="flex flex-col justify-center items-center gap-20 overflow-hidden">
      <h1 className="text-5xl font-semibold tracking-wide text-[var(--gray)]">
        Tech <span className="text-[var(--primary)]">Stack</span>
      </h1>

      {/* Outer container to clip overflow */}
      <div className="overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee w-max">
          {/* Duplicate content to create the loop */}
          {[...Array(1)].map((_, i) => (
            <div key={i} className="flex gap-10 px-10">
              <span className="flex flex-col justify-center items-center gap-2">
                <SiHtml5 size={50} color="#E44D26" />
                <span className="text-center text-gray-400 font-bold tracking-wider">
                  HTML
                </span>
              </span>
              <span className="flex flex-col justify-center items-center gap-2">
                <SiCss3 size={50} color="#264DE4" />
                <span className="text-center text-gray-400 font-bold tracking-wider">
                  CSS
                </span>
              </span>
              <span className="flex flex-col justify-center items-center gap-2">
                <SiTailwindcss size={50} color="#38BDF8" />
                <span className="text-center text-gray-400 font-bold tracking-wider">
                  TAILWIND
                </span>
              </span>
              <span className="flex flex-col justify-center items-center gap-2">
                <SiReactbootstrap size={50} color="#563D7C" />
                <span className="text-center text-gray-400 font-bold tracking-wider">
                  BOOTSTRAP
                </span>
              </span>
              <span className="flex flex-col justify-center items-center gap-2">
                <SiJavascript size={50} color="#F7DF1E" />
                <span className="text-center text-gray-400 font-bold tracking-wider">
                  JS
                </span>
              </span>
              <span className="flex flex-col justify-center items-center gap-2">
                <SiTypescript size={50} color="#3178C6" />
                <span className="text-center text-gray-400 font-bold tracking-wider">
                  TYPESCRIPT
                </span>
              </span>
              <span className="flex flex-col justify-center items-center gap-2">
                <SiReact size={50} color="#61DAFB" />
                <span className="text-center text-gray-400 font-bold tracking-wider">
                  REACT
                </span>
              </span>
              <span className="flex flex-col justify-center items-center gap-2">
                <SiNextdotjs size={50} color="#000000" />
                <span className="text-center text-gray-400 font-bold tracking-wider">
                  NEXT
                </span>
              </span>
              <span className="flex flex-col justify-center items-center gap-2">
                <SiExpress size={50} color="#000000" />
                <span className="text-center text-gray-400 font-bold tracking-wider">
                  EXPRESS
                </span>
              </span>
              <span className="flex flex-col justify-center items-center gap-2">
                <SiNodedotjs size={50} color="#339933" />
                <span className="text-center text-gray-400 font-bold tracking-wider">
                  NODE JS
                </span>
              </span>
              <span className="flex flex-col justify-center items-center gap-2">
                <SiSupabase size={50} color="#3ECF8E" />
                <span className="text-center text-gray-400 font-bold tracking-wider">
                  SUPABASS
                </span>
              </span>
              <span className="flex flex-col justify-center items-center gap-2">
                <SiMongoose size={50} color="#800000" />
                <span className="text-center text-gray-400 font-bold tracking-wider">
                  MONGOOSE
                </span>
              </span>
              <span className="flex flex-col justify-center items-center gap-2">
                <SiGit size={50} color="#F05032" />
                <span className="text-center text-gray-400 font-bold tracking-wider">
                  GIT
                </span>
              </span>
              <span className="flex flex-col justify-center items-center gap-2">
                <SiGithub size={50} color="#181717" />
                <span className="text-center text-gray-400 font-bold tracking-wider">
                  GITHUB
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

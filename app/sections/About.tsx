export default function AboutSection() {
  return (
    <section className="w-full px-4 py-10 flex items-center justify-center">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center max-w-md lg:max-w-5xl w-full">
        {/* Left - Image Container */}
        <div className="relative w-full h-96 border-8 border-amber-600 rounded-xl">
          <div className="bg-white rounded-lg h-full w-full absolute left-4 bottom-4 overflow-hidden">
            <img
              src="/img.jpg"
              alt="Profile"
              className="object-cover h-full w-full rounded-lg"
            />
          </div>
        </div>

        {/* Right - Content */}
        <div className=" flex flex-col gap-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-wide text-[var(--gray)]">
            About <span className="text-[var(--primary)]">Me.</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-400 tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            optio doloremque tenetur, saepe eligendi debitis placeat soluta vero
            eveniet, natus in nulla necessitatibus dolorem ullam excepturi magni
            quo repudiandae ad.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 transition rounded-lg text-lg font-semibold">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

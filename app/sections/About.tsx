export default function AboutSection() {
  return (
    <div className=" flex items-center justify-center">
      <div className="flex gap-20 justify-between items-center w-3/4">
        <div className="border-8 border-amber-600 h-96 relative flex-1 rounded-xl">
          <div className="bg-white rounded-lg h-full  absolute left-5 bottom-5 w-full">
            <img
              src="/img.jpg"
              alt="Next.js logo"
              className="h-full w-full rounded-lg"
            />
          </div>
        </div>

        <div className="flex flex-col gap-5 flex-2">
          <h1 className="text-5xl font-semibold tracking-wide text-[var(--gray)]">
            About <span className="text-[var(--primary)]">Me.</span>
          </h1>
          <p className="w-full text-wrap text-xl text-gray-400 tracking-wider">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            optio doloremque tenetur, saepe eligendi debitis placeat soluta vero
            eveniet, natus in nulla necessitatibus dolorem ullam excepturi magni
            quo repudiandae ad.
          </p>
          <button className="px-4 py-2 rounded text-gray-300 hover:text-gray-500 font-semibold  w-1/3 text-xl border border-gray-200 cursor-pointer hover:border-blue-400 active:border-blue-600">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}

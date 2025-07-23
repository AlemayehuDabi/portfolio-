import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="w-full px-4 py-10 flex items-center justify-center mt-20 mb-20">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center max-w-md lg:max-w-5xl w-full">
        {/* Left - Image Container */}
        <div className="relative w-full h-96 border-8 border-amber-600 rounded-xl lg:flex-1">
          <div className="bg-white rounded-lg h-full w-full absolute left-4 bottom-4 overflow-hidden">
            <Image
              src="/img.jpg"
              alt="Profile"
              width={500}
              height={500}
              priority
              className="object-cover h-full w-full rounded-lg"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>

        {/* Right - Content */}
        <div className=" flex flex-col gap-6 text-center lg:text-left lg:flex-2">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-wide text-[var(--gray)]">
            About <span className="text-[var(--primary)]">Me.</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-400 tracking-wide">
            I&#39;m a passionate Web and Mobile Developer with a focus on
            building responsive, user-friendly applications. I specialize in
            modern JavaScript frameworks like React, React Native, and Next.js,
            and love turning ideas into interactive digital experiences. With a
            strong foundation in full-stack development, I enjoy creating
            seamless solutions across platforms. I&#39;m always eager to learn,
            collaborate, and bring value through clean, scalable code.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link href="/contact-me">
              <button className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 transition rounded-lg text-lg font-semibold">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

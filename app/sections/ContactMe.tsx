import { SiGithub } from "react-icons/si";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";

export default function ContactMe() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <h1 className="text-5xl font-semibold tracking-wide text-[var(--gray)] mb-10">
        Contact <span className="text-[var(--primary)]">Me.</span>
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-start gap-10 px-6 py-12 w-full max-w-6xl mx-auto bg-white shadow-xs shadow-white rounded-lg p-6">
        {/* Left Side - Contact Info */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="text-lg space-y-4">
            <p>
              <span className="text-gray-500 font-semibold">Email:</span>{" "}
              <a
                href="mailto:you@example.com"
                className="text-[var(--primary)] hover:underline"
              >
                alemayehudabi606@gmail.com
              </a>
            </p>
            <p>
              <span className="text-gray-500 font-semibold">Phone:</span>{" "}
              <a
                href="tel:+1234567890"
                className="text-[var(--primary)] hover:underline"
              >
                +25165713316
              </a>
            </p>
            <div>
              <div className="flex gap-4 mt-2">
                {/* Replace # with your actual links */}
                <a href="#" className="text-blue-500 hover:underline">
                  <BsTwitterX size={20} />
                </a>
                <a href="#" className="text-blue-500 hover:underline">
                  <BsLinkedin size={20} />
                </a>
                <a href="#" className="text-blue-500 hover:underline">
                  <SiGithub size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form className="w-full md:w-1/2 space-y-6">
          <div>
            <label className="block text-gray-700 text-base font-medium mb-2">
              Name:
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-base font-medium mb-2">
              Email:
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-base font-medium mb-2">
              Message:
            </label>
            <textarea
              // rows="4"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-md hover:opacity-90 transition cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

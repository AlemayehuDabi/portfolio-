'use client';

import { SiGithub } from 'react-icons/si';
import { BsLinkedin, BsTwitterX } from 'react-icons/bs';
import { useState } from 'react';

export default function ContactMe() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('Message sent!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus(`Error: ${data.message}`);
      }
    } catch (err) {
      console.log(err);
      setStatus('Failed to send message.');
    }
  };

  return (
    <div className="flex flex-col gap-6 justify-center items-center px-4 py-10 w-full mt-20 mb-20">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide text-[var(--gray)] mb-6 text-center">
        Contact <span className="text-[var(--primary)]">Me.</span>
      </h1>

      <div className="flex flex-col-reverse md:flex-row justify-center items-start gap-10 w-full max-w-6xl bg-white shadow-md rounded-lg px-6 py-10">
        {/* Left Side - Contact Info */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="text-base sm:text-lg space-y-4">
            <p>
              <span className="text-gray-500 font-semibold">Email:</span>{' '}
              <a
                href="mailto:alemayehudabi606@gmail.com"
                className="text-[var(--primary)] hover:underline"
              >
                alemayehudabi606@gmail.com
              </a>
            </p>
            <p>
              <span className="text-gray-500 font-semibold">Phone:</span>{' '}
              <a
                href="tel:+25165713316"
                className="text-[var(--primary)] hover:underline"
              >
                +25165713316
              </a>
            </p>

            <div className="flex gap-5 pt-2">
              {/* Social Icons */}
              <a
                href="#"
                className="text-blue-500 hover:text-blue-600 transition"
                aria-label="Twitter"
              >
                <BsTwitterX size={24} />
              </a>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-600 transition"
                aria-label="LinkedIn"
              >
                <BsLinkedin size={24} />
              </a>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-600 transition"
                aria-label="GitHub"
              >
                <SiGithub size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form className="w-full md:w-1/2 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 text-base font-medium mb-2">
              Name:
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-base font-medium mb-2">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-base font-medium mb-2">
              Message:
            </label>
            <textarea
              rows={4}
              name="message"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[var(--primary)] text-white font-semibold px-6 py-2 rounded-md hover:opacity-90 transition"
          >
            Send Message
          </button>
          {status && <p className="text-sm mt-2">{status}</p>}
        </form>
      </div>
    </div>
  );
}

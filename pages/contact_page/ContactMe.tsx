'use client';

// import { SiGithub } from 'react-icons/si';
// import { BsLinkedin, BsTwitterX } from 'react-icons/bs';
// import { useState } from 'react';
// import Link from 'next/link';

// export default function ContactMe() {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });
//   const [status, setStatus] = useState('');

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus('Sending...');

//     try {
//       const res = await fetch('/api/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         setStatus('Message sent!');
//         setForm({ name: '', email: '', message: '' });
//       } else {
//         setStatus(`Error: ${data.message}`);
//       }
//     } catch (err) {
//       console.log(err);
//       setStatus('Failed to send message.');
//     }
//   };

//   return (
//     <div className="flex flex-col gap-6 justify-center items-center px-4 py-10 w-full mt-20 mb-20">
//       <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide text-[var(--gray)] mb-6 text-center">
//         Contact <span className="text-[var(--primary)]">Me.</span>
//       </h1>

//       <div className="flex flex-col-reverse items-center lg:flex-row justify-center lg:items-start gap-10 w-full max-w-6xl shadow-md rounded-lg px-6 py-10">
//         {/* Left Side - Contact Info */}
//         <div className="w-full md:w-1/2 space-y-6">
//           <div className="text-base sm:text-lg space-y-4">
//             <p>
//               <span className="text-gray-500 dark:text-gray-300 font-semibold">
//                 Email:
//               </span>{' '}
//               <a
//                 href="mailto:alemayehudabi606@gmail.com"
//                 target="_blank"
//                 className="text-[var(--primary)] hover:underline"
//               >
//                 alemayehudabi606@gmail.com
//               </a>
//             </p>
//             <p>
//               <span className="text-gray-500 dark:text-gray-300 font-semibold">
//                 Phone:
//               </span>{' '}
//               <a
//                 href="tel:+25165713316"
//                 target="_blank"
//                 className="text-[var(--primary)] hover:underline"
//               >
//                 +25165713316
//               </a>
//             </p>

//             <div className="flex gap-5 pt-2">
//               {/* Social Icons */}
//               <Link
//                 href="https://x.com/AlemayehuD86593"
//                 className="text-blue-500 hover:text-blue-600 transition"
//                 target="_blank"
//                 aria-label="X"
//               >
//                 <BsTwitterX size={24} />
//               </Link>
//               <Link
//                 href="https://www.linkedin.com/in/alemayehu-dabi-79b5212a1/"
//                 className="text-blue-500 hover:text-blue-600 transition"
//                 aria-label="LinkedIn"
//                 target="_blank"
//               >
//                 <BsLinkedin size={24} />
//               </Link>
//               <Link
//                 href="https://github.com/AlemayehuDabi"
//                 className="text-blue-500 hover:text-blue-600 transition"
//                 aria-label="GitHub"
//                 target="_blank"
//               >
//                 <SiGithub size={24} />
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Right Side - Contact Form */}
//         <form
//           className="w-full md:w-2/3 lg:w-1/2 space-y-6"
//           onSubmit={handleSubmit}
//         >
//           <div>
//             <label className="block text-gray-700 dark:text-gray-300 text-base font-medium mb-2">
//               Name:
//             </label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={form.name}
//               onChange={handleChange}
//               required
//               className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 dark:text-gray-300 text-base font-medium mb-2">
//               Email:
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               required
//               className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
//               placeholder="Your Email"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 dark:text-gray-300 text-base font-medium mb-2">
//               Message:
//             </label>
//             <textarea
//               rows={4}
//               name="message"
//               className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
//               placeholder="Your Message"
//               value={form.message}
//               onChange={handleChange}
//               required
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="bg-[var(--primary)] text-white font-semibold px-6 py-2 rounded-md hover:opacity-90 transition"
//           >
//             Send Message
//           </button>
//           {status && <p className="text-sm mt-2">{status}</p>}
//         </form>
//       </div>
//     </div>
//   );
// }


import { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Mail, Send, Wifi, Power, Volume2 } from 'lucide-react';
import SpotlightCard from '../../component/SpotlightCard';
import { toast } from 'react-toastify';

export default function RetroContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTransmitted, setIsTransmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);


  // 3D rotation values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [5, -5]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-5, 5]), { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    toast('Sending...');


    try {
            const res = await fetch('/api/contact', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(formData),
            });
      
            const data = await res.json();
      
            if (res.ok) {
              toast('Message sent!');
              setFormData({ name: '', email: '', message: '' });
            } else {
              toast(`Error: ${data.message}`);
            }
          } catch (err) {
            console.log(err);
            toast('Failed to send message.');
          }
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsTransmitted(true);
    
    // Reset after animation
    setTimeout(() => {
      setIsTransmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-8 px-10 py-30"
    >
      <div className="flex items-center gap-3 mb-8">
        <Mail className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold">Contact</h2>
        <span className="text-sm text-muted-foreground font-mono">// transmission.init()</span>
      </div>

      {/* 3D Workstation Scene */}
      <div 
        ref={containerRef}
        className="perspective-2000 relative py-12"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          style={{ rotateX, rotateY }}
          className="preserve-3d mx-auto max-w-3xl"
        >
          {/* Desk Surface */}
          <div className="relative">
            {/* Monitor Stand */}
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 w-16 h-8 bg-gradient-to-b from-steel to-graphite rounded-b-lg" />
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-12 w-32 h-4 bg-graphite rounded-full" />

            {/* Monitor */}
            <motion.div
              className="relative bg-gradient-to-b from-graphite to-onyx rounded-2xl p-3 border border-steel shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]"
              style={{
                // transformStyle: 'preserve-3d',
                transform: 'translateZ(20px)',
              }}
            >
              {/* Monitor Bezel */}
              <div className="relative bg-obsidian rounded-xl overflow-hidden border border-steel/50">
                {/* CRT Screen Effect */}
                <div className="crt-scanlines crt-flicker">
                  <div 
                    className="p-6 min-h-[400px] relative"
                    style={{ transform: 'translateZ(50px)', zIndex: 50 }} 
                  >
                    {/* Screen Content */}
                    <div className="p-6 min-h-[400px] relative z-10 pointer-events-auto">
                      {/* Status LEDs */}
                      <div className="absolute top-3 right-3 flex items-center gap-2">
                        <motion.div
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-2 h-2 rounded-full bg-emerald-glow shadow-[0_0_8px_hsl(var(--emerald-glow))]"
                        />
                        <Wifi className="w-3 h-3 text-emerald-glow" />
                      </div>

                      {/* Terminal Header */}
                      <div className="flex items-center gap-2 mb-4 text-terminal-green font-mono text-sm">
                        <Power className="w-4 h-4" />
                        <span className="typing-effect">TRANSMISSION TERMINAL v2.0</span>
                      </div>

                      <div className="border-t border-terminal-green/30 my-4" />

                      {/* Transmitted State */}
                      {isTransmitted ? (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="flex flex-col items-center justify-center h-64 text-terminal-green"
                        >
                          <motion.div
                            animate={{ 
                              boxShadow: [
                                '0 0 20px hsl(var(--terminal-green))',
                                '0 0 60px hsl(var(--terminal-green))',
                                '0 0 20px hsl(var(--terminal-green))',
                              ],
                            }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="w-24 h-24 rounded-full border-2 border-terminal-green flex items-center justify-center mb-4"
                          >
                            <Send className="w-10 h-10" />
                          </motion.div>
                          <div className="text-2xl font-mono font-bold">PACKET TRANSMITTED</div>
                          <div className="text-sm text-terminal-green/70 mt-2">
                            Response ETA: 24 hours
                          </div>
                        </motion.div>
                      ) : (
                        /* Form */
                        <form onSubmit={handleSubmit} 
                          className="space-y-4 relative pointer-events-auto"
                          style={{ isolation: 'isolate' }}>
                          <div>
                            <label className="block text-terminal-green font-mono text-sm mb-1">
                              {'>'} SENDER_ID:
                            </label>
                            <input
                              type="text"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full bg-transparent border border-terminal-green/30 rounded px-3 py-2 text-terminal-green font-mono focus:border-terminal-green focus:shadow-[0_0_10px_hsl(var(--terminal-green)/0.3)] outline-none transition-all pointer-events-auto"
                              placeholder="Enter your name..."
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-terminal-green font-mono text-sm mb-1">
                              {'>'} RETURN_ADDRESS:
                            </label>
                            <input
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full bg-transparent border border-terminal-green/30 rounded px-3 py-2 text-terminal-green font-mono focus:border-terminal-green focus:shadow-[0_0_10px_hsl(var(--terminal-green)/0.3)] outline-none transition-all pointer-events-auto"
                              placeholder="Enter your email..."
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-terminal-green font-mono text-sm mb-1">
                              {'>'} MESSAGE_PAYLOAD:
                            </label>
                            <textarea
                              value={formData.message}
                              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                              rows={4}
                              className="w-full bg-transparent border border-terminal-green/30 rounded px-3 py-2 text-terminal-green font-mono focus:border-terminal-green focus:shadow-[0_0_10px_hsl(var(--terminal-green)/0.3)] outline-none transition-all resize-none pointer-events-auto"
                              placeholder="Enter your message..."
                              required
                            />
                          </div>

                          <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`w-full py-3 rounded font-mono font-bold flex items-center justify-center gap-2 transition-all pointer-events-auto ${
                              isSubmitting
                                ? 'bg-terminal-green/20 text-terminal-green/50'
                                : 'bg-terminal-green text-obsidian hover:shadow-[0_0_20px_hsl(var(--terminal-green)/0.5)]'
                            }`}
                          >
                            {isSubmitting ? (
                              <>
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                  className="w-5 h-5 border-2 border-terminal-green/50 border-t-terminal-green rounded-full"
                                />
                                TRANSMITTING...
                              </>
                            ) : (
                              <>
                                <Send className="w-4 h-4" />
                                TRANSMIT PACKET
                              </>
                            )}
                          </motion.button>
                        </form>
                      )}
                    </div>
                  </div>
                </div>

                {/* Screen Reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-xl z-30" />

              </div>

              {/* Monitor Controls */}
              <div className="flex items-center justify-center gap-4 mt-2 py-1">
                <div className="w-2 h-2 rounded-full bg-steel" />
                <Volume2 className="w-3 h-3 text-steel" />
                <Power className="w-3 h-3 text-steel" />
              </div>
            </motion.div>

          </div>

          {/* Keyboard (Stylized) */}
          <motion.div
            className="mt-8 mx-auto max-w-md"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'translateZ(-10px) rotateX(-20deg)',
            }}
          >
            <div className="bg-gradient-to-b from-graphite to-steel rounded-lg p-2 shadow-lg">
              <div className="grid grid-cols-12 gap-1">
                {Array.from({ length: 48 }).map((_, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -2 }}
                    className={`bg-onyx rounded h-4 ${
                      i === 47 ? 'col-span-3' : // Space bar
                      [0, 12, 24, 36].includes(i) ? 'col-span-1' : ''
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Ambient Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-terminal-green/5 blur-[100px] rounded-full" />
        </div>
      </div>

      {/* Ping Animation (shown when transmitted) */}
      {isTransmitted && (
        <motion.div
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 20, opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="fixed inset-0 flex items-center justify-center pointer-events-none z-50"
        >
          <div className="w-20 h-20 rounded-full border-2 border-terminal-green" />
        </motion.div>
      )}

      {/* Alternative Contact Methods */}
      <div className="grid md:grid-cols-3 gap-4 mt-8">
        {[
          { label: 'Email', value: 'hello@engineer.dev', protocol: 'SMTP' },
          { label: 'GitHub', value: '@engineer', protocol: 'HTTPS' },
          { label: 'LinkedIn', value: 'in/engineer', protocol: 'HTTPS' },
        ].map((contact, i) => (
          <motion.div
            key={contact.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <SpotlightCard spotlightColor="hsl(var(--terminal-green) / 0.08)">
              <div className="p-4 font-mono">
                <div className="text-xs text-terminal-green/50 mb-1">[{contact.protocol}]</div>
                <div className="text-lg font-bold text-terminal-green">{contact.value}</div>
                <div className="text-sm text-muted-foreground">{contact.label}</div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}

        
          {status && <p className="text-sm mt-2">{status}</p>}
        
      </div>
    </motion.section>
  );
}

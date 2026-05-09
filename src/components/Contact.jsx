import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  FaMapMarkerAlt, FaPhone, FaEnvelope,
  FaTelegram, FaGithub, FaPaperPlane,
} from 'react-icons/fa';

emailjs.init('xwI9b59aomNJrLKNw');

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
  viewport: { once: true },
});

const contactInfo = [
  {
    icon: <FaMapMarkerAlt size={16} />,
    label: 'Location',
    value: 'Addis Ababa, Ethiopia',
    href: null,
  },
  {
    icon: <FaEnvelope size={16} />,
    label: 'Email',
    value: 'mnte3434@gmail.com',
    href: 'mailto:mnte3434@gmail.com',
  },
  {
    icon: <FaPhone size={16} />,
    label: 'Phone',
    value: '+251 962 79 81 55',
    href: 'tel:+251962798155',
  },
  {
    icon: <FaTelegram size={16} />,
    label: 'Telegram',
    value: '@mnte3434',
    href: 'https://t.me/mnte3434',
  },
  {
    icon: <FaGithub size={16} />,
    label: 'GitHub',
    value: 'github.com/mntc3434',
    href: 'https://github.com/mntc3434',
  },
];

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    emailjs
      .sendForm('service_qokn5wj', 'template_3j4plhh', form.current, 'xwI9b59aomNJrLKNw')
      .then(
        () => {
          setStatus('success');
          form.current.reset();
        },
        (err) => {
          setStatus('error');
          setErrorMsg(err.text || 'Something went wrong. Try again.');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setStatus(null), 5000);
      });
  };

  return (
    <section id="contact" className="py-28 relative">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(79,142,247,0.15), transparent)' }}
      />

      {/* Orb */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,90,246,0.07) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div {...fadeUp(0)} className="mb-14">
          <span className="section-tag">Contact</span>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight mt-2"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Let's{' '}
            <span className="gradient-text">work together</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl">
            Have a project idea or an open role? Send me a message — I usually reply within a day.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Contact info */}
          <motion.div {...fadeUp(0.1)} className="lg:col-span-2 space-y-4">
            <div className="glass rounded-2xl p-6 border border-white/7">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5">
                Reach me at
              </h3>
              <div className="space-y-3">
                {contactInfo.map(({ icon, label, value, href }) => (
                  <div key={label} className="contact-item">
                    <span className="contact-icon">{icon}</span>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="text-sm text-gray-200 font-medium hover:text-blue-400 transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-gray-200 font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div className="glass rounded-2xl p-6 border border-white/7">
              <div className="flex items-center gap-3 mb-3">
                <span className="pulse-dot" />
                <span className="text-sm font-semibold text-white">Open to work</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Looking for full-time roles or freelance projects — mobile, web, or AI. Remote-friendly.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div {...fadeUp(0.2)} className="lg:col-span-3">
            <div className="glass rounded-2xl p-8 border border-white/7">
              <form ref={form} onSubmit={sendEmail} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-gray-400 mb-2">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="user_name"
                      required
                      placeholder="Abebe Girma"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-400 mb-2">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="user_email"
                      required
                      placeholder="you@email.com"
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-400 mb-2">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    required
                    placeholder="Project idea, job opportunity, collaboration..."
                    className="form-input"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me what you're working on or what you need..."
                    className="form-input resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-white transition-all disabled:opacity-60 disabled:cursor-not-allowed glow-btn"
                  style={{ background: 'linear-gradient(135deg, #4f8ef7, #7c5af6)' }}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane size={14} />
                      Send Message
                    </>
                  )}
                </motion.button>

                {/* Status messages */}
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl text-sm font-medium text-green-300"
                    style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)' }}
                  >
                    ✓ Message sent! I'll get back to you soon.
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl text-sm font-medium text-red-300"
                    style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}
                  >
                    ✕ {errorMsg}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
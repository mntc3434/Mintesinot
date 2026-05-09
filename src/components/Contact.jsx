import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaTelegram, FaGithub } from 'react-icons/fa';

emailjs.init('xwI9b59aomNJrLKNw');

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
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

  const contactLinks = [
    { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Addis Ababa, Ethiopia', href: null },
    { icon: <FaEnvelope />, label: 'Email', value: 'mnte3434@gmail.com', href: 'mailto:mnte3434@gmail.com' },
    { icon: <FaPhone />, label: 'Phone', value: '+251 962 79 81 55', href: 'tel:+251962798155' },
    { icon: <FaTelegram />, label: 'Telegram', value: '@mnteGt', href: 'https://t.me/mnteGt' },
    { icon: <FaGithub />, label: 'GitHub', value: 'mntc3434', href: 'https://github.com/mntc3434' },
  ];

  return (
    <section id="contact" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 heading-display">Get in Touch</h2>
          <div className="w-12 h-1 bg-primary mb-6"></div>
          <p className="text-muted max-w-2xl text-lg">
            Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-6">
              {contactLinks.map((link, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 text-muted">
                    {link.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-1">{link.label}</p>
                    {link.href ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-4">
                        {link.value}
                      </a>
                    ) : (
                      <p className="text-primary">{link.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-8 border-t border-border">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-xs font-medium text-muted">
                <span className="w-2 h-2 rounded-full bg-green-500 relative">
                  <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
                </span>
                Open to work & collaborations
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="user_name" className="text-sm font-medium text-muted">Name</label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    required
                    className="w-full bg-transparent border border-border rounded-md px-4 py-3 text-primary focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="user_email" className="text-sm font-medium text-muted">Email</label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    required
                    className="w-full bg-transparent border border-border rounded-md px-4 py-3 text-primary focus:outline-none focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-muted">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full bg-transparent border border-border rounded-md px-4 py-3 text-primary focus:outline-none focus:border-primary transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-muted">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full bg-transparent border border-border rounded-md px-4 py-3 text-primary focus:outline-none focus:border-primary transition-colors resize-y"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3 bg-primary text-background font-medium rounded-md hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <div className="p-4 rounded-md border border-green-900 bg-green-900/20 text-green-400 text-sm">
                  Message sent successfully! I'll be in touch soon.
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 rounded-md border border-red-900 bg-red-900/20 text-red-400 text-sm">
                  {errorMsg}
                </div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
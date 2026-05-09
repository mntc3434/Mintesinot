import { motion } from 'framer-motion';
import { FaGithub, FaTelegram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Work' },
    { id: 'experience', label: 'Experience' },
  ];

  const socials = [
    { href: 'https://github.com/mntc3434', icon: <FaGithub size={16} />, label: 'GitHub' },
    { href: 'https://t.me/mnteGt', icon: <FaTelegram size={16} />, label: 'Telegram' },
    { href: 'mailto:mnte3434@gmail.com', icon: <FaEnvelope size={16} />, label: 'Email' },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-background pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold tracking-tight mb-4 heading-display">Mintesinot Getu</h2>
            <p className="text-muted text-sm leading-relaxed max-w-sm">
              Software Engineer specializing in Flutter, .NET Core, and AI integrations. Building clean, functional, and performant digital experiences.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-primary uppercase tracking-widest mb-6">Navigation</h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => scrollTo(link.id)}
                    className="text-sm text-muted hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-primary uppercase tracking-widest mb-6">Connect</h3>
            <ul className="space-y-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a 
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-primary transition-colors flex items-center gap-2"
                  >
                    {social.icon} {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50 text-xs text-muted">
          <p>© {year} Mintesinot Getu Mulatu. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Built with React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

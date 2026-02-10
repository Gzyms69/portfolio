import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { portfolioConfig } from '@/lib/terminal-db';
import type { ContactRequest } from '@shared/api';

export const ContactForm = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState<ContactRequest>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch(`https://formspree.io/f/${portfolioConfig.contact.formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus('error');
    }
  };

  return (
    <div className="relative group w-full min-h-[500px]">
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.03)_50%)] bg-[length:100%_4px]" />
        <motion.div 
          animate={{ opacity: [0, 0.015, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-white" 
        />
      </div>

      <div className="relative z-10 bg-[#0a0f0a] border-2 border-primary/30 p-8 rounded-xl shadow-[0_0_20px_rgba(0,255,65,0.1)] overflow-hidden transition-all duration-500 hover:border-primary/60">
        <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-primary m-2" />
        <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-primary m-2" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-primary m-2" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-primary m-2" />

        <div className="flex flex-col gap-6 font-mono">
          <div className="flex flex-col gap-2 border-b border-primary/10 pb-4">
            <div className="flex items-center gap-2 text-[10px] text-primary/40 uppercase tracking-widest mb-2">
              <Terminal className="h-3 w-3" />
              <span>{t('contact_system')} // status: active</span>
            </div>
            <h2 className="text-3xl text-primary uppercase tracking-tight drop-shadow-[0_0_8px_rgba(0,255,65,0.3)]">
              {t('send_message')}
            </h2>
          </div>

          <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input type="hidden" name="form-name" value="contact" />
            
            <div>
              <label htmlFor="name" className="block text-primary/60 text-sm mb-1 uppercase">
                {t('name_label')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-primary/40 text-primary text-lg px-2 py-1 focus:outline-none focus:border-primary/80 transition-colors duration-300 placeholder:text-primary/30"
                placeholder={t('name_placeholder')}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-primary/60 text-sm mb-1 uppercase">
                {t('email_label')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-primary/40 text-primary text-lg px-2 py-1 focus:outline-none focus:border-primary/80 transition-colors duration-300 placeholder:text-primary/30"
                placeholder={t('email_placeholder')}
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-primary/60 text-sm mb-1 uppercase">
                {t('subject_label')}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-primary/40 text-primary text-lg px-2 py-1 focus:outline-none focus:border-primary/80 transition-colors duration-300 placeholder:text-primary/30"
                placeholder={t('subject_placeholder')}
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-primary/60 text-sm mb-1 uppercase">
                {t('message_label')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-transparent border border-primary/40 text-primary text-lg px-2 py-1 focus:outline-none focus:border-primary/80 transition-colors duration-300 placeholder:text-primary/30 resize-none"
                placeholder={t('message_placeholder')}
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              disabled={status === 'loading'}
              whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(0,255,65,0.4)' }}
              whileTap={{ scale: 0.98 }}
              className="mt-4 w-full bg-primary/10 border border-primary/60 text-primary text-xl uppercase py-3 rounded tracking-wider shadow-[0_0_10px_rgba(0,255,65,0.2)] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>SENDING_DATA...</span>
                </>
              ) : (
                t('send_button')
              )}
            </motion.button>

            <AnimatePresence>
              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 flex items-center gap-3 text-green-500 text-lg"
                >
                  <CheckCircle2 className="h-5 w-5" />
                  <span>TRANSMISSION_COMPLETE // MESSAGE_SENT</span>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 flex items-center gap-3 text-red-500 text-lg"
                >
                  <AlertCircle className="h-5 w-5" />
                  <span>UPLINK_FAILURE // PLEASE_RETRY</span>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </div>
  );
};

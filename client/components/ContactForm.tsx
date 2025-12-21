import { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

export const ContactForm = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
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
    try {
      // Correctly convert FormData to an iterable for URLSearchParams
      const formData = new FormData(e.target as HTMLFormElement);
      const encoded = new URLSearchParams(Array.from(formData.entries()) as string[][]).toString();
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encoded,
      });
      alert("Message sent! (Check your email inbox if this is deployed on Netlify)"); // Temporary alert for local testing
      setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Error sending message."); // Temporary alert for local testing
    }
  };

  return (
    <div className="relative group w-full min-h-[500px]"> {/* min-h to match hero section */}
      {/* CRT Screen Overlays for Form */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.03)_50%)] bg-[length:100%_4px]" />
        <motion.div 
          animate={{ opacity: [0, 0.015, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-white" 
        />
      </div>

      <div className="relative z-10 bg-[#0a0f0a] border-2 border-primary/30 p-8 rounded-xl shadow-[0_0_20px_rgba(0,255,65,0.1)] overflow-hidden transition-all duration-500 hover:border-primary/60">
        {/* Corner Brackets */}
        <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-primary m-2" />
        <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-primary m-2" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-primary m-2" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-primary m-2" />

                    <div className="flex flex-col gap-6 font-['VT323']">

                      {/* Form Header */}

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

                        <input type="hidden" name="form-name" value="contact" /> {/* Required for Netlify Forms */}

                        {/* Name Input */}

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

            {/* Email Input */}
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

            {/* Subject Input */}
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

            {/* Message Textarea */}
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

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(0,255,65,0.4)' }}
              whileTap={{ scale: 0.98 }}
              className="mt-4 w-full bg-primary/10 border border-primary/60 text-primary font-['VT323'] text-xl uppercase py-3 rounded tracking-wider shadow-[0_0_10px_rgba(0,255,65,0.2)]"
            >
              {t('send_button')}
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};
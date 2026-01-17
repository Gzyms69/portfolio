import { useEffect } from "react";
import { cvData, portfolioConfig, projects } from "@/lib/terminal-db";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin, MapPin } from "lucide-react";

export default function Resume() {
  const { language, t } = useLanguage();
  const content = portfolioConfig[language];
  const { experiences, education, skills, languages } = cvData[language];

  useEffect(() => {
    document.title = `${content.name} - Resume`;
  }, [content.name]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-page min-h-screen bg-white text-black font-sans selection:bg-gray-200 selection:text-black print:p-0 p-8 flex justify-center">
      <div className="max-w-[210mm] w-full bg-white relative">
        {/* Print/Download Button - Hidden in Print Mode */}
        <div className="fixed bottom-8 right-8 print:hidden z-50">
          <Button 
            onClick={handlePrint}
            className="shadow-xl bg-black text-white hover:bg-gray-800 gap-2 rounded-full px-6 h-12"
          >
            <Download className="w-4 h-4" />
            {t('resume_download')}
          </Button>
        </div>

        {/* Header */}
        <header className="border-b-2 border-black pb-4 mb-4 flex flex-col sm:flex-row justify-between items-start gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full border border-gray-300 overflow-hidden flex-shrink-0">
              <img 
                src="/portfolio/profile.jpg"
                alt={content.name}
                className="w-full h-full object-cover scale-[1.15]"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold uppercase tracking-tight mb-1">{content.name}</h1>
              <p className="text-lg text-gray-700 font-medium">{content.title}</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-1 text-xs text-gray-600 sm:text-right mt-2 sm:mt-0">
            <div className="flex items-center sm:justify-end gap-1.5">
              <Mail className="w-3 h-3" />
              <a href={`mailto:${content.email}`} className="hover:underline">{content.email}</a>
            </div>
            <div className="flex items-center sm:justify-end gap-1.5">
              <Github className="w-3 h-3" />
              <a href={portfolioConfig.socials.github} target="_blank" rel="noreferrer" className="hover:underline">
                github.com/{portfolioConfig.socials.github.split('/').pop()}
              </a>
            </div>
            {portfolioConfig.socials.linkedin && (
              <div className="flex items-center sm:justify-end gap-1.5">
                <Linkedin className="w-3 h-3" />
                <a href={portfolioConfig.socials.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                  LinkedIn
                </a>
              </div>
            )}
            <div className="flex items-center sm:justify-end gap-1.5">
              <MapPin className="w-3 h-3" />
              <span>{t('resume_location')}</span>
            </div>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-4">
          <h2 className="text-sm font-bold uppercase border-b border-gray-300 pb-0.5 mb-2 text-gray-800">{t('resume_summary')}</h2>
          <p className="text-xs leading-relaxed text-gray-700 text-justify">
            {content.description}
          </p>
        </section>

        {/* Skills */}
        <section className="mb-4">
          <h2 className="text-sm font-bold uppercase border-b border-gray-300 pb-0.5 mb-2 text-gray-800">{t('resume_skills')}</h2>
          <div className="grid grid-cols-[140px_1fr] gap-y-1 gap-x-2 text-xs">
            <span className="font-bold text-gray-800">{t('resume_skills_core')}</span>
            <span className="text-gray-700">{skills.programming.join(", ")}</span>
            
            <span className="font-bold text-gray-800">{t('resume_skills_tools')}</span>
            <span className="text-gray-700">{skills.tools.join(", ")}</span>
            
            <span className="font-bold text-gray-800">{t('resume_skills_general')}</span>
            <span className="text-gray-700">{skills.general.join(", ")}</span>

            <span className="font-bold text-gray-800">{t('resume_languages')}</span>
            <span className="text-gray-700">{languages.join(" • ")}</span>
          </div>
        </section>

        {/* Key Projects */}
        <section className="mb-4">
          <h2 className="text-sm font-bold uppercase border-b border-gray-300 pb-0.5 mb-2 text-gray-800">{t('resume_projects')}</h2>
          <div className="space-y-2">
            {projects.map((proj, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-baseline">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-sm text-gray-900">{proj.title}</h3>
                    <span className="text-[10px] text-gray-500 font-mono">
                      [{proj.techStack.join(", ")}]
                    </span>
                  </div>
                  <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="text-[10px] text-gray-400 hover:underline">
                    source code
                  </a>
                </div>
                <p className="text-xs text-gray-700 mt-0.5">
                  {proj[language].description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-4">
          <h2 className="text-sm font-bold uppercase border-b border-gray-300 pb-0.5 mb-2 text-gray-800">{t('resume_experience')}</h2>
          <div className="space-y-3">
            {experiences.map((exp, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-baseline mb-0.5">
                  <div className="flex items-baseline gap-2">
                    <h3 className="font-bold text-sm text-gray-900">{exp.title}</h3>
                    <span className="text-xs text-gray-600">| {exp.company}, {exp.location}</span>
                  </div>
                  <span className="text-xs text-gray-500 font-medium whitespace-nowrap">{exp.period}</span>
                </div>
                <ul className="list-disc list-outside ml-3 space-y-0.5">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="text-xs text-gray-700 pl-1 leading-snug">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-4">
          <h2 className="text-sm font-bold uppercase border-b border-gray-300 pb-0.5 mb-2 text-gray-800">{t('resume_education')}</h2>
          <div className="space-y-1">
            {education.map((edu, idx) => (
              <div key={idx} className="flex justify-between items-baseline text-xs">
                <div>
                  <span className="font-bold text-gray-900">{edu.school}</span>
                  <span className="text-gray-600 mx-1">-</span>
                  <span className="text-gray-700">{edu.degree} ({edu.field})</span>
                </div>
                <span className="text-gray-500">{edu.years}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Footnote */}
        <footer className="mt-auto pt-4">
          <p className="text-[8px] leading-tight text-gray-400 text-justify">
            {t('resume_gdpr')}
          </p>
        </footer>

      </div>
    </div>
  );
}
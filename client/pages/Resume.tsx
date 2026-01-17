import { useEffect } from "react";
import { cvData, portfolioConfig, projects } from "@/lib/terminal-db";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin, MapPin } from "lucide-react";

export default function Resume() {
  const { language } = useLanguage();
  const content = portfolioConfig[language];
  const { experiences, education, skills } = cvData[language];

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
            Download PDF
          </Button>
        </div>

        {/* Header */}
        <header className="border-b-2 border-black pb-6 mb-8">
          <h1 className="text-4xl font-bold uppercase tracking-tight mb-2">{content.name}</h1>
          <p className="text-xl text-gray-600 mb-6">{content.title}</p>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1.5">
              <Mail className="w-4 h-4" />
              <a href={`mailto:${content.email}`} className="hover:underline">{content.email}</a>
            </div>
            <div className="flex items-center gap-1.5">
              <Github className="w-4 h-4" />
              <a href={portfolioConfig.socials.github} target="_blank" rel="noreferrer" className="hover:underline">
                github.com/{portfolioConfig.socials.github.split('/').pop()}
              </a>
            </div>
            {portfolioConfig.socials.linkedin && (
              <div className="flex items-center gap-1.5">
                <Linkedin className="w-4 h-4" />
                <a href={portfolioConfig.socials.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                  LinkedIn Profile
                </a>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              <span>Poland / Remote</span>
            </div>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-8">
          <h2 className="text-lg font-bold uppercase border-b border-gray-300 pb-1 mb-3">Professional Summary</h2>
          <p className="text-sm leading-relaxed text-gray-700 text-justify">
            {content.description}
          </p>
        </section>

        {/* Key Projects */}
        <section className="mb-8">
          <h2 className="text-lg font-bold uppercase border-b border-gray-300 pb-1 mb-4">Key Projects</h2>
          <div className="space-y-4">
            {projects.map((proj, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-base">{proj.title}</h3>
                  <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="text-xs text-gray-500 hover:underline">
                    {proj.githubUrl.replace('https://', '')}
                  </a>
                </div>
                <p className="text-sm text-gray-700 mb-1">
                  {proj[language].description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {proj.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="text-xs bg-gray-100 px-1.5 py-0.5 rounded text-gray-600">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-lg font-bold uppercase border-b border-gray-300 pb-1 mb-4">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-base">{exp.title}</h3>
                  <span className="text-sm text-gray-500 font-medium">{exp.period}</span>
                </div>
                <div className="text-sm text-gray-600 mb-2 font-medium">
                  {exp.company} | {exp.location}
                </div>
                <ul className="list-disc list-outside ml-4 space-y-1">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="text-sm text-gray-700 pl-1">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-lg font-bold uppercase border-b border-gray-300 pb-1 mb-4">Technical Skills</h2>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <span className="font-bold text-sm block mb-1">Programming Languages & Core:</span>
              <p className="text-sm text-gray-700">
                {skills.programming.join(", ")}
              </p>
            </div>
            <div>
              <span className="font-bold text-sm block mb-1">Tools & Technologies:</span>
              <p className="text-sm text-gray-700">
                {skills.tools.join(", ")}
              </p>
            </div>
            <div>
              <span className="font-bold text-sm block mb-1">General Competencies:</span>
              <p className="text-sm text-gray-700">
                {skills.general.join(", ")}
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-lg font-bold uppercase border-b border-gray-300 pb-1 mb-4">Education</h2>
          <div className="space-y-4">
            {education.map((edu, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-base">{edu.school}</h3>
                  <span className="text-sm text-gray-500 font-medium">{edu.years}</span>
                </div>
                <div className="text-sm text-gray-700">
                  {edu.degree} - {edu.field}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Languages */}
        <section>
          <h2 className="text-lg font-bold uppercase border-b border-gray-300 pb-1 mb-4">Languages</h2>
          <ul className="list-disc list-outside ml-4 text-sm text-gray-700">
            <li>Polish (Native)</li>
            <li>English (C1/C2 - Advanced Professional)</li>
          </ul>
        </section>

      </div>
    </div>
  );
}

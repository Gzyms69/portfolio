import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
// import { resumeProfiles, portfolioConfig } from "@/lib/terminal-db"; // REMOVED
import { portfolioConfig } from "@/lib/terminal-db"; // Still need config for header/socials defaults
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin, MapPin, Settings, Check, ChevronUp, FileDown, Globe, Briefcase, Loader2 } from "lucide-react";
import { ResumeVariant, Project, Experience, Education, ResumeProfile } from "@shared/types";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export default function Resume() {
  const { language: globalLang } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const { toast } = useToast();
  
  // URL is the single source of truth for variant and lang
  const variant = (searchParams.get("v") as ResumeVariant) || "support";
  const lang = (searchParams.get("lang") as "pl" | "en") || (globalLang as "pl" | "en") || "en";

  // State for loaded profile data
  const [profile, setProfile] = useState<ResumeProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Menu Visibility
  const [showConfigMenu, setShowConfigMenu] = useState(false);
  const [showDownloadMenu, setShowDownloadMenu] = useState(false);

  // --- HOOKS: ALWAYS CALL THESE ---

  // Load Data Effect
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        let module;
        switch (variant) {
          case 'developer':
            module = await import("@/lib/data/developer");
            setProfile({ config: module.devConfig, data: module.devData, projects: module.devProjects });
            break;
          case 'office':
            module = await import("@/lib/data/office");
            setProfile({ config: module.officeConfig, data: module.officeData, projects: module.officeProjects });
            break;
          case 'it-specialist':
            module = await import("@/lib/data/it-specialist.tsx");
            setProfile({ config: module.itSpecialistConfig, data: module.itSpecialistData, projects: module.itSpecialistProjects });
            break;
          case 'support':
          default:
            module = await import("@/lib/data/support");
            setProfile({ config: module.supportConfig, data: module.supportData, projects: module.supportProjects });
            break;
        }
      } catch (e) {
        console.error("Failed to load resume data", e);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, [variant]);

  // Sync title
  useEffect(() => {
    if (profile) {
        document.title = `${profile.config[lang].name} - Resume`;
    }
  }, [profile, lang]);

  // Handle click outside
  useEffect(() => {
    const handleClick = () => {
      // Menus close on backdrop click handled by parent div
    };
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  // --- DERIVED DATA & HANDLERS ---

  const handleVariantChange = (v: ResumeVariant) => {
    setSearchParams(prev => {
      prev.set("v", v);
      return prev;
    }, { replace: true });
  };

  const handleLangChange = (l: "pl" | "en") => {
    setSearchParams(prev => {
      prev.set("lang", l);
      return prev;
    }, { replace: true });
  };

  const handlePrint = () => {
    window.print();
    setShowDownloadMenu(false);
  };

  const handleDownloadAll = (targetLang: 'pl' | 'en') => {
    const variants: ResumeVariant[] = ['support', 'it-specialist', 'developer', 'office'];
    
    variants.forEach((v, index) => {
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = `/portfolio/resumes/Dawid Czerwiński resume-${v}-${targetLang}.pdf`;
        link.download = `Dawid_Czerwinski_Resume_${v.toUpperCase()}_${targetLang.toUpperCase()}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, index * 500);
    });

    toast({
      title: "Bulk Download Started",
      description: `Downloading 4 versions in ${targetLang.toUpperCase()}.`,
    });
    setShowDownloadMenu(false);
  };

  // --- EARLY RETURN FOR LOADING STATE ---
  if (isLoading || !profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
      </div>
    );
  }

  // --- RENDER CONTENT ---
  const content = profile.config[lang];
  const { experiences, education, skills, languages } = profile.data[lang];
  const projects = profile.projects;

  return (
    <div className="resume-page min-h-screen bg-white text-black font-sans selection:bg-gray-200 selection:text-black print:p-0 p-8 flex justify-center" onClick={() => { setShowConfigMenu(false); setShowDownloadMenu(false); }}>
      <div className="max-w-[210mm] w-full bg-white relative px-10 print:px-10" onClick={(e) => e.stopPropagation()}>
        
        {/* =====================================================================================
            BOTTOM RIGHT: DOWNLOAD MENU
           ===================================================================================== */}
        <div className="fixed bottom-8 right-8 print:hidden z-50 flex flex-col items-end gap-2">
          <AnimatePresence>
            {showDownloadMenu && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="bg-white border border-gray-200 rounded-lg shadow-xl p-2 mb-2 w-56 flex flex-col gap-1"
              >
                <button 
                  onClick={handlePrint}
                  className="flex items-center gap-3 w-full px-3 py-2 text-sm text-left hover:bg-gray-100 rounded-md transition-colors"
                >
                  <Download className="w-4 h-4 text-gray-600" />
                  <div className="flex flex-col">
                    <span className="font-medium text-gray-900">Download Current</span>
                    <span className="text-[10px] text-gray-500">PDF ({lang.toUpperCase()})</span>
                  </div>
                </button>
                <div className="h-px bg-gray-100 my-1" />
                <button 
                  onClick={() => handleDownloadAll('en')}
                  className="flex items-center gap-3 w-full px-3 py-2 text-sm text-left hover:bg-gray-100 rounded-md transition-colors opacity-60"
                >
                  <FileDown className="w-4 h-4 text-gray-600" />
                  <div className="flex flex-col">
                    <span className="font-medium text-gray-900">Download All (EN)</span>
                    <span className="text-[10px] text-gray-500">4 PDF Versions</span>
                  </div>
                </button>
                <button 
                  onClick={() => handleDownloadAll('pl')}
                  className="flex items-center gap-3 w-full px-3 py-2 text-sm text-left hover:bg-gray-100 rounded-md transition-colors opacity-60"
                >
                  <FileDown className="w-4 h-4 text-gray-600" />
                  <div className="flex flex-col">
                    <span className="font-medium text-gray-900">Download All (PL)</span>
                    <span className="text-[10px] text-gray-500">4 PDF Versions</span>
                  </div>
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <Button 
            onClick={(e) => { e.stopPropagation(); setShowDownloadMenu(!showDownloadMenu); setShowConfigMenu(false); }}
            className="shadow-xl bg-black text-white hover:bg-gray-800 gap-2 rounded-full px-6 h-12"
          >
            <Download className="w-4 h-4" />
            <span>Download</span>
            <ChevronUp className={`w-3 h-3 transition-transform ${showDownloadMenu ? 'rotate-180' : ''}`} />
          </Button>
        </div>

        {/* =====================================================================================
            BOTTOM LEFT: CONFIG MENU (Switcher)
           ===================================================================================== */}
        <div className="fixed bottom-8 left-8 print:hidden z-50 flex flex-col items-start gap-2 group">
           <AnimatePresence>
            {showConfigMenu && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="bg-white border border-gray-200 rounded-lg shadow-xl p-3 mb-2 w-64 flex flex-col gap-4"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Variant Selector */}
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1">
                    <Briefcase className="w-3 h-3" /> Profile Variant
                  </span>
                  <div className="flex flex-col gap-1">
                    {(['support', 'it-specialist', 'developer', 'office'] as const).map((v) => (
                      <button
                        key={v}
                        onClick={() => handleVariantChange(v)}
                        className={`flex items-center justify-between px-3 py-2 rounded text-xs font-medium transition-all ${
                          variant === v 
                            ? "bg-black text-white shadow-md" 
                            : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        <span className="capitalize">{v}</span>
                        {variant === v && <Check className="w-3 h-3" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Language Selector */}
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1">
                    <Globe className="w-3 h-3" /> Language
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleLangChange('pl')}
                      className={`flex items-center justify-center gap-2 px-3 py-2 rounded text-xs font-medium transition-all ${
                        lang === 'pl' 
                          ? "bg-black text-white shadow-md" 
                          : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      PL
                    </button>
                    <button
                      onClick={() => handleLangChange('en')}
                      className={`flex items-center justify-center gap-2 px-3 py-2 rounded text-xs font-medium transition-all ${
                        lang === 'en' 
                          ? "bg-black text-white shadow-md" 
                          : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      EN
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <Button 
            onClick={(e) => { e.stopPropagation(); setShowConfigMenu(!showConfigMenu); setShowDownloadMenu(false); }}
            variant="outline"
            className={`bg-white/80 backdrop-blur-sm border-gray-200 text-gray-600 hover:text-black gap-2 h-10 px-4 transition-all ${!showConfigMenu ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}
          >
            <Settings className="w-4 h-4" />
            <span className="text-xs font-medium">
              {variant.toUpperCase()} / {lang.toUpperCase()}
            </span>
          </Button>
        </div>

        {/* =====================================================================================
            RESUME CONTENT
           ===================================================================================== */}
        
        {/* Header */}
        <header className="border-b-2 border-black pb-3 mb-3 flex flex-col sm:flex-row justify-between items-start gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full border border-gray-300 overflow-hidden flex-shrink-0">
              <img 
                src="/portfolio/profile.jpg"
                alt={content.name}
                className="w-full h-full object-cover scale-[1.15]"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold uppercase tracking-tight mb-0.5">{content.name}</h1>
              <p className="text-base text-gray-700 font-medium leading-tight max-w-[400px]">{content.title}</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-0.5 text-xs text-gray-600 sm:text-right mt-2 sm:mt-0">
            <div className="flex items-center sm:justify-end gap-1.5">
              <Mail className="w-3 h-3" />
              <a href={`mailto:${content.email}`} className="hover:underline">{content.email}</a>
            </div>
            {variant !== 'office' && (
              <div className="flex items-center sm:justify-end gap-1.5">
                <Globe className="w-3 h-3" />
                <a href={`https://${portfolioConfig.socials.domain}`} target="_blank" rel="noreferrer" className="hover:underline">
                  {portfolioConfig.socials.domain}
                </a>
                <span className="text-gray-300 mx-0.5">|</span>
                <Github className="w-3 h-3" />
                <a href={portfolioConfig.socials.github} target="_blank" rel="noreferrer" className="hover:underline">
                  github.com/{portfolioConfig.socials.github.split('/').pop()}
                </a>
              </div>
            )}
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
              <span>{lang === 'pl' ? 'Kraków, Polska / Zdalnie' : 'Krakow, Poland / Remote'}</span>
            </div>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-3">
          <h2 className="text-sm font-bold uppercase border-b border-gray-300 pb-0.5 mb-1.5 text-gray-800">
            {lang === 'pl' ? 'Podsumowanie Zawodowe' : 'Professional Summary'}
          </h2>
          <p className="text-xs leading-relaxed text-gray-700 text-justify">
            {content.description}
          </p>
        </section>

        {/* Skills */}
        <section className="mb-3">
          <h2 className="text-sm font-bold uppercase border-b border-gray-300 pb-0.5 mb-1.5 text-gray-800">
            {lang === 'pl' ? 'Umiejętności' : 'Technical Skills'}
          </h2>
          <div className="grid grid-cols-[140px_1fr] gap-y-0.5 gap-x-2 text-xs">
            {skills.programming.length > 0 && (
              <>
                <span className="font-bold text-gray-800">
                  {lang === 'pl' ? 'Języki Programowania' : 'Programming Languages'}
                </span>
                <span className="text-gray-700">{skills.programming.join(", ")}</span>
              </>
            )}
            
            <span className="font-bold text-gray-800">
              {lang === 'pl' ? 'Narzędzia i Systemy' : 'Tools & Systems'}
            </span>
            <span className="text-gray-700">{skills.tools.join(", ")}</span>
            
            <span className="font-bold text-gray-800">
              {lang === 'pl' ? 'Kompetencje' : 'Skills'}
            </span>
            <span className="text-gray-700">{skills.general.join(", ")}</span>

            <span className="font-bold text-gray-800">
              {lang === 'pl' ? 'Języki Obce' : 'Languages'}
            </span>
            <span className="text-gray-700">{languages.join(" • ")}</span>
          </div>
        </section>

        {/* Key Projects */}
        {projects.length > 0 && (
          <section className="mb-3">
            <h2 className="text-sm font-bold uppercase border-b border-gray-300 pb-0.5 mb-1.5 text-gray-800">
              {lang === 'pl' ? 'Kluczowe Projekty' : 'Key Projects'}
            </h2>
            <div className="space-y-2">
              {projects.filter((p: Project) => !p.hideFromResume).map((proj: Project, idx: number) => (
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
                  <p className="text-xs text-gray-700 mt-0.5 leading-snug">
                    {proj[lang].description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Experience */}
        <section className="mb-3">
          <h2 className="text-sm font-bold uppercase border-b border-gray-300 pb-0.5 mb-1.5 text-gray-800">
            {lang === 'pl' ? 'Doświadczenie Zawodowe' : 'Work Experience'}
          </h2>
          <div className="space-y-2.5">
            {experiences.map((exp: Experience, idx: number) => (
              <div key={idx}>
                <div className="flex justify-between items-baseline mb-0.5">
                  <div className="flex items-baseline gap-2">
                    <h3 className="font-bold text-sm text-gray-900">{exp.title}</h3>
                    <span className="text-xs text-gray-600">| {exp.company}, {exp.location}</span>
                  </div>
                  <span className="text-xs text-gray-500 font-medium whitespace-nowrap">{exp.period}</span>
                </div>
                <ul className="list-disc list-outside ml-3 space-y-0.5">
                  {exp.responsibilities.map((resp: string, rIdx: number) => (
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
        <section className="mb-2">
          <h2 className="text-sm font-bold uppercase border-b border-gray-300 pb-0.5 mb-1.5 text-gray-800">
            {lang === 'pl' ? 'Edukacja' : 'Education'}
          </h2>
          <div className="space-y-1">
            {education.map((edu: Education, idx: number) => (
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
        <footer className="pt-2">
          <p className="text-[7px] leading-tight text-gray-400 text-justify">
            {lang === 'pl' 
              ? "Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji (zgodnie z ustawą z dnia 10 maja 2018 roku o ochronie danych osobowych (Dz. Ustaw z 2018, poz. 1000) oraz zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO))." 
              : "I hereby consent to my personal data being processed by for the purpose of considering my application for the vacancy advertised under the Data Protection Act 2018 (Act) and Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation)."}
          </p>
        </footer>

      </div>
    </div>
  );
}
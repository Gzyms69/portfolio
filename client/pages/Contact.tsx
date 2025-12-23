import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Mail } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { AnimatedText, AnimatedCharacters } from "@/components/AnimatedText";
import { PageTransition } from "@/components/PageTransition";
import { ContactForm } from "@/components/ContactForm";

export default function Contact({ isDossier = false }: { isDossier?: boolean }) {
  if (isDossier) {
    return (
      <div className="animate-in fade-in slide-in-from-right-10 duration-700 h-full flex flex-col items-center justify-center max-w-2xl mx-auto">
        <div className="w-full">
          <ContactForm />
        </div>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navigation />

        <main className="flex w-full justify-center px-4 sm:px-8 md:px-16 lg:px-20">
          <div className="w-full max-w-2xl py-8 sm:py-16 md:py-24 lg:py-32">
            {/* Header */}
            <section className="mb-12 flex flex-col gap-4 text-center">
              <Reveal delay={0.1}>
                <div className="flex justify-center mb-4">
                  <Mail className="h-12 w-12 text-strong" strokeWidth={1.5} />
                </div>
              </Reveal>
              <AnimatedCharacters
                text="Skontaktuj się ze mną"
                className="text-4xl font-semibold text-strong sm:text-5xl md:text-6xl leading-tight justify-center"
              />
              <AnimatedText
                text="Wypełnij formularz"
                className="text-weak text-base sm:text-lg justify-center"
              />
            </section>

            {/* Form */}
            <Reveal delay={0.4} width="100%">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 flex flex-col gap-8 p-8 sm:p-10 md:p-12">
                <div className="flex flex-col gap-1">
                  <h2 className="text-xl font-semibold text-strong">
                    Dane do kontaktu
                  </h2>
                  <div className="h-1 w-12 bg-gradient-to-r from-white/40 to-transparent rounded"></div>
                </div>

                <ContactForm />
              </div>
            </Reveal>

            <Footer />
          </div>
        </main>
      </div>
    </PageTransition>
  );
}
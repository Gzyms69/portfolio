import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Mail } from "lucide-react";
import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { AnimatedText, AnimatedCharacters } from "@/components/AnimatedText";
import { Reveal } from "@/components/Reveal";
import { PageTransition } from "@/components/PageTransition";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message:
            "Wiadomość wysłana pomyślnie! Dziękuję za kontakt.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: "Błąd przy wysyłaniu wiadomości. Spróbuj ponownie.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message:
          "Błąd sieci. Spróbuj ponownie.",
      });
    } finally {
      setLoading(false);
    }
  };

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

                {/* Status Messages */}
                {status.type && (
                  <div
                    className={`rounded-lg p-4 ${
                      status.type === "success"
                        ? "bg-green-500/20 border border-green-500/50"
                        : "bg-red-500/20 border border-red-500/50"
                    }`}
                  >
                    <p
                      className={
                        status.type === "success"
                          ? "text-green-300"
                          : "text-red-300"
                      }
                    >
                      {status.message}
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* Name Field */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-medium"
                    >
                      Imię <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Twoje imię"
                      className="w-full rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-3 text-gray-100 placeholder:text-gray-400 focus:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-medium"
                    >
                      Adres e-mail <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="twój.email@example.com"
                      className="w-full rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-3 text-gray-100 placeholder:text-gray-400 focus:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-medium flex justify-between"
                    >
                      <span>
                        Wiadomość <span className="text-red-400">*</span>
                      </span>
                      <span className="text-xs text-weak">
                        {formData.message.length}/3000
                      </span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      maxLength={3000}
                      placeholder="Twoja wiadomość..."
                      className="w-full rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-3 text-gray-100 placeholder:text-gray-400 focus:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={loading}
                    variant="glassPrimary"
                    className="mt-4 w-full"
                  >
                    {loading ? "Wysyłanie..." : "Wyślij"}
                  </Button>
                </form>
              </div>
            </Reveal>

            <Footer />
          </div>
        </main>
      </div>
    </PageTransition>
  );
}


import { ContactForm } from "./contact/ContactForm";
import { ContactInfo } from "./contact/ContactInfo";
import { SEO } from "../components/seo/SEO";
import { DS } from "../styles/design_system";

/**
 * Contact — Página de contacto de SeguryTech.
 */
export function Contact() {
  return (
    <>
      <SEO
        title="Contáctanos"
        description="Solicita asesoría profesional en seguridad. Estamos aquí para diseñar la mejor solución para ti."
      />

      <section className={DS.HERO}>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className={DS.CONTAINER}>
          <div className="max-w-3xl relative z-10 text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6">
              Canal Directo
            </span>
            <h1 className={DS.H1}>
              Diseñemos tu <span className="text-blue-400">Seguridad</span>
            </h1>
            <p className="text-xl text-blue-100 mt-6">
              Completa el formulario o utiliza nuestros canales directos. Un especialista técnico te atenderá de inmediato.
            </p>
          </div>
        </div>
      </section>

      <section className={DS.SECTION_MAIN}>
        <div className={DS.CONTAINER}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Visítanos / Mapa */}
      <section className={DS.SECTION_ALT}>
        <div className={DS.CONTAINER}>
          <div className="text-center mb-16">
            <h2 className={DS.H2}>Oficinas Corporativas</h2>
            <p className={DS.BODY + " mt-4"}>
              Ubicación estratégica para brindar cobertura en todo el país.
            </p>
          </div>
          <div className="bg-gray-200 dark:bg-gray-800 rounded-3xl h-[450px] flex items-center justify-center border-4 border-white dark:border-gray-900 shadow-2xl relative overflow-hidden">
            <iframe
              title="Ubicación de SeguryTech"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120416.73282218414!2d-99.24357732367123!3d19.43265328243306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0026db097507%3A0x54061076265ee841!2sCiudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1716301382343!5m2!1ses!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 z-10 grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
            {/* Overlay sutil para diseño */}
            <div className="absolute inset-0 bg-blue-900/10 pointer-events-none z-20" />
          </div>
        </div>
      </section>
    </>
  );
}

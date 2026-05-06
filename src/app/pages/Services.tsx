import { Clock, Wrench, HeadphonesIcon, Users, ShieldCheck, Cog, Search, FileText, Settings, ShieldAlert } from "lucide-react";
import { SEO } from "../components/seo/SEO";
import { ServiceCard } from "./services/ServiceCard";
import type { ServiceItem } from "./services/ServiceCard";
import { Link } from "react-router";
import { DS } from "../styles/design_system";

// ─── Data ────────────────────────────────────────────────────────────────────

const SERVICES: ServiceItem[] = [
  {
    icon: Wrench,
    title: "Instalación Certificada",
    description: "Despliegue técnico realizado por ingenieros especialistas en infraestructura de seguridad.",
    benefits: ["Auditoría de canalización", "Configuración de red aislada", "Pruebas de estrés térmico", "Certificación de punto"],
  },
  {
    icon: Clock,
    title: "Monitoreo Proactivo",
    description: "Vigilancia inteligente con respuesta humana inmediata ante cualquier anomalía detectada.",
    benefits: ["Operadores 24/7", "Protocolo de coacción", "Video-verificación de alarma", "Reportes en tiempo real"],
  },
  {
    icon: Cog,
    title: "Mantenimiento Preventivo",
    description: "Aseguramos la longevidad y fiabilidad de tu inversión mediante inspecciones técnicas periódicas.",
    benefits: ["Actualización de Firmware", "Limpieza de ópticas", "Calibración de sensores", "Revisión de cableado"],
  },
  {
    icon: HeadphonesIcon,
    title: "Soporte Técnico VIP",
    description: "Asistencia directa sin esperas para garantizar la continuidad operativa de tus sistemas.",
    benefits: ["Atención en < 60 min", "Asistencia remota segura", "Técnico en sitio prioritario", "Hardware de respaldo"],
  },
  {
    icon: Users,
    title: "Auditoría de Riesgos",
    description: "Identificamos vulnerabilidades antes que los atacantes mediante análisis técnico de seguridad.",
    benefits: ["Pentesting físico", "Análisis de puntos ciegos", "Cálculo de criticidad", "Plan de mitigación"],
  },
  {
    icon: ShieldCheck,
    title: "Modernización (Retrofit)",
    description: "Actualizamos tu infraestructura de seguridad antigua a tecnología IP de última generación.",
    benefits: ["Recuperación de cableado", "Integración híbrida", "Migración a la nube", "Capacitación de personal"],
  },
];

const STEPS = [
  { icon: Search, title: "Diagnóstico", desc: "Evaluación técnica de vulnerabilidades." },
  { icon: FileText, title: "Estrategia", desc: "Diseño de la solución personalizada." },
  { icon: Settings, title: "Ejecución", desc: "Implementación y despliegue técnico." },
  { icon: ShieldAlert, title: "Protección", desc: "Monitoreo y soporte permanente." },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function Services() {
  return (
    <>
      <SEO
        title="Servicios Profesionales"
        description="Desde la instalación certificada hasta el monitoreo 24/7. Soporte técnico de alto nivel para tu seguridad."
      />

      {/* Header */}
      <section className={DS.HERO}>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className={DS.CONTAINER}>
          <div className="max-w-3xl relative z-10 text-center lg:text-left">
            <h1 className={DS.H1}>
              Excelencia en <span className="text-blue-400">Servicio Técnico</span>
            </h1>
            <p className="text-xl text-blue-100/90 mt-6 max-w-2xl">
              No solo vendemos equipos; diseñamos tranquilidad. Nuestro compromiso comienza donde termina la instalación.
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className={DS.SECTION_MAIN}>
        <div className={DS.CONTAINER}>
          <div className="text-center mb-20">
            <h2 className={DS.H2}>Compromiso SeguryTech</h2>
            <p className={DS.BODY + " mt-4"}>
              Cada servicio es ejecutado siguiendo los más altos estándares internacionales de seguridad física y electrónica.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Workflow */}
      <section className={DS.SECTION_ALT}>
        <div className={DS.CONTAINER}>
          <div className="text-center mb-20">
            <h2 className={DS.H2}>Metodología de Implementación</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {STEPS.map((step, idx) => (
              <div key={step.title} className="relative group text-center lg:text-left">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 shadow-xl shadow-blue-500/20 group-hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8" />
                  <span className="absolute -top-3 -right-3 w-8 h-8 bg-gray-900 text-white text-xs rounded-full flex items-center justify-center border-4 border-gray-50 dark:border-gray-900">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className={DS.H3 + " text-xl mb-3"}>{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className={DS.CONTAINER + " text-center relative z-10"}>
          <h2 className={DS.H1 + " text-white mb-8"}>
            Diseñamos tu Plan de Seguridad
          </h2>
          <p className="text-xl mb-12 text-blue-100 max-w-2xl mx-auto">
            Obtén un presupuesto detallado sin compromiso. Nuestros consultores técnicos te asesorarán de forma personalizada.
          </p>
          <Link
            to="/contacto"
            className="inline-block bg-white text-blue-600 px-12 py-5 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-2xl shadow-blue-900/40"
          >
            Hablar con un Especialista
          </Link>
        </div>
      </section>
    </>
  );
}

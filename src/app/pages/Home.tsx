import { Shield, Lock, Eye, AlertTriangle } from "lucide-react";
import { HomeHero } from "./home/HomeHero";
import { StatsSection } from "../components/sections/StatsSection";
import { SEO } from "../components/seo/SEO";
import type { StatItem } from "../components/sections/StatsSection";
import { Link } from "react-router";
import { DS } from "../styles/design_system";

// ─── Data ────────────────────────────────────────────────────────────────────

const SEGURY_FEATURES: StatItem[] = [
  {
    icon: Shield,
    value: "100%",
    label: "Protección Total",
    description: "Soluciones de seguridad integrales para tu empresa o hogar.",
  },
  {
    icon: Eye,
    value: "24/7",
    label: "Vigilancia",
    description: "Monitoreo constante con tecnología de última generación.",
  },
  {
    icon: Lock,
    value: "Encrypted",
    label: "Control de Accesos",
    description: "Sistemas avanzados de gestión y restricción de accesos.",
  },
  {
    icon: AlertTriangle,
    value: "Immediate",
    label: "Respuesta Rápida",
    description: "Equipo de respuesta inmediata ante cualquier incidente.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function Home() {
  return (
    <>
      <SEO
        title="Seguridad Inteligente"
        description="Líderes en tecnología de seguridad, videovigilancia y control de accesos para hogares y empresas."
      />
      
      <HomeHero />

      <section className={DS.SECTION_MAIN}>
        <div className={DS.CONTAINER}>
          <div className="text-center mb-16">
            <h2 className={DS.H2}>¿Por Qué Elegir SeguryTech?</h2>
            <p className={DS.BODY}>
              Combinamos innovación tecnológica con años de experiencia para ofrecerte paz mental.
            </p>
          </div>
          
          <StatsSection
            items={SEGURY_FEATURES}
            variant="card"
            showHeading={false}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-white tracking-tight">
            Protege tu Inversión Hoy Mismo
          </h2>
          <p className="text-xl mb-12 text-blue-100/90 leading-relaxed">
            No esperes a un incidente para actuar. Solicita una auditoría de seguridad gratuita y descubre cómo blindar tu propiedad.
          </p>
          <Link
            to="/contacto"
            className="inline-block bg-white text-blue-700 px-12 py-5 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-2xl shadow-blue-900/40"
          >
            Solicitar Consulta Gratuita
          </Link>
        </div>
      </section>
    </>
  );
}

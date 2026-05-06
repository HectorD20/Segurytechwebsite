import { Camera, MonitorSmartphone, Lock, Shield, Radio, Bell, Cpu, Zap, Activity, Globe } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SEO } from "../components/seo/SEO";
import { ProductCard } from "./products/ProductCard";
import type { ProductItem } from "./products/ProductCard";
import { DS } from "../styles/design_system";

// ─── Data ────────────────────────────────────────────────────────────────────

const PRODUCTS: ProductItem[] = [
  {
    icon: Camera,
    title: "Cámaras Ultra HD",
    description: "Vigilancia en 4K con procesamiento de imagen mediante IA y visión nocturna térmica.",
    features: ["Resolución 4K Real", "Detección de Humanos y Vehículos", "Audio Bidireccional", "Cloud & Local Storage"],
    price: "Desde $299",
    isPopular: true,
  },
  {
    icon: Lock,
    title: "Control Biométrico",
    description: "Gestión de accesos de alta seguridad con reconocimiento facial y huella dactilar.",
    features: ["Facial 3D Anti-Spoofing", "Lectura de Vena en Dedo", "Integración con RRHH", "Alertas de Coacción"],
    price: "Desde $499",
  },
  {
    icon: Bell,
    title: "Alarmas de Intrusión",
    description: "Sistemas cableados e inalámbricos con verificación por video y monitoreo 24/7.",
    features: ["Grado de Seguridad 3", "Antibloqueo de Señal", "App de Gestión Total", "Central Receptora Propia"],
    price: "Desde $399",
  },
  {
    icon: MonitorSmartphone,
    title: "Centros de Monitoreo",
    description: "Soluciones de videowall y software VMS para gestión unificada de seguridad.",
    features: ["Soporte Multi-Monitor", "Gestión de Incidentes", "Backup Redundante", "IA Predictiva"],
    price: "Desde $1,299",
  },
  {
    icon: Radio,
    title: "Barreras Perimetrales",
    description: "Protección invisible mediante microondas e infrarrojos para grandes perímetros.",
    features: ["Bajo Índice de Falsas Alarmas", "Barreras IR de 100m", "Sensores en Vallado", "Resistente a Rayos"],
    price: "Desde $249",
  },
  {
    icon: Shield,
    title: "Seguridad Integral",
    description: "Diseño personalizado que combina todas nuestras tecnologías en una plataforma.",
    features: ["Auditoría de Riesgos", "Mantenimiento Preventivo", "Escalabilidad Total", "Soporte VIP"],
    price: "Consultar",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function Products() {
  return (
    <>
      <SEO
        title="Catálogo de Productos"
        description="Explora nuestra gama de cámaras 4K, sistemas biométricos y alarmas inteligentes. Tecnología de vanguardia para tu seguridad."
      />

      {/* Hero */}
      <section className={DS.HERO}>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className={DS.CONTAINER}>
          <div className="max-w-3xl relative z-10">
            <h1 className={DS.H1}>
              Ingeniería de <span className="text-blue-400">Protección</span>
            </h1>
            <p className="text-xl text-blue-100 mt-6 max-w-2xl">
              Equipamiento técnico de grado profesional. Seleccionamos y configuramos cada dispositivo para garantizar el máximo rendimiento.
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className={DS.SECTION_MAIN}>
        <div className={DS.CONTAINER}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.title} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className={DS.SECTION_ALT}>
        <div className={DS.CONTAINER}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-4 bg-blue-500/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1715371659354-f72c4458d9a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg"
                  alt="Centro de datos y seguridad"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className={DS.H2}>
                Tecnología Basada en <br /><span className="text-blue-600">Inteligencia Artificial</span>
              </h2>
              <p className={DS.BODY}>
                Nuestros sistemas no solo ven, sino que entienden lo que sucede. Utilizamos motores de IA predictiva para anticipar riesgos.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Cpu, label: "Procesamiento Edge" },
                  { icon: Zap, label: "Latencia Cero" },
                  { icon: Activity, label: "Análisis Térmico" },
                  { icon: Globe, label: "Conectividad Global" },
                ].map((item) => (
                  <div key={item.label} className={DS.CARD + " flex items-center gap-3 !p-4"}>
                    <item.icon className="w-5 h-5 text-blue-600" />
                    <span className="font-bold text-sm text-gray-700 dark:text-gray-200">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

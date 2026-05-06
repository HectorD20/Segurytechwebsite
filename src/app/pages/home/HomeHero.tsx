import { Link } from "react-router";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { DS } from "../../styles/design_system";

export function HomeHero() {
  return (
    <section className={DS.HERO}>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-1/2 pointer-events-none" />
      
      <div className={DS.CONTAINER + " py-24 lg:py-32 relative z-10"}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-bold uppercase tracking-widest mb-6">
                Tecnología de Vanguardia
              </span>
              <h1 className={DS.H1 + " leading-[1.1]"}>
                Tu Seguridad es Nuestra <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">Prioridad</span>
              </h1>
              <p className="text-xl text-blue-100/90 leading-relaxed max-w-xl">
                Soluciones de seguridad inteligentes, monitoreo 24/7 y sistemas avanzados para proteger lo que más valoras en tu hogar o empresa.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-5">
              <Link
                to="/contacto"
                className="bg-white text-blue-700 px-10 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all hover:scale-105 shadow-xl shadow-blue-900/40"
              >
                Solicitar Cotización
              </Link>
              <Link
                to="/productos"
                className="bg-blue-600/30 backdrop-blur-sm border border-blue-400/30 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-600/50 transition-all"
              >
                Ver Catálogo
              </Link>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1765121689322-6befc57dc8db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg"
                alt="Tecnología de vigilancia avanzada"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

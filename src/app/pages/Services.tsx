import { Clock, Wrench, HeadphonesIcon, Users, ShieldCheck, Cog } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Wrench,
      title: "Instalación Profesional",
      description: "Nuestro equipo técnico certificado realiza instalaciones completas garantizando el máximo rendimiento de todos los sistemas.",
      benefits: [
        "Visita previa gratuita",
        "Planificación personalizada",
        "Instalación en 24-48h",
        "Pruebas exhaustivas",
      ],
    },
    {
      icon: Clock,
      title: "Monitoreo 24/7",
      description: "Central de monitoreo operativa las 24 horas del día, todos los días del año, con respuesta inmediata ante cualquier incidente.",
      benefits: [
        "Vigilancia continua",
        "Respuesta en menos de 5 minutos",
        "Coordinación con autoridades",
        "Informes mensuales",
      ],
    },
    {
      icon: Cog,
      title: "Mantenimiento Preventivo",
      description: "Programas de mantenimiento regular para asegurar que tu sistema funcione perfectamente en todo momento.",
      benefits: [
        "Revisiones trimestrales",
        "Actualizaciones de firmware",
        "Limpieza de equipos",
        "Reemplazo de componentes",
      ],
    },
    {
      icon: HeadphonesIcon,
      title: "Soporte Técnico",
      description: "Asistencia técnica especializada disponible para resolver cualquier duda o problema de forma rápida y eficiente.",
      benefits: [
        "Soporte telefónico",
        "Chat en línea",
        "Asistencia remota",
        "Respuesta en 1 hora",
      ],
    },
    {
      icon: Users,
      title: "Consultoría de Seguridad",
      description: "Análisis exhaustivo de vulnerabilidades y diseño de estrategias de seguridad adaptadas a tu organización.",
      benefits: [
        "Auditoría de seguridad",
        "Plan personalizado",
        "Evaluación de riesgos",
        "Recomendaciones de mejora",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Actualización de Sistemas",
      description: "Moderniza tus sistemas existentes con las últimas tecnologías sin necesidad de reemplazarlos completamente.",
      benefits: [
        "Evaluación de sistema actual",
        "Propuesta de mejora",
        "Implementación gradual",
        "Formación incluida",
      ],
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestros Servicios
            </h1>
            <p className="text-xl text-blue-100">
              Soluciones integrales de seguridad con soporte completo en cada etapa
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compromiso Total con tu Seguridad
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desde la planificación hasta el mantenimiento continuo, estamos contigo en cada paso
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-gray-200 p-6"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <div className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start text-sm text-gray-600">
                      <span className="text-blue-600 mr-2">•</span>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestro Proceso de Trabajo
            </h2>
            <p className="text-xl text-gray-600">
              Un método probado para garantizar tu satisfacción
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Consulta Inicial
              </h3>
              <p className="text-gray-600">
                Evaluamos tus necesidades y objetivos de seguridad
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Propuesta Personalizada
              </h3>
              <p className="text-gray-600">
                Diseñamos una solución a medida de tus requisitos
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Implementación
              </h3>
              <p className="text-gray-600">
                Instalamos y configuramos todos los sistemas
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Soporte Continuo
              </h3>
              <p className="text-gray-600">
                Te acompañamos con mantenimiento y actualizaciones
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para Mejorar tu Seguridad?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contáctanos hoy y descubre cómo nuestros servicios pueden proteger tu negocio
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Solicitar Cotización
          </button>
        </div>
      </section>
    </div>
  );
}

import { Search, Book, MessageCircle, FileText } from "lucide-react";
import { useState } from "react";

export function Support() {
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    {
      category: "Instalación",
      questions: [
        {
          q: "¿Cuánto tiempo toma la instalación de un sistema completo?",
          a: "La instalación típica de un sistema completo toma entre 1 y 3 días dependiendo de la complejidad y tamaño de las instalaciones. Realizamos una evaluación previa para darte un tiempo estimado preciso.",
        },
        {
          q: "¿Necesito hacer obras para instalar las cámaras?",
          a: "En la mayoría de los casos no es necesario realizar obras importantes. Utilizamos sistemas de cableado discreto y también ofrecemos soluciones inalámbricas cuando es apropiado.",
        },
      ],
    },
    {
      category: "Mantenimiento",
      questions: [
        {
          q: "¿Con qué frecuencia debo hacer mantenimiento al sistema?",
          a: "Recomendamos mantenimiento preventivo cada 3 meses para garantizar el funcionamiento óptimo. Nuestros planes de mantenimiento incluyen limpieza, actualización de firmware y revisión de todos los componentes.",
        },
        {
          q: "¿Qué incluye la garantía de los productos?",
          a: "Todos nuestros productos incluyen garantía de 5 años que cubre defectos de fabricación, actualizaciones de software y soporte técnico. La instalación tiene garantía de 2 años adicionales.",
        },
      ],
    },
    {
      category: "Funcionamiento",
      questions: [
        {
          q: "¿Puedo acceder a las cámaras desde mi móvil?",
          a: "Sí, todos nuestros sistemas incluyen aplicación móvil para iOS y Android que te permite ver las cámaras en tiempo real, recibir notificaciones y revisar grabaciones desde cualquier lugar.",
        },
        {
          q: "¿Qué pasa si se va la luz o Internet?",
          a: "Nuestros sistemas incluyen baterías de respaldo (UPS) que mantienen el funcionamiento durante 4-8 horas. Las grabaciones se almacenan localmente y se sincronizan cuando se restablece la conexión.",
        },
      ],
    },
    {
      category: "Soporte Técnico",
      questions: [
        {
          q: "¿Cómo puedo contactar con soporte técnico?",
          a: "Ofrecemos múltiples canales: teléfono 24/7, chat en línea durante horario comercial, email y portal de tickets. Para emergencias tenemos línea directa disponible en todo momento.",
        },
        {
          q: "¿Ofrecen formación para usar el sistema?",
          a: "Sí, incluimos sesión de formación completa después de la instalación. También ofrecemos manuales digitales, videos tutoriales y sesiones de refresco cuando sea necesario.",
        },
      ],
    },
  ];

  const resources = [
    {
      icon: Book,
      title: "Guías de Usuario",
      description: "Manuales detallados para todos nuestros productos",
      link: "#",
    },
    {
      icon: FileText,
      title: "Base de Conocimiento",
      description: "Artículos y tutoriales sobre configuración y uso",
      link: "#",
    },
    {
      icon: MessageCircle,
      title: "Foro de Comunidad",
      description: "Conecta con otros usuarios y expertos",
      link: "#",
    },
  ];

  const filteredFaqs = faqs.map((category) => ({
    ...category,
    questions: category.questions.filter(
      (item) =>
        searchQuery === "" ||
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Centro de Soporte
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Encuentra respuestas, recursos y ayuda para tus sistemas de seguridad
            </p>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar en preguntas frecuentes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-300 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Resources */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-200"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <resource.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-600 text-sm">{resource.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-gray-600">
              Respuestas a las dudas más comunes
            </p>
          </div>

          <div className="space-y-12">
            {filteredFaqs.map(
              (category, categoryIndex) =>
                category.questions.length > 0 && (
                  <div key={categoryIndex}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      {category.category}
                    </h3>
                    <div className="space-y-6">
                      {category.questions.map((item, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
                        >
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">
                            {item.q}
                          </h4>
                          <p className="text-gray-600 leading-relaxed">
                            {item.a}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )
            )}

            {filteredFaqs.every((cat) => cat.questions.length === 0) && (
              <div className="text-center py-12">
                <p className="text-gray-600">
                  No se encontraron resultados para "{searchQuery}"
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿No Encuentras lo que Buscas?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Nuestro equipo de soporte está listo para ayudarte
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Chat en Vivo
              </button>
              <button className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors border-2 border-white">
                Abrir Ticket de Soporte
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Hours */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Soporte Telefónico
              </h3>
              <p className="text-gray-600 text-sm">24/7 para emergencias</p>
              <p className="text-gray-600 text-sm">Lun-Vie 9:00-18:00 general</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Chat en Línea</h3>
              <p className="text-gray-600 text-sm">Lun-Vie 9:00-20:00</p>
              <p className="text-gray-600 text-sm">Sáb 10:00-14:00</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 text-sm">Respuesta en 24 horas</p>
              <p className="text-gray-600 text-sm">soporte@segurytech.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

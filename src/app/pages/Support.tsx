import { Search, Book, MessageCircle, FileText } from "lucide-react";
import { useState } from "react";
import { DS } from "../styles/design_system";
import { SEO } from "../components/seo/SEO";

export function Support() {
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    {
      category: "Instalación",
      questions: [
        {
          q: "¿Cuánto tiempo toma la instalación de un sistema completo?",
          a: "La instalación típica de un sistema completo toma entre 1 y 3 días dependiendo de la complejidad y tamaño de las instalaciones.",
        },
        {
          q: "¿Necesito hacer obras para instalar las cámaras?",
          a: "En la mayoría de los casos no es necesario realizar obras importantes. Utilizamos sistemas de cableado discreto.",
        },
      ],
    },
    {
      category: "Mantenimiento",
      questions: [
        {
          q: "¿Con qué frecuencia debo hacer mantenimiento al sistema?",
          a: "Recomendamos mantenimiento preventivo cada 3 meses para garantizar el funcionamiento óptimo.",
        },
      ],
    },
    {
      category: "Soporte Técnico",
      questions: [
        {
          q: "¿Cómo puedo contactar con soporte técnico?",
          a: "Ofrecemos múltiples canales: teléfono 24/7, chat en línea, email y portal de tickets.",
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
      description: "Artículos y tutoriales sobre configuración",
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
    <>
      <SEO title="Soporte" description="Centro de ayuda y recursos técnicos de SeguryTech." />

      {/* Header Section */}
      <section className={DS.HERO}>
        <div className={DS.CONTAINER_SLIM}>
          <div className="text-center space-y-6">
            <h1 className={DS.H1}>Centro de Soporte</h1>
            <p className="text-xl text-blue-100">Encuentra respuestas y recursos para tus sistemas.</p>
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar en FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={DS.INPUT}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className={DS.SECTION_ALT}>
        <div className={DS.CONTAINER}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <a key={index} href={resource.link} className={DS.CARD}>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4">
                  <resource.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">{resource.title}</h3>
                <p className="text-sm text-gray-500">{resource.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className={DS.SECTION_MAIN}>
        <div className={DS.CONTAINER_SLIM}>
          <div className="text-center mb-16">
            <h2 className={DS.H2}>Preguntas Frecuentes</h2>
          </div>
          <div className="space-y-12">
            {filteredFaqs.map((category, idx) => category.questions.length > 0 && (
              <div key={idx}>
                <h3 className={DS.H3 + " mb-8"}>{category.category}</h3>
                <div className="space-y-6">
                  {category.questions.map((item, qIdx) => (
                    <div key={qIdx} className={DS.CARD}>
                      <h4 className="text-lg font-bold mb-3">{item.q}</h4>
                      <p className="text-gray-500">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={DS.DIVIDER} />

      {/* Support Info */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className={DS.CONTAINER}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="font-bold mb-2 text-gray-900 dark:text-white">Soporte Telefónico</h3>
              <p className="text-sm text-gray-500">24/7 Emergencias</p>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-gray-900 dark:text-white">Chat en Línea</h3>
              <p className="text-sm text-gray-500">Lun-Vie 9:00-20:00</p>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-gray-900 dark:text-white">Email Directo</h3>
              <p className="text-sm text-gray-500">soporte@segurytech.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { Target, Award, Users, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  const stats = [
    { number: "15+", label: "Años de Experiencia" },
    { number: "5000+", label: "Clientes Satisfechos" },
    { number: "10000+", label: "Sistemas Instalados" },
    { number: "99.9%", label: "Uptime Garantizado" },
  ];

  const values = [
    {
      icon: Target,
      title: "Nuestra Misión",
      description: "Proporcionar soluciones de seguridad inteligentes y confiables que protejan a personas, empresas y activos, utilizando tecnología de vanguardia y un servicio excepcional.",
    },
    {
      icon: TrendingUp,
      title: "Nuestra Visión",
      description: "Ser la empresa líder en soluciones de seguridad tecnológica, reconocida por nuestra innovación, compromiso con la excelencia y capacidad de anticiparnos a las amenazas del futuro.",
    },
    {
      icon: Award,
      title: "Nuestros Valores",
      description: "Integridad, innovación, excelencia en el servicio y compromiso con la satisfacción del cliente son los pilares fundamentales que guían cada decisión y acción en SeguryTech.",
    },
    {
      icon: Users,
      title: "Nuestro Equipo",
      description: "Contamos con profesionales altamente capacitados y certificados en las últimas tecnologías de seguridad, comprometidos con tu protección y tranquilidad.",
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre Nosotros
            </h1>
            <p className="text-xl text-blue-100">
              Más de 15 años protegiendo lo que más importa con tecnología y dedicación
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  SeguryTech nació en 2011 con una visión clara: transformar la manera en que
                  las empresas y personas protegen sus activos más valiosos. Desde nuestros
                  humildes comienzos, hemos crecido hasta convertirnos en uno de los proveedores
                  de soluciones de seguridad más confiables del mercado.
                </p>
                <p>
                  A lo largo de los años, hemos mantenido nuestro compromiso con la innovación,
                  incorporando las últimas tecnologías en inteligencia artificial, análisis de
                  video y sistemas de control de acceso inteligentes.
                </p>
                <p>
                  Hoy, con más de 5,000 clientes satisfechos y 10,000 sistemas instalados,
                  continuamos evolucionando para ofrecer las mejores soluciones de seguridad
                  del mercado, siempre poniendo las necesidades de nuestros clientes en primer lugar.
                </p>
              </div>
            </div>
            <div className="relative h-96">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1664099565733-0bed629b2274?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzZWN1cml0eSUyMHRlYW18ZW58MXx8fHwxNzc1NjU4MjE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Equipo profesional de SeguryTech"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lo Que Nos Define
            </h2>
            <p className="text-xl text-gray-600">
              Principios que guían nuestro trabajo cada día
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certificaciones y Reconocimientos
            </h2>
            <p className="text-xl text-gray-600">
              Nuestra excelencia respaldada por las principales organizaciones del sector
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                ISO 9001:2015
              </h3>
              <p className="text-gray-600">
                Certificación de Gestión de Calidad
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                CE Marking
              </h3>
              <p className="text-gray-600">
                Conformidad Europea para equipos
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Premio Innovación
              </h3>
              <p className="text-gray-600">
                Mejor solución de seguridad 2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

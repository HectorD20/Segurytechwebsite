import { Link } from "react-router";
import { Shield, Lock, Eye, AlertTriangle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const features = [
    {
      icon: Shield,
      title: "Protección Total",
      description: "Soluciones de seguridad integrales para tu empresa o hogar",
    },
    {
      icon: Eye,
      title: "Vigilancia 24/7",
      description: "Monitoreo constante con tecnología de última generación",
    },
    {
      icon: Lock,
      title: "Control de Accesos",
      description: "Sistemas avanzados de control y gestión de accesos",
    },
    {
      icon: AlertTriangle,
      title: "Respuesta Rápida",
      description: "Equipo de respuesta inmediata ante cualquier incidente",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Tu Seguridad es Nuestra Prioridad
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Soluciones de seguridad inteligentes para proteger lo que más valoras
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contacto"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Contáctanos
                </Link>
                <Link
                  to="/productos"
                  className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                >
                  Ver Productos
                </Link>
              </div>
            </div>
            <div className="relative h-80 lg:h-96">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1765121689322-6befc57dc8db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMHRlY2hub2xvZ3klMjBzdXJ2ZWlsbGFuY2V8ZW58MXx8fHwxNzc1NjU4MjE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Tecnología de seguridad"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por Qué Elegir SeguryTech?
            </h2>
            <p className="text-xl text-gray-600">
              Innovación y experiencia al servicio de tu seguridad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Protege tu Inversión Hoy Mismo
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Solicita una consulta gratuita y descubre cómo podemos ayudarte
          </p>
          <Link
            to="/contacto"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Solicitar Consulta Gratuita
          </Link>
        </div>
      </section>
    </div>
  );
}

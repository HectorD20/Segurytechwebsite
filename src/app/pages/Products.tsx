import { Camera, MonitorSmartphone, Lock, Shield, Radio, Bell } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Products() {
  const products = [
    {
      icon: Camera,
      title: "Cámaras de Vigilancia",
      description: "Cámaras HD y 4K con visión nocturna, detección de movimiento y almacenamiento en la nube.",
      features: [
        "Resolución 4K Ultra HD",
        "Visión nocturna avanzada",
        "Grabación continua",
        "Acceso remoto desde móvil",
      ],
      price: "Desde 299€",
    },
    {
      icon: Lock,
      title: "Control de Accesos",
      description: "Sistemas biométricos y tarjetas RFID para gestión completa de accesos.",
      features: [
        "Reconocimiento facial",
        "Huella dactilar",
        "Tarjetas RFID",
        "Registro de accesos",
      ],
      price: "Desde 499€",
    },
    {
      icon: Bell,
      title: "Alarmas Inteligentes",
      description: "Sistemas de alarma conectados con central de monitoreo 24/7.",
      features: [
        "Sensores de movimiento",
        "Detectores de apertura",
        "Notificaciones instantáneas",
        "Central de alarmas",
      ],
      price: "Desde 399€",
    },
    {
      icon: MonitorSmartphone,
      title: "Sistemas de Videovigilancia",
      description: "Soluciones completas de videovigilancia para empresas y hogares.",
      features: [
        "Múltiples cámaras",
        "Almacenamiento NVR/DVR",
        "App móvil incluida",
        "Soporte técnico",
      ],
      price: "Desde 1.299€",
    },
    {
      icon: Radio,
      title: "Sensores Perimetrales",
      description: "Protección perimetral con sensores de movimiento y barreras infrarrojas.",
      features: [
        "Detección temprana",
        "Barreras IR",
        "Resistentes a intemperie",
        "Bajo mantenimiento",
      ],
      price: "Desde 249€",
    },
    {
      icon: Shield,
      title: "Sistemas Integrados",
      description: "Soluciones completas que integran todos nuestros productos.",
      features: [
        "Control centralizado",
        "Gestión unificada",
        "Escalable",
        "Personalizable",
      ],
      price: "Consultar",
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestros Productos
            </h1>
            <p className="text-xl text-blue-100">
              Tecnología de seguridad de última generación adaptada a tus necesidades
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-gray-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <product.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>

                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <span className="text-blue-600 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-2xl font-bold text-blue-600">
                      {product.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1715371659354-f72c4458d9a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGNhbWVyYXMlMjBzeXN0ZW18ZW58MXx8fHwxNzc1NjU4MjE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Sistema de cámaras de seguridad"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Tecnología de Vanguardia
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Nuestros productos utilizan inteligencia artificial y aprendizaje automático
                para proporcionar la mejor protección posible. Cada sistema es diseñado
                pensando en la facilidad de uso y la máxima eficacia.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">Instalación profesional incluida</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">Garantía extendida de 5 años</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">Mantenimiento preventivo gratuito</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">Actualizaciones de software incluidas</span>
                </li>
              </ul>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Solicitar Catálogo Completo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Mail, Phone, MapPin, Clock, ShieldCheck } from "lucide-react";

export function ContactInfo() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Ventas y Consultoría",
      details: ["+52 800 123 4567", "+52 800 123 4568"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["ventas@segurytech.com", "info@segurytech.com"],
    },
    {
      icon: MapPin,
      title: "Oficinas Centrales",
      details: ["Av. Seguridad 456, Corporativo", "Ciudad de México, México"],
    },
    {
      icon: Clock,
      title: "Atención al Cliente",
      details: ["Lunes a Viernes: 9:00 - 18:00", "Sábados: 10:00 - 14:00"],
    },
  ];

  return (
    <div className="space-y-10">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
          Canales de Atención
        </h2>
        <p className="text-gray-500 leading-relaxed">
          Nuestros especialistas están listos para asesorarte en la mejor solución técnica para tu seguridad.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
          {contactInfo.map((info) => (
            <div key={info.title} className="flex items-start gap-4 group">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                <info.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                  {info.title}
                </h3>
                {info.details.map((detail) => (
                  <p key={detail} className="text-gray-500 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

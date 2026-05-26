import { useLocation, useNavigate } from "react-router";
import { Shield, FileText, Lock, ShieldCheck, Scale, Info, Eye } from "lucide-react";
import { SEO } from "../components/seo/SEO";
import { DS } from "../styles/design_system";

export function Legal() {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine active tab based on route
  const isTerms = location.pathname.includes("terminos");
  const activeTab = isTerms ? "terms" : "privacy";

  const handleTabChange = (tab: "privacy" | "terms") => {
    navigate(tab === "terms" ? "/terminos" : "/privacidad");
  };

  return (
    <>
      <SEO
        title={activeTab === "privacy" ? "Política de Privacidad" : "Términos y Condiciones"}
        description={
          activeTab === "privacy"
            ? "Conoce cómo protegemos y gestionamos tus datos personales en SeguryTech."
            : "Consulta los términos y condiciones de uso de la plataforma y servicios de SeguryTech."
        }
      />

      {/* Hero Header */}
      <section className={DS.HERO}>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
        <div className={DS.CONTAINER_SLIM + " text-center relative z-10"}>
          <div className="inline-flex p-3 rounded-2xl bg-white/10 backdrop-blur-md mb-6 border border-white/20">
            <Scale className="w-8 h-8 text-blue-200" />
          </div>
          <h1 className={DS.H1 + " mb-6"}>Centro Legal</h1>
          <p className="text-xl text-blue-100/90 leading-relaxed max-w-2xl mx-auto">
            Transparencia, confianza y seguridad en el manejo de tu información y en la prestación de nuestros servicios.
          </p>
        </div>
      </section>

      {/* Tabs Navigator */}
      <section className="bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 sticky top-[72px] z-20 backdrop-blur-md bg-opacity-95 dark:bg-opacity-95">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex bg-gray-200/60 dark:bg-gray-800/60 p-1.5 rounded-2xl gap-2">
            <button
              onClick={() => handleTabChange("privacy")}
              className={`flex-1 flex items-center justify-center gap-3 py-3 px-4 rounded-xl font-bold text-sm transition-all duration-300 ${
                activeTab === "privacy"
                  ? "bg-white dark:bg-gray-950 text-blue-600 dark:text-blue-400 shadow-md transform scale-[1.02]"
                  : "text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
              }`}
            >
              <Lock className="w-4 h-4" />
              Política de Privacidad
            </button>
            <button
              onClick={() => handleTabChange("terms")}
              className={`flex-1 flex items-center justify-center gap-3 py-3 px-4 rounded-xl font-bold text-sm transition-all duration-300 ${
                activeTab === "terms"
                  ? "bg-white dark:bg-gray-950 text-blue-600 dark:text-blue-400 shadow-md transform scale-[1.02]"
                  : "text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
              }`}
            >
              <FileText className="w-4 h-4" />
              Términos y Condiciones
            </button>
          </div>
        </div>
      </section>

      {/* Legal Content */}
      <section className={DS.SECTION_MAIN}>
        <div className={DS.CONTAINER_SLIM}>
          <div className="bg-white dark:bg-gray-950 rounded-3xl border border-gray-100 dark:border-gray-900 p-8 md:p-12 shadow-xl shadow-gray-100/10 dark:shadow-none">
            {activeTab === "privacy" ? (
              /* PRIVACY POLICY */
              <div className="space-y-10 animate-fade-in">
                <div className="border-b border-gray-100 dark:border-gray-800 pb-8">
                  <div className="flex items-center gap-4 text-blue-600 dark:text-blue-400 mb-4">
                    <ShieldCheck className="w-10 h-10" />
                    <span className="text-xs font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 rounded-lg">
                      Última actualización: 26 de mayo de 2026
                    </span>
                  </div>
                  <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                    Aviso de Privacidad Integral
                  </h2>
                  <p className="mt-4 text-gray-500 dark:text-gray-400">
                    En <strong>SeguryTech</strong>, la privacidad y seguridad de tus datos es tan importante como la protección física de tus instalaciones. Este aviso describe cómo recopilamos, usamos y salvaguardamos tu información personal.
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold">1</span>
                    Responsable del Tratamiento de Datos
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed pl-11">
                    SeguryTech, S.A. de C.V., con domicilio en nuestras oficinas centrales descritas en el apartado de contacto, es el responsable legal de la recopilación, almacenamiento, uso y protección de los datos personales proporcionados por nuestros clientes, proveedores y visitantes web.
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold">2</span>
                    Datos Personales que Recopilamos
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed pl-11">
                    Para ofrecerte nuestros servicios de seguridad y videovigilancia de manera óptima, recopilamos los siguientes datos de forma directa o indirecta:
                  </p>
                  <ul className="list-disc pl-16 space-y-2 text-gray-600 dark:text-gray-400">
                    <li><strong>Datos de contacto:</strong> Nombre completo, teléfono, correo electrónico y dirección física para instalación de equipos.</li>
                    <li><strong>Datos de facturación:</strong> RFC, régimen fiscal y datos bancarios para procesamiento de pagos.</li>
                    <li><strong>Información técnica:</strong> IP de acceso, logs de uso del sistema de seguridad y configuración de red requerida para enlazar tus cámaras o alarmas.</li>
                    <li><strong>Imágenes de video:</strong> Capturas visuales registradas temporalmente por los sistemas que enlazamos a nuestra central de monitoreo 24/7 (bajo tu consentimiento expreso).</li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold">3</span>
                    Finalidad del Tratamiento de Datos
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed pl-11">
                    Utilizamos tu información personal exclusivamente para los siguientes propósitos principales:
                  </p>
                  <ul className="list-disc pl-16 space-y-2 text-gray-600 dark:text-gray-400">
                    <li>Instalar, configurar, enlazar y dar soporte técnico a tus sistemas de seguridad.</li>
                    <li>El monitoreo constante de alertas de intrusión y envío de asistencia si es requerido.</li>
                    <li>Responder a tus solicitudes de cotización, consultas de preventa y facturación.</li>
                    <li>Notificarte sobre mantenimientos preventivos y actualizaciones de software críticas.</li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold">4</span>
                    Derechos ARCO
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed pl-11">
                    Como titular de tus datos personales, tienes en todo momento el derecho de <strong>Acceder</strong> a ellos, <strong>Rectificarlos</strong> si son incorrectos, solicitar su <strong>Cancelación</strong> o bien <strong>Oponerte</strong> al uso para fines específicos. Para ejercer cualquiera de tus derechos ARCO, puedes enviar una solicitud formal a <a href="mailto:privacidad@segurytech.com" className="text-blue-600 dark:text-blue-400 underline font-semibold">privacidad@segurytech.com</a> adjuntando una copia de tu identificación oficial. Te responderemos en un plazo máximo de 15 días hábiles.
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold">5</span>
                    Medidas de Seguridad
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed pl-11">
                    Implementamos firewalls industriales, cifrado SSL/TLS de 256 bits para todas las transmisiones de video en tránsito y estrictos controles de acceso físico en nuestro data center para resguardar tu información de accesos no autorizados.
                  </p>
                </div>
              </div>
            ) : (
              /* TERMS AND CONDITIONS */
              <div className="space-y-10 animate-fade-in">
                <div className="border-b border-gray-100 dark:border-gray-800 pb-8">
                  <div className="flex items-center gap-4 text-blue-600 dark:text-blue-400 mb-4">
                    <Scale className="w-10 h-10" />
                    <span className="text-xs font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 rounded-lg">
                      Última actualización: 26 de mayo de 2026
                    </span>
                  </div>
                  <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                    Términos y Condiciones de Uso
                  </h2>
                  <p className="mt-4 text-gray-500 dark:text-gray-400">
                    Bienvenido a SeguryTech. Por favor lee detalladamente las siguientes reglas y condiciones generales que rigen el uso de nuestro sitio web, aplicaciones móviles y la adquisición de nuestros equipos e instalaciones.
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold">1</span>
                    Aceptación de los Términos
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed pl-11">
                    Al navegar por este sitio web, solicitar una cotización o adquirir cualquiera de nuestros productos de seguridad avanzada, el usuario acepta de conformidad total sujetarse a estos términos y condiciones. Si no estás de acuerdo con alguna de las cláusulas aquí especificadas, deberás abstenerte de utilizar nuestros servicios informáticos y adquirir nuestros productos.
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold">2</span>
                    Propiedad Intelectual
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed pl-11">
                    Todo el contenido de este sitio web, incluyendo logotipos, códigos de programación, gráficos, imágenes ilustrativas, arquitectura de diseño y software propietario, es propiedad exclusiva de <strong>SeguryTech</strong> y está protegido por las leyes de derechos de autor y propiedad industrial vigentes. Queda prohibida la reproducción parcial o total sin previa autorización escrita.
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold">3</span>
                    Limitación de Responsabilidad
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed pl-11">
                    Nuestros sistemas de alarma, videovigilancia CCTV y control de acceso son herramientas tecnológicas **preventivas y auxiliares** destinadas a disuadir y reducir riesgos de intrusiones o robos. SeguryTech no garantiza bajo ninguna circunstancia que el uso de nuestros equipos eliminará por completo la ocurrencia de incidentes de seguridad, fallos de suministro eléctrico externos o cortes deliberados de internet por terceros.
                  </p>
                  <div className="pl-11">
                    <div className="flex gap-4 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-900/30 text-amber-800 dark:text-amber-300">
                      <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <p className="text-sm leading-relaxed">
                        <strong>Nota Técnica:</strong> Para asegurar un óptimo rendimiento en caso de cortes de energía, recomendamos contar con sistemas de alimentación ininterrumpida (UPS / No-break) que mantengan encendidos los grabadores y enrutadores.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold">4</span>
                    Garantías y Mantenimiento de Equipos
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed pl-11">
                    Todos los equipos físicos de seguridad instalados de manera directa por SeguryTech cuentan con una garantía básica contra defectos de fabricación de 1 año. La garantía quedará invalidada si los equipos son alterados, manipulados por personal ajeno a SeguryTech, o si sufren daños provocados por fenómenos meteorológicos extremos ajenos a su especificación de fábrica.
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold">5</span>
                    Modificaciones de los Términos
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed pl-11">
                    Nos reservamos el derecho de modificar estos términos en cualquier momento con el fin de adaptarlos a reformas de ley o cambios internos en nuestro modelo de prestación de servicios. Las modificaciones entrarán en vigor a partir del instante de su publicación en esta sección.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

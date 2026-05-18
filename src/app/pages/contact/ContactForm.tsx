import { useState } from "react";
import { Button, Input, Textarea, Label, Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../components/ui/core";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // API de Web3Forms (Reemplaza la URL anterior de PHP)
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          // IMPORTANTE: Ve a web3forms.com, pon tu correo y pega aquí tu Access Key
          access_key: "4ad4261a-20da-4940-b38e-29a9d07d65e2", 
          subject: "Nueva Solicitud de Contacto - SeguryTech",
          from_name: formData.name || "Usuario Web",
          replyto: formData.email,
          ...formData
        }),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el formulario");
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", phone: "", company: "", message: "" });
      }, 5000);
    } catch (err) {
      setError("Hubo un problema al enviar tu mensaje. Por favor, intenta nuevamente.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <Card className="border-green-100 bg-green-50/50">
        <CardContent className="pt-12 pb-12 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <CardTitle className="text-2xl mb-2 text-green-900">¡Mensaje Recibido!</CardTitle>
          <CardDescription className="text-green-700">
            Gracias por confiar en SeguryTech. Un especialista se pondrá en contacto contigo en menos de 24 horas.
          </CardDescription>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-xl border-gray-100">
      <CardHeader>
        <CardTitle className="text-2xl">Envíanos un Mensaje</CardTitle>
        <CardDescription>
          Completa el formulario y cuéntanos sobre tus necesidades de seguridad.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre Completo *</Label>
              <Input
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Ej. Juan Pérez"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Corporativo *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@empresa.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono de Contacto</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+52 ..."
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Empresa / Organización</Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Nombre de tu empresa"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Detalles del Proyecto *</Label>
            <Textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="¿En qué podemos ayudarte?"
              className="resize-none"
            />
          </div>
          {error && (
            <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-100 rounded-md">
              {error}
            </div>
          )}
          <Button type="submit" disabled={isLoading} className="w-full h-12 text-lg font-bold bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/20 disabled:opacity-70 disabled:cursor-not-allowed">
            {isLoading ? "Enviando..." : "Enviar Solicitud"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

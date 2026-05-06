export interface NavLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: NavLink[];
}

export const MAIN_NAV_LINKS: NavLink[] = [
  { label: "Inicio",    href: "/" },
  { label: "Productos", href: "/productos" },
  { label: "Servicios", href: "/servicios" },
  { label: "Nosotros",  href: "/nosotros" },
  { label: "Soporte",   href: "/soporte" },
];

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Productos",
    links: [
      { label: "Cámaras", href: "/productos" },
      { label: "Alarmas", href: "/productos" },
      { label: "Control de Acceso", href: "/productos" },
    ],
  },
  {
    title: "Servicios",
    links: [
      { label: "Instalación", href: "/servicios" },
      { label: "Monitoreo", href: "/servicios" },
      { label: "Mantenimiento", href: "/servicios" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre Nosotros", href: "/nosotros" },
      { label: "Contacto", href: "/contacto" },
      { label: "Soporte Técnico", href: "/soporte" },
    ],
  },
];

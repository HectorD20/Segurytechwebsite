import { Outlet, ScrollRestoration } from 'react-router';
import { Navbar } from './sections/Navbar';
import { Footer } from './sections/Footer';
import { MAIN_NAV_LINKS, FOOTER_SECTIONS } from './sections/navigation';

/**
 * Layout — Shell de la aplicación SeguryTech.
 */
export function Layout() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 scroll-smooth">
      <ScrollRestoration />
      <Navbar links={MAIN_NAV_LINKS} />

      <main id="main-content" className="flex-1">
        <Outlet />
      </main>

      <Footer 
        sections={FOOTER_SECTIONS} 
        copyright={`© ${currentYear} SeguryTech. Todos los derechos reservados.`} 
      />
    </div>
  );
}

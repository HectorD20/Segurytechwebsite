import { Link } from 'react-router';
import { Shield } from 'lucide-react';
import { FooterSection } from './navigation';

interface FooterProps {
  sections: FooterSection[];
  copyright: string;
}

export function Footer({ sections, copyright }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold text-white tracking-tight">SEGURYTECH</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Protegiendo tu mundo con tecnología de vanguardia y soluciones de seguridad inteligentes desde hace más de 15 años.
            </p>
          </div>

          {/* Dynamic sections */}
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      to={link.href} 
                      className="text-gray-400 hover:text-blue-500 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            {copyright}
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <Link to="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
            <Link to="/terminos" className="hover:text-white transition-colors">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useEffect } from 'react';
import { useLocation } from 'react-router';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
  canonical?: string;
}

/**
 * SEO — Componente para la gestión dinámica de Meta-Tags en SeguryTech.
 */
export function SEO({ 
  title, 
  description, 
  image = '/public/images/Logo.jpeg',
  type = 'website',
  canonical
}: SEOProps) {
  const { pathname } = useLocation();
  const siteName = 'SeguryTech';
  const fullTitle = `${title} | ${siteName}`;
  const baseUrl = window.location.origin;
  const currentUrl = `${baseUrl}${pathname}`;

  useEffect(() => {
    document.title = fullTitle;

    const updateMetaTag = (attr: string, value: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${value}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, value);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMetaTag('name', 'description', description);
    updateMetaTag('property', 'og:site_name', siteName);
    updateMetaTag('property', 'og:title', fullTitle);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:type', type);
    updateMetaTag('property', 'og:url', currentUrl);
    updateMetaTag('property', 'og:image', `${baseUrl}${image}`);
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', fullTitle);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag('name', 'twitter:image', `${baseUrl}${image}`);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical || currentUrl);

  }, [title, description, image, type, canonical, currentUrl, fullTitle]);

  return null;
}

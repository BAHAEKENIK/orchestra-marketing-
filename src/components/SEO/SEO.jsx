// src/components/SEO/SEO.jsx
import { useEffect } from 'react';

export default function SEO({ title, description, keywords, url, image }) {
  useEffect(() => {
    // 1. Set the Document Title
    if (title) document.title = title;

    // 2. Helper function to set/create meta tags
    const setMetaTag = (name, content, isProperty = false) => {
      if (!content) return;
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Apply Standard SEO
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);

    // 4. Apply Open Graph (LinkedIn/Facebook)
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:url', url, true);
    setMetaTag('og:image', image, true);
    setMetaTag('og:type', 'website', true);

    // 5. Apply Language Tags for Trilingual Tanger
    const setLinkTag = (hrefLang, href) => {
      let element = document.querySelector(`link[hrefLang="${hrefLang}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', 'alternate');
        element.setAttribute('hrefLang', hrefLang);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    setLinkTag('fr', 'https://orchestra-marketing.ai/fr');
    setLinkTag('ar', 'https://orchestra-marketing.ai/ar');
    setLinkTag('es', 'https://orchestra-marketing.ai/es');

  }, [title, description, keywords, url, image]);

  return null; // This component doesn't render any UI
}
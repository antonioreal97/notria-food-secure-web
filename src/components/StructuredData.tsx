import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type: 'organization' | 'service' | 'article' | 'breadcrumb';
  data: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Notriá Consultoria",
          "url": "https://www.consultorianotria.com.br",
          "logo": "https://www.consultorianotria.com.br/assets/logo-primary.png",
          "description": "Consultoria especializada em Segurança Alimentar e Nutricional (SAN). Soluções estratégicas, capacitação e avaliação de políticas públicas para combater a insegurança alimentar.",
          "foundingDate": "2020",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "BR"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "availableLanguage": "Portuguese"
          },
          "serviceType": "Consultoria em Segurança Alimentar e Nutricional",
          "areaServed": "Brasil",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Serviços de Consultoria",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Consultoria em Segurança Alimentar e Nutricional",
                  "description": "Soluções estratégicas para combater a insegurança alimentar"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Capacitação em SAN",
                  "description": "Treinamento e capacitação de gestores e técnicos"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Avaliação de Políticas Públicas",
                  "description": "Avaliação e otimização de políticas públicas alimentares"
                }
              }
            ]
          }
        };
      
      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data.name || "Consultoria em Segurança Alimentar e Nutricional",
          "description": data.description || "Soluções estratégicas para combater a insegurança alimentar",
          "provider": {
            "@type": "Organization",
            "name": "Notriá Consultoria"
          },
          "serviceType": "Consultoria em Segurança Alimentar e Nutricional",
          "areaServed": "Brasil"
        };
      
      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data.items || []
        };
      
      default:
        return data;
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getStructuredData())}
      </script>
    </Helmet>
  );
};

export default StructuredData; 
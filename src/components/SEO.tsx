import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  canonical?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Notriá Consultoria - Especialistas em Segurança Alimentar e Nutricional | Consultoria SAN",
  description = "Consultoria especializada em Segurança Alimentar e Nutricional (SAN). Soluções estratégicas, capacitação e avaliação de políticas públicas para combater a insegurança alimentar. Especialistas em segurança alimentar e nutricional no Brasil.",
  keywords = "consultoria em segurança alimentar, segurança alimentar e nutricional, segurança e insegurança alimentar, notria, notria consultoria, consultoria SAN, políticas públicas alimentação, capacitação segurança alimentar, avaliação segurança alimentar, combate fome, bancos de alimentos, restaurantes populares, cozinhas comunitárias, gestão segurança alimentar, consultoria nutricional, segurança alimentar Brasil",
  image = "https://www.consultorianotria.com.br/assets/logo-primary.png",
  url = "https://www.consultorianotria.com.br",
  type = "website",
  canonical
}) => {
  const siteUrl = "https://www.consultorianotria.com.br";
  const fullUrl = canonical || `${siteUrl}${url}`;
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Notriá Consultoria" />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:url" content={fullUrl} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
    </Helmet>
  );
};

export default SEO; 
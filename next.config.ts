import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 414, 768, 1024, 1280, 1920],
    remotePatterns: [],
  },
  compress: true,
  async redirects() {
    return [
      // Services -> /servicos
      { source: '/anuncios-online-trafego-pago', destination: '/servicos', permanent: true },
      { source: '/implementacao-de-crm', destination: '/servicos', permanent: true },
      { source: '/criacao-de-websites-e-funis', destination: '/servicos', permanent: true },
      { source: '/branding-e-posicionamento-de-marcas', destination: '/servicos', permanent: true },
      { source: '/producao-audiovisual', destination: '/servicos', permanent: true },
      { source: '/analise-de-dados-e-performance-bi', destination: '/servicos', permanent: true },
      { source: '/alicerce-digital', destination: '/servicos', permanent: true },
      { source: '/sistema-de-crescimento-digital', destination: '/servicos', permanent: true },
      { source: '/sistema-de-dominacao-digital', destination: '/servicos', permanent: true },
      { source: '/metodologia-de-marketing-angola', destination: '/servicos', permanent: true },
      { source: '/solucoes-de-marketing-angola', destination: '/servicos', permanent: true },
      { source: '/contrate-solucoes-em-marketing', destination: '/contacto', permanent: true },

      // Case studies -> /resultados
      { source: '/cases-de-sucesso-mazanga-marketing', destination: '/resultados', permanent: true },
      { source: '/escola-chave-do-milhao-suica', destination: '/resultados', permanent: true },
      { source: '/forca-seu-nome-e-mulher-europa-e-america-do-sul', destination: '/resultados', permanent: true },
      { source: '/mazanga-electric-angola', destination: '/resultados', permanent: true },
      { source: '/pizza-max', destination: '/resultados', permanent: true },
      { source: '/proxi-conseils-suica', destination: '/resultados', permanent: true },
      { source: '/restaurant-auberge', destination: '/resultados', permanent: true },
      { source: '/vitoria-soin-du-corps', destination: '/resultados', permanent: true },

      // Blog -> /blog
      { source: '/blog-dicas-praticas', destination: '/blog', permanent: true },
      { source: '/blog-post', destination: '/blog', permanent: true },
      { source: '/blog-post1', destination: '/blog', permanent: true },
      { source: '/blog-post2', destination: '/blog', permanent: true },

      // Legal -> /privacidade
      { source: '/privacy-policy', destination: '/privacidade', permanent: true },
      { source: '/aviso-legal', destination: '/privacidade', permanent: true },
      { source: '/termos-e-condicoes', destination: '/privacidade', permanent: true },
      { source: '/compliance-e-conduta-etica', destination: '/privacidade', permanent: true },
    ];
  },
};

export default nextConfig;

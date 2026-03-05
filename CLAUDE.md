# CLAUDE.md — Mazanga Marketing Website

## IDENTIDADE DO PROJECTO

**Nome:** Mazanga Marketing
**Tipo:** Assessoria de crescimento digital B2B
**Mercados:** Angola (principal) + Suíça (clientes existentes)
**Público-alvo:** CEOs e decisores de empresas angolanas com faturamento relevante (energia, recursos naturais, indústria, logística, telecomunicações, banca)
**Tom:** Premium, directo, confiante. Não somos mais uma agência — somos infraestrutura de crescimento.
**Diferenciador real:** Experiência internacional (20+ clientes Suíça), foco em ROI mensurável, modelo híbrido projecto→recorrência, sistemas que geram receita previsível — não posts bonitos.

---

## DIRECÇÃO ESTÉTICA

### Mood
Dark & futurista com toques de profissionalismo premium. Inspiração directa: **Linear.app**, **Stripe**, **Vercel** — sites que comunicam sofisticação técnica sem serem frios. O visitante deve sentir em 3 segundos: "Esta empresa é séria, moderna, e sabe o que faz."

### Paleta de Cores (CSS Variables obrigatórias)

```css
/* Fundos */
--bg-primary: #06070B;        /* Fundo principal — quase preto com toque azulado */
--bg-secondary: #0C0E15;      /* Secções alternadas */
--bg-card: #10131C;            /* Cards e containers */
--bg-card-hover: #161A26;      /* Hover state dos cards */

/* Cores de marca */
--purple: #7C3AED;             /* Acção principal, CTAs */
--purple-light: #A78BFA;       /* Texto accent, labels */
--purple-glow: rgba(124,58,237,0.25); /* Sombras e glows */
--orange: #F97316;             /* Destaque secundário, urgência */
--orange-light: #FB923C;
--blue: #3B82F6;               /* Terceira cor accent */
--blue-light: #60A5FA;

/* Texto */
--text-primary: #F1F5F9;       /* Títulos e texto principal */
--text-secondary: rgba(241,245,249,0.6); /* Parágrafos */
--text-muted: rgba(241,245,249,0.35);    /* Labels e metadata */

/* Bordas e separadores */
--border: rgba(241,245,249,0.08);
--border-hover: rgba(241,245,249,0.15);
```

### Tipografia

| Uso | Fonte | Importar via |
|-----|-------|-------------|
| Display (títulos) | **Syne** | `next/font/google` |
| Body (corpo) | **Outfit** | `next/font/google` |

**NUNCA** usar Inter, Roboto, Arial, ou qualquer fonte genérica como display.

### Tamanhos de Texto (usar clamp() SEMPRE)

| Elemento | Tamanho |
|----------|---------|
| Hero H1 | `clamp(38px, 4.2vw, 62px)`, weight 800, line-height 1.08, letter-spacing -0.03em |
| Section H2 | `clamp(30px, 3.5vw, 48px)`, weight 800, line-height 1.1, letter-spacing -0.03em |
| Card H3 | 18-22px, weight 700 |
| Body text | `clamp(15px, 1.1vw, 17px)`, weight 400, line-height 1.7 |
| Labels/badges | 11-12px, weight 700, uppercase, letter-spacing 0.08-0.1em |
| Small/muted | 13-14px |

### Elementos Visuais

- **Grain overlay** subtil sobre toda a página (opacity 0.03-0.04) — dá textura e profundidade
- **Orbes de gradiente** no hero (blur 100px+, opacity baixa) — roxo, laranja, azul
- **Bordas de 1px** nos cards com rgba branco a 8%
- **Gradient line** no topo dos cards (2px de altura, cor varia por card)
- **Glow effects** nos CTAs e elementos de destaque
- **Backdrop-filter: blur(20px)** na navbar ao fazer scroll
- **Animações de entrada** em TODAS as secções (fade + slide up, staggered)

### O que torna este site INESQUECÍVEL

1. **Dashboard card animado no Hero** — mostra métricas em tempo real (leads, CPL, ROI) com barras animadas, proving que trabalhamos com dados reais
2. **Gradient text animado** na headline principal (purple → orange → blue shift)
3. **Micro-interacções** — cards que respondem ao hover com elevação e mudança de borda
4. **Secção Before/After visual** — mostra a transformação que fazemos nos negócios dos clientes

---

## STACK TÉCNICA

| Tecnologia | Uso |
|-----------|-----|
| **Next.js 14+ (App Router)** | Framework principal |
| **TypeScript** | Tipagem obrigatória |
| **Tailwind CSS** | Styling (usar com CSS variables) |
| **next/font** | Importação de fontes (Syne + Outfit) |
| **next/image** | Todas as imagens |
| **Framer Motion** | Animações e transições |
| **IntersectionObserver** | Reveal on scroll |

### Regras Técnicas Absolutas

- ✅ CSS Variables para TODA a paleta — zero valores hardcoded
- ✅ `next/image` para todas as imagens — nunca `<img>` directo
- ✅ `next/font` para fontes — nunca `@import` CSS
- ✅ Animações de entrada com Framer Motion ou IntersectionObserver em TODAS as secções
- ✅ Mobile-first — testar sempre em 375px
- ✅ Alt text descritivo em todas as imagens
- ✅ Conteúdo 100% real — NUNCA Lorem Ipsum
- ✅ Componentes separados por secção (Hero.tsx, Problems.tsx, etc.)
- ✅ Metadata SEO completa (ver secção SEO abaixo)
- ❌ Nunca `!important`
- ❌ Nunca `console.log` em produção
- ❌ Nunca fontes genéricas como display
- ❌ Nunca gradientes roxo/azul genéricos sem intencionalidade
- ❌ Nunca 3 cards iguais centrados como único layout

---

## ESTRUTURA DE PÁGINAS

Site single-page com scroll suave entre secções. Todas as secções são componentes individuais.

```
app/
├── layout.tsx          (metadata, fonts, global styles)
├── page.tsx            (composição de todas as secções)
├── globals.css         (CSS variables, reset, utilities)
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Problems.tsx
│   ├── Solution.tsx
│   ├── Services.tsx
│   ├── Process.tsx
│   ├── Stats.tsx
│   ├── Differentiators.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
├── sitemap.ts
└── robots.ts
```

---

## SECÇÕES E CONTEÚDO REAL

### 1. NAVBAR

- Logo "MAZANGA" à esquerda (Syne, 800, ponto roxo depois do nome)
- Links: Problema · Solução · Serviços · Processo
- CTA: "Diagnóstico Gratuito" (botão roxo)
- Sticky: ao scroll → backdrop-blur + bg semi-transparente + borda inferior subtil
- Mobile: hamburger → menu fullscreen com links grandes
- Transição suave de padding ao entrar em estado scrolled (de 20px para 14px)

### 2. HERO

**Layout:** Grid 2 colunas (desktop) — conteúdo à esquerda, dashboard card à direita. 1 coluna em mobile (dashboard esconde).

**Coluna Esquerda:**

```
[Badge] 🟢 CONSULTORIA ACTIVA · LUANDA, ANGOLA

[H1]
Sistemas que geram
receita previsível
para a tua empresa

[Subtítulo]
Não vendemos posts bonitos. Estruturamos e operamos sistemas completos de marketing e vendas para empresas B2B angolanas que querem crescer com dados, não com sorte.

[CTAs]
[Agendar Diagnóstico Gratuito →]  [Ver Como Funciona]

[Proof bar — separada por borda top subtil]
20+ clientes na Suíça · ROI mensurável · Angola & Suíça
```

- Badge: pill com dot verde pulsante, fundo purple a 10%, borda purple a 20%
- H1: "receita previsível" em gradient text animado (purple → orange → blue)
- Subtítulo: max-width 460px, cor text-secondary
- CTA primário: roxo com hover glow
- CTA secundário: ghost/outline

**Coluna Direita — Dashboard Card:**

```
┌─────────────────────────────────┐
│ ─ gradient line purple topo ─   │
│ Performance Dashboard    🟢 LIVE│
│                                 │
│ ┌──────────┐ ┌──────────┐      │
│ │ LEADS    │ │ CPL      │      │
│ │ 247      │ │ $1.02    │      │
│ │ ↑ +34%   │ │ ↓ -22%   │      │
│ └──────────┘ └──────────┘      │
│ ┌──────────┐ ┌──────────┐      │
│ │ ROAS     │ │ REUNIÕES │      │
│ │ 4.8x     │ │ 38       │      │
│ │ ↑ +18%   │ │ ↑ +45%   │      │
│ └──────────┘ └──────────┘      │
│                                 │
│ ▮▮▮▮▮▮▮▮▮▮ mini bar chart     │
│ Jan  Fev  Mar  Abr  Mai  Jun   │
└─────────────────────────────────┘
```

- Background: bg-card com borda subtil
- Gradient line no topo (1px purple)
- 4 métricas em grid 2x2
- Mini bar chart com barras purple de alturas variáveis (animadas ao aparecer)
- Badge "LIVE" com dot verde pulsante

**Background:**
3 orbes de gradiente posicionados absolutamente, com blur 100px+ e animação float lenta (12s):
- Orbe 1: purple, top-right
- Orbe 2: orange, bottom-left
- Orbe 3: blue, center

### 3. PROBLEMS (Secção "O Problema")

**Layout:** 2 colunas — lista de problemas à esquerda, resultado/consequência à direita

**Label:** PROBLEMA
**H2:** O marketing da maioria das empresas angolanas está partido

**Problemas (lista com ícones ✗ vermelhos):**

1. **Investem sem medir** — Gastam em marketing sem saber se funciona. Sem métricas, sem ROI, sem dados para decidir.
2. **Fornecedores desconectados** — Designer faz uma coisa, social media outra, tráfego outra. Ninguém fala com ninguém.
3. **Sem CRM nem pipeline** — Vendem mas não sabem prever. Leads perdidos, follow-ups esquecidos, oportunidades desperdiçadas.
4. **Dependência de networking** — Crescimento depende de quem conheces, não de um sistema replicável.
5. **Marketing visto como custo** — Não como investimento. Porque nunca ninguém mostrou o retorno de forma clara.
6. **Não sabem o CAC** — Quanto custa adquirir 1 cliente novo? A maioria não faz ideia.

**Card de resultado (direita):**
- Fundo bg-card com borda
- Título laranja: "O resultado?"
- Texto: "Crescimento instável, desperdício de recursos, falta de previsibilidade. E num mercado imaturo em marketing digital, onde há pouca educação sobre métricas e resistência a pagar por consultoria — o problema só se agrava."

### 4. SOLUTION (Secção "A Solução — Escada de Valor")

**Label:** SOLUÇÃO
**H2:** Um sistema que evolui com o teu negócio
**Desc:** Cliente entra em qualquer nível, evolui conforme maturidade. Projecto tangível primeiro → confiança → recorrência estratégica.

**3 Cards (grid 3 colunas):**

**Card 1 — NÍVEL 1: FUNDAÇÃO**
- Gradient line topo: purple
- Subtítulo: "Entrada — Projecto"
- H3: Resultados em 60-90 dias
- Desc: Porta de entrada tangível. Website estratégico, primeiras campanhas, organização de leads. Geramos resultados reais antes de pedir compromisso de longo prazo.
- Features:
  - Website responsivo optimizado para conversão
  - Setup Google Analytics 4 + Meta Pixel
  - Primeiras campanhas de aquisição
  - Relatório final com recomendações
- Preço: A partir de 1.200.000 Kz

**Card 2 — NÍVEL 2: OPERAÇÃO** ⭐ Recomendado
- Gradient line topo: orange
- Subtítulo: "Core — Recorrência mensal"
- H3: Sistema a funcionar todos os meses
- Desc: Gestão contínua de tráfego, CRM estruturado, conteúdo estratégico, optimizações baseadas em dados. Leads e vendas previsíveis.
- Features:
  - Gestão multi-canal (Meta + Google)
  - CRM estruturado e operado
  - 16 posts/mês + conteúdo estratégico
  - Dashboard em tempo real
  - Reuniões quinzenais + relatório mensal
- Preço: A partir de 3.000.000 Kz/mês

**Card 3 — NÍVEL 3: CRESCIMENTO ESTRATÉGICO**
- Gradient line topo: blue
- Subtítulo: "Premium — Parceria de crescimento"
- H3: Co-responsabilidade por resultados
- Desc: Account-Based Marketing, integração total marketing + vendas, consultoria ao CEO, performance fee. Crescemos quando o cliente cresce.
- Features:
  - Account-Based Marketing (top 50 prospects)
  - Treinamento da equipa comercial
  - Workshop estratégico trimestral com CEO
  - Sales enablement (playbooks, scripts)
  - Performance fee sobre receita nova
- Preço: A partir de 8.000.000 Kz/mês

### 5. SERVICES (Secção "O Que Fazemos")

**Label:** SERVIÇOS
**H2:** Tudo o que precisas sob um único parceiro
**Desc:** Eliminamos a fragmentação de fornecedores. Um sistema integrado, uma equipa, resultados mensuráveis.

**Grid 2x3 de service cards:**

1. 📊 **Estratégia de Marketing** — Planeamento baseado em dados, análise de mercado, posicionamento, definição de KPIs e metas mensuráveis.
2. 🎯 **Publicidade Online** — Meta Ads, Google Ads, LinkedIn Ads. Campanhas optimizadas para gerar leads qualificados ao menor custo.
3. 🌐 **Websites & Landing Pages** — Sites responsivos optimizados para conversão. Não apenas bonitos — funcionais e estratégicos.
4. 📈 **CRM & Automação** — Implementação e operação de CRM, automações de follow-up, pipeline visível, lead scoring.
5. 🎬 **Produção de Conteúdo** — Vídeo, fotografia, design gráfico, copywriting. Conteúdo que converte, não apenas que "fica bonito".
6. 📋 **Consultoria & Formação** — Workshops, diagnósticos, treinamento de equipas comerciais. Transferência de conhecimento real.

Cada card: ícone colorido em box (40x40, fundo cor a 10%, borda cor a 15%), título em Syne bold, descrição em 2 linhas.

### 6. PROCESS (Secção "Como Trabalhamos")

**Label:** PROCESSO
**H2:** Da primeira reunião aos primeiros resultados

**4 Steps horizontais com setas entre eles:**

1. **Diagnóstico** — Analisamos o teu negócio, mercado, concorrência e oportunidades. Identificamos exactamente onde estás a perder clientes.
2. **Estratégia** — Desenhamos o plano de crescimento com metas claras, KPIs, timeline e investimento necessário. Sem surpresas.
3. **Implementação** — Construímos e lançamos tudo: site, campanhas, CRM, automações. Setup completo em 30-45 dias.
4. **Optimização** — Monitorizamos, testamos, melhoramos. Relatórios transparentes. Decisões baseadas em dados, nunca em feeling.

Cada step: número em box roxo (56x56, border-radius 16px), título bold, descrição 2 linhas. Setas "→" entre steps em desktop.

### 7. STATS (Barra de estatísticas)

**4 stats em linha, separadas por bordas top/bottom:**

| Stat | Valor | Label |
|------|-------|-------|
| 1 | 20+ | Clientes internacionais |
| 2 | 4.8x | ROAS médio alcançado |
| 3 | -40% | Redução média do CAC |
| 4 | 60d | Até primeiros resultados |

Valores grandes em gradient text (white → purple-light), labels em text-muted.

### 8. DIFFERENTIATORS (Secção "Porquê a Mazanga")

**Label:** DIFERENCIAL
**H2:** Não somos mais uma agência

**3 Cards:**

1. 🌍 **Experiência Internacional** — 20+ clientes na Suíça antes de Angola. Metodologia importada, adaptada à realidade angolana. Não estamos a experimentar — já provamos que funciona.

2. 📊 **Obcecados por ROI** — Não vendemos "presença digital". Cada Kz investido é rastreado, medido e optimizado. Sabes exactamente quanto custa adquirir 1 cliente e quanto retorna.

3. 🤝 **Parceiros, Não Fornecedores** — Não executamos ordens. Desafiamos, aconselhamos, co-criamos. Se algo não funciona, dizemos. Se funciona, escalamos. Crescemos quando o cliente cresce.

### 9. CTA (Secção final de conversão)

**Centrada, com orbe de gradiente no fundo.**

**H2:** Pronto para ter um sistema que gera receita?
**Desc:** Em 15 minutos mostramos-te exactamente onde a tua empresa está a perder clientes — e como corrigir. Sem compromisso.

**CTAs:**
[Agendar Diagnóstico Gratuito →]  [WhatsApp Directo]

### 10. FOOTER

**Grid 4 colunas:**

**Col 1 — Brand:**
- Logo MAZANGA.
- Tagline: "Infraestrutura de crescimento para empresas angolanas ambiciosas."
- Social icons: Instagram, LinkedIn, WhatsApp

**Col 2 — Navegação:**
- Problema
- Solução
- Serviços
- Processo

**Col 3 — Serviços:**
- Publicidade Online
- Websites & Landing Pages
- CRM & Automação
- Consultoria

**Col 4 — Contacto:**
- Luanda, Angola
- info@mazangamarketing.com
- +244 XXX XXX XXX
- WhatsApp Business

**Bottom bar:** © 2025 Mazanga Marketing. Todos os direitos reservados. | Política de Privacidade

---

## SEO & METADATA

```ts
// app/layout.tsx
export const metadata = {
  title: 'Mazanga Marketing | Assessoria de Crescimento Digital — Luanda, Angola',
  description: 'A Mazanga estrutura e opera sistemas completos de marketing e vendas para empresas B2B angolanas. Experiência internacional. ROI mensurável. Resultados reais.',
  keywords: ['marketing digital angola', 'agência marketing luanda', 'marketing B2B angola', 'publicidade online angola', 'assessoria crescimento digital', 'CRM angola', 'mazanga marketing'],
  metadataBase: new URL('https://mazangamarketing.com'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_AO',
    url: 'https://mazangamarketing.com',
    title: 'Mazanga Marketing | Crescimento Digital para Empresas Angolanas',
    description: 'Sistemas que geram receita previsível. 20+ clientes internacionais. ROI mensurável.',
    siteName: 'Mazanga Marketing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mazanga Marketing',
  },
  robots: { index: true, follow: true },
}
```

### Schema.org

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Mazanga Marketing",
  "description": "Assessoria de crescimento digital para empresas B2B angolanas",
  "url": "https://mazangamarketing.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Luanda",
    "addressCountry": "AO"
  },
  "areaServed": ["Angola", "Suíça"],
  "serviceType": ["Marketing Digital", "Publicidade Online", "CRM", "Consultoria"],
  "sameAs": ["https://instagram.com/mazangamarketing", "https://linkedin.com/company/mazangamarketing"]
}
```

---

## ANIMAÇÕES

Cada secção deve ter animação de reveal ao entrar no viewport:

```tsx
// Hook reutilizável com IntersectionObserver
// Ou usar Framer Motion:
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
>
```

- **Staggered reveals:** Elementos dentro da secção aparecem com delay escalonado (0.1s entre cada)
- **Hero:** Animações de entrada imediatas (não esperam scroll)
- **Dashboard barras:** Animam altura de 0 para valor final ao aparecer
- **Cards:** Hover com translateY(-4px) e border-color a clarear
- **Gradient text:** Background-position animation loop (6s)
- **Orbe float:** Transform translateY keyframes (12s, ease-in-out)
- **Navbar:** Transition suave de transparent → blur+bg ao scroll

---

## RESPONSIVIDADE

| Breakpoint | Alterações |
|-----------|-----------|
| > 1024px | Layout completo, grid multi-coluna |
| 768-1024px | Hero 1 coluna (esconde dashboard), cards em grid menor |
| < 768px | Hamburger menu, 1 coluna em tudo, stats 2x2, padding reduzido |
| < 480px | Texto ajusta via clamp(), CTAs full-width stack |

**Regras mobile:**
- Hero dashboard: `display: none` abaixo de 1024px
- Nav links: hamburger fullscreen abaixo de 768px
- Process steps: 2 colunas tablet, 1 coluna mobile (sem setas)
- Footer: 1 coluna mobile
- Hero proof bar: flex-column em mobile

---

## CHECKLIST ANTES DE PUBLICAR

```
□ npm run build — sem erros, sem warnings
□ Todas as imagens em WebP/AVIF via next/image
□ next/font para Syne e Outfit
□ CSS Variables para toda a paleta
□ Sem console.log em produção
□ Meta tags completas (title, description, OG)
□ Schema.org ProfessionalService
□ robots.ts e sitemap.ts
□ Alt text em todas as imagens
□ Testado em mobile 375px
□ Testado em tablet 768px
□ Score PageSpeed > 85
□ Animações de reveal em TODAS as secções
□ Links de navegação funcionam (scroll suave)
□ CTA links apontam para WhatsApp ou formulário
□ Grain overlay presente
□ Orbes de gradiente no hero
□ Dashboard card animado
□ Gradient text na headline
```

---

## REFERÊNCIAS VISUAIS

Estudar estes sites para entender o nível de qualidade esperado:
- **linear.app** — dark theme, thin borders, gradients, micro-interactions
- **stripe.com** — clarity in messaging, animated backgrounds, product demos
- **vercel.com** — clean dark UI, gradient effects, developer-grade aesthetics
- **cal.com** — open source SaaS, dark theme, gradient accents
- **resend.com** — minimal dark, purple accents, clean cards

O site da Mazanga deve estar ao nível destas referências. Não aceitar mediocridade.

---

## PRINCÍPIO FINAL

> **A Mazanga não é mais uma agência.**
> **É infraestrutura de crescimento para empresas angolanas ambiciosas.**
>
> O site deve comunicar isso em 3 segundos.
> Premium. Directo. Baseado em dados. Sem bullshit.

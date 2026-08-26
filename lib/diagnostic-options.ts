export type DiagnosticFormData = {
  name: string
  role: string
  otherRole: string
  email: string
  phone: string
  company: string
  website: string
  social: string
  sector: string
  province: string
  employees: string
  revenue: string
  marketingTeam: string
  challenge: string
  desiredResults: string
  services: string[]
  timeline: string
  investment: string
  authority: string
  additionalInfo: string
  consent: boolean
  companyWebsite: string
  tracking: {
    utm_source?: string
    utm_medium?: string
    utm_campaign?: string
    utm_content?: string
    utm_term?: string
    fbclid?: string
    gclid?: string
    landing_url?: string
    referrer?: string
  }
}

export const initialDiagnosticData: DiagnosticFormData = {
  name: '', role: '', otherRole: '', email: '', phone: '+244 ', company: '', website: '', social: '',
  sector: '', province: '', employees: '', revenue: '', marketingTeam: '', challenge: '',
  desiredResults: '', services: [], timeline: '', investment: '', authority: '', additionalInfo: '',
  consent: false, companyWebsite: '', tracking: {},
}

export const roleOptions = ['Proprietário/Fundador', 'CEO/Diretor-geral', 'Administrador', 'Diretor comercial', 'Diretor/Responsável de marketing', 'Gestor', 'Outro']
export const sectorOptions = ['Construção civil', 'Imobiliário', 'Saúde', 'Educação', 'Hotelaria e turismo', 'Logística e transportes', 'Indústria', 'Serviços empresariais', 'Comércio e distribuição', 'Energia', 'Banca, seguros e serviços financeiros', 'Telecomunicações', 'Empresa B2B', 'Outro']
export const provinceOptions = ['Bengo', 'Benguela', 'Bié', 'Cabinda', 'Cuando', 'Cubango', 'Cuanza Norte', 'Cuanza Sul', 'Cunene', 'Huambo', 'Huíla', 'Icolo e Bengo', 'Luanda', 'Lunda Norte', 'Lunda Sul', 'Malanje', 'Moxico', 'Moxico Leste', 'Namibe', 'Uíge', 'Zaire']
export const employeeOptions = ['1–5', '6–10', '11–25', '26–50', '51–100', 'Mais de 100']
export const revenueOptions = [
  ['lt5', 'Menos de 5.000.000 Kz'], ['5-10', 'Entre 5.000.000 e 10.000.000 Kz'],
  ['10-25', 'Entre 10.000.001 e 25.000.000 Kz'], ['25-50', 'Entre 25.000.001 e 50.000.000 Kz'],
  ['50plus', 'Mais de 50.000.000 Kz'], ['later', 'Prefiro informar durante o contacto'],
] as const
export const marketingTeamOptions = ['Sim, temos uma equipa interna', 'Sim, temos um responsável', 'Trabalhamos com um fornecedor externo', 'Não temos', 'Outro']
export const challengeOptions = ['Falta de estratégia digital', 'Presença digital fraca ou desatualizada', 'Baixa geração de oportunidades comerciais', 'Posicionamento pouco claro', 'Comunicação inconsistente', 'Publicidade sem retorno satisfatório', 'Necessidade de reposicionamento da marca', 'Outro']
export const serviceOptions = ['Estratégia de marketing', 'Gestão de redes sociais', 'Produção de conteúdo', 'Branding ou reposicionamento', 'Website ou landing pages', 'Publicidade digital', 'Geração de leads', 'Consultoria estratégica', 'Ainda não sabemos; precisamos de orientação']
export const timelineOptions = [
  ['now', 'Imediatamente'], ['30days', 'Nos próximos 30 dias'], ['1-3months', 'Entre 1 e 3 meses'],
  ['3-6months', 'Entre 3 e 6 meses'], ['research', 'Apenas a pesquisar possibilidades'],
] as const
export const investmentOptions = [
  ['lt500', 'Menos de 500.000 Kz'], ['500-1m', 'Entre 500.000 e 1.000.000 Kz'],
  ['1-2.5m', 'Entre 1.000.001 e 2.500.000 Kz'], ['2.5-5m', 'Entre 2.500.001 e 5.000.000 Kz'],
  ['5mplus', 'Mais de 5.000.000 Kz'], ['undefined', 'Ainda não definimos um orçamento'],
] as const
export const authorityOptions = [
  ['final', 'Sou o decisor final'], ['direct', 'Participo diretamente na decisão'],
  ['present', 'Estou a recolher informações para apresentar à direção'], ['none', 'Não participo na decisão'],
] as const


'use client'

import { ArrowDownRight, ArrowRight, BarChart3, Check, Compass, Crosshair, Eye, MessageSquareText, Search, ShieldCheck, Target } from 'lucide-react'
import DiagnosticForm from './DiagnosticForm'
import styles from './diagnostico.module.css'

const problems = ['A empresa depende quase exclusivamente de indicações.', 'O website ou as redes sociais não representam a qualidade real do negócio.', 'A comunicação é irregular ou não possui uma estratégia clara.', 'Existe visibilidade, mas ela não se transforma em oportunidades comerciais.', 'A empresa investe em publicidade sem compreender o retorno.', 'Concorrentes menos preparados parecem mais relevantes no ambiente digital.']
const areas = [
  [Compass, 'Posicionamento digital', 'A forma como a empresa se apresenta e se diferencia no mercado.'],
  [MessageSquareText, 'Comunicação', 'A clareza, consistência e força da mensagem transmitida.'],
  [ShieldCheck, 'Presença e credibilidade', 'Os pontos de contacto digital e a confiança que eles geram.'],
  [Crosshair, 'Aquisição de oportunidades', 'Falhas que podem impedir a geração de contactos comerciais.'],
  [BarChart3, 'Prioridades estratégicas', 'Áreas com maior potencial de melhoria para o negócio.'],
] as const
const fit = ['Já possuem uma operação estabelecida.', 'Procuram crescer ou fortalecer a posição no mercado.', 'Reconhecem que a presença digital precisa evoluir.', 'Têm capacidade para investir numa solução profissional.', 'Possuem um decisor ou responsável envolvido no processo.', 'Faturam a partir de 5.000.000 Kz mensais ou têm estrutura equivalente.']
const steps = [['01', 'Preencha o formulário', 'Partilhe informações sobre a empresa e o desafio atual.'], ['02', 'Avaliação da candidatura', 'A equipa verifica o enquadramento, a necessidade e o potencial de colaboração.'], ['03', 'Contacto estratégico', 'Existindo alinhamento, aprofundamos o contexto e apresentamos os próximos passos.']]
const faqs = [
  ['O diagnóstico tem algum custo?', 'As condições do diagnóstico serão apresentadas após a análise inicial do pedido.'],
  ['Todas as empresas são contactadas?', 'Todos os pedidos são analisados. O contacto é realizado quando identificamos enquadramento entre a necessidade da empresa e as soluções da Mazanga.'],
  ['Quanto tempo demora a resposta?', 'O prazo de resposta é comunicado após a análise inicial, de acordo com o volume de pedidos em avaliação.'],
  ['Preciso já ter redes sociais ou website?', 'Não. O diagnóstico também é indicado para empresas que ainda não construíram uma presença digital estruturada.'],
  ['O que acontece depois do envio?', 'A equipa analisa as informações e, existindo alinhamento, entra em contacto para aprofundar o contexto e indicar os próximos passos.'],
]

function goToForm() { document.getElementById('formulario-diagnostico')?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }

export default function DiagnosticLanding() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.orbOne} /><div className={styles.orbTwo} />
        <div className={`shell-container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Diagnóstico estratégico para empresas em Angola</p>
            <h1>A sua empresa tem dimensão. <span>A presença digital acompanha esse nível?</span></h1>
            <p className={styles.lead}>A Mazanga analisa o posicionamento, a comunicação e a capacidade da sua presença digital para gerar oportunidades comerciais — e identifica os pontos que podem estar a limitar o crescimento da empresa.</p>
            <button className={styles.primaryButton} onClick={goToForm}>Solicitar diagnóstico estratégico <ArrowRight size={18} /></button>
            <p className={styles.microcopy}>Analisamos cada pedido antes de confirmar o diagnóstico.</p>
          </div>
          <div className={styles.diagnosticVisual} aria-hidden="true">
            <div className={styles.visualLabel}><Search size={15} /> Análise estratégica</div>
            <div className={styles.radar}><span>05</span><small>dimensões</small></div>
            <div className={styles.visualAxis}><span>Posicionamento</span><span>Comunicação</span><span>Credibilidade</span><span>Aquisição</span></div>
            <div className={styles.visualStatus}><i /> Diagnóstico orientado a decisões</div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="shell-container">
          <div className={styles.sectionIntro}><p className={styles.eyebrow}>O desfasamento digital</p><h2>Uma empresa sólida não deve parecer pequena no digital.</h2><p>Quando a presença digital não transmite a verdadeira dimensão da empresa, oportunidades podem ser perdidas antes mesmo do primeiro contacto.</p></div>
          <div className={styles.problemGrid}>{problems.map((problem, index) => <div className={styles.problem} key={problem}><span>0{index + 1}</span><p>{problem}</p></div>)}</div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.tintSection}`}>
        <div className="shell-container">
          <div className={styles.sectionIntro}><p className={styles.eyebrow}>Âmbito da análise</p><h2>O que avaliamos no diagnóstico</h2><p>Uma leitura objetiva dos elementos que sustentam a presença e a aquisição digital da empresa.</p></div>
          <div className={styles.areaGrid}>{areas.map(([Icon, title, text], index) => <article className={styles.areaCard} key={title}><div className={styles.iconBox}><Icon size={20} /></div><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
          <button className={styles.textButton} onClick={goToForm}>Quero diagnosticar a minha empresa <ArrowDownRight size={18} /></button>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`shell-container ${styles.fitGrid}`}>
          <div className={styles.fitCopy}><p className={styles.eyebrow}>Enquadramento</p><h2>Este diagnóstico foi criado para empresas que…</h2><p>Procuramos contextos em que estratégia, execução e capacidade de investimento possam produzir uma colaboração séria.</p></div>
          <div><ul className={styles.checkList}>{fit.map(item => <li key={item}><Check size={17} />{item}</li>)}</ul><div className={styles.exclusion}><Eye size={20} /><p>Este processo não é indicado para projetos ainda em fase de ideia, negócios sem operação ativa ou empresas que procuram apenas publicações pontuais e soluções de custo mínimo.</p></div></div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.processSection}`}>
        <div className="shell-container"><div className={styles.sectionIntro}><p className={styles.eyebrow}>Processo</p><h2>Como funciona</h2></div><div className={styles.steps}>{steps.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div>
      </section>

      <section id="formulario-diagnostico" className={`${styles.section} ${styles.formSection}`}>
        <div className={`shell-container ${styles.formLayout}`}>
          <div className={styles.formAside}><p className={styles.eyebrow}>Pedido de diagnóstico</p><h2>Solicite o diagnóstico da sua empresa</h2><p>Quanto mais preciso for nas respostas, melhor conseguiremos compreender o momento da empresa. O preenchimento demora aproximadamente 3 minutos.</p><div className={styles.asideNote}><Target size={22} /><p>O envio não representa aprovação automática. Cada pedido é analisado pela equipa.</p></div></div>
          <DiagnosticForm />
        </div>
      </section>

      <section className={styles.section}><div className={`shell-container ${styles.faqLayout}`}><div><p className={styles.eyebrow}>Perguntas frequentes</p><h2>Antes de começar</h2></div><div className={styles.faqs}>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>

      <section className={styles.finalCta}><div className="shell-container"><div className={styles.finalCtaInner}><p className={styles.eyebrow}>Próximo passo</p><h2>A presença digital da sua empresa deve refletir a dimensão do negócio.</h2><p>Solicite uma avaliação inicial e descubra quais áreas podem estar a limitar a visibilidade, a credibilidade e a geração de oportunidades.</p><button className={styles.primaryButton} onClick={goToForm}>Solicitar diagnóstico estratégico <ArrowRight size={18} /></button></div></div></section>
    </div>
  )
}


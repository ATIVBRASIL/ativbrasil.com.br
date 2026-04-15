import { ArrowRight, AlertCircle, Eye, AlertTriangle, TrendingUp, Scale, BarChart3, DollarSign, Target, Database, Lightbulb } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import Footer from "@/components/Footer";

/**
 * Design Philosophy: Premium B2B SaaS Landing Page - Light Mode Military Premium
 * - Seriedade, disciplina militar, percepção de valor premium
 * - Paleta: azul marinho profundo, cinza chumbo, ouro/bronze acentos
 * - Tipografia elegante: serif para títulos (autoridade), sans-serif para corpo
 * - Fundo branco/cinza claro (sofisticação)
 * - Bordas e linhas estruturadas: grid rigoroso, alinhamentos precisos
 * - Contraste alto: texto escuro em fundo claro, acentos metálicos
 */

const problems = [
  {
    id: 1,
    icon: Eye,
    title: "Você Não Tem Controle em Tempo Real",
    problem: "Sua operação roda com atraso de informação. Você decide com base em um cenário que já mudou.",
    consequences: "Postos ficam descobertos sem detecção imediata. Quando a falha aparece, já virou reclamação — ou prejuízo.",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-900/30",
    accentColor: "text-cyan-900"
  },
  {
    id: 2,
    icon: AlertTriangle,
    title: "Sua Operação Está Baseada em Comunicação Informal",
    problem: "Ordens são passadas por WhatsApp, ligação ou verbalmente. Nada fica registrado de forma estruturada.",
    consequences: "Informações se perdem, se distorcem ou nunca chegam completas. Quando algo dá errado, não existe histórico — só versões.",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-900/30",
    accentColor: "text-cyan-900"
  },
  {
    id: 3,
    icon: TrendingUp,
    title: "Sua Operação Não Consegue Escalar",
    problem: "Quanto mais a empresa cresce, mais complexa e desorganizada a gestão se torna. O modelo manual não acompanha a expansão.",
    consequences: "Gestores ficam presos à operação. Custos aumentam, o controle diminui — e o crescimento trava.",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-900/30",
    accentColor: "text-cyan-900"
  },
  {
    id: 4,
    icon: Scale,
    title: "Sua Operação Pode Estar Irregular Sem Você Saber",
    problem: "Sem controle estruturado, não há como garantir conformidade contínua. Documentação vence, processos falham — e ninguém percebe a tempo.",
    consequences: "Vigilantes irregulares em atividade geram risco imediato. O impacto vem em forma de multa, processo ou perda de contrato.",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-900/30",
    accentColor: "text-cyan-900"
  },
  {
    id: 5,
    icon: BarChart3,
    title: "Você Não Consegue Medir o Que Está Acontecendo",
    problem: "Sem dados estruturados, não há como avaliar a qualidade da operação. Tudo depende de percepção — não de evidência.",
    consequences: "Decisões são tomadas no 'achismo'. Problemas se repetem, padrões não são identificados e a qualidade oscila sem controle.",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-900/30",
    accentColor: "text-cyan-900"
  },
  {
    id: 6,
    icon: DollarSign,
    title: "Sua Operação Consome Mais Recurso do Que Deveria",
    problem: "A falta de controle e padronização gera desperdício operacional. Esforço excessivo, retrabalho e falhas se acumulam no dia a dia.",
    consequences: "Equipes trabalham mais para corrigir erros do que para executar bem. A operação perde eficiência — e o custo vem como consequência.",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-900/30",
    accentColor: "text-cyan-900"
  },
  {
    id: 7,
    icon: Target,
    title: "Você Adapta a Operação, Mas Sem Padronizar",
    problem: "Cada posto exige um modelo diferente — mas sem um padrão definido. A execução depende de interpretação, não de diretriz.",
    consequences: "A qualidade varia entre equipes. E a operação perde consistência e previsibilidade.",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-900/30",
    accentColor: "text-cyan-900"
  },
  {
    id: 8,
    icon: Database,
    title: "As Informações da Sua Operação Estão Espalhadas",
    problem: "Dados ficam em diferentes lugares: mensagens, anotações e controles isolados. Não existe um fluxo único e organizado de informação.",
    consequences: "Cada área enxerga apenas uma parte da operação. E ninguém tem uma visão completa para tomar decisão.",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-900/30",
    accentColor: "text-cyan-900"
  },
  {
    id: 9,
    icon: Lightbulb,
    title: "Seu Trabalho Bem Feito Não É Percebido",
    problem: "Quando tudo funciona, ninguém vê. Sem registro e evidência, o valor da operação passa despercebido.",
    consequences: "O cliente só percebe quando algo dá errado. E isso enfraquece a percepção de qualidade e valor do serviço.",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-900/30",
    accentColor: "text-cyan-900"
  }
];

const typewriterTexts = [
  "Falha invisível",
  "Operação no escuro",
  "Contrato em risco",
  "Erro sem prova",
  "Dinheiro vazando",
  "Equipe fora do radar",
  "Controle total"
];

const features = [
  {
    id: "feature1",
    group: "EFETIVO",
    title: "CONTROLE OPERACIONAL DO EFETIVO",
    headline: "Decida com Clareza Antes de Escalar",
    description: "Função, equipe, disponibilidade, conformidade e presença de cada operador em um único lugar. Você enxerga quem está apto, quem está irregular e quem está indisponível antes de bater o martelo. A escala deixa de ser improviso de última hora e passa a ser decisão com critério, respaldo e responsável.",
    image: "https://raw.githubusercontent.com/ATIVBRASIL/arquivos-media/refs/heads/main/ativefetivo1.png",
    alt: "Painel de controle operacional do efetivo com lista de operadores, função, equipe, status de férias, afastamento, treinamento e ações de liberação e escala"
  },
  {
    id: "feature2",
    group: "EFETIVO",
    title: "CONTROLE DE DOCUMENTAÇÃO",
    headline: "Saiba Quem Está Regular Antes do Problema Aparecer",
    description: "CNV, reciclagem, ASO, psicotécnico, criminal — tudo centralizado, com validade visível e alertas de vencimento. A Lei 14.967 exige aptidão e formação em dia. Aqui você antecipa o vencimento, evita escalar irregular e mantém a operação dentro do que a Polícia Federal cobra.",
    image: "https://raw.githubusercontent.com/ATIVBRASIL/arquivos-media/refs/heads/main/controledocumentos.png",
    alt: "Tela de prontuário do operador com aba Documentos exibindo CNH, reciclagem, CNV, criminal, psicotécnico e ASO com status de validade e alertas de vencimento"
  },
  {
    id: "feature3",
    group: "EFETIVO",
    title: "CONTROLE DE TREINAMENTOS",
    headline: "Cada Posto com o Profissional Certificado",
    description: "O sistema conecta exigências do posto, efetivo alocado e status de treinamento em uma única visão. Você sabe exatamente quem está apto e quem precisa de regularização. A conformidade que a ISO 18788 cobra deixa de ser papel guardado em pasta e vira controle visível, acionável e auditável.",
    image: "https://raw.githubusercontent.com/ATIVBRASIL/arquivos-media/refs/heads/main/treinamentos.png",
    alt: "Painel do posto com cobertura de treinamentos obrigatórios em 100%, lista de profissionais alocados e levantamento de necessidades de treinamento (LNT)"
  },
  {
    id: "feature4",
    group: "EFETIVO",
    title: "PERFIL OPERACIONAL DO POSTO",
    headline: "Pare de Escalar no Improviso",
    description: "Cada posto exige um perfil. Cada operador tem o seu. Quando os dois não conversam, o risco aparece — e a culpa cai em quem escalou no chute. Nosso Motor de Decisão sugere o perfil ideal do posto, você valida em um clique e salva o critério oficial. Decisão com clareza, escala com critério.",
    image: "https://raw.githubusercontent.com/ATIVBRASIL/arquivos-media/refs/heads/main/perfil_posto.png",
    alt: "Tela do Motor de Decisão sugerindo o perfil operacional ideal do posto, com perfil predominante, complementar e de menor aderência, e ajustes por blocos de exigência"
  },
  {
    id: "feature5",
    group: "POSTO E EXECUÇÃO",
    title: "SEGURANÇA NA PORTARIA",
    headline: "Sem Controle de Acesso, Não Existe Segurança",
    description: "Sem registro estruturado, você perde a visibilidade de quem entrou, quem saiu e quem está dentro do local agora. O sistema transforma a portaria em ponto de controle real — entradas, bloqueios, encomendas e permanentes em um só painel. Agilidade no fluxo, sem abrir mão da segurança.",
    image: "https://raw.githubusercontent.com/ATIVBRASIL/arquivos-media/refs/heads/main/controleacesso.png",
    alt: "Painel tático da portaria com abas Hoje, Bloqueados, Permanentes, Encomendas e Unidades, exibindo entradas, dentro agora e encomendas pendentes"
  },
  {
    id: "feature6",
    group: "POSTO E EXECUÇÃO",
    title: "INTELIGÊNCIA DE PATRULHAMENTO",
    headline: "Patrulhamento Vira Operação Planejada e Auditável",
    description: "Geolocalização, mapeamento de pontos críticos, rotas definidas e janelas de tempo para cada etapa. Tudo estruturado para garantir cobertura, previsibilidade e prova. Quem fez, quando fez, por onde passou — registrado. Mais organização na execução, mais respaldo na prestação de contas ao cliente.",
    image: "https://raw.githubusercontent.com/ATIVBRASIL/arquivos-media/refs/heads/main/Geolocalizacao.png",
    alt: "Mapa de geolocalização do condomínio com pontos de patrulhamento marcados ao longo do perímetro e rotas definidas"
  },
  {
    id: "feature7",
    group: "POSTO E EXECUÇÃO",
    title: "EXECUÇÃO DE RONDA",
    headline: "Ronda com Controle. Não com Confiança Cega",
    description: "O operador segue a ordem definida, com horários e janelas claras para cada ponto. Quando algo não é realizado, o sistema exige justificativa — não aceita silêncio. Cada passagem vira registro. Cada ausência vira evidência. Rastreabilidade real, do briefing à conferência final.",
    image: "https://raw.githubusercontent.com/ATIVBRASIL/arquivos-media/refs/heads/main/cppronda1.png",
    alt: "Tela mobile do app ATIV exibindo a ordem da ronda com ponto da Portaria às 06:10, janela de 60 minutos, status não realizado e botão Justificar"
  },
  {
    id: "feature8",
    group: "POSTO E EXECUÇÃO",
    title: "DEFESA OPERACIONAL",
    headline: "Um Relato Mal Escrito Pode Custar Caro",
    description: "A Escrita Tática elimina a subjetividade e padroniza automaticamente como cada ocorrência é registrada — verbalização, controle de contato, técnicas não letais e força letal. Você não depende mais da forma como o operador escreve. O sistema garante o padrão que sustenta sua defesa em juízo, na PF e diante do cliente.",
    image: "https://raw.githubusercontent.com/ATIVBRASIL/arquivos-media/refs/heads/main/reescrita.png",
    alt: "Tela mobile com escala de uso da força padronizada: verbalização, controle de contato, técnicas não letais e força letal, cada nível com descrição padronizada"
  },
  {
    id: "feature9",
    group: "VISÃO, QUALIDADE E RISCO",
    title: "VISÃO DA OPERAÇÃO EM TEMPO REAL",
    headline: "Toda a Rede de Postos em um Único Painel",
    description: "Status, atividade e ocorrências de cada local em uma única tela. Você identifica em segundos onde tem movimento, onde tem alerta e onde precisa de atenção imediata. Menos tempo procurando informação. Mais controle sobre a operação inteira — do menor posto ao contrato mais crítico.",
    image: "https://raw.githubusercontent.com/ATIVBRASIL/arquivos-media/refs/heads/main/centralpostos.png",
    alt: "Painel tático da rede de postos com cards de cada local exibindo status ativo, identificação e botão de gerenciar"
  },
  {
    id: "feature10",
    group: "VISÃO, QUALIDADE E RISCO",
    title: "CONTROLE DE QUALIDADE OPERACIONAL",
    headline: "Saiba Onde Está o Problema Antes do Cliente",
    description: "Inspeções padronizadas, KPIs por posto, ranking do efetivo e tendências em tempo real. Você acompanha quedas de performance, identifica pontos críticos e age antes da reclamação chegar. Menos achismo, mais dado. Menos surpresa, mais decisão. Qualidade deixa de ser percepção e vira indicador.",
    image: "https://raw.githubusercontent.com/ATIVBRASIL/arquivos-media/refs/heads/main/InspecaoPostos.png",
    alt: "Painel tático de inspeções operacionais com KPIs do período, performance dos postos com score médio e ranking do efetivo por função"
  },
  {
    id: "feature11",
    group: "VISÃO, QUALIDADE E RISCO",
    title: "GESTÃO DE RISCO COM MÉTODO",
    headline: "Risco Não Se Adivinha. Se Calcula.",
    description: "A Lei 14.967 exige análise de risco no projeto de segurança. A ISO 18788 exige avaliação por posto, com causa-raiz documentada. O mercado ainda resolve isso com planilha solta e foto de WhatsApp. Aqui você classifica, mede Probabilidade × Impacto, recebe o score na hora e salva o registro auditado. Risco vira decisão. Decisão vira histórico.",
    image: "https://raw.githubusercontent.com/ATIVBRASIL/arquivos-media/refs/heads/main/risco.png",
    alt: "Tela de cadastro de novo risco operacional com categoria ISO 18788, descrição do evento, causa-raiz, sliders de probabilidade e impacto, score calculado e classificação automática do nível de risco"
  },
  {
    id: "feature12",
    group: "REGISTRO, BENS, MANUTENÇÃO E FACILITIES",
    title: "LIVRO ATA DIGITAL",
    headline: "O Papel Não Sustenta Sua Operação",
    description: "Anotação em caderno se perde, fica ilegível e é difícil de comprovar quando o problema chega. O sistema transforma o livro de bordo em registro digital padronizado, com tipo, autor, horário e responsável pela passagem de turno. Nada fica solto. Tudo fica documentado, acessível e auditável.",
    image: "https://raw.githubusercontent.com/ATIVBRASIL/arquivos-media/refs/heads/main/livroata.png",
    alt: "Tela mobile do diário de bordo digital com formulário de novo registro: tipo Abertura de Turno, título e campo de recebido de"
  },
  {
    id: "feature13",
    group: "REGISTRO, BENS, MANUTENÇÃO E FACILITIES",
    title: "CONTROLE DE BENS",
    headline: "Equipamento Sem Controle É Prejuízo na Certa",
    description: "Sem rastreamento, equipamento some, falha ou fica fora de uso sem ninguém perceber. O sistema conecta cada bem a um posto, status e histórico — com QR Code, ficha completa e inventário lido no celular. Nada fica solto. Nada fica invisível. Você sabe exatamente o que está ativo, parado ou em risco.",
    image: "https://raw.githubusercontent.com/ATIVBRASIL/arquivos-media/refs/heads/main/patrimonio.png",
    alt: "Painel de patrimônio com totais de bens, ativos, em manutenção e aguardando validação, lista de bens com código, nome, categoria, posto e status"
  },
  {
    id: "feature14",
    group: "REGISTRO, BENS, MANUTENÇÃO E FACILITIES",
    title: "GESTÃO DE MANUTENÇÃO",
    headline: "Organize, Acompanhe e Ajuste o Que Precisa Ser Feito",
    description: "Tarefas de manutenção centralizadas por posto e por dia, com status claro do que está pendente, em andamento ou concluído. Tudo estruturado para evitar esquecimento e retrabalho. O planejamento deixa de ser informal — e passa a ser controlado, executado e cobrado no mesmo lugar.",
    image: "https://raw.githubusercontent.com/ATIVBRASIL/arquivos-media/refs/heads/main/manutencao1.png",
    alt: "Tela de manutenção (gestor) com indicadores de tarefas, lista de tarefas com status atual, botões de editar e cancelar tarefa, e botão adicionar tarefa"
  },
  {
    id: "feature15",
    group: "REGISTRO, BENS, MANUTENÇÃO E FACILITIES",
    title: "GESTÃO DE LIMPEZA E FACILITIES",
    headline: "A Reclamação Não Pode Chegar Antes da Informação",
    description: "Em facilities, o cliente reclama porque viu — e o gestor descobre depois. Aqui cada ambiente tem responsável, dia, POP e checklist próprio. Nada passa batido, nada depende da memória do operador, nada some na rotatividade. A avaliação de qualidade ou irregularidade vira tema de briefing ou treinamento. Controle real do que está sendo feito, onde, por quem e em que padrão.",
    image: "https://raw.githubusercontent.com/ATIVBRASIL/arquivos-media/refs/heads/main/limpeza.png",
    alt: "Painel de gestão de limpeza com lista de ambientes (Guarita, Base, Sala de Comando, Salão, Academia, Área Piscina), responsáveis, dias da semana, status de execução e modal de POP e Checklist por ambiente"
  }
];

export default function Home() {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = typewriterTexts[textIndex];
    const speed = isDeleting ? 50 : 100;
    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % typewriterTexts.length);
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  useEffect(() => {
    const handleScroll = () => {
      const revealItems = document.querySelectorAll(".reveal-item");
      revealItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          item.classList.add("active");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section - Light Mode Military Premium */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900/10 border border-blue-900/30 rounded-full">
              <div className="w-2 h-2 rounded-full bg-blue-900"></div>
              <span className="text-sm font-semibold text-blue-900">Seus olhos em tudo</span>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-center text-slate-900 mb-6 font-serif">
            Sistema Operacional da Segurança Privada e Facilities
          </h1>

          <p className="text-xl text-center text-slate-600 max-w-3xl mx-auto mb-12">
            Se sua operação falha, você perde contrato. Aqui você vê tudo, prova tudo e não é pego de surpresa.
          </p>

          <div className="flex justify-center mb-12">
            <img 
              src="https://raw.githubusercontent.com/ATIVBRASIL/arquivos-media/refs/heads/main/ATIV2.png" 
              alt="Sistema Operacional" 
              className="max-w-2xl w-full rounded-lg shadow-lg border border-slate-200"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppCta
              messagePreset="demo"
              size="lg"
              className="bg-blue-900 hover:bg-blue-950 text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Começar Agora
              <ArrowRight className="ml-2 w-5 h-5" />
            </WhatsAppCta>
          </div>
        </div>
      </section>

      {/* Problems Section - Light Mode */}
      <section id="section-riscos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-slate-900 mb-16 font-serif">
            9 falhas ocultas que podem custar seu próximo contrato
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem) => {
              const IconComponent = problem.icon;
              return (
                <div 
                  key={problem.id}
                  className={`${problem.bgColor} border-2 ${problem.borderColor} rounded-xl p-8 hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`${problem.accentColor} flex-shrink-0`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className={`text-lg font-bold ${problem.accentColor}`}>
                      {problem.id}
                    </h3>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">
                    {problem.title}
                  </h4>
                  <p className="text-slate-700 font-semibold mb-3">
                    {problem.problem}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {problem.consequences}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Typewriter Section - Light Mode */}
      <section id="section-storytelling" className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 font-serif">
            O SISTEMA QUE ORGANIZA O CAOS DA SUA OPERAÇÃO
          </h3>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 font-serif">
            {displayText}
            <span className="animate-pulse">|</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Tudo em um lugar. Sem ruído, sem retrabalho, sem surpresa.
          </p>
        </div>
      </section>

      {/* Features Section - Light Mode with Path Line */}
      <section
        id="section-galeria"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-900/5 border-t border-slate-200 relative"
        data-features-section
      >
        <div className="max-w-6xl mx-auto relative">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-slate-900 mb-20 font-serif">
            O novo padrão da segurança privada no Brasil.
            <br />
            <span className="block font-normal italic text-[1.8rem] sm:text-[2.4rem]">
              Alinhado à Lei 14.967 e à ISO 18788.
            </span>
          </h2>

          {/* Path Line SVG */}
          <div className="hidden lg:block absolute left-1/2 top-32 bottom-0 w-1 transform -translate-x-1/2 pointer-events-none">
            <svg 
              className="w-full h-full" 
              viewBox="0 0 2 1000" 
              preserveAspectRatio="none"
              style={{ overflow: 'visible' }}
            >
              {/* Background line */}
              <line x1="1" y1="0" x2="1" y2="1000" stroke="#e2e8f0" strokeWidth="2" />
              {/* Progress line */}
              <line 
                id="progressLine"
                x1="1" 
                y1="0" 
                x2="1" 
                y2="0" 
                stroke="#1e3a8a" 
                strokeWidth="3"
              />
            </svg>
          </div>

          <div className="space-y-24 relative">
            {features.map((feature, index) => {
              const groupChanged = index === 0 || features[index - 1].group !== feature.group;
              const isInverted = index % 2 === 1;

              return (
                <div key={feature.id}>
                  {groupChanged ? (
                    <div className="mb-8">
                      <span className="inline-flex px-3 py-1 text-xs sm:text-sm font-semibold tracking-wide text-blue-900 bg-blue-900/10 border border-blue-900/20 rounded-full">
                        {feature.group}
                      </span>
                    </div>
                  ) : null}

                  <div
                    className={`reveal-item flex flex-col ${isInverted ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center relative`}
                  >
                    {/* Connector Junction */}
                    <div
                      className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-blue-900 rounded-full z-10"
                      style={{ top: "-12px" }}
                    />

                    <div className="flex-1">
                      <div className="inline-block px-4 py-2 bg-blue-900/10 border border-blue-900/30 rounded-full mb-6">
                        <span className="text-sm font-bold text-blue-900">⚡ {feature.title}</span>
                      </div>
                      <h3 className="text-3xl font-bold text-slate-900 mb-4 font-serif">
                        {feature.headline}
                      </h3>
                      <p className="text-lg text-slate-700 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    <div className="flex-1">
                      <img
                        src={feature.image}
                        alt={feature.alt || feature.title}
                        loading="lazy"
                        className="w-full rounded-lg border-2 border-slate-200 shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <script>
        {`
          function updatePathLine() {
            const section = document.querySelector('[data-features-section]');
            if (!section) return;
            
            const rect = section.getBoundingClientRect();
            const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
            const progressLine = document.getElementById('progressLine');
            
            if (progressLine) {
              progressLine.setAttribute('y2', scrollProgress * 1000);
            }
          }
          
          window.addEventListener('scroll', updatePathLine);
          updatePathLine();
        `}
      </script>

      {/* Como Funciona Section - Light Mode */}
      <section id="section-hierarquia" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-slate-900 mb-16 font-serif">
            Como funciona
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="rounded-xl p-8 hover:shadow-lg transition-all duration-300" style={{backgroundColor: '#ecfeff', borderWidth: '2px', borderColor: '#a7f3d0', borderStyle: 'solid'}} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#10b981'} onMouseLeave={(e) => e.currentTarget.style.borderColor = '#a7f3d0'}>
              <div className="flex flex-col items-center justify-center mb-6">
                <div className="text-5xl mb-4">💻</div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-emerald-600 text-emerald-600 font-bold text-lg">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">Você não configura. Nós implantamos</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Treinamos multiplicadores, administrativos e operacionais enquanto estruturamos toda a base da empresa. O sistema já entra em funcionamento — com efetivo, postos e operação integrados.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-xl p-8 hover:shadow-lg transition-all duration-300" style={{backgroundColor: '#ecfeff', borderWidth: '2px', borderColor: '#a7f3d0', borderStyle: 'solid'}} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#10b981'} onMouseLeave={(e) => e.currentTarget.style.borderColor = '#a7f3d0'}>
              <div className="flex flex-col items-center justify-center mb-6">
                <div className="text-5xl mb-4">📱</div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-emerald-600 text-emerald-600 font-bold text-lg">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">Cada perfil acessa o que precisa</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Definimos níveis de acesso conforme a função — comando, supervisão, operação ou cliente. Nada exposto além do necessário — controle total sobre quem vê e quem faz.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-xl p-8 hover:shadow-lg transition-all duration-300" style={{backgroundColor: '#ecfeff', borderWidth: '2px', borderColor: '#a7f3d0', borderStyle: 'solid'}} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#10b981'} onMouseLeave={(e) => e.currentTarget.style.borderColor = '#a7f3d0'}>
              <div className="flex flex-col items-center justify-center mb-6">
                <div className="text-5xl mb-4">📡</div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-emerald-600 text-emerald-600 font-bold text-lg">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">A operação passa a ser registrada</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Ocorrências, rondas, checklists, presença e rotinas são lançadas diretamente no sistema. Sai o informal — entra o registro estruturado da operação.
              </p>
            </div>

            {/* Card 4 */}
            <div className="rounded-xl p-8 hover:shadow-lg transition-all duration-300" style={{backgroundColor: '#ecfeff', borderWidth: '2px', borderColor: '#a7f3d0', borderStyle: 'solid'}} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#10b981'} onMouseLeave={(e) => e.currentTarget.style.borderColor = '#a7f3d0'}>
              <div className="flex flex-col items-center justify-center mb-6">
                <div className="text-5xl mb-4">📋</div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-emerald-600 text-emerald-600 font-bold text-lg">
                  4
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">A escrita é padronizada automaticamente</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                O sistema inteligente organiza os relatos e transforma registros em documentos claros, técnicos e consistentes. O operador escreve como sabe — o sistema entrega como precisa.
              </p>
            </div>

            {/* Card 5 */}
            <div className="rounded-xl p-8 hover:shadow-lg transition-all duration-300" style={{backgroundColor: '#ecfeff', borderWidth: '2px', borderColor: '#a7f3d0', borderStyle: 'solid'}} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#10b981'} onMouseLeave={(e) => e.currentTarget.style.borderColor = '#a7f3d0'}>
              <div className="flex flex-col items-center justify-center mb-6">
                <div className="text-5xl mb-4">☁️</div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-emerald-600 text-emerald-600 font-bold text-lg">
                  5
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">Tudo vira dado em tempo real</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                As informações alimentam indicadores, dashboards e análises da operação. Você deixa de "achar" — e passa a decidir com base em dados.
              </p>
            </div>

            {/* Card 6 */}
            <div className="rounded-xl p-8 hover:shadow-lg transition-all duration-300" style={{backgroundColor: '#ecfeff', borderWidth: '2px', borderColor: '#a7f3d0', borderStyle: 'solid'}} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#10b981'} onMouseLeave={(e) => e.currentTarget.style.borderColor = '#a7f3d0'}>
              <div className="flex flex-col items-center justify-center mb-6">
                <div className="text-5xl mb-4">📊</div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-emerald-600 text-emerald-600 font-bold text-lg">
                  6
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">A operação se torna auditável e evolutiva</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Com tudo registrado, é possível corrigir falhas, comprovar execução e melhorar continuamente. A operação deixa de reagir — e passa a evoluir com controle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-serif text-center">
            Como sua operação funciona hoje vs como poderia funcionar
          </h2>
          <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mt-4">
            O jeito caro de operar versus o jeito de ter controle, prova e escala sem perder contrato.
          </p>

          <div className="overflow-x-auto mt-12">
            <table className="w-full border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="border border-slate-300 px-4 py-4 text-left font-semibold">Aspecto</th>
                  <th className="border border-slate-300 px-4 py-4 text-center font-semibold">Gestão Manual</th>
                  <th className="border border-slate-300 px-4 py-4 text-center font-semibold">Múltiplos Apps</th>
                  <th className="border border-slate-300 px-4 py-4 text-center font-semibold bg-blue-900">Sistema ATIV</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="border border-slate-300 px-4 py-4 font-semibold text-slate-900">Visibilidade em Tempo Real</td>
                  <td className="border border-slate-300 px-4 py-4 text-center text-slate-700">Você decide com informação velha</td>
                  <td className="border border-slate-300 px-4 py-4 text-center text-slate-700">Você vê partes, não o todo</td>
                  <td className="border border-slate-300 px-4 py-4 text-center text-slate-900 bg-blue-50 font-medium">Você vê tudo em tempo real</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="border border-slate-300 px-4 py-4 font-semibold text-slate-900">Conformidade & Compliance</td>
                  <td className="border border-slate-300 px-4 py-4 text-center text-slate-700">Depende de gente lembrar</td>
                  <td className="border border-slate-300 px-4 py-4 text-center text-slate-700">Regras soltas em vários lugares</td>
                  <td className="border border-slate-300 px-4 py-4 text-center text-slate-900 bg-blue-50 font-medium">Conformidade sem esforço</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="border border-slate-300 px-4 py-4 font-semibold text-slate-900">Padronização Operacional</td>
                  <td className="border border-slate-300 px-4 py-4 text-center text-slate-700">Cada operador inventa um padrão</td>
                  <td className="border border-slate-300 px-4 py-4 text-center text-slate-700">Cada app puxa para um lado</td>
                  <td className="border border-slate-300 px-4 py-4 text-center text-slate-900 bg-blue-50 font-medium">Um padrão único para toda a operação</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="border border-slate-300 px-4 py-4 font-semibold text-slate-900">Exposição a Falhas Operacionais</td>
                  <td className="border border-slate-300 px-4 py-4 text-center text-slate-700">Erro constante. Retrabalho diário.</td>
                  <td className="border border-slate-300 px-4 py-4 text-center text-slate-700">Falha nasce na troca entre sistemas</td>
                  <td className="border border-slate-300 px-4 py-4 text-center text-slate-900 bg-blue-50 font-medium">Processos monitorados e sob controle</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="border border-slate-300 px-4 py-4 font-semibold text-slate-900">Escalabilidade</td>
                  <td className="border border-slate-300 px-4 py-4 text-center text-slate-700">Crescer = perder controle</td>
                  <td className="border border-slate-300 px-4 py-4 text-center text-slate-700">Crescer = mais complexidade</td>
                  <td className="border border-slate-300 px-4 py-4 text-center text-slate-900 bg-blue-50 font-medium">Escala sem perder controle</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="border border-slate-300 px-4 py-4 font-semibold text-slate-900">Relatórios & Inteligência</td>
                  <td className="border border-slate-300 px-4 py-4 text-center text-slate-700">Relatório manual e atrasado</td>
                  <td className="border border-slate-300 px-4 py-4 text-center text-slate-700">Dados espalhados e sem contexto</td>
                  <td className="border border-slate-300 px-4 py-4 text-center text-slate-900 bg-blue-50 font-medium">Dados consolidados para decidir</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="border border-slate-300 px-4 py-4 font-semibold text-slate-900">Renovação de Contratos</td>
                  <td className="border border-slate-300 px-4 py-4 text-center text-slate-700">Cliente sente a falha antes de você</td>
                  <td className="border border-slate-300 px-4 py-4 text-center text-slate-700">Entrega inconsistente gera desgaste</td>
                  <td className="border border-slate-300 px-4 py-4 text-center text-slate-900 bg-blue-50 font-medium">Cliente vê padrão, controle e confiança</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="border border-slate-300 px-4 py-4 font-semibold text-slate-900">Rastreabilidade Completa</td>
                  <td className="border border-slate-300 px-4 py-4 text-center text-slate-700">Você não consegue provar nada</td>
                  <td className="border border-slate-300 px-4 py-4 text-center text-slate-700">Parte da prova fica perdida</td>
                  <td className="border border-slate-300 px-4 py-4 text-center text-slate-900 bg-blue-50 font-medium">100% rastreável e auditável</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="border border-slate-300 px-4 py-4 font-semibold text-slate-900">Suporte & Evolução</td>
                  <td className="border border-slate-300 px-4 py-4 text-center text-slate-700">Sem estrutura para evoluir</td>
                  <td className="border border-slate-300 px-4 py-4 text-center text-slate-700">Cada fornecedor empurra o problema</td>
                  <td className="border border-slate-300 px-4 py-4 text-center text-slate-900 bg-blue-50 font-medium">Um sistema só. Evolução contínua.</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors bg-slate-100">
                  <td className="border border-slate-300 px-4 py-4 font-bold text-slate-900">Capacidade de Comprovação</td>
                  <td className="border border-slate-300 px-4 py-4 text-center text-slate-700">Quando dá problema, vira desculpa</td>
                  <td className="border border-slate-300 px-4 py-4 text-center text-slate-700">Prova fraca e contexto quebrado</td>
                  <td className="border border-slate-300 px-4 py-4 text-center text-slate-900 bg-blue-50 font-bold">Prova forte, pronta para auditoria e defesa</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-12 p-8 bg-blue-50 border-l-4 border-blue-900 rounded-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">O que muda quando você usa o ATIV</h3>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="text-xl mt-0.5 shrink-0" aria-hidden>⚡</span>
                <div>
                  <strong className="block text-slate-900">Você para de operar no escuro.</strong>
                  <span className="block mt-1">Veja tudo acontecendo em tempo real, sem depender de ninguém te contar.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl mt-0.5 shrink-0" aria-hidden>⚡</span>
                <div>
                  <strong className="block text-slate-900">Você evita problema antes de virar crise.</strong>
                  <span className="block mt-1">Identifique falhas operacionais e comportamentais antes que virem prejuízo.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl mt-0.5 shrink-0" aria-hidden>⚡</span>
                <div>
                  <strong className="block text-slate-900">Você tem prova — não desculpa.</strong>
                  <span className="block mt-1">Tudo registrado, estruturado e pronto pra auditoria ou defesa.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl mt-0.5 shrink-0" aria-hidden>⚡</span>
                <div>
                  <strong className="block text-slate-900">Você assume o controle de ponta a ponta.</strong>
                  <span className="block mt-1">Do campo ao comando, tudo integrado em um único sistema.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section - Light Mode Military Premium */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/5 to-slate-900/5 border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 font-serif">
            Quantos contratos você ainda vai perder antes de resolver isso?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Veja em minutos onde sua operação está falhando — e como resolver.
          </p>
          <WhatsAppCta
            messagePreset="demo"
            size="lg"
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Quero ver minha operação agora
            <ArrowRight className="ml-2 w-5 h-5" />
          </WhatsAppCta>
        </div>
      </section>
    </div>
    <div className="bg-[#050505]">
      <Footer />
    </div>
    </>
  );
}

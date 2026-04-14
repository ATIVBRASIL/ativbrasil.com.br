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
    id: "feature6",
    icon: "👤",
    title: "CONTROLE OPERACIONAL DO EFETIVO",
    description: "Você Decide com Clareza Antes de Escalar\n\nTenha uma visão completa de cada operador em um único lugar: função, equipe, disponibilidade, conformidade e presença.\n\nEvite escalar quem está irregular ou indisponível. A decisão deixa de ser no improviso — e passa a ser baseada em controle.",
    image: "https://raw.githubusercontent.com/ATIVBRASIL/arquivos-media/refs/heads/main/ativefetivo1.png",
    inverted: false
  },
  {
    id: "feature7",
    icon: "👤",
    title: "CONTROLE DE DOCUMENTAÇÃO",
    description: "Você Sabe Quem Está Regular — Antes do Problema Acontecer\n\nVisualize, em segundos, o status de todos os documentos do operador.\nValidade, alertas de vencimento e histórico centralizados em um único lugar.\n\nEvite colocar profissionais irregulares em atividade.\nAntecipe riscos e mantenha a operação sempre em conformidade.",
    image: "https://raw.githubusercontent.com/ATIVBRASIL/arquivos-media/refs/heads/main/controledocumentos.png",
    inverted: true
  },
  {
    id: "feature8",
    icon: "👤",
    title: "VISÃO DA OPERAÇÃO EM TEMPO REAL",
    description: "Tenha Controle Total Sobre Todos os Seus Postos\n\nVisualize toda a rede em um único painel, com status, atividade e ocorrências por local.\nIdentifique rapidamente onde há movimento e onde precisa de atenção.\n\nMenos tempo procurando.\nMais controle sobre a operação como um todo.",
    image: "https://raw.githubusercontent.com/ATIVBRASIL/arquivos-media/refs/heads/main/centralpostos.png",
    inverted: false
  },
  {
    id: "feature9",
    icon: "👤",
    title: "CONTROLE DE QUALIDADE OPERACIONAL",
    description: "Você Sabe Onde Está o Problema — Antes do Cliente\n\nAcompanhe, em tempo real, o desempenho dos postos e do efetivo com base em inspeções padronizadas.\nIdentifique quedas, pontos críticos e tendências antes que virem reclamação.\n\nMenos achismo.\nMais controle sobre a qualidade da operação.",
    image: "https://raw.githubusercontent.com/ATIVBRASIL/arquivos-media/refs/heads/main/InspecaoPostos.png",
    inverted: true
  },
  {
    id: "feature10",
    icon: "👤",
    title: "INTELIGÊNCIA DE PATRULHAMENTO",
    description: "Geolocalização - Transforme Patrulhamento em Operação Planejada e Auditável\n\nMapeie pontos críticos, defina rotas e estabeleça janelas de tempo para cada etapa da patrulha.\nTudo estruturado para garantir cobertura, previsibilidade e controle.\n\nMais organização na execução.\nMais capacidade de auditoria e prestação de contas.",
    image: "https://raw.githubusercontent.com/ATIVBRASIL/arquivos-media/refs/heads/main/Geolocalizacao.png",
    inverted: false
  },
  {
    id: "feature11",
    icon: "👤",
    title: "EXECUÇÃO DE RONDA",
    description: "A Ronda Acontece com Controle e Responsabilidade\n\nO operador segue a ordem definida, com horários e janelas claras para cada ponto.\nTudo orientado para garantir execução conforme o plano.\n\nQuando algo não é realizado, o sistema exige justificativa —\ncriando registro, rastreabilidade e controle real da operação.",
    image: "https://raw.githubusercontent.com/ATIVBRASIL/arquivos-media/refs/heads/main/cppronda1.png",
    inverted: true
  },
  {
    id: "feature12",
    icon: "👤",
    title: "DEFESA OPERACIONAL",
    description: "Um Relato Mal Escrito Pode Custar Caro\n\nA Escrita Tática elimina subjetividade e corrige automaticamente a forma como a ocorrência é registrada.\n\nVocê não depende da forma como o operador escreve —\no sistema garante um padrão que sustenta sua defesa.",
    image: "https://raw.githubusercontent.com/ATIVBRASIL/arquivos-media/refs/heads/main/reescrita.png",
    inverted: false
  },
  {
    id: "feature13",
    icon: "👤",
    title: "CONTROLE DE BENS",
    description: "Equipamento Sem Controle É Prejuízo na Certa\n\nSem rastreamento, equipamentos somem, falham ou ficam fora de uso sem ninguém perceber.\nO sistema conecta cada bem a um local e status operacional.\n\nNada fica solto. Nada fica invisível.\nVocê sabe exatamente o que está ativo, parado ou em risco.",
    image: "https://raw.githubusercontent.com/ATIVBRASIL/arquivos-media/refs/heads/main/patrimonio.png",
    inverted: true
  },
  {
    id: "feature14",
    icon: "👤",
    title: "CONTROLE DE TREINAMENTOS",
    description: "Garanta Que Cada Posto Tenha o Profissional Certificado\n\nO sistema conecta exigências do posto, efetivo alocado e status de treinamento em uma única visão.\nVocê sabe exatamente quem está apto e quem precisa de regularização.\n\nA conformidade deixa de ser \"no papel\" —\ne passa a ser visível, controlada e acionável.",
    image: "https://raw.githubusercontent.com/ATIVBRASIL/arquivos-media/refs/heads/main/treinamentos.png",
    inverted: false
  },
  {
    id: "feature15",
    icon: "👤",
    title: "SEGURANÇA NA PORTARIA",
    description: "Sem Controle de Acesso, Não Existe Segurança\n\nSem registro estruturado, você perde visibilidade de quem entrou e quem está dentro do local.\nO sistema transforma a portaria em um ponto de controle real.\n\nVocê reduz risco, evita falhas —\ne garante agilidade sem abrir mão da segurança.",
    image: "https://raw.githubusercontent.com/ATIVBRASIL/arquivos-media/refs/heads/main/controleacesso.png",
    inverted: true
  },
  {
    id: "feature16",
    icon: "👤",
    title: "GESTÃO DE MANUTENÇÃO",
    description: "Organize, Acompanhe e Ajuste o Que Precisa Ser Feito\n\nCentralize as tarefas de manutenção por posto e por dia, com status claro do que está pendente, em andamento ou concluído.\nTudo estruturado para evitar esquecimento e retrabalho.\n\nO planejamento deixa de ser informal —\ne passa a ser controlado e executado no mesmo lugar.",
    image: "https://raw.githubusercontent.com/ATIVBRASIL/arquivos-media/refs/heads/main/manutencao1.png",
    inverted: false
  },
  {
    id: "feature17",
    icon: "👤",
    title: "LIVRO ATA DIGITAL",
    description: "O Papel Não Sustenta Sua Operação\n\nAnotações em caderno se perdem, são inconsistentes e difíceis de comprovar.\nO sistema transforma o livro de ronda em registro digital padronizado e auditável.\n\nNada fica ilegível, perdido ou sem responsável.\nTudo fica documentado e acessível.",
    image: "https://raw.githubusercontent.com/ATIVBRASIL/arquivos-media/refs/heads/main/livroata.png",
    inverted: true
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
            {features.map((feature, index) => (
              <div 
                key={feature.id}
                className={`reveal-item flex flex-col ${feature.inverted ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center relative`}
              >
                {/* Connector Junction */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-blue-900 rounded-full z-10" 
                  style={{ top: '-12px' }}
                />
                
                <div className="flex-1">
                  <div className="inline-block px-4 py-2 bg-blue-900/10 border border-blue-900/30 rounded-full mb-6">
                    <span className="text-sm font-bold text-blue-900">⚡ {feature.title}</span>
                  </div>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className="flex-1">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full rounded-lg border-2 border-slate-200 shadow-lg"
                  />
                </div>
              </div>
            ))}
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

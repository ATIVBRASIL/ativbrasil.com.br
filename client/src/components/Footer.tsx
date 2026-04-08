import { getWhatsAppHref } from "@/lib/whatsapp";

export default function Footer() {
  const waEspecialista = getWhatsAppHref("especialista");
  return (
    <footer className="footer-pro py-14 px-5 md:px-8" id="contato">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img
              src="imagens/logo-ativ-brasil.png"
              alt="Logo ATIV BRASIL"
              className="h-12 w-auto mb-4"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <p className="text-white font-semibold text-sm mb-2">ATIV BRASIL</p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              O Sistema Operacional da Segurança Privada Profissional.
            </p>
            <p className="text-zinc-500 text-xs">CNPJ: 34.943.173/0001-65</p>
            <p className="text-zinc-500 text-xs mt-1">
              Rodovia Cônego Cyriaco Scaranello Pires, 3099 - Indaiatuba / SP
            </p>
          </div>
          <div>
            <p className="footer-title">Contato</p>
            <div className="space-y-3">
              <a
                className="footer-link block"
                href={waEspecialista}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp: (19) 97401-0028
              </a>
              <a className="footer-link block" href="mailto:operacoes@ativbrasil.com.br">
                operacoes@ativbrasil.com.br
              </a>
              <p className="text-zinc-500 text-sm">Atendimento: 09h00 às 18h00 (seg a sex)</p>
            </div>
            <a
              className="btn-footer-cta mt-5"
              href={waEspecialista}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com especialista →
            </a>
          </div>
          <div>
            <p className="footer-title">Links Rápidos</p>
            <div className="space-y-3">
              <a className="footer-link block" href="#section-storytelling">
                O Sistema
              </a>
              <a className="footer-link block" href="#section-riscos">
                Gestão de Riscos
              </a>
              <a className="footer-link block" href="#section-galeria">
                Inteligência Operacional
              </a>
              <a className="footer-link block" href="#section-hierarquia">
                Hierarquia de Acesso
              </a>
              <a className="footer-link block" href="#contato">
                Contato
              </a>
            </div>
          </div>
          <div>
            <p className="footer-title">Conecte-se</p>
            <div className="flex items-center gap-3 mb-5">
              <a
                className="social-icon-link"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" />
                </svg>
              </a>
              <a
                className="social-icon-link"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.7-1.6H17V4.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.4V11H7.5v3h2.8v8h3.2z" />
                </svg>
              </a>
              <a
                className="social-icon-link"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M6.9 8.2A1.9 1.9 0 1 1 6.9 4.4a1.9 1.9 0 0 1 0 3.8zM5.3 9.8h3.2V20H5.3V9.8zm5.2 0h3v1.4h.1c.4-.8 1.4-1.7 2.9-1.7 3.1 0 3.7 2.1 3.7 4.8V20h-3.2v-4.9c0-1.2 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5V20h-3.2V9.8z" />
                </svg>
              </a>
            </div>
            <p className="footer-title mt-6">Políticas Legais</p>
            <div className="flex flex-col gap-2">
              <a className="footer-legal-link" href="politica-privacidade.html">
                Política de Privacidade
              </a>
              <a className="footer-legal-link" href="termos-de-uso.html">
                Termos de Uso
              </a>
              <a className="footer-legal-link" href="politica-de-cookies.html">
                Política de Cookies
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-zinc-500 text-xs">© 2026 ATIV BRASIL. Todos os direitos reservados.</p>
          <p className="text-zinc-600 text-xs">
            Governança, conformidade e inteligência operacional em um único sistema.
          </p>
        </div>
      </div>
    </footer>
  );
}

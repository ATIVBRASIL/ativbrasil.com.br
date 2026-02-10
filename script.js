document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. CONFIGURAÇÃO DE REDIRECIONAMENTO (DIAGNÓSTICO ATIV) ---
    const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScFW63MdExVTvEJO-HfRcD_DP9v0R8ar-mwrS3B1LOC5dbztw/viewform";
    
    // IDs dos campos mapeados (Google Forms)
    const FIELD_IDS = {
        nome: "entry.1340952223",
        empresa: "entry.1116309090",
        email: "entry.993445104",
        whatsapp: "entry.1899952664"
    };

    const form = document.getElementById('diagnosis-form');
    // Fallback: tenta pegar pela classe se o ID não tiver sido atualizado
    const formTarget = form || document.querySelector('.contact-form');

    if (formTarget) {
        formTarget.addEventListener('submit', function(e) {
            e.preventDefault(); // Impede o recarregamento da página

            // 1.1 Feedback Visual Imediato
            const submitBtn = formTarget.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;
            submitBtn.innerText = "Iniciando Diagnóstico...";
            submitBtn.disabled = true;
            submitBtn.style.opacity = "0.7";

            // 1.2 Captura de Dados
            const nome = document.getElementById('nome').value;
            const empresa = document.getElementById('empresa').value;
            const email = document.getElementById('email').value;
            const whatsapp = document.getElementById('whatsapp').value;

            // 1.3 Geração de LeadID e Timestamp
            const timestamp = new Date().toISOString();
            const leadId = "L" + Date.now().toString(36).toUpperCase();
            
            // Hack de Rastreabilidade: Anexa o LeadID ao nome da empresa para persistir no Sheets
            // Ex: "Empresa X [ID: L12345]"
            const empresaComId = `${empresa} [ID: ${leadId}]`;

            // 1.4 Montagem da URL com Parâmetros
            const params = new URLSearchParams();
            params.append('usp', 'pp_url');
            params.append(FIELD_IDS.nome, nome);
            params.append(FIELD_IDS.empresa, empresaComId);
            params.append(FIELD_IDS.email, email);
            params.append(FIELD_IDS.whatsapp, whatsapp);

            // Captura UTMs da URL atual (se existirem) e, se possível, passaria. 
            // Como não mapeamos campos de UTM no Forms, eles ficam no log do navegador por enquanto.

            const finalUrl = `${GOOGLE_FORM_URL}?${params.toString()}`;

            // 1.5 Redirecionamento (Delay curto para UX)
            setTimeout(() => {
                window.location.href = finalUrl;
            }, 1000);
        });
    }

    // --- 2. FUNCIONALIDADES DE UI (Mantidas do original) ---
    
    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });

        // Fechar menu ao clicar em link
        document.querySelectorAll('.mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });
    }

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Animação de entrada (Fade In)
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.card, .section-title, .feature-card, .commercial-box');
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Header Shadow on Scroll
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
            } else {
                navbar.style.boxShadow = 'none';
            }
        });
    }
});
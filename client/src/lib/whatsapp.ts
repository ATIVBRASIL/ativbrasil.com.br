/** Número WhatsApp ATIV (apenas dígitos, código do país 55). */
export const WHATSAPP_PHONE_E164 = "5519974010028";

/** Telefone exibido na interface. */
export const WHATSAPP_DISPLAY_PHONE = "(19) 97401-0028";

/** Variante A — CTAs de demonstração / interesse no sistema (espaço final para o nome da empresa). */
export const WHATSAPP_MESSAGE_DEMO =
  "Olá, estou interessado em detalhes sobre o Sistema de Conformidade ATIV. A minha empresa é: ";

/** Variante B — rodapé / falar com especialista. */
export const WHATSAPP_MESSAGE_ESPECIALISTA =
  "Olá, quero falar com um especialista da ATIV BRASIL.";

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_PHONE_E164}?text=${encodeURIComponent(message)}`;
}

export type WhatsAppPreset = "demo" | "especialista";

export function getWhatsAppHref(preset: WhatsAppPreset): string {
  const text =
    preset === "demo" ? WHATSAPP_MESSAGE_DEMO : WHATSAPP_MESSAGE_ESPECIALISTA;
  return buildWhatsAppUrl(text);
}

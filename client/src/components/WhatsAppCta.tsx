import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getWhatsAppHref, type WhatsAppPreset } from "@/lib/whatsapp";

export type WhatsAppCtaProps = Omit<
  React.ComponentProps<typeof Button>,
  "asChild"
> & {
  /** `demo` = mensagem de interesse/demonstração; `especialista` = contato com especialista. */
  messagePreset?: WhatsAppPreset;
};

/**
 * Botão com aparência do `Button` que abre o WhatsApp (Web/App) em nova aba.
 */
export function WhatsAppCta({
  messagePreset = "demo",
  className,
  children,
  ...props
}: WhatsAppCtaProps) {
  const href = getWhatsAppHref(messagePreset);
  return (
    <Button asChild className={cn(className)} {...props}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </Button>
  );
}

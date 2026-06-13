import { ExternalLink, BookOpen, Globe } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const footerLinks = {
  servicios: [
    { label: "Pericias Penales", href: "#servicios" },
    { label: "Pericias Civiles", href: "#servicios" },
    { label: "Violencia Familiar", href: "#servicios" },
    { label: "Informes Forenses", href: "#servicios" },
  ],
  plataforma: [
    { label: "Planes y Precios", href: "#planes" },
    { label: "Iniciar Sesión", href: "#" },
    { label: "Registrarse", href: "#" },
    { label: "Centro de Ayuda", href: "#contacto" },
  ],
  legal: [
    { label: "Términos de Servicio", href: "#" },
    { label: "Política de Privacidad", href: "#" },
    { label: "Política de Cookies", href: "#" },
    {
      label: "Libro de Reclamaciones",
      href: "#",
      highlight: true,
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#080809] text-white">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <a href="#inicio" className="flex items-center gap-3 group w-fit">
              <img src="/logo.png" alt="PeriForense logo" className="size-10 object-contain" />
              <div className="flex flex-col leading-none">
                <span className="text-base font-bold tracking-widest text-white uppercase">
                  PeriForense
                </span>
                <span className="text-[11px] font-medium tracking-[0.2em] text-white/60 uppercase">
                  Perú
                </span>
              </div>
            </a>
            <p className="text-sm text-white/65 leading-relaxed max-w-xs">
              Plataforma especializada en consultoría y pericias psicológicas
              forenses para el ámbito penal y civil peruano. Soporte experto
              para abogados en casos complejos.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.tiktok.com/@psicologoforensepaulo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-9 items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="TikTok"
              >
                <svg viewBox="0 0 24 24" fill="white" className="size-4">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
                </svg>
              </a>
            </div>
            {/* Certifications */}
            <div className="flex flex-col gap-2">
              <p className="text-xs text-white/45 uppercase tracking-widest font-semibold">
                Certificaciones
              </p>
              <div className="flex flex-wrap gap-2">
                {["Colegio de Psicólogos del Perú", "IML – Ministerio Público"].map(
                  (cert) => (
                    <span
                      key={cert}
                      className="text-[10px] px-2 py-1 rounded border border-white/15 text-white/55"
                    >
                      {cert}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Servicios */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-bold tracking-widest text-white/45 uppercase">
              Servicios
            </p>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Plataforma */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-bold tracking-widest text-white/45 uppercase">
              Plataforma
            </p>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.plataforma.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-bold tracking-widest text-white/45 uppercase">
              Legal
            </p>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`text-sm transition-colors flex items-center gap-1 ${
                      link.highlight
                        ? "text-white hover:text-white/80 font-medium"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {link.highlight && <BookOpen className="size-3 shrink-0" />}
                    {link.label}
                    {link.highlight && <ExternalLink className="size-2.5 shrink-0" />}
                  </a>
                </li>
              ))}
            </ul>
            {/* INDECOPI notice */}
            <div className="mt-2 p-3 rounded-lg bg-white/10 border border-white/15">
              <p className="text-[10px] text-white/50 leading-relaxed">
                Libro de Reclamaciones virtual disponible conforme al D.S.
                N° 011-2011-PCM. Resolución de reclamaciones en 30 días
                hábiles.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-white/15" />

      {/* Bottom bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} ICP — Pericias Psicológicas Penales y Civiles. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/40">
            RUC: 20609904209 · Consultas a nivel nacional — Perú
          </p>
        </div>
      </div>
    </footer>
  )
}

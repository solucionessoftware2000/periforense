import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Planes", href: "#planes" },
  { label: "Contacto", href: "#contacto" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-xl shadow-black/20 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <img src="/logo.png" alt="PeriForense logo" className="size-9 shrink-0 object-contain" />
            <div className="flex flex-col leading-none">
              <span className="text-sm font-bold tracking-widest text-primary uppercase">
                PeriForense
              </span>
              <span className="text-[10px] font-medium tracking-[0.2em] text-muted-foreground uppercase">
                Perú
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-primary/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary hover:bg-primary/5 text-sm"
            >
              Iniciar Sesión
            </Button>
            <Button
              size="sm"
              className="font-semibold text-sm"
            >
              Registrarse
            </Button>
          </div>

          {/* Mobile menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-foreground hover:bg-muted"
              >
                {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-72 bg-card p-0"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 p-6 border-b border-border">
                  <img src="/logo.png" alt="PeriForense logo" className="size-9 object-contain" />
                  <div className="flex flex-col leading-none">
                    <span className="text-sm font-bold tracking-widest text-primary uppercase">
                      PeriForense
                    </span>
                    <span className="text-[10px] font-medium tracking-[0.2em] text-muted-foreground uppercase">
                      Perú
                    </span>
                  </div>
                </div>
                <nav className="flex flex-col gap-1 p-4 flex-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
                <div className="flex flex-col gap-2 p-4 border-t border-border">
                  <Button
                    variant="outline"
                    className="text-muted-foreground hover:text-primary"
                    onClick={() => setMobileOpen(false)}
                  >
                    Iniciar Sesión
                  </Button>
                  <Button
                    className="font-semibold"
                    onClick={() => setMobileOpen(false)}
                  >
                    Registrarse
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

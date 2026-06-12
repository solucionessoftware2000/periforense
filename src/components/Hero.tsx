import { ArrowRight, ShieldCheck, Award, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const stats = [
  { icon: ShieldCheck, label: "Casos Asistidos", value: "+500" },
  { icon: Award, label: "Años de Experiencia", value: "+12" },
  { icon: Users, label: "Abogados Activos", value: "+200" },
  { icon: Clock, label: "Disponibilidad", value: "24/7" },
]

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Text side */}
          <div className="flex flex-col justify-center order-last lg:order-first">
            <div className="mb-6">
              <Badge
                variant="outline"
                className="border-primary/40 bg-primary/10 text-primary px-3 py-1 text-xs font-semibold tracking-widest uppercase"
              >
                Psicología Forense Especializada
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight mb-6">
              Soporte Especializado en{" "}
              <span className="text-primary">Psicología Forense</span>{" "}
              para Procesos Judiciales
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-xl">
              Plataforma de consultoría forense para abogados que requieren el respaldo
              de psicólogos especializados en casos de{" "}
              <span className="text-foreground font-medium">
                violencia familiar, maltrato de pareja, abuso sexual, delitos penales
              </span>{" "}
              y disputas civiles complejas.
            </p>
            <p className="text-sm text-muted-foreground/70 mb-10 max-w-lg">
              Informes periciales, asesoría en audiencias y soporte procesal con
              estándares de calidad para el fuero penal y civil peruano.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="font-bold text-base px-8 shadow-xl shadow-primary/30 group"
                asChild
              >
                <a href="#planes">
                  Ver Planes de Suscripción
                  <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/40 text-primary hover:bg-primary/10 hover:border-primary/60 font-semibold text-base px-8"
                asChild
              >
                <a href="#contacto">Solicitar Consulta</a>
              </Button>
            </div>
          </div>

          {/* Photo side */}
          <div className="relative flex items-center justify-center order-first lg:order-last">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-3 rounded-[2rem] border border-primary/20 opacity-60" />
              <div className="absolute -inset-6 rounded-[2.5rem] border border-primary/10 opacity-40" />

              <img
                src="/image4.jpeg"
                alt="Perito Psicológico Forense"
                className="relative w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[440px] rounded-[1.5rem] shadow-[0_32px_80px_-12px_rgba(0,0,0,0.8)] object-cover aspect-[3/4]"
              />

              {/* Credential card overlay */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-card/90 backdrop-blur-md border border-border/60 shadow-xl">
                <p className="text-sm font-bold text-foreground">Ps. Forense Especializado</p>
                <p className="text-xs text-muted-foreground mt-0.5">+12 años de experiencia · +500 casos asistidos</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex flex-col gap-2 p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all"
            >
              <Icon className="size-5 text-primary" />
              <p className="text-2xl font-bold text-foreground">{value}</p>
              <p className="text-xs text-muted-foreground leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

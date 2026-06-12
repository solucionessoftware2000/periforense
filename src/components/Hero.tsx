import { ArrowRight, ShieldCheck, Award, Clock, Users, Brain } from "lucide-react"
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
      className="relative flex flex-col justify-center overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #eff6ff, #ffffff)" }}
    >
      {/* Geometric background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      {/* Decorative brain icon */}
      <div className="absolute right-0 top-0 bottom-0 hidden xl:flex items-center pr-16 opacity-[0.05] pointer-events-none">
        <Brain className="size-[400px] text-primary" strokeWidth={0.5} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="mb-6 flex items-center gap-3">
            <Badge
              variant="outline"
              className="border-primary/30 bg-primary/5 text-primary px-3 py-1 text-xs font-semibold tracking-widest uppercase"
            >
              Psicología Forense Especializada
            </Badge>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight mb-6">
            Soporte Especializado en{" "}
            <span className="text-primary">Psicología Forense</span>{" "}
            para Procesos Judiciales
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-4">
            Plataforma de consultoría forense para abogados que requieren el respaldo
            de psicólogos especializados en casos de{" "}
            <span className="text-foreground font-medium">
              violencia familiar, maltrato de pareja, abuso sexual, delitos penales
            </span>{" "}
            y disputas civiles complejas.
          </p>
          <p className="text-base text-muted-foreground/70 mb-10 max-w-xl">
            Informes periciales, asesoría en audiencias y soporte procesal con
            estándares de calidad para el fuero penal y civil peruano.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="font-bold text-base px-8 shadow-xl shadow-primary/25 group"
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

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
          {stats.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex flex-col gap-2 p-5 rounded-xl bg-white border border-border shadow-sm hover:shadow-md hover:border-primary/20 transition-all"
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

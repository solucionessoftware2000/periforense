import { ArrowRight, ShieldCheck, Award, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const stats = [
  { icon: ShieldCheck, label: "Casos a Nivel Nacional", value: "+1200" },
  { icon: Award, label: "Años de Experiencia", value: "+12" },
  { icon: Users, label: "Consultas y Asesorías", value: "Nacional" },
  { icon: Clock, label: "Disponibilidad", value: "24/7" },
]

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
    >
      {/* Background photo — full section */}
      <div className="absolute inset-0">
        <img
          src="/image1.png"
          alt="Perito Psicológico Forense"
          className="w-full h-full object-cover object-[70%_center] sm:object-center"
        />
        {/* Gradient overlay: heavy on left for text, lighter on right to show person */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070f1e]/95 via-[#070f1e]/70 to-[#070f1e]/20" />
        {/* Bottom gradient for stats readability */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#070f1e] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-16 pt-40">
        <div className="max-w-2xl">
          <div className="mb-6">
            <Badge
              variant="outline"
              className="border-primary/40 bg-primary/10 text-primary px-3 py-1 text-xs font-semibold tracking-widest uppercase"
            >
              Psicología Forense Especializada
            </Badge>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            Soporte Especializado en{" "}
            <span className="text-primary">Psicología Forense</span>{" "}
            para Procesos Judiciales
          </h1>

          <p className="text-lg text-white/70 leading-relaxed mb-4 max-w-xl">
            Plataforma de consultoría forense para abogados que requieren el respaldo
            de psicólogos especializados en casos de{" "}
            <span className="text-white font-medium">
              violencia familiar, maltrato de pareja, abuso sexual, delitos penales
            </span>{" "}
            y disputas civiles complejas.
          </p>
          <p className="text-sm text-white/50 mb-10 max-w-lg">
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
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold text-base px-8"
              asChild
            >
              <a href="#contacto">Solicitar Consulta</a>
            </Button>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3">
          {stats.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex flex-col gap-2 p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/40 hover:bg-white/8 transition-all"
            >
              <Icon className="size-5 text-primary" />
              <p className="text-2xl font-bold text-white">{value}</p>
              <p className="text-xs text-white/55 leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

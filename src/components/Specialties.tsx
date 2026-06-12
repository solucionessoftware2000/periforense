import {
  Gavel,
  FileText,
  HeartHandshake,
  Brain,
  ChevronRight,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const specialties = [
  {
    icon: Gavel,
    label: "Penal",
    title: "Pericias Penales",
    description:
      "Evaluación psicológica forense para procesos penales: imputabilidad, estado mental del acusado, credibilidad del testimonio y daño psíquico a víctimas.",
    areas: ["Imputabilidad", "Credibilidad testimonial", "Daño psíquico"],
    color: "text-primary",
    bg: "bg-primary/8",
  },
  {
    icon: FileText,
    label: "Civil",
    title: "Pericias Civiles",
    description:
      "Informes psicológicos para procesos civiles: tenencia de menores, régimen de visitas, adopción, interdicción y evaluación de capacidad jurídica.",
    areas: ["Tenencia y custodia", "Adopción", "Capacidad jurídica"],
    color: "text-primary",
    bg: "bg-primary/8",
  },
  {
    icon: HeartHandshake,
    label: "Familia",
    title: "Violencia Familiar y Género",
    description:
      "Evaluación especializada en casos de violencia doméstica, maltrato de pareja, violencia psicológica y física, con enfoque en la Ley N° 30364.",
    areas: ["Ley N° 30364", "Maltrato de pareja", "Violencia psicológica"],
    color: "text-primary",
    bg: "bg-primary/8",
  },
  {
    icon: Brain,
    label: "Informes",
    title: "Informes Psicológicos Forenses",
    description:
      "Elaboración y revisión técnica de informes periciales con validez procesal, fundamentación científica y sustentación en audiencia oral.",
    areas: ["Informe pericial", "Revisión técnica", "Sustentación oral"],
    color: "text-primary",
    bg: "bg-primary/8",
  },
]

export default function Specialties() {
  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="border-primary/20 bg-primary/5 text-primary px-3 py-1 text-xs font-semibold tracking-widest uppercase mb-4"
          >
            Campos de Acción
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
            Especialidades Forenses
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Cobertura integral en las principales áreas de la psicología forense
            aplicada al sistema judicial peruano.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map(({ icon: Icon, label, title, description, areas, color, bg }) => (
            <Card
              key={title}
              className="group relative border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/8 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <CardContent className="p-6 flex flex-col gap-5">
                {/* Icon */}
                <div className={`flex size-12 items-center justify-center rounded-xl ${bg} ring-1 ring-primary/10`}>
                  <Icon className={`size-6 ${color}`} />
                </div>

                {/* Badge */}
                <Badge
                  variant="secondary"
                  className="w-fit text-xs font-medium text-secondary-foreground"
                >
                  {label}
                </Badge>

                {/* Content */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-base font-semibold text-foreground leading-snug">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>

                {/* Areas */}
                <ul className="flex flex-col gap-1.5 mt-auto pt-4 border-t border-border">
                  {areas.map((area) => (
                    <li
                      key={area}
                      className="flex items-center gap-2 text-xs text-muted-foreground"
                    >
                      <ChevronRight className="size-3 text-primary/60 shrink-0" />
                      {area}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex justify-center">
          <div className="flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-muted border border-border max-w-2xl w-full text-center sm:text-left">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <Brain className="size-6 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-foreground">
                ¿Necesita una evaluación en un área específica?
              </p>
              <p className="text-sm text-muted-foreground mt-0.5">
                Contáctenos para coordinar una consulta personalizada con nuestros peritos.
              </p>
            </div>
            <a
              href="#contacto"
              className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors whitespace-nowrap shrink-0 underline underline-offset-4"
            >
              Consultar ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

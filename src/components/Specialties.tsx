import {
  Search,
  FileSearch,
  ClipboardList,
  MessageSquare,
  Scale,
  ChevronRight,
  Users,
  Gavel,
  Brain,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    icon: Search,
    number: "01",
    title: "Consultoría Técnica Express",
    description:
      "Revisión rápida de la pericia oficial para determinar su viabilidad de impugnación. Determinamos si la pericia es \"atacable\" o no, con un análisis técnico preliminar.",
    areas: ["Revisión de pericia oficial", "Viabilidad de impugnación", "Análisis técnico preliminar"],
  },
  {
    icon: FileSearch,
    number: "02",
    title: "Informe de Observaciones",
    description:
      "Documento técnico que evidencia fallas metodológicas, sesgos y falta de rigor en tests como el MCMI-IV. Actúa como insumo clave para la defensa.",
    areas: ["Fallas metodológicas", "Sesgos en instrumentos", "Insumo clave para defensa"],
  },
  {
    icon: ClipboardList,
    number: "03",
    title: "Contrapericia / Pericia de Parte",
    description:
      "Evaluación integral del sujeto y análisis exhaustivo del expediente y pericias oficiales. Elaboración de metaperitajes bajo protocolos internacionales y guías del IML.",
    areas: ["Evaluación integral", "Metaperitajes", "Protocolos IML vigentes"],
  },
  {
    icon: MessageSquare,
    number: "04",
    title: "Asesoría para Interrogatorio",
    description:
      "Formulación de preguntas de \"clinch\" diseñadas para desestabilizar al perito oficial durante la audiencia. Estrategia técnica para el contrainterrogatorio.",
    areas: ["Preguntas técnicas", "Contrainterrogatorio", "Estrategia de audiencia"],
  },
  {
    icon: Scale,
    number: "05",
    title: "Ratificación en Juicio",
    description:
      "Perito de parte experto en audiencias de interrogatorio, contrainterrogatorio y debates periciales. Defensa técnica de informes psicológicos forenses ante el juez.",
    areas: ["Audiencias orales", "Debates periciales", "Defensa de informes"],
  },
]

const specialties = [
  {
    icon: Users,
    title: "Familia y Menores",
    areas: [
      "Evaluación de competencias parentales",
      "Alienación parental en niños y adolescentes",
      "Diligencia de cámara Gesell y análisis de video",
      "Informes psicológicos para cambio de nombres",
    ],
  },
  {
    icon: Gavel,
    title: "Penal y Testimonios",
    areas: [
      "Valoración de credibilidad del testimonio",
      "Análisis de declaración de testigos",
      "Evaluación de perfil psicosexual",
      "Contraperitajes y pericias de parte",
    ],
  },
  {
    icon: Brain,
    title: "Clínico-Forense y Capacitación",
    areas: [
      "Afectación psicológica y daño psíquico",
      "Síndrome de indefensión",
      "Elaboración de perfiles psicológicos",
      "Conferencias y capacitaciones",
    ],
  },
]

export default function Specialties() {
  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Services */}
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="border-primary/20 bg-primary/5 text-primary px-3 py-1 text-xs font-semibold tracking-widest uppercase mb-4"
          >
            Servicios Periciales
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
            ¿En qué podemos ayudarle?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Soporte técnico-científico para abogados que necesitan sustentar, defender
            o refutar elementos de convicción en procesos judiciales complejos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
          {services.map(({ icon: Icon, number, title, description, areas }) => (
            <Card
              key={title}
              className="group relative border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/8 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardContent className="p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/10">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <span className="text-3xl font-black text-primary/15">{number}</span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground leading-snug mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>
                <ul className="flex flex-col gap-1.5 mt-auto pt-4 border-t border-border">
                  {areas.map((area) => (
                    <li key={area} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <ChevronRight className="size-3 text-primary/60 shrink-0" />
                      {area}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specialties */}
        <div className="text-center mb-12">
          <Badge
            variant="outline"
            className="border-primary/20 bg-primary/5 text-primary px-3 py-1 text-xs font-semibold tracking-widest uppercase mb-4"
          >
            Especialidades
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
            Áreas de Especialización
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specialties.map(({ icon: Icon, title, areas }) => (
            <div
              key={title}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="size-5 text-primary" />
                </div>
                <h3 className="text-base font-bold text-foreground">{title}</h3>
              </div>
              <ul className="flex flex-col gap-2">
                {areas.map((area) => (
                  <li key={area} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <ChevronRight className="size-3 text-primary/60 shrink-0 mt-1" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

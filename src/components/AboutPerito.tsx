import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"

const credentials = [
  "Psicólogo Colegiado — C.PS.P N° 45599",
  "Perito de Parte acreditado ante el Poder Judicial del Perú",
  "Especialista en Medicina Legal y Ciencias Forenses — IML",
  "Psicólogo Jurídico Forense con más de 12 años de experiencia",
  "Experto en elaboración y análisis de dictámenes periciales",
  "Experiencia en juzgados penales, civiles y de familia a nivel nacional",
  "Formación en Victimología y Evaluación del Daño Psíquico",
  "Consultas y asesorías en todo el Perú",
]

export default function AboutPerito() {
  return (
    <section id="perito" className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="border-primary/30 bg-primary/10 text-primary px-3 py-1 text-xs font-semibold tracking-widest uppercase mb-4"
          >
            El Especialista
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
            Paulo De La Cruz Valles
          </h2>
          <p className="text-primary font-semibold text-lg">
            Psicólogo Jurídico Forense · Perito de Parte · C.PS.P N° 45599
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Photo gallery */}
          <div className="flex gap-4 h-[580px]">
            {/* Main portrait — left */}
            <div className="flex-[2] overflow-hidden rounded-2xl shadow-2xl shadow-black/50">
              <img
                src="/image4.jpeg"
                alt="Paulo De La Cruz Valles - Perito Forense"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Two stacked — right */}
            <div className="flex-1 flex flex-col gap-4">
              <div className="flex-1 overflow-hidden rounded-xl shadow-xl shadow-black/40">
                <img
                  src="/image3.jpeg"
                  alt="Paulo De La Cruz Valles"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex-1 overflow-hidden rounded-xl shadow-xl shadow-black/40">
                <img
                  src="/image2.jpeg"
                  alt="Paulo De La Cruz Valles"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Credentials */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 leading-snug">
                Soporte técnico-científico para{" "}
                <span className="text-primary">su estrategia legal</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                En ICP (<strong className="text-foreground">Pericias Psicológicas Penales y Civiles</strong>) somos especialistas
                en la intersección exacta entre la psicología y el derecho. Proveemos a estudios de abogados,
                defensores y litigantes de todo el Perú el respaldo técnico-científico necesario para sustentar,
                defender o refutar elementos de convicción en procesos judiciales complejos.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Sabemos que en un tribunal, un caso no se gana solo con argumentos legales, sino con
                <strong className="text-foreground"> evidencia irrefutable</strong>. Una pericia bien estructurada
                o la detección oportuna de sesgos y errores metodológicos en un dictamen oficial suele ser el
                factor determinante en la resolución de un juicio.
              </p>
            </div>

            <ul className="flex flex-col gap-3">
              {credentials.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/90">{c}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
              {[
                { value: "+1200", label: "Casos a nivel nacional" },
                { value: "+12", label: "Años de experiencia" },
                { value: "100%", label: "Validez judicial" },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="text-3xl font-black text-primary">{value}</span>
                  <span className="text-xs text-muted-foreground leading-snug">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"

const credentials = [
  "Psicólogo Colegiado — CPP",
  "Perito acreditado ante el Poder Judicial del Perú",
  "Especialista en Medicina Legal y Ciencias Forenses — IML",
  "Más de 12 años en psicología forense penal y civil",
  "Experiencia en juzgados penales, civiles y de familia",
  "Formación en Victimología y Evaluación del Daño Psíquico",
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
            Sobre el Perito
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trayectoria profesional respaldada por más de una década de pericias forenses
            en el sistema judicial peruano.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Photo gallery */}
          <div className="flex gap-4 h-[580px]">
            {/* Main portrait — left */}
            <div className="flex-[2] overflow-hidden rounded-2xl shadow-2xl shadow-black/50">
              <img
                src="/image4.jpeg"
                alt="Perito forense"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Two stacked — right */}
            <div className="flex-1 flex flex-col gap-4">
              <div className="flex-1 overflow-hidden rounded-xl shadow-xl shadow-black/40">
                <img
                  src="/image3.jpeg"
                  alt="Perito forense"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex-1 overflow-hidden rounded-xl shadow-xl shadow-black/40">
                <img
                  src="/image2.jpeg"
                  alt="Perito forense"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Credentials */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 leading-snug">
                Pericias con respaldo científico y{" "}
                <span className="text-primary">validez procesal</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Especialista en psicología forense con amplia trayectoria en la elaboración
                de informes periciales para procesos penales y civiles, sustentación oral
                ante jueces y peritos de parte, y asesoría técnica a equipos legales en
                todo el Perú.
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
                { value: "+500", label: "Pericias realizadas" },
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

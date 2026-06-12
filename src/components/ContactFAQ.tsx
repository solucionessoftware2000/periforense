import { useState } from "react"
import { Send, Phone, Mail, MapPin, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { NativeSelect } from "@/components/ui/native-select"

const faqs = [
  {
    q: "¿Qué es una pericia psicológica forense y en qué se diferencia de una evaluación clínica?",
    a: "La pericia psicológica forense es una evaluación especializada realizada por un psicólogo habilitado, destinada a ser utilizada como prueba en procesos judiciales. A diferencia de una evaluación clínica, responde a preguntas específicas del proceso legal (imputabilidad, daño psíquico, credibilidad del testimonio), se rige por protocolos forenses y está sujeta al principio de contradicción probatoria.",
  },
  {
    q: "¿Cuánto tiempo toma elaborar un informe pericial psicológico?",
    a: "El tiempo varía según la complejidad del caso. Un informe estándar requiere entre 3 y 7 días hábiles, incluyendo la evaluación, aplicación de instrumentos psicométricos validados y redacción. En casos urgentes con Plan Pro o Elite, podemos priorizar la entrega en 24-48 horas.",
  },
  {
    q: "¿Los informes tienen validez ante el Poder Judicial del Perú?",
    a: "Sí. Todos nuestros informes son elaborados conforme a los estándares del Instituto de Medicina Legal y Ciencias Forenses del Ministerio Público, con el formato exigido por el Código Procesal Penal y el Código Procesal Civil. Los peritos están habilitados por el Colegio de Psicólogos del Perú.",
  },
  {
    q: "¿Pueden nuestros peritos declarar en audiencia oral o juicio?",
    a: "Sí, en el Plan Elite ofrecemos el servicio de sustentación oral del informe pericial ante el juez y las partes. Nuestros peritos tienen experiencia en juzgados penales, civiles y de familia, y están preparados para el contrainterrogatorio.",
  },
  {
    q: "¿Cómo se garantiza la confidencialidad de los casos?",
    a: "Suscribimos acuerdos de confidencialidad (NDA) con cada abogado y estudio. La información clínica y procesal está protegida bajo cifrado AES-256 en nuestra plataforma. Cumplimos con la Ley N° 29733 de Protección de Datos Personales.",
  },
  {
    q: "¿Atienden casos en provincias o solo en Lima?",
    a: "Nuestra plataforma opera a nivel nacional. Las consultas y revisión de informes son remotas. Para evaluaciones presenciales fuera de Lima, coordinamos con peritos asociados en las principales ciudades del Perú (Arequipa, Trujillo, Cusco, Piura). Contáctenos para consultar disponibilidad.",
  },
  {
    q: "¿Qué sucede si necesito modificar o ampliar un informe ya emitido?",
    a: "Las ampliaciones y adiciones de pericia están incluidas en los planes Pro y Elite sin costo adicional, siempre que se trate del mismo caso. En el Plan Básico tienen un costo por servicio. La corrección por error de nuestra parte no tiene ningún costo en ningún plan.",
  },
]

export default function ContactFAQ() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="border-primary/20 bg-primary/5 text-primary px-3 py-1 text-xs font-semibold tracking-widest uppercase mb-4"
          >
            Soporte
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
            Preguntas Frecuentes y Contacto
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Resolvemos sus dudas sobre nuestros servicios periciales. ¿No
            encuentra lo que busca? Escríbanos directamente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* FAQ */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 mb-6">
              <ChevronDown className="size-4 text-primary" />
              <h3 className="text-sm font-semibold text-foreground tracking-wide uppercase">
                Preguntas Frecuentes
              </h3>
            </div>
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border border-border rounded-xl px-5 overflow-hidden data-[state=open]:border-primary/30 data-[state=open]:bg-primary/5 transition-colors"
                >
                  <AccordionTrigger className="text-sm font-medium text-foreground text-left py-4 hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Info cards */}
            <div className="flex flex-col gap-3">
              {[
                { icon: Mail, label: "Correo electrónico", value: "consultas@periforense.pe" },
                { icon: Phone, label: "Teléfono / WhatsApp", value: "+51 900 000 000" },
                { icon: MapPin, label: "Sede principal", value: "Lima, Perú" },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border"
                >
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/8">
                    <Icon className="size-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{label}</p>
                    <p className="text-sm font-semibold text-foreground">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <h3 className="text-base font-bold text-foreground mb-5">
                Consulta Personalizada
              </h3>
              {submitted ? (
                <div className="flex flex-col items-center gap-3 py-6 text-center">
                  <div className="flex size-14 items-center justify-center rounded-full bg-primary/10">
                    <Send className="size-6 text-primary" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">
                    Mensaje enviado correctamente
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Nos comunicaremos con usted en un plazo máximo de 24 horas hábiles.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2"
                    onClick={() => setSubmitted(false)}
                  >
                    Enviar otro mensaje
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="fullname" className="text-xs font-medium">
                        Nombre completo
                      </Label>
                      <Input id="fullname" placeholder="Dr. Juan García" required />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="lawfirm" className="text-xs font-medium">
                        Estudio jurídico
                      </Label>
                      <Input id="lawfirm" placeholder="García & Asociados" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="email" className="text-xs font-medium">
                      Correo electrónico
                    </Label>
                    <Input id="email" type="email" placeholder="jgarcia@estudio.pe" required />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="caseType" className="text-xs font-medium">
                      Tipo de caso
                    </Label>
                    <NativeSelect id="caseType">
                      <option value="">Seleccione una categoría</option>
                      <option value="penal">Pericia Penal</option>
                      <option value="civil">Pericia Civil</option>
                      <option value="familia">Violencia Familiar / Género</option>
                      <option value="informe">Revisión de Informe</option>
                      <option value="otro">Consulta General</option>
                    </NativeSelect>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="message" className="text-xs font-medium">
                      Descripción del caso
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Describa brevemente el caso y la asistencia que requiere..."
                      className="min-h-24 resize-none"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full font-semibold" disabled={loading}>
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="size-4 rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground animate-spin" />
                        Enviando...
                      </span>
                    ) : (
                      <>
                        <Send className="size-4 mr-2" />
                        Enviar Consulta
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

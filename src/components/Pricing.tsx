import { useState } from "react"
import { Check, Star, Zap, Crown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import PaymentModal from "@/components/PaymentModal"

const plans = [
  {
    id: "basico",
    name: "Plan Básico",
    icon: Star,
    monthlyPrice: 99,
    annualPrice: 79,
    color: "text-primary",
    iconBg: "bg-primary/8",
    featured: false,
    description: "Ideal para abogados que inician en casos psicológicos.",
    features: [
      "Hasta 4 consultas escritas al mes",
      "Acceso a base de datos forense",
      "Preguntas frecuentes especializadas",
      "Guías de procedimiento penal y civil",
      "Soporte por correo (48h)",
    ],
    notIncluded: [
      "Revisión de pre-informes",
      "Soporte en audiencias",
      "Atención prioritaria",
    ],
  },
  {
    id: "pro",
    name: "Plan Pro",
    icon: Zap,
    monthlyPrice: 199,
    annualPrice: 159,
    color: "text-primary",
    iconBg: "bg-primary/8",
    featured: true,
    description: "Para abogados con volumen regular de casos forenses.",
    features: [
      "Hasta 15 consultas al mes",
      "Acceso completo a base de datos",
      "Revisión de pre-informes periciales",
      "Soporte directo por chat (24h)",
      "Plantillas de oficios y solicitudes",
      "Alertas de jurisprudencia forense",
    ],
    notIncluded: [
      "Soporte en audiencias presenciales",
    ],
  },
  {
    id: "elite",
    name: "Plan Elite",
    icon: Crown,
    monthlyPrice: 399,
    annualPrice: 319,
    color: "text-primary",
    iconBg: "bg-primary/10",
    featured: false,
    description: "Soporte ilimitado para estudios jurídicos exigentes.",
    features: [
      "Consultas ilimitadas",
      "Acceso completo a toda la plataforma",
      "Revisión y firma de pre-informes",
      "Asesoría en audiencias y juicios orales",
      "Perito disponible para declaración",
      "Soporte prioritario 24/7",
      "Reportes de análisis mensual",
      "Onboarding personalizado",
    ],
    notIncluded: [],
  },
]

interface SelectedPlan {
  name: string
  price: string
  billing: string
}

export default function Pricing() {
  const [annual, setAnnual] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<SelectedPlan | null>(null)

  const handleSelect = (plan: typeof plans[0]) => {
    const price = annual ? plan.annualPrice : plan.monthlyPrice
    setSelectedPlan({
      name: plan.name,
      price: String(price),
      billing: annual ? "annual" : "monthly",
    })
  }

  return (
    <section id="planes" className="py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge
            variant="outline"
            className="border-primary/20 bg-primary/5 text-primary px-3 py-1 text-xs font-semibold tracking-widest uppercase mb-4"
          >
            Suscripciones
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
            Planes de Acceso
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Elija el plan que mejor se adapte al volumen y complejidad de sus
            casos. Todos los precios en Soles peruanos (S/).
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-3 shadow-sm">
            <Label
              htmlFor="billing-toggle"
              className={`text-sm font-medium cursor-pointer transition-colors ${
                !annual ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              Mensual
            </Label>
            <Switch
              id="billing-toggle"
              checked={annual}
              onCheckedChange={setAnnual}
            />
            <Label
              htmlFor="billing-toggle"
              className={`text-sm font-medium cursor-pointer transition-colors flex items-center gap-2 ${
                annual ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              Anual
              <Badge className="bg-emerald-500 text-white text-[10px] px-1.5 py-0.5">
                -20%
              </Badge>
            </Label>
          </div>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => {
            const Icon = plan.icon
            const price = annual ? plan.annualPrice : plan.monthlyPrice
            const savings = plan.monthlyPrice - plan.annualPrice

            return (
              <Card
                key={plan.id}
                className={`relative flex flex-col transition-all duration-300 overflow-hidden ${
                  plan.featured
                    ? "border-primary shadow-2xl shadow-primary/15 scale-[1.02] bg-card"
                    : "border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/8"
                }`}
              >
                {plan.featured && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0" />
                )}
                {plan.featured && (
                  <div className="absolute -top-px left-1/2 -translate-x-1/2">
                    <Badge className="rounded-none rounded-b-lg bg-primary text-primary-foreground text-xs px-4 py-1 font-semibold">
                      Más Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-0 pt-8 px-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`flex size-11 items-center justify-center rounded-xl ${plan.iconBg} ring-1 ring-border`}>
                      <Icon className={`size-5 ${plan.color}`} />
                    </div>
                    {plan.id === "elite" && (
                      <Badge
                        variant="outline"
                        className="border-primary/30 bg-primary/10 text-primary text-xs"
                      >
                        Premium
                      </Badge>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="mt-5 flex items-end gap-1">
                    <span className="text-4xl font-black text-foreground tracking-tight">
                      S/ {price}
                    </span>
                    <span className="text-muted-foreground text-sm pb-1">/mes</span>
                  </div>
                  {annual && (
                    <p className="text-xs text-emerald-600 font-medium mt-1">
                      Ahorra S/ {savings * 12}/año · S/ {plan.annualPrice * 12} facturado anualmente
                    </p>
                  )}
                  {!annual && (
                    <p className="text-xs text-muted-foreground mt-1 opacity-0 select-none">
                      &nbsp;
                    </p>
                  )}
                </CardHeader>

                <CardContent className="flex flex-col gap-5 px-6 pt-6 pb-6 flex-1">
                  <Button
                    className={`w-full font-semibold group ${
                      plan.id === "elite"
                        ? "shadow-lg"
                        : ""
                    }`}
                    variant={plan.featured || plan.id === "elite" ? "default" : "outline"}
                    onClick={() => handleSelect(plan)}
                  >
                    Suscribirse
                    <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
                  </Button>

                  <Separator />

                  {/* Features */}
                  <ul className="flex flex-col gap-2.5">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-foreground/85"
                      >
                        <Check className="size-4 shrink-0 text-emerald-500 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                    {plan.notIncluded.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground/60 line-through"
                      >
                        <span className="size-4 shrink-0 flex items-center justify-center mt-0.5 text-muted-foreground/40">
                          ×
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-muted-foreground mt-8">
          Todos los planes incluyen factura electrónica. Cancele en cualquier momento.
          Los precios incluyen IGV.
        </p>
      </div>

      <PaymentModal
        isOpen={!!selectedPlan}
        onClose={() => setSelectedPlan(null)}
        plan={selectedPlan}
      />
    </section>
  )
}

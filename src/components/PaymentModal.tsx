import { useState } from "react"
import { CreditCard, Smartphone, CheckCircle2, Lock } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

interface Plan {
  name: string
  price: string
  billing: string
}

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  plan: Plan | null
}

type PaymentMethod = "visa" | "mastercard" | "yape" | "plin"

export default function PaymentModal({ isOpen, onClose, plan }: PaymentModalProps) {
  const [method, setMethod] = useState<PaymentMethod>("visa")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [cardNum, setCardNum] = useState("")

  const handleClose = () => {
    setSuccess(false)
    setLoading(false)
    setMethod("visa")
    setCardNum("")
    onClose()
  }

  const formatCard = (val: string) => {
    const digits = val.replace(/\D/g, "").slice(0, 16)
    return digits.replace(/(.{4})/g, "$1 ").trim()
  }

  const handleSubmit = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
    }, 2000)
  }

  const paymentMethods: { id: PaymentMethod; label: string; icon: string }[] = [
    { id: "visa", label: "Visa", icon: "VISA" },
    { id: "mastercard", label: "Mastercard", icon: "MC" },
    { id: "yape", label: "Yape", icon: "Y" },
    { id: "plin", label: "Plin", icon: "P" },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        {success ? (
          <div className="flex flex-col items-center gap-5 py-6 text-center">
            <div className="flex size-20 items-center justify-center rounded-full bg-emerald-50 border-4 border-emerald-100">
              <CheckCircle2 className="size-10 text-emerald-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                ¡Suscripción Activada!
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Bienvenido al Plan{" "}
                <span className="font-semibold text-foreground">{plan?.name}</span>.
                Recibirá un correo de confirmación con sus credenciales de acceso.
              </p>
            </div>
            <div className="w-full p-4 rounded-xl bg-muted/50 border border-border text-left">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Plan</span>
                <span className="font-semibold text-foreground">{plan?.name}</span>
              </div>
              <div className="flex justify-between items-center text-sm mt-2">
                <span className="text-muted-foreground">Monto</span>
                <span className="font-semibold text-foreground">
                  S/ {plan?.price}/{plan?.billing === "annual" ? "mes" : "mes"}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm mt-2">
                <span className="text-muted-foreground">Estado</span>
                <Badge className="bg-emerald-500 text-white text-xs">Activo</Badge>
              </div>
            </div>
            <Button className="w-full" onClick={handleClose}>
              Acceder a la Plataforma
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-lg font-bold">Completar Suscripción</DialogTitle>
              <DialogDescription className="text-sm">
                Plan seleccionado:{" "}
                <span className="font-semibold text-foreground">{plan?.name}</span> —{" "}
                <span className="font-semibold text-primary">
                  S/ {plan?.price}/mes
                </span>
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col gap-5">
              {/* Payment method selection */}
              <div>
                <Label className="text-xs font-semibold tracking-wide text-muted-foreground uppercase mb-3 block">
                  Método de Pago
                </Label>
                <div className="grid grid-cols-4 gap-2">
                  {paymentMethods.map((pm) => (
                    <button
                      key={pm.id}
                      onClick={() => setMethod(pm.id)}
                      className={`flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl border-2 transition-all text-xs font-bold ${
                        method === pm.id
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-border text-muted-foreground hover:border-primary/30 hover:bg-muted/50"
                      }`}
                    >
                      {pm.id === "visa" && (
                        <span className="text-[11px] font-black italic tracking-tight text-blue-700">
                          VISA
                        </span>
                      )}
                      {pm.id === "mastercard" && (
                        <div className="flex -space-x-1.5">
                          <div className="size-4 rounded-full bg-red-500" />
                          <div className="size-4 rounded-full bg-yellow-400" />
                        </div>
                      )}
                      {pm.id === "yape" && (
                        <div className="size-6 rounded-full bg-purple-600 flex items-center justify-center">
                          <span className="text-[9px] font-black text-white">Y</span>
                        </div>
                      )}
                      {pm.id === "plin" && (
                        <div className="size-6 rounded-full bg-emerald-500 flex items-center justify-center">
                          <span className="text-[9px] font-black text-white">P</span>
                        </div>
                      )}
                      <span className="text-[10px]">{pm.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Card form */}
              {(method === "visa" || method === "mastercard") && (
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="cardnum" className="text-sm font-medium">
                      Número de tarjeta
                    </Label>
                    <div className="relative">
                      <Input
                        id="cardnum"
                        placeholder="0000 0000 0000 0000"
                        value={cardNum}
                        onChange={(e) => setCardNum(formatCard(e.target.value))}
                        className="pr-10 font-mono"
                        maxLength={19}
                      />
                      <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="expiry" className="text-sm font-medium">
                        Vencimiento
                      </Label>
                      <Input
                        id="expiry"
                        placeholder="MM / AA"
                        className="font-mono"
                        maxLength={7}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="cvv" className="text-sm font-medium">
                        CVV
                      </Label>
                      <Input
                        id="cvv"
                        placeholder="•••"
                        type="password"
                        className="font-mono"
                        maxLength={4}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Nombre en la tarjeta
                    </Label>
                    <Input id="name" placeholder="Como aparece en la tarjeta" />
                  </div>
                </div>
              )}

              {/* Yape */}
              {method === "yape" && (
                <div className="flex flex-col items-center gap-4">
                  <div className="p-4 rounded-xl bg-purple-50 border border-purple-100 w-full text-center">
                    <div className="mx-auto mb-3 size-32 rounded-lg bg-white border-2 border-purple-200 flex items-center justify-center">
                      <div className="grid grid-cols-5 grid-rows-5 gap-0.5 p-2">
                        {Array.from({ length: 25 }).map((_, i) => (
                          <div
                            key={i}
                            className={`size-3 rounded-sm ${
                              [0,1,2,3,4,5,9,10,14,15,19,20,21,22,23,24,7,11,12,17].includes(i)
                                ? "bg-purple-600"
                                : "bg-transparent"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-purple-800">Escanea con Yape</p>
                    <p className="text-xs text-purple-600 mt-1">o ingresa el número</p>
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <Label htmlFor="yapenum" className="text-sm font-medium">
                      Número de celular Yape
                    </Label>
                    <div className="relative">
                      <Input
                        id="yapenum"
                        placeholder="+51 9XX XXX XXX"
                        className="pl-10"
                      />
                      <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                    </div>
                  </div>
                </div>
              )}

              {/* Plin */}
              {method === "plin" && (
                <div className="flex flex-col items-center gap-4">
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 w-full text-center">
                    <div className="mx-auto mb-3 size-32 rounded-lg bg-white border-2 border-emerald-200 flex items-center justify-center">
                      <div className="grid grid-cols-5 grid-rows-5 gap-0.5 p-2">
                        {Array.from({ length: 25 }).map((_, i) => (
                          <div
                            key={i}
                            className={`size-3 rounded-sm ${
                              [0,4,5,9,10,14,15,19,20,24,2,7,12,17,22,1,3,6,8,11].includes(i)
                                ? "bg-emerald-500"
                                : "bg-transparent"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-emerald-800">Escanea con Plin</p>
                    <p className="text-xs text-emerald-600 mt-1">o ingresa el número</p>
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <Label htmlFor="plinnum" className="text-sm font-medium">
                      Número de celular Plin
                    </Label>
                    <div className="relative">
                      <Input
                        id="plinnum"
                        placeholder="+51 9XX XXX XXX"
                        className="pl-10"
                      />
                      <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                    </div>
                  </div>
                </div>
              )}

              {/* Security note */}
              <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/50 rounded-lg px-3 py-2">
                <Lock className="size-3.5 shrink-0 text-primary/60" />
                <span>Pago seguro con cifrado SSL de 256 bits. Sus datos están protegidos.</span>
              </div>

              {/* Submit */}
              <Button
                className="w-full font-bold"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="size-4 rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground animate-spin" />
                    Procesando pago...
                  </span>
                ) : (
                  `Confirmar Suscripción — S/ ${plan?.price}/mes`
                )}
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}

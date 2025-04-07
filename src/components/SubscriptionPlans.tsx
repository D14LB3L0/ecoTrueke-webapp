import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { subscriptionPlans } from "@/data/subscriptionPlans"
import { ISubsCriptionPlan } from "@/interfaces/subscriptionPlan"
import { useSubscriptionPlans } from "@/hooks/useSubscriptionPlans"

interface ISubscriptionPlans {
    open: boolean
    setOpen: (open: boolean) => void
}

export type subscriptionType = "free" | "premium";

export const SubscriptionPlans = ({ open, setOpen }: ISubscriptionPlans) => {

    const { handlePlanSelect, handleConfirm, selectedPlan } = useSubscriptionPlans({ setOpen });

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="w-full">
                <DialogHeader>
                    <DialogTitle className="text-2xl">Planes de Suscripción</DialogTitle>
                    <DialogDescription className="text-md text-black">
                        Elige un plan para desbloquear el acceso a la plataforma.
                    </DialogDescription>
                </DialogHeader>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    {subscriptionPlans.map((subscriptionPlan: ISubsCriptionPlan) => (
                        <Card
                            onClick={() => handlePlanSelect(subscriptionPlan.type)}
                            className={`border cursor-pointer transition-all duration-200 
                                 ${selectedPlan === subscriptionPlan.type
                                    ? "border-secondary ring-2 ring-primary"
                                    : "border-gray-300"}`}
                        >
                            <CardHeader>
                                <h3 className="text-lg font-bold">{subscriptionPlan.title}</h3>
                                <p className="text-sm text-gray-500">{subscriptionPlan.description}</p>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                                    {subscriptionPlan.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-6">
                    <Button className="w-full" onClick={handleConfirm} disabled={!selectedPlan}>
                        Elegir Plan
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

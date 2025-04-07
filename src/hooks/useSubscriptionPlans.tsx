import { subscriptionType } from "@/components/SubscriptionPlans"
import { useState } from "react"

interface IuseSubscriptionPlans {
    setOpen: (open: boolean) => void;
}

export const useSubscriptionPlans = ({
    setOpen
}: IuseSubscriptionPlans) => {

    const [selectedPlan, setSelectedPlan] = useState<"free" | "premium" | null>(null)


    const handlePlanSelect = (plan: subscriptionType) => {
        setSelectedPlan(plan)
    }

    const handleConfirm = () => {
        if (!selectedPlan) return
        setOpen(false)
    }

    return {
        handlePlanSelect,
        handleConfirm,
        selectedPlan
    }
}

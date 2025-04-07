export interface ISubsCriptionPlan {
    id: string
    type: "free" | "premium"
    title: string
    description: string
    features: readonly string[]
}

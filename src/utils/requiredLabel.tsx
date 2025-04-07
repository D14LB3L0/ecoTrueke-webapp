import { FormLabel } from "@/components/ui/form";

export const RequiredLabel = ({ children }: { children: React.ReactNode }) => (
    <FormLabel className="font-semibold">
        {children}
        <span className="text-red-500 ml-1">*</span>
    </FormLabel>
)

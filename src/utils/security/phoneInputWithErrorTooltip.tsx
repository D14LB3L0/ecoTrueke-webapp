import { AlertCircle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { PhoneInput as BasePhoneInput } from "react-international-phone"
import "react-international-phone/style.css"

interface PhoneInputWithErrorTooltipProps {
    field: {
        name: string;
        value: string;
        onChange: (...event: any[]) => void;
        onBlur: () => void;
    };
    formState: any;
}

export const PhoneInputWithErrorTooltip = ({ field, formState }: PhoneInputWithErrorTooltipProps) => {
    const error = formState.errors?.[field.name]?.message
    const showError = formState.touchedFields?.[field.name] || formState.isSubmitted
    

    return (
        <div className="relative w-full">
            <BasePhoneInput
                defaultCountry="pe"
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                inputClassName="w-full pr-10"
                inputStyle={{
                    border: `1px solid ${showError && error ? "#ef4444" : "#d1d5db"}`, // Tailwind red-500 / gray-300
                    borderTopRightRadius: "0.5rem",
                    borderBottomRightRadius: "0.5rem",
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    height: "38px",
                }}
                countrySelectorStyleProps={{
                    buttonStyle: {
                        borderTopLeftRadius: "0.5rem",
                        borderBottomLeftRadius: "0.5rem",
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0,
                        paddingLeft: "0.5rem",
                        paddingRight: "0.5rem",
                        height: "38px",
                        border: `1px solid ${showError && error ? "#ef4444" : "#d1d5db"}`,
                        borderRight: "none",
                        background: "white",
                    },
                }}
            />

            {showError && error && (
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-destructive cursor-help">
                                <AlertCircle size={18} />
                            </span>
                        </TooltipTrigger>
                        <TooltipContent side="top">
                            <p>{String(error)}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            )}
        </div>
    )
}

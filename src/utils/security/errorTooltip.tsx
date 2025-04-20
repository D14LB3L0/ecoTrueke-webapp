import { FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { AlertCircle } from "lucide-react";

interface InputWithErrorTooltipProps {
    field: any;
    name: string;
    placeholder: string;
    password?: boolean;
    iconPrefix?: React.ReactNode;
}

export const InputWithErrorTooltip = ({
    field,
    name,
    placeholder,
    password = false,
    iconPrefix,
}: InputWithErrorTooltipProps) => {
    const error = field?.formState?.errors?.[name]?.message;

    return (
        <div className="relative">
            <FormControl>
                <Input
                    placeholder={placeholder}
                    {...field}
                    type={password ? "password" : "text"}
                    iconPrefix={iconPrefix}
                    className="pr-12"
                />
            </FormControl>

            {error && (
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-destructive cursor-help">
                                <AlertCircle size={18} />
                            </span>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{String(error)}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            )}
        </div>
    );
};

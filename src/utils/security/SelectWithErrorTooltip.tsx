import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";
import { FormControl } from "@/components/ui/form";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { AlertCircle } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

interface SelectWithErrorTooltipProps {
    field: {
        name: string;
        value: string;
        onChange: (...event: any[]) => void;
        onBlur: () => void;
        ref: React.Ref<any>;
    };
    formState?: any;
    name: string;
    placeholder: string;
    options: {
        label: string;
        value: string;
    }[];
    disabled?: boolean
}

export const SelectWithErrorTooltip = ({
    field,
    formState,
    name,
    placeholder,
    options,
    disabled
}: SelectWithErrorTooltipProps) => {
    const error = formState?.errors?.[name]?.message;

    return (
        <div className="relative w-full">
            <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value} disabled={disabled}>
                <FormControl>
                    <SelectTrigger
                        className={cn("w-full", error && "pr-10")}
                        aria-invalid={!!error}
                    >
                        <SelectValue placeholder={placeholder} />
                    </SelectTrigger>
                </FormControl>
                <SelectContent>
                    {options.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                            {opt.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            {error && (
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-destructive z-10 cursor-help">
                                <AlertCircle size={18} />
                            </span>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="z-50">
                            <p>{String(error)}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            )}

        </div>
    );
};

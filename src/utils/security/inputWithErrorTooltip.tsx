import { FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AlertCircle } from "lucide-react";

interface InputWithErrorTooltipProps {
  field: any;
  name: string;
  placeholder: string;
  password?: boolean;
  iconPrefix?: React.ReactNode;
  type?: string;
}

export const InputWithErrorTooltip = ({
  field,
  name,
  placeholder,
  password = false,
  iconPrefix,
  type,
}: InputWithErrorTooltipProps) => {
  const { formState, ...safeField } = field;
  const error = formState?.errors?.[name]?.message;

  return (
    <div className="relative">
      <FormControl>
        <Input
          placeholder={placeholder}
          {...safeField}
          type={type ?? (password ? "password" : "text")}
          iconPrefix={iconPrefix}
          className={type ?? "pr-12"}
          min={0}
          aria-invalid={!!error}
          onKeyDown={type ? (e) => e.preventDefault() : undefined}
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

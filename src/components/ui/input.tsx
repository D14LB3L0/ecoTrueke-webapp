import * as React from "react"
import { Eye, EyeOff } from "lucide-react"

import { cn } from "@/lib/utils"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  iconPrefix?: React.ReactNode;
}

function Input({ className, type, iconPrefix, onBeforeInput, ...props }: InputProps) {
  const [showPassword, setShowPassword] = React.useState(false)
  const isPassword = type === "password"

  const togglePasswordVisibility = () => setShowPassword(!showPassword)

  const handleBeforeInput = (e: React.FormEvent<HTMLInputElement>) => {
    // Llamar al onBeforeInput externo si lo pasan
    onBeforeInput?.(e)
  }

  return (
    <div className="relative flex w-full items-center">
      {iconPrefix && (
        <div className="absolute left-3 flex items-center pointer-events-none opacity-50 text-muted-foreground">
          {iconPrefix}
        </div>
      )}
      <input
        type={isPassword && showPassword ? "text" : type}
        data-slot="input"
        onBeforeInput={handleBeforeInput}
        className={cn(
          "file:text-foreground placeholder:text-sm placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          iconPrefix && "pl-9",
          className,
        )}
        {...props}
      />
      {isPassword && !props["aria-invalid"] && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-3 text-muted-foreground hover:text-foreground cursor-pointer"
          tabIndex={-1}
        >
          {showPassword ? <EyeOff size={16} aria-hidden="true" /> : <Eye size={16} aria-hidden="true" />}
          <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
        </button>
      )}
    </div>
  )
}

export { Input }



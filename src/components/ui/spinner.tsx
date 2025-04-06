import type * as React from "react"
import { cn } from "@/lib/utils"

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The size of the spinner.
   * @default "default"
   */
  size?: "sm" | "default" | "lg" | "xl"
  /**
   * The variant of the spinner.
   * @default "border"
   */
  variant?: "border" | "dots"
}

/**
 * A spinner component for indicating loading state.
 */
export function Spinner({ className, size = "default", variant = "border", ...props }: SpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    default: "h-6 w-6",
    lg: "h-8 w-8",
    xl: "h-12 w-12",
  }

  if (variant === "dots") {
    return (
      <div
        role="status"
        aria-label="Loading"
        className={cn("flex items-center justify-center space-x-1", className)}
        {...props}
      >
        <div
          className={cn(
            "animate-bounce rounded-full bg-white",
            size === "sm" && "h-1 w-1",
            size === "default" && "h-2 w-2",
            size === "lg" && "h-3 w-3",
            size === "xl" && "h-4 w-4",
          )}
          style={{ animationDelay: "0ms" }}
        />
        <div
          className={cn(
            "animate-bounce rounded-full bg-white",
            size === "sm" && "h-1 w-1",
            size === "default" && "h-2 w-2",
            size === "lg" && "h-3 w-3",
            size === "xl" && "h-4 w-4",
          )}
          style={{ animationDelay: "150ms" }}
        />
        <div
          className={cn(
            "animate-bounce rounded-full bg-white",
            size === "sm" && "h-1 w-1",
            size === "default" && "h-2 w-2",
            size === "lg" && "h-3 w-3",
            size === "xl" && "h-4 w-4",
          )}
          style={{ animationDelay: "300ms" }}
        />
        <span className="sr-only">Loading...</span>
      </div>
    )
  }

  return (
    <div role="status" aria-label="Loading" className={cn("relative", className)} {...props}>
      <div
        className={cn(
          "border-current border-t-transparent rounded-full animate-spin",
          sizeClasses[size],
          "border-4",
          "text-white",
        )}
      />
      <span className="sr-only">Loading...</span>
    </div>
  )
}


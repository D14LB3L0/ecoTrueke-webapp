"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps, toast as sonnerToast } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      richColors 
      toastOptions={{
        classNames: {
          toast: "border rounded-lg shadow-md",
          success: "!bg-white !text-primary border-green-600",
          error: "!bg-white !text-destructive border-red-600",
          warning: "!bg-white !text-yellow-400 border-yellow-600",
          info: "!bg-white !text-blue-400 border-blue-600",
        },
      }}
      {...props}
    />
  )
}

// Re-export toast with the same API
export { Toaster }
export const toast = sonnerToast

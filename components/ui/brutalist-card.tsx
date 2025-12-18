import type React from "react"
import { cn } from "@/lib/utils"

interface BrutalistCardProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "elevated" | "outlined" | "filled"
  hover?: boolean
}

export function BrutalistCard({ children, className, variant = "default", hover = true }: BrutalistCardProps) {
  const baseStyles = "rounded-xl transition-all duration-200"

  const variantStyles = {
    default: "bg-card border border-border shadow-sm",
    elevated: "bg-card shadow-md hover:shadow-lg",
    outlined: "bg-transparent border border-border",
    filled: "bg-primary text-primary-foreground",
  }

  const hoverStyles = hover ? "hover:shadow-md hover:-translate-y-0.5" : ""

  return <div className={cn(baseStyles, variantStyles[variant], hoverStyles, "p-6", className)}>{children}</div>
}

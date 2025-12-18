"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import Link from "next/link"

interface BrutalistButtonProps {
  children: React.ReactNode
  href?: string
  variant?: "primary" | "secondary" | "ghost"
  size?: "default" | "sm" | "lg"
  className?: string
  onClick?: () => void
}

export function BrutalistButton({
  children,
  href,
  variant = "primary",
  size = "default",
  className,
  onClick,
}: BrutalistButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200"

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  const variantStyles = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border",
    ghost: "bg-transparent text-foreground hover:bg-muted",
  }

  const combinedClassName = cn(baseStyles, sizeStyles[size], variantStyles[variant], className)

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  )
}

import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
  subtitle?: string
}

export function SectionHeading({ children, subtitle, className, ...props }: SectionHeadingProps) {
  return (
    <div className="mb-6 text-center space-y-2">
      <h2 
        className={cn("text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-[var(--color-brand-deep)]", className)} 
        {...props}
      >
        {children}
      </h2>
      {subtitle && <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  )
}

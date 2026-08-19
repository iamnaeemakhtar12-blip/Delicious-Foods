import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-focus disabled:pointer-events-none disabled:bg-disabled-bg disabled:text-disabled-text",
  {
    variants: {
      variant: {
        default: "bg-[var(--color-brand-primary)] text-white hover:bg-[var(--color-brand-primary-hover)] active:bg-[var(--color-brand-primary-active)]",
        secondary: "bg-[var(--color-brand-secondary)] text-[var(--color-text-on-yellow)] hover:bg-[var(--color-brand-secondary-hover)] active:bg-[var(--color-brand-secondary-active)]",
        outline: "border border-[var(--color-brand-primary)] bg-transparent text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-soft)]",
        inverse: "bg-white text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-soft)]",
        ghost: "hover:bg-[var(--color-surface-subtle)] hover:text-[var(--color-text-primary)] text-[var(--color-text-secondary)]",
        danger: "bg-[var(--color-error)] text-white hover:bg-[#9a1e14]",
      },
      size: {
        default: "h-11 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-[52px] rounded-md px-8 text-md",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

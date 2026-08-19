"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white group-[.toaster]:text-[var(--color-text-primary)] group-[.toaster]:border-[var(--color-surface-border)] group-[.toaster]:shadow-lg group-[.toaster]:rounded-xl font-sans",
          description: "group-[.toast]:text-[var(--color-text-secondary)]",
          actionButton:
            "group-[.toast]:bg-[var(--color-brand-primary)] group-[.toast]:text-white",
          cancelButton:
            "group-[.toast]:bg-[var(--color-surface-subtle)] group-[.toast]:text-[var(--color-text-secondary)]",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }

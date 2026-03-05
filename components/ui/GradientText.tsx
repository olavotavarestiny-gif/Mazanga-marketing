import { cn } from '@/lib/utils'

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  variant?: 'hero' | 'brand' | 'tech'
}

export default function GradientText({ children, className, variant = 'hero' }: GradientTextProps) {
  const variantClass = {
    hero: 'gradient-text',
    brand: 'gradient-text-brand',
    tech: 'gradient-text',
  }[variant]

  return (
    <span className={cn(variantClass, className)}>
      {children}
    </span>
  )
}

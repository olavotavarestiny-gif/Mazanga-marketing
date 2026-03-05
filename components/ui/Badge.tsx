import { cn } from '@/lib/utils'

type BadgeVariant = 'gateway' | 'core' | 'premium' | 'default' | 'tech' | 'success'

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
}

const variants: Record<BadgeVariant, string> = {
  gateway: 'border-brand-orange/40 text-brand-orange bg-brand-orange/10',
  core: 'border-brand-blue/40 text-brand-blue bg-brand-blue/10',
  premium: 'border-brand-purple/40 text-brand-purple bg-brand-purple/10',
  default: 'border-white/20 text-text-secondary bg-white/5',
  tech: 'border-brand-blue/40 text-brand-blue bg-brand-blue/10',
  success: 'border-green-500/40 text-green-400 bg-green-500/10',
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-display font-600 uppercase tracking-widest border',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}

import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
  as?: 'section' | 'div' | 'article'
}

export default function SectionWrapper({
  children,
  className,
  id,
  as: Tag = 'section',
}: SectionWrapperProps) {
  return (
    <Tag id={id} className={cn('w-full px-4 sm:px-6 lg:px-8', className)}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </Tag>
  )
}

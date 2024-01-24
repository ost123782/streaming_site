import {ButtonHTMLAttributes} from 'react'
import {cva, VariantProps} from 'class-variance-authority'
import {cn} from '../../utils/ui.ts'



const buttonVariants = cva('',
    {
  variants: {
    variant: {
      default: 'bg-blue-600 text-white'
    },
    size: {
      default: 'p-2'
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
})

interface IButtonProps
    extends  ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {}

function Button({className, size, variant, ...props} : IButtonProps) {
  return (
    <button className={cn(buttonVariants({variant, size, className}))} {...props} />
  )
}

export default  Button
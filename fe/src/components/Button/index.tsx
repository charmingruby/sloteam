interface ButtonProps {
  children: React.ReactElement
  variant: 'PRIMARY' | 'SECONDARY' | 'DISABLED'
  grow?: boolean
  className?: string
  onClick?: () => void
}

export function Button({ children, variant, grow = false, className, onClick }: ButtonProps) {
  const variantStyle =
    variant === 'PRIMARY'
      ?
      'primary-button'
      :
      (
        variant === 'SECONDARY'
          ?
          'secondary-button'
          :
          'disabled-button'
      );

  return (
    <button
      onClick={onClick}
      className={`${variantStyle} ${className} ${grow ? 'w-full' : 'w-auto'}`}>
      {children}
    </button>
  );
}

interface TitleProps {
  title: string
  subtitle?: string
}

export function Title({ title, subtitle }: TitleProps) {
  return (
    <>
      <small className='font-bold text-primary-main uppercase'>
        {subtitle}
      </small>
      <h2 className='font-semibold'>
        {title}
      </h2>
    </>
  );
}

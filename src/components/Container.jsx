import clsx from 'clsx'

export function Container({ className, children, ...props }) {
  return (
    <div className={clsx('lg:px-8', className)} {...props}>
      <div className="mx-auto px-4 lg:max-w-7xl">{children}</div>
    </div>
  )
}

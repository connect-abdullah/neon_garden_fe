// Centered max-width wrapper used across the site.
export default function Container({ className = '', children, as: Tag = 'div', ...rest }) {
  return (
    <Tag className={`mx-auto w-full max-w-container px-5 sm:px-6 ${className}`} {...rest}>
      {children}
    </Tag>
  )
}

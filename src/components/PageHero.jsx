import Hero from './Hero.jsx'

// Standardized inner-page hero — fixed height, gradient background, breadcrumb.
export default function PageHero({ breadcrumb, eyebrow, title, subtitle, children }) {
  return (
    <Hero
      variant="page"
      eyebrow={eyebrow}
      title={title}
      subtitle={subtitle}
      showBreadcrumb
      breadcrumbItems={[{ label: 'Home', to: '/' }, { label: breadcrumb }]}
    >
      {children}
    </Hero>
  )
}

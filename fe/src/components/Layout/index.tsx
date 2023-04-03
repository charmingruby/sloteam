import { Footer } from '../Footer';
import { Header } from '../Header';
import { SEO } from '../SEO';

interface LayoutProps {
  SEOMessage: string
  children: React.ReactElement
  defaultHeader?: boolean
  hasFooter?: boolean
}

export function Layout({ SEOMessage, children, defaultHeader = false, hasFooter = true }: LayoutProps) {
  return (
    <>
      <SEO
        message={SEOMessage}
      />

      {
        defaultHeader && (
          <Header />
        )
      }

      <main>
        {children}
      </main>

      {
        hasFooter && (
          < Footer />
        )
      }
    </>
  );
}

import { ThemeToggle } from './theme-toggle'

export function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-border">
      <div className="mx-auto grid max-w-4xl grid-cols-1 items-center justify-items-center gap-4 px-6 py-6 text-sm text-muted-foreground md:grid-cols-[1fr_auto_1fr] md:px-8">
        <div className="order-2 md:order-1 md:justify-self-start">
          <ThemeToggle />
        </div>
        <span className="order-1 text-center md:order-2">
          Portfolio shell — add your content when ready.
        </span>
        <span className="order-3 text-center md:justify-self-end md:text-right">
          &copy; {new Date().getFullYear()} Your Name
        </span>
      </div>
    </footer>
  )
}

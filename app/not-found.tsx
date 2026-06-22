import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 pt-20 pb-16 sm:px-8">
        <h1 className="text-3xl font-semibold tracking-tight">404</h1>
        <p className="mt-4 text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded border border-border px-4 py-2 text-sm text-primary hover:border-primary hover:no-underline"
        >
          Go home
        </Link>
      </div>
    </div>
  )
}

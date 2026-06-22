export function CurrentlyWorking({ blurb }: { blurb: string }) {
  return (
    <div className="rounded-lg border border-border bg-muted/30 p-4">
      <p className="leading-relaxed">{blurb}</p>
    </div>
  )
}

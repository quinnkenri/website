const placeholderGroups = [
  { title: 'Category One', items: ['Skill A', 'Skill B', 'Skill C'] },
  { title: 'Category Two', items: ['Skill D', 'Skill E', 'Skill F'] },
  { title: 'Category Three', items: ['Skill G', 'Skill H', 'Skill I'] },
]

export function SkillIcons() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {placeholderGroups.map((group) => (
        <div key={group.title}>
          <h3 className="mb-3 text-sm font-medium text-foreground">
            {group.title}
          </h3>
          <ul className="grid grid-cols-3 gap-2">
            {group.items.map((item) => (
              <li
                key={item}
                className="flex size-20 flex-col items-center justify-center gap-1 rounded-lg border border-border bg-card/40 p-2 text-center"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded bg-muted text-[10px] font-medium text-muted-foreground">
                  ?
                </div>
                <span className="line-clamp-2 text-[10px] leading-tight text-muted-foreground">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <p className="col-span-full text-xs italic text-muted-foreground">
        Replace placeholder skills with your own icons and labels.
      </p>
    </div>
  )
}

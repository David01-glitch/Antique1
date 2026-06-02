// Renders an array of content blocks ({ h }, { p }, { ul }) as semantic HTML.
export default function Blocks({ blocks }) {
  return (
    <div className="prose-readable">
      {blocks.map((b, i) => {
        if (b.h) return <h3 key={i}>{b.h}</h3>
        if (b.ul)
          return (
            <ul key={i}>
              {b.ul.map((li, j) => (
                <li key={j}>{li}</li>
              ))}
            </ul>
          )
        return <p key={i}>{b.p}</p>
      })}
    </div>
  )
}

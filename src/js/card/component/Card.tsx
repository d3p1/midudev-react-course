/**
 * @description Card
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
export default function Card() {
  return (
    <article>
      <section>
        <img src="https://unavatar.io/midudev" alt="Profile picture" />
      </section>
      <section>
        <h2>Name Lastname</h2>
        <span>@username</span>
      </section>
      <aside>
        <button>Follow</button>
      </aside>
    </article>
  )
}

/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
export default function App() {
  return (
    <div className="flex flex-col gap-12 w-1/2 h-full">
      <form className="flex flex-col justify-center gap-6 bg-primary-600 p-8 rounded-2xl w-full">
        <input
          type="text"
          placeholder="Title"
          className="bg-primary-700 text-secondary p-6 rounded-2xl placeholder:text-secondary placeholder:italic"
        />
        <textarea
          placeholder="Message"
          className="bg-primary-700 text-secondary p-6 rounded-2xl placeholder:text-secondary placeholder:italic"
        />
        <button
          type="submit"
          className="bg-secondary text-primary-900 font-black p-4 rounded-2xl cursor-pointer"
        >
          Save
        </button>
      </form>

      <ul className="w-full flex flex-col gap-8 justify-center items-center">
        <li className="flex flex-col gap-4 justify-center items-center bg-primary-700 p-8 rounded-2xl">
          <h3 className="text-lg font-black bg-primary-600 p-4 rounded-2xl">
            Title 1
          </h3>
          <p className="italic text-sm bg-primary-600 p-4 rounded-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid
            amet, autem commodi cum, dignissimos eligendi, libero provident
            ratione rem repellat rerum saepe voluptate voluptatem voluptatibus.
            A accusantium ad adipisci alias architecto aspernatur atque
            consectetur culpa deleniti dicta dignissimos dolores earum eligendi
            esse exercitationem explicabo id illum laborum nesciunt nobis
            officia omnis optio pariatur perferendis, quam qui quidem quis quos
            reiciendis repellendus reprehenderit sapiente sit tempora temporibus
            velit voluptas voluptates. Atque commodi cumque, dolorem esse et
            fugit hic iusto, pariatur praesentium totam velit veritatis? Cumque
            eius fugiat impedit iusto non, omnis placeat quibusdam rem.
            Consequuntur excepturi laudantium nam quaerat vitae.
          </p>
        </li>
        <li className="flex flex-col gap-4 justify-center items-center bg-primary-700 p-8 rounded-2xl">
          <h3 className="text-lg font-black bg-primary-600 p-4 rounded-2xl">
            Title 2
          </h3>
          <p className="italic text-sm bg-primary-600 p-4 rounded-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
            est, ipsum magnam mollitia quod reiciendis! Cum labore saepe
            temporibus voluptas. Ad aspernatur at beatae culpa deserunt eius ex,
            explicabo iure iusto natus nemo officia porro quis reiciendis
            repellat soluta suscipit tempora tenetur veniam veritatis vitae
            voluptatibus voluptatum. Aut, beatae, possimus.
          </p>
        </li>
      </ul>
    </div>
  )
}

import { colorRating, rating } from "../utils/utils";

export const Cards = ({games}) =>{

  const spanDetailsStyle =
		"rating flex absolute left-[-100%] group-hover:left-1 duration-300 ";

  return(
    games &&
      games.results.map((game) => {
        return (
          <div key={game.id} className="card-wrapper relative">
            <span className="rate-tag" hidden={game.rating === 0}>
              <div
                className={
                  "tag-edge-top " + colorRating[Math.floor(game.rating)][1]
                }
              ></div>
              <div
                className={
                  "tag-edge-bottom " +
                  colorRating[Math.floor(game.rating)][1]
                }
              ></div>
              <span className={colorRating[Math.floor(game.rating)][0]}>
                {rating[Math.floor(game.rating) - 1]}
              </span>
            </span>
            <div className="card group overflow-hidden border-spacing-3 flex flex-col text-[.8rem] text-gray-950 bg-[#ffffffd3] rounded-sm">
              <img
                className="card-background duration-300"
                src={game.background_image}
                alt="Image"
              ></img>

              <span
                className={`absolute top-0 w-full h-[100%] group-hover:h-14 flex items-center justify-center text-xl text-center  pl-1 pr-1 text-[#ffffffde] bg-[#00000081] group-hover:bg-[#000000] group-hover:top-[57%] duration-300 `}
              >
                {game.name}
              </span>

              <span
                className={
                  spanDetailsStyle + "bottom-[4.5rem] delay-[100ms]"
                }
              >
                Rating:&nbsp;
                {game.rating}
              </span>

              <span
                className={spanDetailsStyle + "bottom-[3rem] delay-[200ms]"}
              >
                Gendre:
                {/* {game.genres.map((genre) => {
                  return genre.name + " ";
                })} */}
                {/* {showActualGenre(game.genres)} */}
                {/* <span ref={genreRef}></span> */}
              </span>

              <span
                className={
                  spanDetailsStyle + "bottom-[1.5rem] delay-[300ms]"
                }
              >
                Released: {game.released}
              </span>

              <span className={spanDetailsStyle + "bottom-0 delay-[400ms]"}>
                Price: $60
              </span>
            </div>
          </div>
        );
      })
  )
}
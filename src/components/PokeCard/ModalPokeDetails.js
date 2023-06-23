import { POKEMONTYPECOLORS } from "../../const/pokemon-type-colors";
import { STATSCOLORS } from "../../const/stats-colors";
export const ModalPokeDetails = ({
  id,
  name,
  height,
  moves,
  types,
  stats,
  weight,
  sprites,
  setShowModal,
}) => {
  const filterMoves = () => {
    const newMoves = moves.map((current, index) => ({
      move: current.move.name,
    }));
    return newMoves.sort(() => Math.random() - 0.5).slice(0, 4);
  };
  const filteredMoves = filterMoves();

  const getPokemonTypeColor = (type) => {
    const color = POKEMONTYPECOLORS[type];
    return { color: "#ffffff", backgroundColor: color, borderColor: "#ffffff" };
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="w-auto my-6 mx-auto max-w-md">
          <div className="pb-8 border-0 rounded-lg shadow-lg flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-center justify-center rounded-t">
              <div className="flex justify-center w-full"></div>
              <button
                className="m-2 p-4 bg-red-400 border-0 text-black float-right text-3xl leading-none font-semibold rounded-full shadow-lg outline-none focus:outline-none ml-auto hover:bg-red-500"
                onClick={() => setShowModal(false)}
              >
                <span className="flex justify-center items-center bg-transparent text-white h-6 w-6 text-2xl block outline-none focus:outline-none">
                  X
                </span>
              </button>
            </div>
            <div className="p-6 overflow-y-auto flex flex-wrap">
              <div className="w-full flex flex-wrap justify-center divide-x-2 divide-gray-300">
                <img className="w-1/2" src={sprites.front_default} />
                {sprites.front_shiny && (
                  <img className="w-1/2" src={sprites.front_shiny}></img>
                )}
              </div>
              <div className="w-full mt-8 flex justify-center">
                <h3 className="text-3xl font-semibold capitalize">{`${name} - #${String(
                  id
                ).padStart(3, 0)}`}</h3>
              </div>
              <div className="w-full flex flex-wrap justify-center">
                {types.map((value, index) => (
                  <p
                    key={index}
                    className="w-1/4 my-4 py-1 mx-2 text-md leading-relaxed text-center rounded-full border-double border-4"
                    style={getPokemonTypeColor(value.type.name)}
                  >
                    {value.type.name}
                  </p>
                ))}
              </div>
              <div className="w-full flex flex-wrap justify-center text-center border-b-2">
                <p className="w-1/3 my-4 text-slate-500 text-md leading-relaxed">
                  Height: {height / 10} m
                </p>
                <p className="w-1/3 my-4 text-slate-500 text-md leading-relaxed">
                  Weight: {weight / 10} kg
                </p>
              </div>
              <div className="w-full flex flex-wrap">
                <p className="w-full mt-4 mb-2 pb-2 text-gray-700 text-xl leading-relaxed text-center border-b-2">
                  Move Set:
                </p>
                <div className="w-full flex flex-wrap text-center justify-center items-center px-2">
                  {filteredMoves.map((current, index) => (
                    <p
                      key={index}
                      className="w-1/2 -mb-1 p-1 text-white text-md font-bold leading-relaxed bg-gray-700 border-4 rounded-lg border-white"
                    >
                      {current.move}
                    </p>
                  ))}
                </div>
              </div>
              <div className="w-full mt-8 flex flex-wrap text-center justify-center">
                <p className="w-full mt-4 mb-2 pb-2 text-gray-700 text-xl leading-relaxed text-center border-b-2">
                  Stats:
                </p>
                {stats.map((current, index) => (
                  <div
                    key={index}
                    className="w-1/6 px-2 pb-2 flex flex-wrap text-white border-white border-4 rounded-xl"
                    style={{ backgroundColor: `${STATSCOLORS[index].color}` }}
                  >
                    <p className="w-full my-1 text-gray-700 text-xs font-semibold">
                      {current.base_stat}
                    </p>
                    <p className="w-full text-gray-700 text-xs font-semibold">
                      {STATSCOLORS[index].name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

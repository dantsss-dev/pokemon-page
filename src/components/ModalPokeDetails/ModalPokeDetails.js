import { useState } from "react";
import { POKEMON_TYPE_COLORS } from "../../constants/pokemon-type-colors";
import { STATS_COLORS } from "../../constants/stats-colors";
import Link from "next/link";

export const ModalPokeDetails = ({
  id,
  name,
  height,
  moves,
  types,
  stats,
  weight,
  sprites,
}) => {
  const [showShiny, setShowShiny] = useState(false);
  const filterMoves = () => {
    const newMoves = moves.map((current, index) => ({
      move: current.move.name,
    }));
    return newMoves.sort(() => Math.random() - 0.5).slice(0, 4);
  };
  const filteredMoves = filterMoves();

  const getPokemonTypeColor = (type) => {
    const color = POKEMON_TYPE_COLORS[type];
    return { color: "#ffffff", backgroundColor: color, borderColor: "#ffffff" };
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="w-auto mx-auto max-w-6xl">
          <div className="mt-20 pb-8 border-0 rounded-lg shadow-lg flex flex-col w-full bg-white outline-none focus:outline-none">
            <Link
              className="mt-2 mr-2 p-3 bg-red-400 border-0 text-black float-right text-3xl leading-none font-semibold rounded-full shadow-lg outline-none focus:outline-none ml-auto hover:bg-red-500"
              href={"/"}
            >
              <span className="flex justify-center items-center bg-transparent text-white text-2xl block outline-none focus:outline-none">
                {"<-"} Go Back
              </span>
            </Link>
            <div className="flex items-center justify-center rounded-t">
              <div className="flex flex-col justify-center w-full">
                <div className="w-full mt-4 flex justify-center">
                  <h3 className="text-2xl font-semibold capitalize">{`${name} - #${String(
                    id
                  ).padStart(3, 0)}`}</h3>
                </div>
              </div>
            </div>
            <div className="p-6 overflow-y-auto flex flex-col sm:flex-row justify-between items-center">
              <div className="w-full h-full sm:w-1/3 flex flex-col justify-center items-center">
                {!showShiny ? (
                  <img className="w-1/2" src={sprites.front_default} />
                ) : (
                  <img className="w-1/2" src={sprites.front_shiny} />
                )}
                {sprites.front_shiny && (
                  <button
                    className=" w-full sm:w-1/2 items-center transition duration-500 ease-out bg-transparent hover:bg-gray-700 text-gray-700 font-semibold hover:text-white container mx-auto py-2 border border-gray-700 hover:border-transparent rounded  "
                    onClick={() => setShowShiny((prev) => !prev)}
                  >
                    See {showShiny ? "Normal" : "Shiny"}
                  </button>
                )}
              </div>
              <div className="w-full h-full sm:w-1/3 flex flex-col">
                <div className="w-full flex flex-wrap justify-center text-center border-b-2">
                  <p className="w-1/3 my-4 text-slate-500 text-md leading-relaxed">
                    Height: {height / 10} m
                  </p>
                  <p className="w-1/3 my-4 text-slate-500 text-md leading-relaxed">
                    Weight: {weight / 10} kg
                  </p>
                </div>
                <div className="w-full flex flex-wrap">
                  <p className="w-full mt-4 mb-2 pb-2 text-gray-700 text-xl leading-relaxed text-center">
                    Move Set:
                  </p>
                  <div className="w-full flex flex-wrap text-center justify-center items-center px-2">
                    {filteredMoves.map((current, index) => (
                      <p
                        key={index}
                        className="w-1/2 p-1 text-white text-md font-bold bg-gray-700 border-4 rounded-lg border-white"
                      >
                        {current.move}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full h-full sm:w-1/4 flex flex-col">
                <div className="w-full flex flex-wrap justify-center">
                  {types.map((value, index) => (
                    <p
                      key={index}
                      className="w-1/3 my-1 py-1 mx-2 text-md leading-relaxed text-center rounded-full border-double border-4"
                      style={getPokemonTypeColor(value.type.name)}
                    >
                      {value.type.name}
                    </p>
                  ))}
                </div>
                <div className="w-full mt-2 flex flex-wrap text-center justify-center">
                  <p className="w-full mb-2 pb-2 text-gray-700 text-xl leading-relaxed text-center border-b-2">
                    Stats:
                  </p>
                  {stats.map((current, index) => (
                    <div
                      key={index}
                      className="w-1/3 px-2 pb-2 flex flex-wrap text-white border-white border-4 rounded-xl"
                      style={{
                        backgroundColor: `${STATS_COLORS[index].color}`,
                      }}
                    >
                      <p className="w-full my-1 text-gray-700 text-xs font-semibold">
                        {current.base_stat}
                      </p>
                      <p className="w-full text-gray-700 text-xs font-semibold">
                        {STATS_COLORS[index].name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

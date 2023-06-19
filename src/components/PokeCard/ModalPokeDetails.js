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
  getPokemonTypeColor,
}) => {
  const filterMoves = () => {
    const newMoves = moves.map((current, index) => ({
      move: current.move.name,
    }));
    return newMoves.sort(() => Math.random() - 0.5).slice(0, 4);
  };
  const filteredMoves = filterMoves();

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-center justify-center rounded-t">
              <div className="flex justify-center w-full"></div>
              <button
                className="p-1 bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none ml-auto"
                onClick={() => setShowModal(false)}
              >
                <span className="flex justify-center items-center bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                  x
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              {/*Images*/}
              <div>
                <img src={sprites.front_default} />
                <img src={sprites.front_shiny}></img>
              </div>
              {/*Name of the Pokemon*/}
              <div>
                <h3 className="text-3xl font-semibold capitalize">{`${name} - #${String(
                  id
                ).padStart(3, 0)}`}</h3>
              </div>
              {/*Types*/}
              <div className="flex">
                {types.map((value, index) => {
                  return (
                    <p
                      key={index}
                      className="my-4 text-lg leading-relaxed"
                      style={getPokemonTypeColor(value.type.name)}
                    >
                      {value.type.name}
                    </p>
                  );
                })}
              </div>
              {/*Weight and Height*/}
              <div className="flex">
                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                  Height: {height / 10} m
                </p>
                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                  Weight: {weight / 10} kg
                </p>
              </div>
              {/*Moveset*/}
              <div>
                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                  Move Set:
                </p>
                <div>
                  {filteredMoves.map((current, index) => {
                    return (
                      <p
                        key={index}
                        className="my-4 text-slate-500 text-lg leading-relaxed"
                      >
                        {current.move}
                      </p>
                    );
                  })}
                </div>
              </div>
              {/*General Stats*/}
              <div>
                {stats.map((current, index) => {
                  return (
                    <p
                      key={index}
                      className="my-4 text-slate-500 text-lg leading-relaxed"
                    >
                      {current.stat.name}: {current.base_stat}
                    </p>
                  );
                })}
              </div>
            </div>
            {/*footer*/}
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

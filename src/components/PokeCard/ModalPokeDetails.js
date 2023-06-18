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
  console.log(sprites);
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-center justify-center p-5  rounded-t">
              <div className="flex justify-center w-full">
                <h3 className="text-3xl font-semibold capitalize">{name}</h3>
              </div>
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
              <div>
                <img src={sprites.front_default} />
              </div>
              <div>
                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                  Height: {height / 10} m
                </p>
                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                  Weight: {weight / 10} kg
                </p>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

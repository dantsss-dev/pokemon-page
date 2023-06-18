export const PokeCards = ({ name, index }) => {
  <div className="w-1/3 p-2">
    <div className="max-w-sm mx-auto rounded shadow-lg text-gray-700 text-center bg-gray-100 px-4">
      <div className="flex pt-4">
        <img
          className="w-1/2 rounded-l-lg border border-gray-700 bg-white"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            index + 1
          }.png`}
          alt="Pokemon"
        />
        <img
          className="w-1/2 -ml-1 rounded-r-lg border border-gray-700 bg-white"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${
            index + 1
          }.png`}
          alt="Pokemon back"
        />
      </div>
      <div className="flex items-center px-6 py-4">
        <div className="w-3/4 font-bold text-xl capitalize">
          {`${name} - #${String(index + 1).padStart(3, 0)}`}
        </div>
        <button className="w-1/4 transition duration-500 ease-out bg-transparent hover:bg-gray-700 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded">
          More
        </button>
      </div>
    </div>
  </div>;
};

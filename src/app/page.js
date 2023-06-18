"use client";
import { useState, useEffect } from "react";
import { PokeCard } from "../components/PokeCard/PokeCard";
import { ModalPokeDetails } from "../components/PokeCard/ModalPokeDetails";
export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const onRequestPokemons = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=30&offset=0",
        {
          method: "GET",
        }
      );
      const responseParsed = await response.json();
      setPokemons(responseParsed.results);
      setIsLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    onRequestPokemons();
  }, []);

  return (
    <div className="content-center">
      {isLoading ? (
        <div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-gray-400 h-12 w-12"></div>
            <div className="flex-1 space-y-4 py-1">
              <div className="h-4 bg-gray-400 rounded w-3/4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-400 rounded"></div>
                <div className="h-4 bg-gray-400 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex content-center flex-wrap bg-gray-200">
          {pokemons.map((pokemon, index) => (
            <PokeCard key={index} {...pokemon} index={index} />

            // <div key={`${pokemon.name}-${index}`} className="w-1/3 p-2">
            //   <div className="max-w-sm mx-auto rounded shadow-lg text-gray-700 text-center bg-gray-100 px-4">
            //     <div className="flex pt-4">
            //       <img
            //         className="w-1/2 rounded-l-lg border border-gray-700 bg-white"
            //         src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            //           index + 1
            //         }.png`}
            //         alt="Pokemon"
            //       />
            //       <img
            //         className="w-1/2 -ml-1 rounded-r-lg border border-gray-700 bg-white"
            //         src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${
            //           index + 1
            //         }.png`}
            //         alt="Pokemon back"
            //       />
            //     </div>
            //     <div className="flex items-center px-6 py-4">
            //       <div className="w-3/4 font-bold text-xl capitalize">
            //         {`${pokemon.name} - #${String(index + 1).padStart(3, 0)}`}
            //       </div>
            //       <button
            //         className="w-1/4 transition duration-500 ease-out bg-transparent hover:bg-gray-700 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded"
            //         onClick={() => setShowModal(true)}
            //       >
            //         More
            //       </button>
            //     </div>
            //   </div>
            // </div>
          ))}
        </div>
      )}
    </div>
  );
}

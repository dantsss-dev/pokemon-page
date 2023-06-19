"use client";
import { useState, useEffect } from "react";
import { PokeCard } from "../components/PokeCard/PokeCard";
import { ModalPokeDetails } from "../components/PokeCard/ModalPokeDetails";
import { colors } from "../utils/validations/pokemon-type-colours";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [morePokemons, setMorePokemons] = useState(null);

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
      setMorePokemons(responseParsed.next);
      setIsLoading(false);
    } catch (error) {}
  };

  const onRequestMorePokemons = async (url) => {
    try {
      const response = await fetch(url, {
        method: "GET",
      });
      const responseParsed = await response.json();
      setPokemons([...pokemons, ...responseParsed.results]);
      setMorePokemons(responseParsed.next);
    } catch (error) {}
  };

  const onRequestPokemonDetails = async (url) => {
    try {
      const response = await fetch(url, {
        method: "GET",
      });
      const responseParsed = await response.json();
      setPokemonDetails(responseParsed);
      setShowModal(true);
    } catch (error) {}
  };

  const getPokemonTypeColor = (type) => {
    const color = colors[type];
    return { color: "#ffffff", backgroundColor: color, borderColor: "#ffffff" };
  };

  useEffect(() => {
    onRequestPokemons();
  }, []);

  return (
    <div>
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
        <div className="bg-gray-200">
          <div className="flex flex-wrap">
            {pokemons.map((pokemon, index) => (
              <PokeCard
                key={index}
                {...pokemon}
                index={index}
                onRequestPokemonDetails={onRequestPokemonDetails}
              />
            ))}
          </div>
          <div className="flex py-8 justify-center">
            <div className="w-full sm:w-1/3 p-2 flex justify-center">
              <button
                className="max-w-sm container mx-auto py-2 px-4  shadow-lg transition duration-500 ease-out bg-white hover:bg-gray-700 text-gray-700 font-semibold hover:text-white border border-gray-700 hover:border-transparent rounded "
                onClick={() => {
                  onRequestMorePokemons(morePokemons);
                }}
              >
                Show More Pokemos
              </button>
            </div>
          </div>
        </div>
      )}
      {showModal && (
        <ModalPokeDetails
          key={pokemonDetails.id}
          {...pokemonDetails}
          setShowModal={setShowModal}
          getPokemonTypeColor={getPokemonTypeColor}
        />
      )}
    </div>
  );
}

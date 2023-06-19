"use client";
import { useState, useEffect } from "react";
import { PokeCard } from "../components/PokeCard/PokeCard";
import { ModalPokeDetails } from "../components/PokeCard/ModalPokeDetails";
import { SkeletonCard } from "../components/PokeCard/SkeletonCard";
import { colors } from "../utils/validations/pokemon-type-colours";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [morePokemons, setMorePokemons] = useState(null);
  const [isError, setIsError] = useState(false);

  const onRequestPokemons = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokeon?limit=30&offset=0",
        {
          method: "GET",
        }
      );
      const responseParsed = await response.json();
      setPokemons(responseParsed.results);
      setMorePokemons(responseParsed.next);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };

  const onRequestMorePokemons = async (url) => {
    try {
      const response = await fetch(url, {
        method: "GET",
      });
      const responseParsed = await response.json();
      setPokemons([...pokemons, ...responseParsed.results]);
      setMorePokemons(responseParsed.next);
    } catch (error) {
      setIsError(true);
    }
  };

  const onRequestPokemonDetails = async (url) => {
    try {
      const response = await fetch(url, {
        method: "GET",
      });
      const responseParsed = await response.json();
      setPokemonDetails(responseParsed);
      setShowModal(true);
    } catch (error) {
      setIsError(true);
    }
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
      {isError ? (
        <div className="mt-24 flex justify-center items-center text-black font-bold text-center text-6xl">
          <h1>THERE WAS A PROBLEM.</h1>
          <h1>We are working on it.</h1>
        </div>
      ) : (
        <div>
          {isLoading ? (
            <div className="flex flex-wrap justify-center items-center">
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
          ) : (
            <div className="bg-gray-200">
              <div className="w-full bg-red-500 text-center py-6 mb-8 text-gray-100">
                <h1 className="text-3xl font-bold">Pokemon List</h1>
              </div>
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
      )}
    </div>
  );
}

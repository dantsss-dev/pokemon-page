"use client";
import { useState, useEffect } from "react";
import { PokeCard } from "../components/PokeCard/PokeCard";
import { ModalPokeDetails } from "../components/PokeCard/ModalPokeDetails";
export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState([]);
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
        <div className="flex flex-wrap bg-gray-200">
          {pokemons.map((pokemon, index) => (
            <PokeCard
              key={index}
              {...pokemon}
              index={index}
              onRequestPokemonDetails={onRequestPokemonDetails}
            />
          ))}
        </div>
      )}
      {showModal && (
        <ModalPokeDetails
          key={pokemonDetails.id}
          {...pokemonDetails}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
}

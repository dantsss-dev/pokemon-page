"use client";
import { useState, useEffect } from "react";
export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onRequestPokemons = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon", {
        method: "GET",
      });
      const responseParsed = await response.json();
      setPokemons(responseParsed.results);
      setIsLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    onRequestPokemons();
  }, []);

  return (
    <div className="container mx-auto">
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
        <div className="container">
          {pokemons.map((pokemon, index) => (
            <div key={`${pokemon.name}-${index}`}>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  index + 1
                }.png`}
              />
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${
                  index + 1
                }.png`}
              />
              <h2>{pokemon.name}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

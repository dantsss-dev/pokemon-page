"use client";
import { ModalPokeDetails } from "@/components/ModalPokeDetails/ModalPokeDetails";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function page() {
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);
  const params = useParams();

  const onRequestPokemonDetails = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${params.pokemon}`,
        {
          method: "GET",
        }
      );
      const responseParsed = await response.json();
      setPokemonDetails(responseParsed);
      setIsLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    onRequestPokemonDetails();
  }, []);

  return (
    <div>
      {isLoading ? (
        <></>
      ) : (
        <ModalPokeDetails key={pokemonDetails.id} {...pokemonDetails} />
      )}
    </div>
  );
}

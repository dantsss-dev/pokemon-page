import { PokemonDetails } from "@/components/PokemonDetails/PokemonDetails";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function PokemonSlug() {
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);
  const router = useRouter();

  const onRequestPokemonDetails = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${router.query.slug}`,
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
        <PokemonDetails key={pokemonDetails.id} {...pokemonDetails} />
      )}
    </div>
  );
}

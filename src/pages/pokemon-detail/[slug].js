import { SkeletonCard } from '@/components/Skeleton/SkeletonCard';
import { POKEMON_TYPE_COLORS } from '@/constants/pokemon-type-colors';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

const PokemonDetail = () => {
	const [types, setTypes] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const router = useRouter();

	const onGetPokemonDetail = useCallback(async () => {
		try {
			const response = await fetch(
				`https://pokeapi.co/api/v2/pokemon/${router.query.slug}`,
				{ method: 'GET' },
			);
			const responseParsed = await response.json();
			console.log(responseParsed);
			setTypes(responseParsed.types);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
		}
	}, [router.query.slug]);

	const getPokemonTypeColor = (type) => {
		const color = POKEMON_TYPE_COLORS[type];
		return { color: '#ffffff', backgroundColor: color, borderColor: '#ffffff' };
	};

	useEffect(() => {
		onGetPokemonDetail();
	}, [onGetPokemonDetail]);

	return (
		<div className="container">
			{isLoading ? (
				<SkeletonCard />
			) : (
				<div className="w-full flex flex-wrap justify-center">
					{types.map((value, index) => (
						<p
							key={index}
							className="w-1/3 my-1 py-1 mx-2 text-md leading-relaxed text-center rounded-full border-double border-4"
							style={getPokemonTypeColor(value.type.name)}
						>
							{value.type.name}
						</p>
					))}
				</div>
			)}
		</div>
	);
};

export default PokemonDetail;

import { useRouter } from 'next/router';

const PokemonDetail = () => {
	const router = useRouter();

	return <h2>Pokemon Detail of {router.query.slug}</h2>;
};

export default PokemonDetail;

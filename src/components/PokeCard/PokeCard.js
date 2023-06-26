import Link from 'next/link';

export const PokeCard = ({ name, index, url, onPressGoToDetail }) => (
	<div className="w-full sm:w-1/3 p-2">
		<div className="max-w-sm mx-auto h-full rounded shadow-lg text-gray-700 text-center bg-gray-100 px-4">
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
			<div className="flex flex-wrap items-center text-center justify-center px-1 py-4">
				<div className="md:w-3/4 font-bold capitalize py-2">
					{`${name} - #${String(index + 1).padStart(3, 0)}`}
				</div>
				<Link
					href={{
						pathname: '/pokemon-detail/[slug]',
						query: { slug: name },
					}}
				>
					Detail
				</Link>
			</div>
		</div>
	</div>
);

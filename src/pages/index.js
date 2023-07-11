import HeadData from '@/components/HeadData'
import PokemonList from '@/components/PokemonList'

const Home = () => {
  return (
    <div className="container">
      <HeadData />
      <main className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center h-screen">
          <h1 className="text-4xl font-bold text-white">Pokemon App</h1>
          <PokemonList />
        </div>
      </main>
    </div>
  )
}

export default Home

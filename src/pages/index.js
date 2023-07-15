import HeadData from "@/components/HeadData/";
import PokemonList from "@/components/PokemonList";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <div>
      <HeadData />
      <main className={inter.className}>
        <PokemonList />
      </main>
    </div>
  );
};

export default Home;

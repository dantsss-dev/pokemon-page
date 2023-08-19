import { Button } from '@/components/Button'
import NavBar from '@/components/NavBar'
import Image from 'next/legacy/image'

export default function Home() {
  return (
    <div className="home-container">
      <NavBar />
      <div className="home-content">
        <div className="text-banner-container">
          <div className=" title-banner tracking-wide">
            Find <span className="font-normal">all your favorite</span> Pokemon
          </div>
          <div className="subtitle-banner">
            You can know the type of Pokemon, its strengths, disadvantages and abilities
          </div>
          <Button label="See pokemons" url="/pokedex" />
        </div>
        <div className="image-banner">
          <Image
            src={require('@/assets/svg/BannerComplete.svg')}
            alt="Banner"
            layout="responsive"
          />
        </div>
      </div>
    </div>
  )
}

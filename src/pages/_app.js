import '@/styles/globals.css'
import { store } from '../store'
import { Provider } from 'react-redux'
import { Inter } from 'next/font/google'
import { Karla } from 'next/font/google'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })
const karla = Karla({ subsets: ['latin'], variable: '--font-karla' })
const sourceSansPro = localFont({
  src: '../assets/fonts/SourceSansPro-Regular.otf',
  variable: '--font-pro',
})

function App({ Component, navigationProps, ...rest }) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <Provider store={store}>
      <main className={`${karla.className} ${karla.variable} ${sourceSansPro.variable}`}>
        {getLayout(<Component navigationProps={navigationProps} />)}
      </main>
    </Provider>
  )
}

export default App

import { Provider } from 'react-redux'
import './globals.css'
import { store } from '@/store'
function App({ Component, navigationProps, ...rest }) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <Provider store={store}>{getLayout(<Component navigationProps={navigationProps} />)}</Provider>
  )
}

export default App

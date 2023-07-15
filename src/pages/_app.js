import './globals.css'
import { store } from '../store'
import { Provider } from 'react-redux'

function App({ Component, navigationProps, ...rest }) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <Provider store={store}>{getLayout(<Component navigationProps={navigationProps} />)}</Provider>
  )
}

export default App

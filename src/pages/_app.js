import './globals.css'
function App({ Component, navigationProps, ...rest }) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return <> {getLayout(<Component navigationProps={navigationProps} />)} </>
}

export default App

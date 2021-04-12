import GradientsList from "./components/GradientsList"
import GradientHeader from './components/GradientHeader'
import GradientApp from './components/GradientsApp'
import Footer from './components/Footer'
import { gradients, uniqueTags } from './gradients'

function App() {

  return (
    <>
      <GradientHeader />
      <GradientApp gradients={gradients} uniqueTags={uniqueTags} />
      < Footer />
    </>
  )
}

export default App

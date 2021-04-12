import GradientHeader from './components/GradientHeader'
import GradientApp from './components/GradientsApp'
import Footer from './components/Footer'
import { gradients, uniqueTags } from './gradients'
import { useState } from 'react'


function App() {
const[grad , setGrad] = useState(gradients)
const[tags , setTags] = useState(uniqueTags)



  return (
    <>
      <GradientHeader gradients={grad} />
      <GradientApp gradients={grad} uniqueTags={tags} />
      < Footer />
    </>
  )
}

export default App

import GradientsSelect from "./GradientsSelect"
import GradientsList from "./GradientsList"
import {useState} from "react"


const GradientsApp = () => {
  const[filter, setFilter] = useState("Tous")
  const handleChange = (event) => {
    event.preventDefault()
    setFilter(event.target.value)
    console.log(filter)
  }

  return (
    <main className ="container">
      <h1 className="text-center my-4">Alyra Gradients</h1>
      <GradientsSelect handleChange={handleChange} />
      <GradientsList handleChange={handleChange} filter={filter}/>
    </main>
  )
}

export default GradientsApp
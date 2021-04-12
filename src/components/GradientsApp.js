import GradientsSelect from "./GradientsSelect"
import GradientsList from "./GradientsList"
import {useState} from "react"


const GradientsApp = () => {
  const[filter, setFilter] = useState("Tous")
  
  // const handleClick = (event) => {
  //   event.preventDefault()
  //   setFilter(event.target.value)
    
  // }
  const handleChange = (event) => {
    event.preventDefault()
    setFilter(event.target.value)
 
  }

  return (
    <main className ="container">
      <h1 className="text-center my-4">Alyra Gradients</h1>
      <GradientsSelect handleChange={handleChange} />
      <GradientsList handleChange={handleChange} filter={filter} setFilter={setFilter}/>
    </main>
  )
}

export default GradientsApp
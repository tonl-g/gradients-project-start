import GradientsSelect from "./GradientsSelect"
import GradientsList from "./GradientsList"


const GradientApp = () => {

  return (
    < main className ="container">
      <h1 class="text-center my-4">Alyra Gradients</h1>
      <GradientsSelect />
      < GradientsList/>
    </main>
  )
}

export default GradientApp
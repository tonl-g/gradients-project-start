import GradientsSelect from "./GradientsSelect"
import GradientsList from "./GradientsList"


const GradientApp = (props) => {
  const { gradients, uniqueTags } = props

  return (
    < div className ="container">
      <GradientsSelect
        uniqueTags={uniqueTags} />
      < GradientsList
        gradients={gradients}
        uniqueTags={uniqueTags}
      />
    </div>
  )
}

export default GradientApp
import GradientsSelect from "./GradientsSelect"
import GradientsList from "./GradientsList"

const GradientApp = (props) => {
  const { gradients, uniqueTags } = props

  return (
    <>
      <GradientsSelect
        uniqueTags={uniqueTags} />
      < GradientsList
        gradients={gradients}
        uniqueTags={uniqueTags}
      />
    </>
  )
}

export default GradientApp
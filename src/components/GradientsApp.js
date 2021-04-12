import GradientSelect from "./GradientSelect"
import GradientList from "./GradientList"

const GradientApp = (props) => {
  const { gradients, uniqueTags } = props

  return (
    <>
      <GradientSelect
        uniqueTags={uniqueTags} />
      < GradientsList
        gradients={gradients}
        uniqueTags={uniqueTags}
      />
    </>
  )
}

export default GradientApp
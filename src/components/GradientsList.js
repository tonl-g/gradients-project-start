import Gradient from "./Gradient"
const GradientsList = (props) => {
  const { gradients, uniqueTags } = props
  return (
    <ul className="row list-unstyled">
      {gradients.map(elem =>
        <Gradient
          key={elem.name}
          colorStart={elem.start}
          colorEnd={elem.end}
          name={elem.name}
          tags={elem.tags}
        />
      )}
    </ul>
  )
}

export default GradientsList

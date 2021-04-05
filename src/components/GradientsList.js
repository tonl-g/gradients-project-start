import Gradient from "./Gradient"
const GradientsList = () => {
  return (
    <ul className="row list-unstyled">
      <Gradient
        colorStart="rgb(189, 195, 199)"
        colorEnd="rgb(44, 62, 80)"
        name="Grade Grey"
      />
      <Gradient
        colorStart="rgb(31, 64, 55)"
        colorEnd="rgb(153, 242, 200)"
        name="Harvey"
      />
      <Gradient
        colorStart="rgb(0, 242, 96)"
        colorEnd="rgb(5, 117, 230)"
        name="Rainbow Blue"
      />
      <Gradient
        colorStart="rgb(168, 192, 255)"
        colorEnd="rgb(63, 43, 150)"
        name="Slight Ocean View"
      />
    </ul>
  )
}

export default GradientsList

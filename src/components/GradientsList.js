import Gradient from "./Gradient"
import {gradients} from '../gradients'
const GradientsList = () => {
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

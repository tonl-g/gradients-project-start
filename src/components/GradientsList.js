import Gradient from "./Gradient"
import {gradients} from '../gradients'
const GradientsList = (props) => {
  const {filter,handleChange} =props
  let filteredList = ""
  filter === "Tous" ? filteredList=gradients : filteredList = gradients.filter(el => el.tags.includes(filter))
 
  // filter !== "" ? filtered 


  return (
    <ul className="row list-unstyled">
      {filteredList.map(elem =>
        <Gradient
          key={elem.name}
          colorStart={elem.start}
          colorEnd={elem.end}
          name={elem.name}
          tags={elem.tags}
          handleChange={handleChange}
          filter={filter}

        />
      )}
    </ul>
  )
}

export default GradientsList

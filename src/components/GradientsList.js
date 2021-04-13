import Gradient from "./Gradient"
import {gradients} from '../gradients'

const GradientsList = (props) => {
<<<<<<< HEAD
  const {filter,setFilter} =props
=======
  const {filter,setFilter,handleChange} = props
>>>>>>> 96adb1010af432faba0b7522446d6d5a1f0a5a8c
  let filteredList = ""
  filter === "All" ? filteredList = gradients : filteredList = gradients.filter(el => el.tags.includes(filter))

  return (
    <ul className="row list-unstyled">
      {filteredList.map(elem =>
        <Gradient
          key={elem.name}
          colorStart={elem.start}
          colorEnd={elem.end}
          name={elem.name}
          tags={elem.tags}
          filter={filter}
          setFilter={setFilter}
        />
      )}
    </ul>
  )
}

export default GradientsList

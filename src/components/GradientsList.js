import Gradient from "./Gradient"
import {gradients} from '../gradients'

const GradientsList = (props) => {
  const {filter,setFilter} = props

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

import {uniqueTags} from '../gradients'
import { useState } from "react"

const GradientSelect = () => {
  const [filter, useFilter] = useState("Tous")
  const FilterSelect = (event) => {
    useFilter(event.target.value);
  };

  return (
    <>
      <div className="input-group mb-3"><label className="input-group-text" htmlFor="select">Filtrer par tag</label>
      <select
        className="form-select" key="select">
        <option value="all">Tous</option>
        {uniqueTags.map(tag => <option key={tag} value={tag}>{tag}</option>)}
        onChange={FilterSelect}

      </select>
      </div>
    </>
  )
}
export default GradientSelect
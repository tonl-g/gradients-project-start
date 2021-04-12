import {uniqueTags} from '../gradients'

const GradientsSelect = (props) => {
 const {handleChange,filter} = props
  return (
    <>
      <div className="input-group mb-3"><label className="input-group-text" htmlFor="select">Filtrer par tag</label>
      <select
        className="form-select" key="select"
        onChange={handleChange}
        >
        <option value="All">Tous</option>
        {uniqueTags.map(tag => tag === filter ? <option key={tag} value={tag} selected>{tag}</option> : <option key={tag} value={tag}>{tag}</option>)}
      </select>
      </div>
    </>
  )
}
export default GradientsSelect
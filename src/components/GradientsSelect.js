import {uniqueTags} from '../gradients'

const GradientsSelect = (props) => {
 const {handleChange} = props
  return (
    <>
      <div className="input-group mb-3"><label className="input-group-text" htmlFor="select">Filtrer par tag</label>
      <select
        className="form-select" key="select"
        onChange={handleChange}
        >
        <option value="Tous">Tous</option>
        {uniqueTags.map(tag => <option key={tag} value={tag}>{tag}</option>)}
      </select>
      </div>
    </>
  )
}
export default GradientsSelect
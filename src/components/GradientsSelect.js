const GradientSelect = (props) => {
  const { uniqueTags } = props
  return (
    <>
      <div class="input-group mb-3"><label class="input-group-text" for="select">Filtrer par tag</label><select
        class="form-select" id="select">
        <option value="all">Tous</option>
        {uniqueTags.map(tag => <option value="gris">gris</option>)}

      </select></div>
    </>
  )
}
export default GradientSelect
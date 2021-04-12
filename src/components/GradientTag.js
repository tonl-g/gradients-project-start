const GradientTag = (props) => {
  const {tags,handleChange ,filter} = props

  return(
  <div className="mt-3">
    {tags.map(elem =>
      <button onClick={handleChange} key={elem} type="button" className='btn btn-sm me-2 mb-2 text-light bg-dark'>{elem}</button>
      )}
  </div>
  )
}
export default GradientTag
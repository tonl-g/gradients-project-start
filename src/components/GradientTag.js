const GradientTag = (props) => {
  const {tags,filter,setFilter} = props
  const handleClick = (event) => {
    event.preventDefault()
    setFilter(event.target.textContent)
    console.log(event.target.textContent)
    console.log(filter)
    
  }
 
  return(
  <div className="mt-3">
    {tags.map(elem => elem === filter ? 
    <button onClick={handleClick} key={elem} type="button" className='btn btn-sm me-2 mb-2 text-secondary bg-light'disabled>{elem}</button>
    :
    <button onClick={handleClick} key={elem} type="button" className='btn btn-sm me-2 mb-2 text-light bg-dark'>{elem}</button>
      )}
  </div>
  )
}
export default GradientTag
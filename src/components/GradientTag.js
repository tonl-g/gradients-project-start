const GradientTag = ({ tags }) => {
  return <>
    {tags.map(elem =>
      <button className='btn btn-sm me-2 mb-2 bg-dark text-white'>{elem}</button>
    )}
  </>
}
export default GradientTag
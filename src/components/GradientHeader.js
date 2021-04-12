const Header = (props) => {
  const {gradients} = props
  return (
    <>
      <header className="text-center bg-dark text-white py-5 mb-5"
      style={{"backgroundImage": "linear-gradient(to right, rgb(255, 0, 204), rgb(51, 51, 153))"}}>
        <h1 className="display-1">Alyra Gradients</h1>
        <p className="tagline">Ultime collection de plus beaux dégradés</p>
      </header>
    </>
  )
}

export default Header
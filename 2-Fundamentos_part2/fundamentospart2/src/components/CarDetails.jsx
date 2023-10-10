const CarDetails = ({brand,km,color,newCar}) => {
  return (
    <>
      <h2>Detalhes do carro:</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>KM: {km}</li>
        <li>Color: {color}</li>
      </ul>
      {newCar && <p>Esse carro é novo!</p>}
    </>
  )
}

export default CarDetails
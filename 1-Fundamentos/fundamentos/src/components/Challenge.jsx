const Challenge = () => {
  const a = 2;
  const b = 3;

  const handleSomaValores = () =>{
    return console.log(a+b);
  }

  return(
    <>
      <h3>A soma de {a} + {b} é igual a {a+b}</h3>
      
      <button onClick={handleSomaValores}>Clique para somar</button>
    </>
  )
}

export default Challenge;
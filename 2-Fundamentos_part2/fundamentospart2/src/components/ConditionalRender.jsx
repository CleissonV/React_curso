import { useState } from "react"

const ConditionalRender = () => {
  const [x] = useState(true);
  const [name, setName] = useState("João");

  return (
    <>
      <h1>Isso será exibido?</h1>
      {x && <p>Se X for true, sim</p>}

      <h1>IF ternario</h1>
      {name === "João" ? (
        <div>
          <p>O nome é João</p>
        </div>
      ) : (
        <div>
          <p>Nome não é João, o nome é {name}!</p>
        </div>
      )}
      <button onClick={() => setName("Clei")}>Trocar nome</button>
    </>
  )
}

export default ConditionalRender
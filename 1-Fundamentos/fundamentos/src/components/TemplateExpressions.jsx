const TemplateExpressions = () =>{
  const name = "Matheus";
  const data = {
    age: 31,
    job: "Programmer",
  }

  return(
    <>
      <h1>Olá {name} tudo bem?</h1>
      <h2>Você atua como: {data.job} e tem {data.age} anos</h2>
      <p>{4 + 4}</p>
    </>
  )
}

export default TemplateExpressions;
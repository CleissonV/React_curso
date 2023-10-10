const UserDetails = ({nome, idade, profissao}) => {
  return (
    <div>
      <p>Nome: {nome}</p>
      <p>Idade: {idade}</p>
      <p>Profissão: {profissao}</p>

      {idade >= 18 ? (
        <div>
          <p>Pode tirar Carta</p>
        </div>
      ) : (
        <div>
          <p>Não pode tirar Carta</p>
        </div>
      )}
    </div>
  )
}

export default UserDetails
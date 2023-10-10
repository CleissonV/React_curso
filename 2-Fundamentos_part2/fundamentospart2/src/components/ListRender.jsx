import { useState } from "react"

const ListRender = () => {
  const [list] = useState(["Matheus", "Pedro", "Josias"]);

  const [users, setUsers] = useState([
    {id: 1, name: "Matheus", age: 31},
    {id: 2, name: "João", age: 28},
    {id: 3, name: "Clei", age: 24}
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    setUsers((prevUsers) => {
      console.log(prevUsers);
      return prevUsers.filter((user) => randomNumber !== user.id);
    })
  }

  return (
    <>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <ul>
        {users.map((user)=> (
          <li key={user.id}>{user.name} - {user.age}</li>
        ))}
      </ul>

      <button onClick={deleteRandom}>Delete</button>
    </>
  )
}

export default ListRender
import './App.css'

// Importando imagem da assets e atribuindo a um nome
import Notebook from './assets/img-2.jpg';

//Components
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import { useState } from 'react';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  const cars = [
    {id:1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id:2, brand: "Fusca", color: "Preto", newCar: false, km: 22220},
    {id:3, brand: "Gol", color: "Azul", newCar: true, km: 1000}
  ]

  const users = [
    {id:1, nome: "Clei", idade: 24, profissao: "Programador"},
    {id:2, nome: "Leandro", idade: 25, profissao: "Banqueiro"},
    {id:3, nome: "Leonardo", idade: 17, profissao: "Mecânico"}
  ]

  function showMessage() {
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <>
      <h1>Avançando em React</h1>
      {/*Imagem em public*/}
      <div>
        <img src="/img-1.jpg" alt="Imagem Tecnologia" />
      </div>

      {/*Imagem em assets*/}
      <div>
        <img src={Notebook} alt="Imagem Notebook" />
      </div>

      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/*props*/}
      <ShowUserName name="Matheus"/>

      {/*destructuring*/}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false}/>

      {/*Reaproveitando*/}
      <CarDetails brand="Ford" km={0} color="Branco"  newCar={true}/>
      <CarDetails brand="Fiat" km={4500} color="Vermelho"  newCar={false}/>

      {/* reutilazação com loops*/}
      {cars.map((car) => (
        <CarDetails 
          key={car.id}
          brand={car.brand} 
          color={car.color} 
          km={car.km} 
          newCar={car.newCar}/>
      ))}

      {/*Fragment*/}
      <Fragments />

      {/*Children*/}
      <Container>
        <p>Este é o conteudo</p>
      </Container>

      {/*Função na prop*/}
      <ExecuteFunction myFunction={showMessage} />

      {/*State lift*/}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage}/>

      {/*Desafio fim de modulo*/}
      {users.map((user) => (
        <UserDetails 
          key={user.id}
          nome={user.nome}
          idade={user.idade}
          profissao={user.profissao}
        />
      ))}
    </>
  )
}

export default App

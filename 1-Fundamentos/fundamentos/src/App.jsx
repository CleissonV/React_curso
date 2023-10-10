import { useState } from 'react';

//components
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import TemplateExpressions from './components/TemplateExpressions';
import Events from './components/Events';
import Challenge from './components/Challenge';

//styles / CSS
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <TemplateExpressions></TemplateExpressions>
      <Events></Events>

      {/*Exercicio*/}
      <Challenge></Challenge>
    </>
  )
}

export default App

import "./Home.css";
// import { useContext } from "react";
// import {CounterContext} from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";

// refstorando com hook

import { useCounterContext } from "../hooks/useCounterContext";

// contexto mais complexo

import { useTitleColorContext } from "../hooks/useTitleColorContext";



const Home = () => {
  // const { counter } = useContext(CounterContext)
  const { counter } = useCounterContext()

  // contexto mais complexo

  const {color} = useTitleColorContext()


  return (
    <div>
      <h1 style={{color: color}}>Home</h1>
      <p>Valor do Contador: {counter}</p>
      {/* alterar valor do contexto */}
      <ChangeCounter/>
    </div>
  )
}

export default Home
import { useCounterContext } from "../hooks/useCounterContext"

const About = () => {

  const {counter} = useCounterContext()

  return (
    <div>
      <h1>Sobre</h1>
      <p>Valor é : {counter}</p>
    </div>
  )
}

export default About
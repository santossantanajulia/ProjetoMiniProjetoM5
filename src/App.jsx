import Menu from "./components/Menu/Menu.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Projetos from './components/Projetos/Projetos.jsx'

// arquivo principal
export default function App(){
  return(
    <div>
      <Menu />
      <Hero />
      <Projetos />
    </div>
  )
}
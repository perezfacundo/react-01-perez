import { NavBar } from './components/NavBar/NavBar.jsx'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx'
import { ItemCount } from './components/ItemCount/ItemCount.jsx'

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Bienvenido !'}/>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada: ', quantity)} />
    </>
  )
}

export default App

import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer titulo={"⛔️"} mensaje={"🧰 Sitio en mantenimiento 🧰"} />
    </>
  )
}

export default App;

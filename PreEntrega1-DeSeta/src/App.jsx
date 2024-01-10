import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer titulo={"🚨 Atención 🚨"} mensaje={"❤️ Estamos actualizando el Sitio Web. Regresamos en unos minutos. ❤️"} />
    </>
  )
}

export default App;

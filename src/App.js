import {useState, useEffect} from "react";
import useFetch from "./functionalities/fetchData";
import Cards from "./components/Cards";
import Loading from "./components/Loading";
function App() {
  const {items, isLoading, error} = useFetch(`https://rickandmortyapi.com/api/character`);
  const [filtro, setFiltro] = useState("");
  const handleInputChange = (event) =>{
    setFiltro(event.target.value)
    // console.log(filtro);
    // console.log(event.target.value);
  }

  return (
    <div class="container">
      <div className="wrapper-content">
        <h1 className='title'>API Rick and Morty</h1>
        <main>
          <nav className="topBar">
            <div className="input-container">
              <input type="text" onInput={handleInputChange} id="inputSearch" placeholder="Buscar. . . " />
              <label class="fas fa-search label" htmlFor="inputSearch"></label>
            </div>
          </nav>
          {error && <div>{error}</div>}
          {isLoading && <Loading/>}
          <Cards cardInfo={items} filtrados={filtro}/>
        </main>
      </div>
    </div>
  );
}

export default App;
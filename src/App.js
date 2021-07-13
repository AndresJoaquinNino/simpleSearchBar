import {useState, useEffect} from "react";
import TopBar from "./components/TopBar";
import Cards from "./components/Cards";
import Loading from "./components/Loading";
function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
    useEffect(() =>{
        fetch(`https://rickandmortyapi.com/api/character`)
        .then(response => response.json())
        .then(data => {
          setItems(data.results);
          setIsLoading(false);
        })
        .catch(err => console.error(err))
    },[])
  return (
    <div class="container">
      <div className="wrapper-content">
        <h1 className='title'>API Rick and Morty</h1>
        <main>
         <TopBar/>
          {isLoading && <Loading/>}
          <Cards cardInfo={items}/>
        </main>
      </div>
    </div>
  );
}

export default App;
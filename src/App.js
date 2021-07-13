import {useState, useEffect} from "react";

const TopBar = () =>{
  return (
    <nav className="topBar">
      <div className="input-container">
        <input type="text" id="inputSearch" placeholder="Buscar. . . " />
        <label class="fas fa-search label" htmlFor="inputSearch"></label>
      </div>
    </nav>
  );
}

const CardHeader = (props) => {
  const item = props.header;
  return (
    <div className="card-header">
      <img className="profile-img" src={item.image} alt={item.name} />
    </div>
  )
}

const CardBody = (props) =>{
  const item = props.body;
  return (
      <div className="card-body">
        <header>{item.name}</header>
        <ul>
          <li>Id: {item.id}</li>
          <li>Status: {item.status}</li>
          <li>Species: {item.species}</li>
          <li>Gender: {item.gender}</li>
        </ul>
      </div>
  )
}

const CardFooter = () =>{
  return (
    <div className="card-footer">
      <a>Ver mas</a>
    </div>
  );
}

const Cards = () =>{
  const [items, setItems] = useState([
    { name: 'Sheik Rick', image: 'https://rickandmortyapi.com/api/character/avatar/484.jpeg',
     species: 'mario', id: 484, gender:"Male",status: "Dead"},
    { name: 'Stealy', image: 'https://rickandmortyapi.com/api/character/avatar/334.jpeg',
     species: 'Poopybutthole', id: 334 , gender:"Male", status:"Alive"},
     { name: 'Corn detective', image: 'https://rickandmortyapi.com/api/character/avatar/403.jpeg',
     species: 'Humanoid', id: 403, gender:"Male",status: "Dead"},
  ])
  return(
    <div className="container-for-cards">
      {items.map(element => (
        <div className="card" key={element.id}>
          <CardHeader header={element}/>
          <CardBody body={element}/>
          <CardFooter/>
        </div>
      ))}
    </div>
  )
}

function App() {
  return (
    <div class="container">
      <div className="wrapper-content">
        <h1 className='title'>API Rick and Morty</h1>
        <main>
         <TopBar/>
          <Cards/>
        </main>
      </div>
    </div>
  );
}

export default App;

      // <div className="card">
      //   <div className="card-header">
      //     <img className="profile-img" src="https://rickandmortyapi.com/api/character/avatar/484.jpeg" alt="" />
      //   </div>
        // <div className="card-body">
        //   <header>Sheik Rick</header>
        //   <ul>
        //     <li>id: 484</li>
        //     <li>status: Dead</li>
        //     <li>species: Human</li>
        //     <li>gender: Male</li>
        //   </ul>
        // </div>
        // <div className="card-footer">
        //   <a>Ver mas</a>
        // </div>
      // </div>
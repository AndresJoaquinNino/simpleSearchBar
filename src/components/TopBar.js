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

export default TopBar;
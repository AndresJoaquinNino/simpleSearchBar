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

const Cards = (props) =>{
  const {cardInfo:items} = props;
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

export default Cards
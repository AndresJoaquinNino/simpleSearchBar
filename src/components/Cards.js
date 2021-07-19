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

const CardFooter = (props) =>{
  const {url} = props
  return (
    <div className="card-footer">
      <a href={url}>Ver mas</a>
    </div>
  );
}

const Cards = (props) =>{
  const {cardInfo:items,filtrados} = props;
  return(
    <div className="container-for-cards">
      {items.map(element =>{
        if(element.name.toLowerCase().includes(filtrados))
        return(
          <div className="card" key={element.id}>
            <CardHeader header={element}/>
            <CardBody body={element}/>
            <CardFooter url={element.url}/>
          </div>
        )
      })}
    </div>
  )
}

export default Cards
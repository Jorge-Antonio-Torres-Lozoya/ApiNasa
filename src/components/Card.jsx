const Card = ({ items, isLoading }) => {
  if (isLoading) {
    return (
      <div className='App'>
        <h1 className='text-center'>Cargando...</h1>
      </div>
    )
  } else {
    return (
      <div className='d-flex justify-content-center py-4'>
        <div className='card border-success mb-3' style={{ maxWidth: '40rem' }}>

          <img id='img-size' src={items.hdurl} className='card-img-top ' alt='...' />
          <div className='card-body  '>
            <h5 className='card-title'>By: {items.copyright ? items.copyright : 'NA'}</h5>
            <h5 className='card-title'>{items.date}</h5>
            <p className='card-text'>{items.explanation}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Card

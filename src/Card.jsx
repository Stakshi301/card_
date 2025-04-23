import React from 'react'

function Card() {
    const cardData=[
        { id: 1, title: "Card One", img: "https://i.pinimg.com/474x/6c/1e/35/6c1e35d59732b51edb484f5810651023.jpg" ,price:50,rating:4.5},
      { id: 2, title: "Card Two", img: "https://i.pinimg.com/474x/67/cd/c1/67cdc1683f91f9916de003ca3c94ef57.jpg "  ,price:10,rating:4},
     { id: 3, title: "Card Three", img: "https://i.pinimg.com/474x/57/e1/14/57e114f83e455f1c6d565fa6c6839963.jpg"  ,price:30,rating:4.3},
     { id: 1, title: "Card One", img: "https://i.pinimg.com/474x/6c/1e/35/6c1e35d59732b51edb484f5810651023.jpg" ,price:50,rating:4.5},
      { id: 2, title: "Card Two", img: "https://i.pinimg.com/474x/67/cd/c1/67cdc1683f91f9916de003ca3c94ef57.jpg "  ,price:10,rating:4},
     { id: 3, title: "Card Three", img: "https://i.pinimg.com/474x/57/e1/14/57e114f83e455f1c6d565fa6c6839963.jpg"  ,price:30,rating:4.3},
    ]
  return (
    <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh', // key to vertical centering
      backgroundColor: '#121212' // optional background
      ,marginLeft:'12rem'
      ,marginTop:'3rem'
      ,marginBottom:'3rem'
    }}

  >
    <div
      className="main"
      style={{
        width: '50rem',
        backgroundColor: '#1C1D1F',
        borderRadius: '10px',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <h1 style={{ color: 'white' }}>Our Collection</h1>
      <p style={{ color: 'grey', width: '30rem', textAlign: 'center' }}>
        Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins,
        expertly roasted in small batches and shipped fresh weekly.
      </p>
  
      <div className="btn" style={{ display: 'flex', gap: '5px', margin: '1rem 0' }}>
        <button
          className="stylebtn"
          style={{
            color: 'white',
            borderRadius: '10px',
            padding: '5px 15px',
            backgroundColor: 'grey',
            border: 'none'
          }}
        >
          All Products
        </button>
        <button
          className="stylebtn"
          style={{
            color: 'white',
            borderRadius: '10px',
            padding: '5px 15px',
            backgroundColor: '#1C1D1F',
            border: '1px solid grey'
          }}
        >
          Available Now
        </button>
      </div>
  
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1rem',
          marginTop: '1rem'
        }}
      >
        {cardData.map((card, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#2C2D2F',
              borderRadius: '10px',
              color: 'white',
              textAlign: 'center',
              lineHeight:'5px'
            }}
          >
            <img
              src={card.img}
              alt={card.title}
              style={{ height: '6rem', width: '13rem', borderRadius: '10px' }}
            />
            <div style={{display:'flex' ,justifyContent:'space-between'}}>

            <h2>{card.title}</h2>
            <p>₹{card.price}</p>
            </div>
            <p>⭐ {card.rating}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  )
}

export default Card

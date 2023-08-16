import React, { useState } from 'react'
import Header from './components/Header'
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/style.css"
import Products from './components/Products'
import { AppContext } from './context/AppContext'

function App() {

  const [card, setCard] = useState([])
  const [count, setCount] = useState(0)

  const addToCard = (product) => {

    const existProduct = card.find(x => x.id === product.id)

    setCount(prevState => prevState + 1)

    if (!existProduct) {
      setCard(prevState => [
        ...prevState,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          old_price: product.old_price,
          count: 1
        }
      ])
      return
    }

    existProduct.count = existProduct.count + 1

    setCard(prevState => prevState)
  }

  return (
    <AppContext.Provider value={{
      card,
      addToCard,
      count,
    }}>
      <div>
        <Header />
        <Products />
      </div>
    </AppContext.Provider>
  )
}

export default App
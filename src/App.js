import React, { useEffect } from 'react'
import './App.scss'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { fetchProductData } from './store/reducers/product-actions'
import { Home } from './components/Pages/Home/Home'
import { ProductPage } from './components/ProductPage/ProductPage'
import { ConfiguratorPage } from './components/Pages/Configurator/ConfiguratorPage'


const App = () => {
  const dispatch = useDispatch()

  // fetching organization entries
  useEffect(() => {
    dispatch(fetchProductData())
  }, [dispatch])

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/:productId' element={<ProductPage />} />
          <Route path='/products/configurator/:productId' element={<ConfiguratorPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
import React, { useEffect } from 'react'
import './App.scss'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { fetchProductData } from './store/reducers/product-actions'
import { Home } from './components/Pages/Home/Home'
import { ProductPage } from './components/ProductPage/ProductPage'
import { ConfiguratorPage } from './components/Pages/Configurator/ConfiguratorPage'
import { ConfiguratorOptions } from './components/Pages/Configurator/ConfiguratorOptions'
import { WrapNavFooter } from './components/Layout/WrapNavFooter/WrapNavFooter'

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
          <Route path="/" element={<WrapNavFooter />} >
            <Route path='/' element={<Home />} />
            <Route path='/products/:productId' element={<ProductPage />} />
          </Route>

          <Route path='/products/configurator/:productId/options/:optionId' element={<ConfiguratorPage />} >
            <Route path='/products/configurator/:productId/options/:optionId' element={<ConfiguratorOptions />} />
          </Route>
        </Routes>

      </Router>
    </>
  )
}

export default App
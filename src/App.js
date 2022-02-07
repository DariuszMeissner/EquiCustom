import React, { useEffect } from 'react'
import './App.scss'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { fetchProductData } from './store/reducers/product-actions'
import { Home } from './components/Pages/Home/Home'


const App = () => {
  const dispatch = useDispatch()

  // fetching organization entries
  useEffect(() => {
    dispatch(fetchProductData())
  }, [dispatch])

  return (
    <>
      <Home />
    </>
  )
}

export default App
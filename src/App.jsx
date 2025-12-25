import React from 'react'
import Footer from './component/Footer/Footer'
import Header from './component/Header/Header'
import Page from './component/Main/page'



const App = () => {
  return (
    <div className='h-screen bg-amber-50'>
      <Header />
      <Page />
      <Footer />
    </div>
  )
}

export default App

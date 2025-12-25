import React from 'react'
import Footer from './component/Footer/Footer'
import Header from './component/Header/Header'
import Mainpage from './component/Main/mainpage'


const App = () => {
  return (
    <div className='h-screen bg-amber-50'>
      <Header />
      <Mainpage />
      <Footer />
    </div>
  )
}

export default App

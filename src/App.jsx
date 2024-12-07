
import './assets/Styling/App.css'
import Header from './assets/Components/Header'
import Footer from './assets/Components/Footer'
import {Outlet} from 'react-router-dom'
function App() {
  return (
    <>
     <Header/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default App

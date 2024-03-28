import { Outlet } from 'react-router-dom'
import './App.css'
import HeaderNav from './Components/HeaderNav'
import SideNav from './Components/SideNav'


function App() {

  return (
    <>
      <div className='App-Container'>
        <HeaderNav />
        <div className='Page-Container'>
          <SideNav />
          <div className='Content-Container'>
            <Outlet />
          </div>
        </div>
      </div>
    </>

  )
}

export default App

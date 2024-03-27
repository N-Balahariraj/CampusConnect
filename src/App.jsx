import { Outlet } from 'react-router-dom'
import './App.css'
import HeaderNav from './Components/HeaderNav'
import SideNav from './Components/SideNav'


function App() {

  return (
    <>
      <div className='App'>
        <HeaderNav />
        <div className='Display'>
          <SideNav />
          <div className='Content'>
            <Outlet />
          </div>

        </div>

      </div>
    </>

  )
}

export default App

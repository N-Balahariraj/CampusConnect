import { Outlet } from 'react-router-dom'
import './App.css'
import HeaderNav from './Components/HeaderNav'
import SideNav from './Components/SideNav'

function App() {

  return (
    <div className='App'>
      <HeaderNav />
      <div className='w-[100%] h-[80%] flex justify-between mt-[1%]'>
        <SideNav />
        <Outlet />
      </div>
    </div>
  )
}

export default App

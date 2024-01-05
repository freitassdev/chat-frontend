import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import './App.css'

function App() {

  return (
    <>
      <div className="app-container">
        <div className="nav-side-wrapper">
          <Sidebar />
          <Navbar />
          
        </div>
      </div>
    </>
  )
}

export default App
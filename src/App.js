import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Landlord from './pages/Landlord'
// import './css/app.scss'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/'element={<Home/>} />
        <Route path='/landlord'element={<Landlord/>} />
      </Routes>
    </div>
  );
}

export default App;

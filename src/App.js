import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { HomeScreen } from './pages/home/HomeScreen';
import { Registro } from './pages/register/Registro';
import "./styles/style.css"

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/register" element={<Registro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import { BrowserRouter } from "react-router-dom";
import './App.css'
import ConstructionLanding from './pages/ConstructionLanding/ConstructionLanding.jsx'
import Landing from "./pages/ConstructionLanding/Landing.jsx";

function App() {

  return (
    <BrowserRouter>
      {/* <ConstructionLanding /> */}
      <Landing />
    </BrowserRouter>
  )
}

export default App

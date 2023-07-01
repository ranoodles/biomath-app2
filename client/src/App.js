import {
  BrowserRouter, 
  Routes,
  Route
} from "react-router-dom"

import Landing from "./pages/Landing"
import Signup from "./pages/Signup"
import Login from "./pages/Login"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

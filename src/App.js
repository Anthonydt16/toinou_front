import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Programmation from "./pages/Programmation";
import Parcours from "./pages/Parcours";

function App() {
  return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/programme" element={<Programmation/>} />
          <Route path="/parcours" element={<Parcours/>}/>
          <Route path="/contact" />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

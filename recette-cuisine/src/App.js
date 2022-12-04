import Recettes from "./components/Recettes";
import Blog from "./components/Blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecetteDetails from "./components/RecetteDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Recettes />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/recetteDetails" element={<RecetteDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

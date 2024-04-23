import AjoutCandidat from "./pages/AjoutCandidat";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<AjoutCandidat />} />
      </Routes>
    </Router>
  );
}

export default App;

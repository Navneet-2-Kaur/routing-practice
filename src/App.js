import './App.css';
import Home from "./components/Home";
import Number from "./components/Number";
import Word from "./components/Word";
import Color from "./components/Color";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <main>
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/:number" element={ <Number />}/>
          <Route path="/:word" element={<Word />}/>
          <Route path="/:word/:bgcolor/:txtcolor" element={  <Color />}/>
        </Routes>
      </main>
  );
}

export default App;

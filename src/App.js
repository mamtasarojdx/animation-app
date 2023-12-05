import Animation from "./Animation/Animation";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Counter from "./Counter";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Animation />} />

          <Route path="/count" exact element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

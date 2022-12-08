import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todo from "./components/todo";
import Main from "./components/main";

function App() {
  return (
    <div className="container">
        Here is navbar
        <BrowserRouter>
          <Routes>
            <Route path={"/todo/:id"} element={<Todo/>} />
            <Route path={"/"} element={<Main/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

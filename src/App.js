// import { BrowserRouter,Route,Routes,Switch } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./components/create";
import Read from "./components/read";
import Edit from "./components/edit";
// import Home from "./components/pages/home";


function App() {
  return (
   <>
     <div className="container">

               <BrowserRouter>
               <Routes>
                <Route path="/" element={<Read/>}></Route>
                <Route path="/create" element={<Create/>}></Route>
                <Route path="/edit" element={<Edit/>}></Route>
               </Routes>
               </BrowserRouter>
     </div>
   </>
  );
}

export default App;

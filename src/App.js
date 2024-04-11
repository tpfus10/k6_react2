import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";
import Nav from "./component/Nav";
import Subway1 from "./component/Subway1";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <BrowserRouter>
    <RecoilRoot>
    <div className="w-full h-screen max-w-screen-lg mx-auto">
      <div>
        <Nav />
      </div>
      <div className="grow">
        {/* overflow-y-auto */}
      <Routes>
        <Route path = "/" element = {<Home />}> </Route>
        <Route path = "/login" element = {<Login />}> </Route>
        <Route path = "/subway" element = {<Subway1 />}> </Route>
      </Routes>
      </div>
    </div>
    </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;

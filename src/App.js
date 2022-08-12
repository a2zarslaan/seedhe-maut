import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";


const Shop = () => {
  return (
    <div>
      <div>
        <h1>I am the Shop</h1>
      </div>
    </div>
  )
}

const App = () => {
  return (
  <Routes>
    <Route path='/' element={<Navigation/>}>
      <Route index={true} element={<Home/>} />
      <Route path='shop' element={<Shop/>} />
    </Route>
  </Routes>
  )
}

export default App;

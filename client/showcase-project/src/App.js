import {Routes, Route} from "react-router-dom"
import {Home} from "./components/Home/Home";
import {Header} from "./components/Header/Header";
import {Portal} from "./components/Portal/Portal";

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portal" element={<Portal />} />
    </Routes>
    </>
  )
}

export default App;

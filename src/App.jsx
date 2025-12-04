import { Route, Routes } from "react-router-dom"
import { Footer, Header } from "./layout"
import { Home } from "./pages"
import { Top250Movies } from "./pages/Top250Movies"


function App() {

  return (
    <div className="wrapper">
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/top250Movies" element={<Top250Movies/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
